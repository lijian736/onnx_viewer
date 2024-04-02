const proto = require('../third_party/onnx_proto/onnx_pb_commonjs')
const onnxMetadata = require("./onnx_metadata")

var onnx = {};

/**
 * The onnx model for render
 */
onnx.Model = class {

    /**
     * the constructor
     * @param {ModelProto} model the proto model object
     * @param {Array.<GraphProto>} graphs the proto graph Array
     * @param {Map.<string, Uint8Array>} locations the external tensors
     */
    constructor(model, graphs, locations) {
        this._protoModel = model;
        this._graphs = [];
        this._format = "ir version: " + (model.ir_version ? model.ir_version.toString() : 'unknown');
        this._producer = model.producer_name && model.producer_name.length > 0 ? model.producer_name + (model.producer_version && model.producer_version.length > 0 ? ' ' + model.producer_version : '') : null;
        this._domain = model.domain ? model.domain : '';
        this._version = model.model_version ? model.model_version.toString() : '';
        this._description = model.doc_string ? model.doc_string : '';
        this._metadata = [];
        this._imports = null;
        const imports = new Map();
        if (model.opset_import && model.opset_import.length > 0) {
            for (const opset_import of model.opset_import) {
                const domain = opset_import.domain || 'ai.onnx';
                const version = opset_import.version ? opset_import.version : 0;
                if (!imports.has(domain) || imports.get(domain) > version) {
                    imports.set(domain, version);
                }
            }
            this._imports = Array.from(imports).map(([name, version]) => name + ' v' + version.toString());
        }
        if (imports.size == 0) {
            imports.set('ai.onnx', 1);
            imports.set('ai.onnx.ml', 1);
        }

        let imageFormat = '';
        const metadata_props = model.metadata_props;
        if (metadata_props) {
            const metadata = new Map(metadata_props.map((entry) => [entry.key, entry.value]));
            const converted_from = metadata.get('converted_from');
            if (converted_from) {
                this._metadata.push({ name: 'source', value: converted_from });
            }
            const author = metadata.get('author');
            if (author) {
                this._metadata.push({ name: 'author', value: author });
            }
            const company = metadata.get('company');
            if (company) {
                this._metadata.push({ name: 'company', value: company });
            }
            let license = metadata.get('license');
            const license_url = metadata.get('license_url');
            if (license_url) {
                license = '<a href=\'' + license_url + '\'>' + (license ? license : license_url) + '</a>';
            }
            if (license) {
                this._metadata.push({ name: 'license', value: license });
            }
            metadata.delete('author');
            metadata.delete('company');
            metadata.delete('converted_from');
            metadata.delete('license');
            metadata.delete('license_url');
            const imageMetadata = {};
            for (const [name, value] of metadata) {
                switch (name) {
                    case 'Image.BitmapPixelFormat':
                    case 'Image.ColorSpaceGamma':
                    case 'Image.NominalPixelRange':
                        imageMetadata[name] = value;
                        break;
                    default:
                        this._metadata.push({ name: name, value: value });
                        break;
                }
            }
            imageFormat = [imageMetadata['Image.BitmapPixelFormat'], imageMetadata['Image.ColorSpaceGamma'], imageMetadata['Image.NominalPixelRange']].filter((item) => item);
        }

        let metadata = new onnx.GraphMetadata(imports);
        const context = new onnx.ModelContext(metadata, locations, imageFormat);
        for (const func of model.functions) {
            context.metadata.add(new onnx.Function(context, func));
        }

        this._graphs = [];
        for (const graph of graphs) {
            this._graphs.push(context.graph(graph));
        }
    }

    get format() {
        return this._format;
    }

    get version() {
        return this._version;
    }

    /**
     * null or string array, string format: domain + v, for example: 'ai.onn v3'
     */
    get imports() {
        return this._imports;
    }

    /**
     * return producer name + version, string or null
     */
    get producer() {
        return this._producer;
    }

    get domain() {
        return this._domain || null;
    }

    get description() {
        return this._description || null;
    }

    /**
     * array of object { name:..., value:...}
     */
    get metadata() {
        return this._metadata;
    }

    /**
     * get the onnx.Graph array
     */
    get graphs() {
        return this._graphs;
    }

    /**
     * get the proto model
     */
    get protoModel() {
        return this._protoModel;
    }
};

/**
 * graph definition
 */
onnx.Graph = class {

    /**
     * constructor
     * @param {onnx.ModelContext} context ModelContext
     * @param {GraphProto} graph graph proto
     */
    constructor(context, graph) {
        this._nodes = [];
        this._inputs = [];
        this._outputs = [];
        this._name = graph.name || null;
        this._description = graph.doc_string || '';

        //add input tensors and output tensors for every node in the graph
        context = new onnx.GraphContext(context, graph.node);

        for (const initializer of graph.initializer) {
            const tensor = context.tensor(initializer.name);
            tensor.initializer = new onnx.Tensor(context, initializer, 'Initializer');
        }

        for (const sparse_initializer of graph.sparse_initializer) {
            const tensor = context.tensor(sparse_initializer.values.name);
            tensor.initializer = new onnx.Tensor(context, sparse_initializer, 'Initializer');
        }

        for (const tensor_annotation of graph.quantization_annotation) {
            const tensor = context.tensor(tensor_annotation.tensor_name);
            const annotation = {};
            for (const entry of tensor_annotation.quant_parameter_tensor_names) {
                annotation[entry.key] = entry.value;
            }
            tensor.annotation = annotation;
        }

        for (const valueInfo of graph.value_info) {
            const tensor = context.tensor(valueInfo.name);
            tensor.type = context.createType(valueInfo.type);
            tensor.description = valueInfo.doc_string;
        }

        graph.inputTensors = graph.input.map((valueInfo) => {
            const tensor = context.tensor(valueInfo.name);
            tensor.type = context.createType(valueInfo.type);
            tensor.description = valueInfo.doc_string;
            return tensor;
        });

        graph.outputTensors = graph.output.map((valueInfo) => {
            const tensor = context.tensor(valueInfo.name);
            tensor.type = context.createType(valueInfo.type);
            tensor.description = valueInfo.doc_string;
            return tensor;
        });
        //skip it now. no need to infer the shape
        // new onnx.Inference(graph.node, graph.outputTensors);

        context.push(graph.node, graph.inputTensors, graph.outputTensors);
        this._nodes = context.pop();

        for (const input of graph.inputTensors) {
            const value = context.value(input.name);
            //the graph input does NOT include initializers
            if (!value.initializer) {
                this._inputs.push(new onnx.Argument(input.name, [value]));
            }
        }

        for (const output of graph.outputTensors) {
            const value = context.value(output.name);
            //the graph output does NOT include initializers
            if (!value.initializer) {
                this._outputs.push(new onnx.Argument(output.name, [value]));
            }
        }
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    /**
     * Array of onnx.Argument
     */
    get inputs() {
        return this._inputs;
    }

    /**
     * Array of onnx.Argument
     */
    get outputs() {
        return this._outputs;
    }

    /**
     * Array of onnx.Node
     */
    get nodes() {
        return this._nodes;
    }

    toString() {
        return 'graph(' + this.name + ')';
    }
};

/**
 * argument definition for grapn inputs/outputs, function inputs/outputs, node inputs/outputs
 */
onnx.Argument = class {

    /**
     * constructor
     * @param {string} name the argument name
     * @param {Array.<onnx.Value>} value the value array
     */
    constructor(name, value) {
        this._name = name;
        this._value = value;
    }

    get name() {
        return this._name;
    }

    get value() {
        return this._value;
    }
};

/**
 * value definition for graph inputs/outputs, function inputs/outputs, node inputs/outputs
 */
onnx.Value = class {

    constructor(name, type, initializer, annotation, description) {
        if (typeof name !== 'string') {
            throw new onnx.Error("Invalid value identifier '" + JSON.stringify(name) + "'.");
        }
        this._name = name;
        this._type = type || null;
        this._initializer = initializer || null;
        this._annotation = annotation;
        this._description = description || '';
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get description() {
        return this._description;
    }

    get quantization() {
        if (this._annotation) {
            return Object.keys(this._annotation).map((key) => key + ': ' + this._annotation[key]).join(', ');
        }
        return null;
    }

    get initializer() {
        return this._initializer;
    }
};

/**
 * node definition
 */
onnx.Node = class {

    /**
     * constructor
     * @param {onnx.GraphContext} context graph context
     * @param {string} op_type op type
     * @param {string} domain op domain
     * @param {string} name op name
     * @param {string} description doc string
     * @param {Array.<AttributeProto>} attributes attributes list
     * @param {Array.<onnx.Argument>} inputs input list
     * @param {Array.<onnx.Argument>} outputs output list
     */
    constructor(context, op_type, domain, name, description, attributes, inputs, outputs) {
        attributes = attributes || [];
        //the op schema in onnx-metadata.json or onnx.Function
        this._type = context.metadata.type(op_type, domain) || { name: op_type, module: domain };
        if (this.type.module !== domain && !(this._type instanceof onnx.Function)) {
            this._type = Object.assign({}, this.type);
            this._type.name = op_type;
            this._type.module = domain;
        }

        this._name = name || '';
        this._description = description || '';
        this._inputs = inputs;
        this._outputs = outputs;

        this._attributes = attributes.map((attribute) => new onnx.Attribute(context, op_type, domain, attribute));

        this._chain = [];
        const identifier = domain ? domain + '.' + op_type : op_type;
        if (identifier === 'com.microsoft.FusedConv') {
            const activation = attributes.find((attribute) => attribute.name === 'activation');
            if (activation) {
                const type = context.decodeText(activation.s);
                this._chain.push(new onnx.Node(context, type, '', '', '', [], [], []));
            }
        }
    }

    get type() {
        return this._type;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    /**
     * Array of onnx.Attribute
     */
    get attributes() {
        return this._attributes;
    }

    /**
     * Array of onnx.Argument
     */
    get inputs() {
        return this._inputs;
    }

    /**
     * Array of onnx.Argument
     */
    get outputs() {
        return this._outputs;
    }

    get chain() {
        return this._chain;
    }
};

/**
 * onnx node attribute definition
 */
onnx.Attribute = class {

    /**
     * constructor
     * @param {onnx.GraphContext} context the graph context
     * @param {string} op_type node type
     * @param {string} domain node domain
     * @param {AttributeProto} attribute attribute proto
     */
    constructor(context, op_type, domain, attribute) {
        this._name = attribute.name;
        this._description = attribute.doc_string || '';
        this._type = null;
        this._value = null;
        if (attribute.ref_attr_name) {
            this._value = attribute.ref_attr_name;
            this._type = 'reference';
            return;
        }

        switch (attribute.type) {
            case proto.onnx.AttributeProto.AttributeType.UNDEFINED:
                break;
            case proto.onnx.AttributeProto.AttributeType.FLOAT:
                this._value = attribute.f;
                this._type = 'float32';
                break;
            case proto.onnx.AttributeProto.AttributeType.INT:
                this._value = attribute.i;
                this._type = 'int64';
                break;
            case proto.onnx.AttributeProto.AttributeType.STRING:
                switch (op_type) {
                    case 'Int8GivenTensorFill':
                        this._value = Array.from(attribute.s);
                        break;
                    default:
                        this._value = context.decodeText(attribute.s);
                        break;
                }
                this._type = 'string';
                break;
            case proto.onnx.AttributeProto.AttributeType.TENSOR:
                this._value = new onnx.Tensor(context, attribute.t);
                this._type = 'tensor';
                break;
            case proto.onnx.AttributeProto.AttributeType.GRAPH:
                this._value = context.graph(attribute.g);
                this._type = 'graph';
                break;
            case proto.onnx.AttributeProto.AttributeType.FLOATS:
                this._value = ArrayBuffer.isView(attribute.floats) ? Array.from(attribute.floats) : attribute.floats;
                this._type = 'float32[]';
                break;
            case proto.onnx.AttributeProto.AttributeType.INTS:
                this._value = ArrayBuffer.isView(attribute.ints) ? Array.from(attribute.ints) : attribute.ints;
                this._type = 'int64[]';
                break;
            case proto.onnx.AttributeProto.AttributeType.STRINGS:
                this._value = attribute.strings.map((s) => context.decodeText(s));
                this._type = 'string[]';
                break;
            case proto.onnx.AttributeProto.AttributeType.TENSORS:
                this._value = attribute.tensors.map((tensor) => new onnx.Tensor(context, tensor));
                this._type = 'tensor[]';
                break;
            case proto.onnx.AttributeProto.AttributeType.GRAPHS:
                this._value = attribute.graphs.map((graph) => context.graph(graph));
                this._type = 'graph[]';
                break;
            case proto.onnx.AttributeProto.AttributeType.SPARSE_TENSOR:
                this._value = new onnx.Tensor(context, attribute.sparse_tensor);
                this._type = 'tensor';
                break;
            case proto.onnx.AttributeProto.AttributeType.SPARSE_TENSORS:
                this._value = attribute.sparse_tensors.map((tensor) => new onnx.Tensor(context, tensor));
                this._type = 'tensor[]';
                break;
            case proto.onnx.AttributeProto.AttributeType.TYPE_PROTO:
                this._value = context.createType(attribute.tp);
                this._type = 'type';
                break;
            case proto.onnx.AttributeProto.AttributeType.TYPE_PROTOS:
                this._value = attribute.type_protos.map((type) => context.createType(type));
                this._type = 'type[]';
                break;
            default:
                throw new onnx.Error("Unsupported attribute type '" + attribute.type + "'.");
        }

        //the op attribute in onnx-metadata.json
        const metadata = context.metadata.attribute(op_type, domain, attribute.name);
        if (metadata) {
            if (Object.prototype.hasOwnProperty.call(metadata, 'default') && this._value == metadata.default) {
                this._visible = false;
            }
            if (metadata.type === 'DataType') {
                this._type = metadata.type;
                this._value = context.createDataType(this._value);
            }
        }
    }

    /**
     * the attribute name
     */
    get name() {
        return this._name;
    }

    /**
     * the attribute type
     */
    get type() {
        return this._type;
    }

    /**
     * attribute value
     */
    get value() {
        return this._value;
    }

    get description() {
        return this._description;
    }

    /**
     * if this attribute has default value in onnx-metadata.json and its value equals the default value, visible is false
     */
    get visible() {
        return this._visible == false ? false : true;
    }
};

/**
 * tensor definitions
 */
onnx.Tensor = class {

    /**
     * constructor
     * @param {onnx.GraphContext} context GraphContext
     * @param {TensorProto|SparseTensorProto} tensor proto tensor 
     * @param {string} category 'Initializer' or 'Constant' or undefined
     * 
     * category:
     * Initializer: initializers in graph proto.
     * Constant: 'Constant' node attribute
     * undefined: others
     */
    constructor(context, tensor, category) {
        this._category = category || null;
        //SparseTensorProto type
        if (tensor.indices && tensor.values) {
            //the tensor name
            this._name = tensor.values.name || '';
            //onnx.TensorType
            this._type = context.createTensorType(tensor.values.data_type, tensor.dims.map((dim) => dim), 'sparse');
            //the location string
            this._location = context.createLocation(tensor.values.data_location);
            //the tensor values
            this._values = new onnx.Tensor(context, tensor.values);
            //the tensor indices
            this._indices = new onnx.Tensor(context, tensor.indices);
        } else {
            //TensorProto type
            this._name = tensor.name || '';
            //onnx.TensorType
            this._type = context.createTensorType(tensor.data_type, tensor.dims.map((dim) => dim));
            //the location string
            this._location = context.createLocation(tensor.data_location);

            switch (tensor.data_location) {
                //data stored inside the protobuf message
                case proto.onnx.TensorProto.DataLocation.DEFAULT: {
                    switch (tensor.data_type) {
                        case proto.onnx.TensorProto.DataType.UNDEFINED: {
                            break;
                        }
                        case proto.onnx.TensorProto.DataType.FLOAT:
                            this._data = new Float32Array(tensor.float_data);
                            this._encoding = '|';
                            break;
                        case proto.onnx.TensorProto.DataType.DOUBLE:
                            this._data = new Float64Array(tensor.double_data);
                            this._encoding = '|';
                            break;
                        case proto.onnx.TensorProto.DataType.BOOL:
                            if (tensor.int32_data && tensor.int32_data.length > 0) {
                                const array = tensor.int32_data;
                                this._data = new Array(array.length);
                                for (let i = 0; i < this._data.length; i++) {
                                    this._data[i] = array[i] === 0 ? false : true;
                                }
                                this._encoding = '|';
                            }
                            break;
                        case proto.onnx.TensorProto.DataType.INT8:
                            this._data = new Int8Array(tensor.int32_data);
                            this._encoding = '|';
                            break;
                        case proto.onnx.TensorProto.DataType.UINT8:
                            this._data = new Uint8Array(tensor.int32_data);
                            this._encoding = '|';
                            break;
                        case proto.onnx.TensorProto.DataType.INT16:
                            this._data = new Int32Array(tensor.int32_data);
                            this._encoding = '|';
                            break;
                        case proto.onnx.TensorProto.DataType.UINT16:
                            this._data = new Int32Array(tensor.int32_data);
                            this._encoding = '|';
                            break;
                        case proto.onnx.TensorProto.DataType.INT32:
                            this._data = new Int32Array(tensor.int32_data);
                            this._encoding = '|';
                            break;
                        case proto.onnx.TensorProto.DataType.UINT32:
                        case proto.onnx.TensorProto.DataType.UINT64:
                            this._data = tensor.uint64_data;
                            this._encoding = '|';
                            break;
                        case proto.onnx.TensorProto.DataType.INT64:
                            this._data = tensor.int64_data;
                            this._encoding = '|';
                            break;
                        case proto.onnx.TensorProto.DataType.STRING:
                            this._data = tensor.string_data;
                            this._encoding = '|';
                            break;
                        case proto.onnx.TensorProto.DataType.COMPLEX64:
                        case proto.onnx.TensorProto.DataType.COMPLEX128:
                            break;
                        case proto.onnx.TensorProto.DataType.FLOAT16:
                        case proto.onnx.TensorProto.DataType.BFLOAT16:
                            if (tensor.int32_data && tensor.int32_data.length > 0) {
                                const array = tensor.int32_data;
                                const buffer = new Uint8Array(array.length << 1);
                                const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
                                for (let i = 0; i < array.length; i++) {
                                    view.setUint16(i << 1, array[i], true);
                                }
                                this._data = buffer;
                                this._encoding = '<';
                            }
                            break;
                        case proto.onnx.TensorProto.DataType.FLOAT8E4M3FN:
                        case proto.onnx.TensorProto.DataType.FLOAT8E4M3FNUZ:
                        case proto.onnx.TensorProto.DataType.FLOAT8E5M2:
                        case proto.onnx.TensorProto.DataType.FLOAT8E5M2FNUZ:
                            if (tensor.int32_data && tensor.int32_data.length > 0) {
                                this._data = new Uint8Array(Array.from(tensor.int32_data));
                                this._encoding = '<';
                            }
                            break;
                        default:
                            throw new onnx.Error("Unsupported tensor data type '" + tensor.data_type + "'.");
                    }
                    if (this._data && (Array.isArray(this._data) || ArrayBuffer.isView(this._data)) && this._data.length === 0) {
                        this._data = undefined;
                    }
                    if (!this._data && tensor.raw_data && tensor.raw_data.length > 0) {
                        this._data = tensor.raw_data;
                        this._encoding = '<';
                    }
                    break;
                }

                case proto.onnx.TensorProto.DataLocation.EXTERNAL: {
                    if (Array.isArray(tensor.external_data)) {
                        const external_data = {};
                        //default values
                        external_data['offset'] = "0";
                        external_data['length'] = "-1";

                        for (const entry of tensor.external_data) {
                            external_data[entry.key] = entry.value;
                        }

                        if (external_data.location && external_data.offset && external_data.length) {
                            const offset = parseInt(external_data.offset, 10);
                            const length = parseInt(external_data.length, 10);
                            if (Number.isInteger(offset) && Number.isInteger(length)) {
                                this._data = context.location(external_data.location, offset, length);
                                this._encoding = '<';
                            }
                        }
                    }
                    break;
                }

                default: {
                    break;
                }
            }
        }
    }

    /**
     * tensor name
     */
    get name() {
        return this._name;
    }

    /**
     * 'Initializer' or 'Constant' or null
     */
    get category() {
        return this._category;
    }

    /**
     * tensor content encoding
     */
    get encoding() {
        return this._encoding;
    }

    /**
     * onnx.TensorType
     */
    get type() {
        return this._type;
    }

    /**
     * for sparse tensor
     */
    get indices() {
        return this._indices;
    }

    get values() {
        switch (this.type.layout) {
            case 'sparse': {
                //onnx.Tensor
                return this._values;
            }
            default: {
                if (!this._data || this._data instanceof Uint8Array) {
                    return this._data;
                }
                if (Array.isArray(this._data) || ArrayBuffer.isView(this._data)) {
                    return this._data;
                }
                return this._data.peek();
            }
        }
    }
};

/**
 * Tensor type definition, including the tensor data type string, the tensor shape, the layout string and denotation string
 */
onnx.TensorType = class {

    /**
     * constructor
     * @param {string} dataType the tensor data type string
     * @param {onnx.TensorShape} shape the tensor shape object
     * @param {string} layout the layout, 'sparse' or null
     * @param {string} denotation the content denotation
     */
    constructor(dataType, shape, layout, denotation) {
        this._dataType = dataType;
        this._shape = shape;
        this._layout = layout || null;
        this._denotation = denotation || null;
    }

    /**
     * tensor data type string
     */
    get dataType() {
        return this._dataType;
    }

    /**
     * tensor shape object, onnx.TensorShape
     */
    get shape() {
        return this._shape;
    }

    /**
     * tensor layout, 'sparse' or null
     */
    get layout() {
        return this._layout;
    }

    /**
     * denotation
     */
    get denotation() {
        return this._denotation;
    }

    toString() {
        return this.dataType + this._shape.toString();
    }
};

/**
 * tensor shape definition
 */
onnx.TensorShape = class {

    /**
     * constructor
     * @param {Array.<int64>} dimensions the dims array
     */
    constructor(dimensions) {
        this._dimensions = dimensions;
    }

    get dimensions() {
        return this._dimensions;
    }

    toString() {
        if (!this._dimensions || this._dimensions.length == 0) {
            return '';
        }
        return '[' + this._dimensions.map((dim) => dim ? dim.toString() : '?').join(',') + ']';
    }
};

/**
 * sequence type definition for Sequence in TypeProto
 */
onnx.SequenceType = class {

    /**
     * constructor
     * @param {*} elementType 
     * @param {string} denotation 
     */
    constructor(elementType, denotation) {
        this._elementType = elementType;
        this._denotation = denotation;
    }

    get elementType() {
        return this._elementType;
    }

    get dennotation() {
        return this._dennotation;
    }

    toString() {
        const elementType = this._elementType ? this._elementType.toString() : '';
        return 'sequence<' + elementType + '>';
    }
};

/**
 * the map type definition for Map in TypeProto
 */
onnx.MapType = class {

    /**
     * constructor
     * @param {string} keyType the type string defined in TensorProto.DataType
     * @param {*} valueType TypeProto object
     * @param {string} denotation 
     */
    constructor(keyType, valueType, denotation) {
        this._keyType = keyType;
        this._valueType = valueType;
        this._denotation = denotation;
    }

    get keyType() {
        return this._keyType;
    }

    get valueType() {
        return this._valueType;
    }

    get denotation() {
        return this._denotation;
    }

    toString() {
        return 'map<' + this._keyType + ',' + this._valueType.toString() + '>';
    }
};

/**
 * Optional type for Optional in TypeProto
 */
onnx.OptionalType = class {

    constructor(type) {
        this._type = type;
    }

    get type() {
        return this._type;
    }

    toString() {
        return 'optional<' + this._type.toString() + '>';
    }
};

/**
 * the function definitions
 */
onnx.Function = class {

    /**
     * constructor
     * @param {onnx.ModelContext} context the model context 
     * @param {FunctionProto} func the proto function
     */
    constructor(context, func) {
        this._name = func.name;
        this._domain = func.domain;
        this._description = func.doc_string;
        this._inputs = [];
        this._outputs = [];

        this._attributes = func.attribute.map((attribtue) => {
            return { name: attribtue };
        });

        //add intput tensors and output tensors for every node in function
        context = new onnx.GraphContext(context, func.node);

        //add input tensors and output tensors for this function
        func.inputTensors = func.input.map((input) => context.tensor(input));
        func.outputTensors = func.output.map((output) => context.tensor(output));

        context.push(func.node, func.inputTensors, func.outputTensors);
        this._nodes = context.pop();

        for (const input of func.inputTensors) {
            const value = context.value(input.name);

            //functin inputs don't include initializers
            if (!value.initializer) {
                this._inputs.push(new onnx.Argument(input.name, [value]));
            }
        }
        for (const output of func.outputTensors) {
            const value = context.value(output.name);

            //function outputs don't include initializers
            if (!value.initializer) {
                this._outputs.push(new onnx.Argument(output.name, [value]));
            }
        }
    }

    get type() {
        return 'function';
    }

    get name() {
        return this._name;
    }

    get module() {
        return this._domain;
    }

    get description() {
        return this._description;
    }

    /**
     * Array of onnx.Argument
     */
    get inputs() {
        return this._inputs;
    }

    /**
     * Array of onnx.Argument
     */
    get outputs() {
        return this._outputs;
    }

    /**
     * Array of object {name: ...}
     */
    get attributes() {
        return this._attributes;
    }

    /**
     * Array of onnx.Node
     */
    get nodes() {
        return this._nodes;
    }
};

/**
 * the graph metadata, a helper util class
 */
onnx.GraphMetadata = class {

    /**
     * the constructor
     * @param {Map} imports the imports map, key: domain, value: version
     */
    constructor(imports) {
        this._imports = imports;
        this._cache = new Map();
        this._attributes = new Map();
        //key: func module, value: fuc name map, the map key: func name, value: the func
        this._functions = new Map();
    }

    /**
     * add a function
     * @param {onnx.Function} func 
     */
    add(func) {
        if (!this._functions.has(func.module)) {
            this._functions.set(func.module, new Map());
        }
        const map = this._functions.get(func.module);
        if (map.has(func.name)) {
            throw new onnx.Error("Duplicate function identifier '" + func.module + '.' + func.name + "'.");
        }
        map.set(func.name, func);
    }

    /**
     * get the op schema from onnx-metadata.json
     * @param {string} name op type
     * @param {string} domain op domain
     * @returns op in onnx_metadata.js
     */
    type(name, domain) {
        domain = domain || 'ai.onnx';
        const key = domain + ':' + name;
        if (!this._cache.has(key)) {
            let value = onnxMetadata.type(name, domain, this._imports);
            if (!value) {
                if (this._functions.has(domain)) {
                    const map = this._functions.get(domain);
                    if (map.has(name)) {
                        value = map.get(name);
                    }
                }
            }
            this._cache.set(key, value);
        }
        return this._cache.get(key);
    }

    /**
     * Get attribute
     * @param {string} type node type
     * @param {string} domain node domain
     * @param {string} name attribute name
     * @returns node attribute object in onnx-metadata.json or null
     */
    attribute(type, domain, name) {
        const key = domain + ':' + type + ':' + name;
        if (!this._attributes.has(key)) {
            this._attributes.set(key, null);
            const metadata = this.type(type, domain);
            if (metadata && Array.isArray(metadata.attributes) && metadata.attributes.length > 0) {
                for (const attribute of metadata.attributes) {
                    const key = domain + ':' + type + ':' + attribute.name;
                    this._attributes.set(key, attribute);
                }
            }
        }
        return this._attributes.get(key);
    }
};

/**
 * inference
 */
onnx.Inference = class {

    /**
     * constructor
     * @param {Array.<NodeProto>} nodes graph nodes
     * @param {Array.<>} outputs graph output tensors
     */
    constructor(nodes, outputs) {
        //key: the output tensor name, value: the node producing the output tensor
        this._outputs = new Map();

        for (const node of nodes) {
            for (const output of node.outputTensors) {
                this._outputs.set(output.name, node);
            }
        }

        for (const output of outputs) {
            this._infer(output.name);
        }
    }

    _infer(output) {
        if (this._outputs.has(output)) {
            let hasInputShapes = true;
            const node = this._outputs.get(output);
            for (const input of node.inputTensors) {
                if (!input.type) {
                    this._infer(input);
                    if (!input.type) {
                        hasInputShapes = false;
                        break;
                    }
                }
            }
            if (hasInputShapes) {
                // continue
            }
        }
    }
};

/**
 * Model context, a helper util class
 */
onnx.ModelContext = class {

    /**
     * the constructor
     * @param {onnx.GraphMetadata} metadata the GraphMetadata object
     * @param {Map.<string, Uint8Array>} locations 
     * @param {Array} imageFormat image format
     */
    constructor(metadata, locations, imageFormat) {
        this._metadata = metadata;
        this._locations = locations;
        this._imageFormat = imageFormat;
        //key: proto graph, value: onnx.Graph object
        this._graphs = new Map();
    }

    /**
     * onnx.GraphMetadata
     */
    get metadata() {
        return this._metadata;
    }

    /**
     * Array of string
     */
    get imageFormat() {
        return this._imageFormat;
    }

    /**
     * get location
     * @param {string} name location position
     * @param {number} offset 
     * @param {number} length 
     * @returns 
     */
    location(name, offset, length) {
        if (this._locations.has(name)) {
            //Uint8Array
            const stream = this._locations.get(name);
            if (offset >= 0 && (offset + length) <= stream.length) {
                try {
                    if (length < 0) {
                        const value = stream.subarray(offset);
                        return value;
                    } else {
                        const value = stream.subarray(offset, offset + length);
                        return value;
                    }
                } catch (error) {
                    // continue regardless of error
                }
            }
        }
        return null;
    }

    /**
     * add graph
     * @param {GraphProto} value the proto graph
     * @returns the onnx.Graph object
     */
    graph(value) {
        if (!this._graphs.has(value)) {
            this._graphs.set(value, new onnx.Graph(this, value));
        }
        return this._graphs.get(value);
    }
};

/**
 * Graph context definition, a helper util class
 */
onnx.GraphContext = class {

    /**
     * constructor
     * @param {onnx.ModelContext} context 
     * @param {Array.<NodeProto>} nodes 
     */
    constructor(context, nodes) {
        this._context = context;

        //key: data type int, value: data type string
        this._dataTypes = new Map(Object.entries(proto.onnx.TensorProto.DataType).map(([name, value]) => [value, name.toLowerCase()]));
        this._dataTypes.set(proto.onnx.TensorProto.DataType.UNDEFINED, 'undefined');
        this._dataTypes.set(proto.onnx.TensorProto.DataType.BOOL, 'boolean');
        this._dataTypes.set(proto.onnx.TensorProto.DataType.FLOAT, 'float32');
        this._dataTypes.set(proto.onnx.TensorProto.DataType.DOUBLE, 'float64');

        this._tensors = new Map();

        //key: name, value: onnx.Value
        this._values = new Map();
        this._groups = new Map();

        this._nodes = [];
        for (const node of nodes) {
            node.inputTensors = node.input.map((name) => this.tensor(name));
            node.outputTensors = node.output.map((name) => this.tensor(name));
            node.param = {};
        }
    }

    get metadata() {
        return this._context.metadata;
    }

    /**
     * get a onnx.Graph
     * @param {GraphProto} name graph proto
     * @returns onnx.Graph
     */
    graph(name) {
        return this._context.graph(name);
    }

    /**
     * get or create tensor by tensor name
     * @param {string} name 
     * @returns 
     */
    tensor(name) {
        if (!this._tensors.has(name)) {
            this._tensors.set(name, { name: name });
        }
        return this._tensors.get(name);
    }

    location(name, offset, length) {
        return this._context.location(name, offset, length);
    }

    group(name) {
        if (!this._groups.has(name)) {
            const path = name.split('/');
            if (path.length > 1) {
                path.pop();
                return this.group(path.join('/'));
            }
            this._groups.set(name, new Map([['', []]]));
        }
        return this._groups.get(name);
    }

    /**
     * this method is for graph inputs/outputs, functin inputs/outputs, node inputs/outputs
     * @param {string} name 
     * @returns 
     */
    value(name) {
        if (!this._values.has(name)) {
            const tensor = this.tensor(name);
            //initializer is onnx.Tensor, initializer.type is onnx.TensorType. tensor.type is the TypeProto parsed result
            const type = tensor.initializer ? tensor.initializer.type : tensor.type || null;
            this._values.set(name, new onnx.Value(name, type, tensor.initializer, tensor.annotation, tensor.description));
        }
        return this._values.get(name);
    }

    /**
     * create type
     * @param {TypeProto} type the type proto
     * @returns 
     */
    createType(type) {
        if (!type) {
            return null;
        }

        let denotation = '';

        // https://github.com/onnx/onnx/blob/main/docs/TypeDenotation.md#type-denotation-definition
        switch (type.denotation) {
            case undefined:
            case null:
            case '':
                break;
            case 'TENSOR':
                denotation = 'Tensor';
                break;
            case 'IMAGE':
                denotation = 'Image' + (this._context.imageFormat ? '(' + this._context.imageFormat.join(',') + ')' : '');
                break;
            case 'AUDIO':
                denotation = 'Audio';
                break;
            case 'TEXT':
                denotation = 'Text';
                break;
            default:
                throw new onnx.Error("Unsupported tensor type denotation '" + type.denotation + "'.");
        }

        if (type.tensor_type) {
            const tensor_type = type.tensor_type;
            const shape = tensor_type.shape && tensor_type.shape.dim ? tensor_type.shape.dim.map((dim) => dim.dim_param ? dim.dim_param : dim.dim_value ? dim.dim_value : null) : [];
            //return onnx.TensorType
            return this.createTensorType(tensor_type.elem_type, shape, null, denotation);
        } else if (type.sparse_tensor_type) {
            const tensor_type = type.sparse_tensor_type;
            const shape = tensor_type.shape && tensor_type.shape.dim ? tensor_type.shape.dim.map((dim) => dim.dim_param ? dim.dim_param : dim.dim_value ? dim.dim_value : null) : [];
            //return onnx.TensorType
            return this.createTensorType(tensor_type.elem_type, shape, 'sparse', denotation);
        } else if (type.map_type) {
            //return onnx.MapType
            return this.createMapType(type.map_type.key_type, this.createType(type.map_type.value_type), denotation);
        } else if (type.sequence_type) {
            //return onnx.SequenceType
            return new onnx.SequenceType(this.createType(type.sequence_type.elem_type), denotation);
        } else if (type.optional_type) {
            //return onnx.OptionalType
            return new onnx.OptionalType(this.createType(type.optional_type.elem_type), denotation);
        } else if (Object.keys(type).length == 0) {
            return null;
        }

        throw new onnx.Error("Unsupported tensor type '" + JSON.stringify(type) + "'.");
    }

    /**
     * create tensor type
     * @param {proto.onnx.TensorProto.DataType} dataType the tensor data type
     * @param {Array.<int64>} shape the tensor dims 
     * @param {string} layout 'sparse' or null
     * @param {string} denotation the tensor content or null
     * @returns onnx.TensorType
     */
    createTensorType(dataType, shape, layout, denotation) {
        //get the data type string
        dataType = this.createDataType(dataType);
        return new onnx.TensorType(dataType, new onnx.TensorShape(shape), layout, denotation);
    }

    /**
     * get onnx.MapType
     * @param {proto.onnx.TensorProto.DataType} keyType the map key
     * @param {*} valueType the map value
     * @param {string} denotation 
     * @returns onnx.MapType
     */
    createMapType(keyType, valueType, denotation) {
        //get the data type string
        keyType = this.createDataType(keyType);
        return new onnx.MapType(keyType, valueType, denotation);
    }

    /**
     * create tensor data type
     * @param {number or string} value the data type
     * @returns {string} the data type string
     */
    createDataType(value) {
        if (!Number.isInteger(value)) {
            if (value && value.toNumber) {
                value = value.toNumber();
            } else if (value && typeof value === 'string' && proto.onnx.TensorProto.DataType[value.toUpperCase()] !== undefined) {
                value = proto.onnx.TensorProto.DataType[value.toUpperCase()];
            } else {
                throw new onnx.Error("Unsupported data type '" + JSON.stringify(value) + "'.");
            }
        }
        if (this._dataTypes.has(value)) {
            return this._dataTypes.get(value);
        }
        throw new onnx.Error("Unsupported data type '" + JSON.stringify(value) + "'.");
    }

    /**
     * create location string
     * @param {proto.onnx.TensorProto.DataLocation} value the data location value
     * @returns {string} the data location string
     */
    createLocation(value) {
        switch (value) {
            case proto.onnx.TensorProto.DataLocation.DEFAULT: return 'default';
            case proto.onnx.TensorProto.DataLocation.EXTERNAL: return 'external';
            default: return 'UNDEFINED';
        }
    }

    /**
     * decode to string
     * @param {string or Uint8Array} value 
     * @returns string
     */
    decodeText(value) {
        if (typeof value === 'string') {
            return value;
        }
        this._decoder = this._decoder || new TextDecoder('utf-8');
        return this._decoder.decode(value);
    }

    /**
     * push nodes and input tensors and output tensors. the nodes belong to a graph or a function.
     * the input tensors and output tensors is the graph or the function input tensors and output tensors
     * @param {Array.<NodeProto>} nodes nodes
     * @param {Array.<Object tensor>} inputs input tensors
     * @param {Array.<Object tensor>} outputs output tensors
     */
    push(nodes, inputs, outputs) {
        //key: the node input tensor name, value: the tensors number with the same name
        const inputMap = new Map();
        //key: the node output tensor name, value: the tensors number with the same name
        const outputMap = new Map();

        //get the statistic of nodes input tensors and output tensors
        for (const node of nodes) {
            node.inputTensors.every((input) => inputMap.set(input.name, (inputMap.get(input.name) || 0) + 1));
            node.outputTensors.every((output) => outputMap.set(output.name, (outputMap.get(output.name) || 0) + 1));
        }

        //from the nodes input tensors, remove the graph or function input tensors
        inputs.every((input) => inputMap.delete(input.name));
        //from the nodes output tensors, remove the graph or function output tensors
        outputs.every((output) => outputMap.delete(output.name));

        //get the non-constant nodes
        nodes = nodes.filter((node) => {
            //get the constant node
            const constant = node &&
                node.op_type === 'Constant' &&
                node.attribute.length === 1 && node.attribute[0] &&
                node.inputTensors.length === 0 &&
                node.outputTensors.length === 1 && node.outputTensors[0] && inputMap.get(node.outputTensors[0].name) === 1 && outputMap.get(node.outputTensors[0].name) === 1;

            //convert the 'Constant' node to initializer tensor
            const attribute = constant ? node.attribute[0] : null;
            if (attribute && attribute.name === 'value' && attribute.type === proto.onnx.AttributeProto.AttributeType.TENSOR && attribute.t) {
                const tensor = this.tensor(node.outputTensors[0].name);
                tensor.initializer = new onnx.Tensor(this, attribute.t, 'Constant');
                return false;
            } else if (attribute && attribute.name === 'sparse_value' && attribute.type === proto.onnx.AttributeProto.AttributeType.SPARSE_TENSOR && attribute.sparse_tensor) {
                const tensor = this.tensor(node.outputTensors[0].name);
                tensor.initializer = new onnx.Tensor(this, attribute.sparse_tensor, 'Constant');
                return false;
            }
            return true;
        });

        for (let node of nodes) {
            //ModelContext->GraphMetadata->type, the op schema in onnx-metadata.json or function schema
            const schema = this._context.metadata.type(node.op_type, node.domain);
            const inputs = [];
            node.inputTensors = node.inputTensors || [];
            for (let i = 0; i < node.inputTensors.length;) {
                const input = schema && schema.inputs && i < schema.inputs.length ? schema.inputs[i] : { name: i.toString() };
                const count = input.list ? node.inputTensors.length - i : 1;
                const list = node.inputTensors.slice(i, i + count).filter((arg) => arg.name !== '' || arg.initializer);
                const args = list.map((input) => this.value(input.name));
                inputs.push(new onnx.Argument(input.name, args));
                i += count;
            }

            const outputs = [];
            node.outputTensors = node.outputTensors || [];
            for (let i = 0; i < node.outputTensors.length;) {
                const output = schema && schema.outputs && i < schema.outputs.length ? schema.outputs[i] : { name: i.toString() };
                const count = output.list ? node.outputTensors.length - i : 1;
                const list = node.outputTensors.slice(i, i + count).filter((arg) => arg.name !== '' || arg.initializer);
                const args = list.map((output) => this.value(output.name));
                outputs.push(new onnx.Argument(output.name, args));
                i += count;
            }

            node = new onnx.Node(this, node.op_type, node.domain, node.name, node.doc_string, node.attribute, inputs, outputs);
            this._nodes.push(node);
        }
    }

    pop() {
        return this._nodes;
    }
};

module.exports = onnx;