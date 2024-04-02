/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const onnx = $root.onnx = (() => {

    /**
     * Namespace onnx.
     * @exports onnx
     * @namespace
     */
    const onnx = {};

    /**
     * Version enum.
     * @name onnx.Version
     * @enum {number}
     * @property {number} _START_VERSION=0 _START_VERSION value
     * @property {number} IR_VERSION_2017_10_10=1 IR_VERSION_2017_10_10 value
     * @property {number} IR_VERSION_2017_10_30=2 IR_VERSION_2017_10_30 value
     * @property {number} IR_VERSION_2017_11_3=3 IR_VERSION_2017_11_3 value
     * @property {number} IR_VERSION_2019_1_22=4 IR_VERSION_2019_1_22 value
     * @property {number} IR_VERSION_2019_3_18=5 IR_VERSION_2019_3_18 value
     * @property {number} IR_VERSION_2019_9_19=6 IR_VERSION_2019_9_19 value
     * @property {number} IR_VERSION_2020_5_8=7 IR_VERSION_2020_5_8 value
     * @property {number} IR_VERSION_2021_7_30=8 IR_VERSION_2021_7_30 value
     * @property {number} IR_VERSION=9 IR_VERSION value
     */
    onnx.Version = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "_START_VERSION"] = 0;
        values[valuesById[1] = "IR_VERSION_2017_10_10"] = 1;
        values[valuesById[2] = "IR_VERSION_2017_10_30"] = 2;
        values[valuesById[3] = "IR_VERSION_2017_11_3"] = 3;
        values[valuesById[4] = "IR_VERSION_2019_1_22"] = 4;
        values[valuesById[5] = "IR_VERSION_2019_3_18"] = 5;
        values[valuesById[6] = "IR_VERSION_2019_9_19"] = 6;
        values[valuesById[7] = "IR_VERSION_2020_5_8"] = 7;
        values[valuesById[8] = "IR_VERSION_2021_7_30"] = 8;
        values[valuesById[9] = "IR_VERSION"] = 9;
        return values;
    })();

    onnx.AttributeProto = (function() {

        /**
         * Properties of an AttributeProto.
         * @memberof onnx
         * @interface IAttributeProto
         * @property {string|null} [name] AttributeProto name
         * @property {string|null} [ref_attr_name] AttributeProto ref_attr_name
         * @property {string|null} [doc_string] AttributeProto doc_string
         * @property {onnx.AttributeProto.AttributeType|null} [type] AttributeProto type
         * @property {number|null} [f] AttributeProto f
         * @property {number|Long|null} [i] AttributeProto i
         * @property {Uint8Array|null} [s] AttributeProto s
         * @property {onnx.ITensorProto|null} [t] AttributeProto t
         * @property {onnx.IGraphProto|null} [g] AttributeProto g
         * @property {onnx.ISparseTensorProto|null} [sparse_tensor] AttributeProto sparse_tensor
         * @property {onnx.ITypeProto|null} [tp] AttributeProto tp
         * @property {Array.<number>|null} [floats] AttributeProto floats
         * @property {Array.<number|Long>|null} [ints] AttributeProto ints
         * @property {Array.<Uint8Array>|null} [strings] AttributeProto strings
         * @property {Array.<onnx.ITensorProto>|null} [tensors] AttributeProto tensors
         * @property {Array.<onnx.IGraphProto>|null} [graphs] AttributeProto graphs
         * @property {Array.<onnx.ISparseTensorProto>|null} [sparse_tensors] AttributeProto sparse_tensors
         * @property {Array.<onnx.ITypeProto>|null} [type_protos] AttributeProto type_protos
         */

        /**
         * Constructs a new AttributeProto.
         * @memberof onnx
         * @classdesc Represents an AttributeProto.
         * @implements IAttributeProto
         * @constructor
         * @param {onnx.IAttributeProto=} [properties] Properties to set
         */
        function AttributeProto(properties) {
            this.floats = [];
            this.ints = [];
            this.strings = [];
            this.tensors = [];
            this.graphs = [];
            this.sparse_tensors = [];
            this.type_protos = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttributeProto name.
         * @member {string} name
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.name = "";

        /**
         * AttributeProto ref_attr_name.
         * @member {string} ref_attr_name
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.ref_attr_name = "";

        /**
         * AttributeProto doc_string.
         * @member {string} doc_string
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.doc_string = "";

        /**
         * AttributeProto type.
         * @member {onnx.AttributeProto.AttributeType} type
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.type = 0;

        /**
         * AttributeProto f.
         * @member {number} f
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.f = 0;

        /**
         * AttributeProto i.
         * @member {number|Long} i
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.i = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AttributeProto s.
         * @member {Uint8Array} s
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.s = $util.newBuffer([]);

        /**
         * AttributeProto t.
         * @member {onnx.ITensorProto|null|undefined} t
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.t = null;

        /**
         * AttributeProto g.
         * @member {onnx.IGraphProto|null|undefined} g
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.g = null;

        /**
         * AttributeProto sparse_tensor.
         * @member {onnx.ISparseTensorProto|null|undefined} sparse_tensor
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.sparse_tensor = null;

        /**
         * AttributeProto tp.
         * @member {onnx.ITypeProto|null|undefined} tp
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.tp = null;

        /**
         * AttributeProto floats.
         * @member {Array.<number>} floats
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.floats = $util.emptyArray;

        /**
         * AttributeProto ints.
         * @member {Array.<number|Long>} ints
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.ints = $util.emptyArray;

        /**
         * AttributeProto strings.
         * @member {Array.<Uint8Array>} strings
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.strings = $util.emptyArray;

        /**
         * AttributeProto tensors.
         * @member {Array.<onnx.ITensorProto>} tensors
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.tensors = $util.emptyArray;

        /**
         * AttributeProto graphs.
         * @member {Array.<onnx.IGraphProto>} graphs
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.graphs = $util.emptyArray;

        /**
         * AttributeProto sparse_tensors.
         * @member {Array.<onnx.ISparseTensorProto>} sparse_tensors
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.sparse_tensors = $util.emptyArray;

        /**
         * AttributeProto type_protos.
         * @member {Array.<onnx.ITypeProto>} type_protos
         * @memberof onnx.AttributeProto
         * @instance
         */
        AttributeProto.prototype.type_protos = $util.emptyArray;

        /**
         * Creates a new AttributeProto instance using the specified properties.
         * @function create
         * @memberof onnx.AttributeProto
         * @static
         * @param {onnx.IAttributeProto=} [properties] Properties to set
         * @returns {onnx.AttributeProto} AttributeProto instance
         */
        AttributeProto.create = function create(properties) {
            return new AttributeProto(properties);
        };

        /**
         * Encodes the specified AttributeProto message. Does not implicitly {@link onnx.AttributeProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.AttributeProto
         * @static
         * @param {onnx.IAttributeProto} message AttributeProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttributeProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.f != null && Object.hasOwnProperty.call(message, "f"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.f);
            if (message.i != null && Object.hasOwnProperty.call(message, "i"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.i);
            if (message.s != null && Object.hasOwnProperty.call(message, "s"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.s);
            if (message.t != null && Object.hasOwnProperty.call(message, "t"))
                $root.onnx.TensorProto.encode(message.t, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.g != null && Object.hasOwnProperty.call(message, "g"))
                $root.onnx.GraphProto.encode(message.g, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.floats != null && message.floats.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (let i = 0; i < message.floats.length; ++i)
                    writer.float(message.floats[i]);
                writer.ldelim();
            }
            if (message.ints != null && message.ints.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (let i = 0; i < message.ints.length; ++i)
                    writer.int64(message.ints[i]);
                writer.ldelim();
            }
            if (message.strings != null && message.strings.length)
                for (let i = 0; i < message.strings.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.strings[i]);
            if (message.tensors != null && message.tensors.length)
                for (let i = 0; i < message.tensors.length; ++i)
                    $root.onnx.TensorProto.encode(message.tensors[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.graphs != null && message.graphs.length)
                for (let i = 0; i < message.graphs.length; ++i)
                    $root.onnx.GraphProto.encode(message.graphs[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.doc_string != null && Object.hasOwnProperty.call(message, "doc_string"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.doc_string);
            if (message.tp != null && Object.hasOwnProperty.call(message, "tp"))
                $root.onnx.TypeProto.encode(message.tp, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.type_protos != null && message.type_protos.length)
                for (let i = 0; i < message.type_protos.length; ++i)
                    $root.onnx.TypeProto.encode(message.type_protos[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.type);
            if (message.ref_attr_name != null && Object.hasOwnProperty.call(message, "ref_attr_name"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.ref_attr_name);
            if (message.sparse_tensor != null && Object.hasOwnProperty.call(message, "sparse_tensor"))
                $root.onnx.SparseTensorProto.encode(message.sparse_tensor, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.sparse_tensors != null && message.sparse_tensors.length)
                for (let i = 0; i < message.sparse_tensors.length; ++i)
                    $root.onnx.SparseTensorProto.encode(message.sparse_tensors[i], writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AttributeProto message, length delimited. Does not implicitly {@link onnx.AttributeProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.AttributeProto
         * @static
         * @param {onnx.IAttributeProto} message AttributeProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttributeProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttributeProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.AttributeProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.AttributeProto} AttributeProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttributeProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.AttributeProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 21:
                    message.ref_attr_name = reader.string();
                    break;
                case 13:
                    message.doc_string = reader.string();
                    break;
                case 20:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.f = reader.float();
                    break;
                case 3:
                    message.i = reader.int64();
                    break;
                case 4:
                    message.s = reader.bytes();
                    break;
                case 5:
                    message.t = $root.onnx.TensorProto.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.g = $root.onnx.GraphProto.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.sparse_tensor = $root.onnx.SparseTensorProto.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.tp = $root.onnx.TypeProto.decode(reader, reader.uint32());
                    break;
                case 7:
                    if (!(message.floats && message.floats.length))
                        message.floats = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.floats.push(reader.float());
                    } else
                        message.floats.push(reader.float());
                    break;
                case 8:
                    if (!(message.ints && message.ints.length))
                        message.ints = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ints.push(reader.int64());
                    } else
                        message.ints.push(reader.int64());
                    break;
                case 9:
                    if (!(message.strings && message.strings.length))
                        message.strings = [];
                    message.strings.push(reader.bytes());
                    break;
                case 10:
                    if (!(message.tensors && message.tensors.length))
                        message.tensors = [];
                    message.tensors.push($root.onnx.TensorProto.decode(reader, reader.uint32()));
                    break;
                case 11:
                    if (!(message.graphs && message.graphs.length))
                        message.graphs = [];
                    message.graphs.push($root.onnx.GraphProto.decode(reader, reader.uint32()));
                    break;
                case 23:
                    if (!(message.sparse_tensors && message.sparse_tensors.length))
                        message.sparse_tensors = [];
                    message.sparse_tensors.push($root.onnx.SparseTensorProto.decode(reader, reader.uint32()));
                    break;
                case 15:
                    if (!(message.type_protos && message.type_protos.length))
                        message.type_protos = [];
                    message.type_protos.push($root.onnx.TypeProto.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AttributeProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.AttributeProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.AttributeProto} AttributeProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttributeProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttributeProto message.
         * @function verify
         * @memberof onnx.AttributeProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttributeProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.ref_attr_name != null && message.hasOwnProperty("ref_attr_name"))
                if (!$util.isString(message.ref_attr_name))
                    return "ref_attr_name: string expected";
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                if (!$util.isString(message.doc_string))
                    return "doc_string: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 11:
                case 13:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 12:
                case 14:
                    break;
                }
            if (message.f != null && message.hasOwnProperty("f"))
                if (typeof message.f !== "number")
                    return "f: number expected";
            if (message.i != null && message.hasOwnProperty("i"))
                if (!$util.isInteger(message.i) && !(message.i && $util.isInteger(message.i.low) && $util.isInteger(message.i.high)))
                    return "i: integer|Long expected";
            if (message.s != null && message.hasOwnProperty("s"))
                if (!(message.s && typeof message.s.length === "number" || $util.isString(message.s)))
                    return "s: buffer expected";
            if (message.t != null && message.hasOwnProperty("t")) {
                let error = $root.onnx.TensorProto.verify(message.t);
                if (error)
                    return "t." + error;
            }
            if (message.g != null && message.hasOwnProperty("g")) {
                let error = $root.onnx.GraphProto.verify(message.g);
                if (error)
                    return "g." + error;
            }
            if (message.sparse_tensor != null && message.hasOwnProperty("sparse_tensor")) {
                let error = $root.onnx.SparseTensorProto.verify(message.sparse_tensor);
                if (error)
                    return "sparse_tensor." + error;
            }
            if (message.tp != null && message.hasOwnProperty("tp")) {
                let error = $root.onnx.TypeProto.verify(message.tp);
                if (error)
                    return "tp." + error;
            }
            if (message.floats != null && message.hasOwnProperty("floats")) {
                if (!Array.isArray(message.floats))
                    return "floats: array expected";
                for (let i = 0; i < message.floats.length; ++i)
                    if (typeof message.floats[i] !== "number")
                        return "floats: number[] expected";
            }
            if (message.ints != null && message.hasOwnProperty("ints")) {
                if (!Array.isArray(message.ints))
                    return "ints: array expected";
                for (let i = 0; i < message.ints.length; ++i)
                    if (!$util.isInteger(message.ints[i]) && !(message.ints[i] && $util.isInteger(message.ints[i].low) && $util.isInteger(message.ints[i].high)))
                        return "ints: integer|Long[] expected";
            }
            if (message.strings != null && message.hasOwnProperty("strings")) {
                if (!Array.isArray(message.strings))
                    return "strings: array expected";
                for (let i = 0; i < message.strings.length; ++i)
                    if (!(message.strings[i] && typeof message.strings[i].length === "number" || $util.isString(message.strings[i])))
                        return "strings: buffer[] expected";
            }
            if (message.tensors != null && message.hasOwnProperty("tensors")) {
                if (!Array.isArray(message.tensors))
                    return "tensors: array expected";
                for (let i = 0; i < message.tensors.length; ++i) {
                    let error = $root.onnx.TensorProto.verify(message.tensors[i]);
                    if (error)
                        return "tensors." + error;
                }
            }
            if (message.graphs != null && message.hasOwnProperty("graphs")) {
                if (!Array.isArray(message.graphs))
                    return "graphs: array expected";
                for (let i = 0; i < message.graphs.length; ++i) {
                    let error = $root.onnx.GraphProto.verify(message.graphs[i]);
                    if (error)
                        return "graphs." + error;
                }
            }
            if (message.sparse_tensors != null && message.hasOwnProperty("sparse_tensors")) {
                if (!Array.isArray(message.sparse_tensors))
                    return "sparse_tensors: array expected";
                for (let i = 0; i < message.sparse_tensors.length; ++i) {
                    let error = $root.onnx.SparseTensorProto.verify(message.sparse_tensors[i]);
                    if (error)
                        return "sparse_tensors." + error;
                }
            }
            if (message.type_protos != null && message.hasOwnProperty("type_protos")) {
                if (!Array.isArray(message.type_protos))
                    return "type_protos: array expected";
                for (let i = 0; i < message.type_protos.length; ++i) {
                    let error = $root.onnx.TypeProto.verify(message.type_protos[i]);
                    if (error)
                        return "type_protos." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AttributeProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.AttributeProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.AttributeProto} AttributeProto
         */
        AttributeProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.AttributeProto)
                return object;
            let message = new $root.onnx.AttributeProto();
            if (object.name != null)
                message.name = String(object.name);
            if (object.ref_attr_name != null)
                message.ref_attr_name = String(object.ref_attr_name);
            if (object.doc_string != null)
                message.doc_string = String(object.doc_string);
            switch (object.type) {
            case "UNDEFINED":
            case 0:
                message.type = 0;
                break;
            case "FLOAT":
            case 1:
                message.type = 1;
                break;
            case "INT":
            case 2:
                message.type = 2;
                break;
            case "STRING":
            case 3:
                message.type = 3;
                break;
            case "TENSOR":
            case 4:
                message.type = 4;
                break;
            case "GRAPH":
            case 5:
                message.type = 5;
                break;
            case "SPARSE_TENSOR":
            case 11:
                message.type = 11;
                break;
            case "TYPE_PROTO":
            case 13:
                message.type = 13;
                break;
            case "FLOATS":
            case 6:
                message.type = 6;
                break;
            case "INTS":
            case 7:
                message.type = 7;
                break;
            case "STRINGS":
            case 8:
                message.type = 8;
                break;
            case "TENSORS":
            case 9:
                message.type = 9;
                break;
            case "GRAPHS":
            case 10:
                message.type = 10;
                break;
            case "SPARSE_TENSORS":
            case 12:
                message.type = 12;
                break;
            case "TYPE_PROTOS":
            case 14:
                message.type = 14;
                break;
            }
            if (object.f != null)
                message.f = Number(object.f);
            if (object.i != null)
                if ($util.Long)
                    (message.i = $util.Long.fromValue(object.i)).unsigned = false;
                else if (typeof object.i === "string")
                    message.i = parseInt(object.i, 10);
                else if (typeof object.i === "number")
                    message.i = object.i;
                else if (typeof object.i === "object")
                    message.i = new $util.LongBits(object.i.low >>> 0, object.i.high >>> 0).toNumber();
            if (object.s != null)
                if (typeof object.s === "string")
                    $util.base64.decode(object.s, message.s = $util.newBuffer($util.base64.length(object.s)), 0);
                else if (object.s.length)
                    message.s = object.s;
            if (object.t != null) {
                if (typeof object.t !== "object")
                    throw TypeError(".onnx.AttributeProto.t: object expected");
                message.t = $root.onnx.TensorProto.fromObject(object.t);
            }
            if (object.g != null) {
                if (typeof object.g !== "object")
                    throw TypeError(".onnx.AttributeProto.g: object expected");
                message.g = $root.onnx.GraphProto.fromObject(object.g);
            }
            if (object.sparse_tensor != null) {
                if (typeof object.sparse_tensor !== "object")
                    throw TypeError(".onnx.AttributeProto.sparse_tensor: object expected");
                message.sparse_tensor = $root.onnx.SparseTensorProto.fromObject(object.sparse_tensor);
            }
            if (object.tp != null) {
                if (typeof object.tp !== "object")
                    throw TypeError(".onnx.AttributeProto.tp: object expected");
                message.tp = $root.onnx.TypeProto.fromObject(object.tp);
            }
            if (object.floats) {
                if (!Array.isArray(object.floats))
                    throw TypeError(".onnx.AttributeProto.floats: array expected");
                message.floats = [];
                for (let i = 0; i < object.floats.length; ++i)
                    message.floats[i] = Number(object.floats[i]);
            }
            if (object.ints) {
                if (!Array.isArray(object.ints))
                    throw TypeError(".onnx.AttributeProto.ints: array expected");
                message.ints = [];
                for (let i = 0; i < object.ints.length; ++i)
                    if ($util.Long)
                        (message.ints[i] = $util.Long.fromValue(object.ints[i])).unsigned = false;
                    else if (typeof object.ints[i] === "string")
                        message.ints[i] = parseInt(object.ints[i], 10);
                    else if (typeof object.ints[i] === "number")
                        message.ints[i] = object.ints[i];
                    else if (typeof object.ints[i] === "object")
                        message.ints[i] = new $util.LongBits(object.ints[i].low >>> 0, object.ints[i].high >>> 0).toNumber();
            }
            if (object.strings) {
                if (!Array.isArray(object.strings))
                    throw TypeError(".onnx.AttributeProto.strings: array expected");
                message.strings = [];
                for (let i = 0; i < object.strings.length; ++i)
                    if (typeof object.strings[i] === "string")
                        $util.base64.decode(object.strings[i], message.strings[i] = $util.newBuffer($util.base64.length(object.strings[i])), 0);
                    else if (object.strings[i].length)
                        message.strings[i] = object.strings[i];
            }
            if (object.tensors) {
                if (!Array.isArray(object.tensors))
                    throw TypeError(".onnx.AttributeProto.tensors: array expected");
                message.tensors = [];
                for (let i = 0; i < object.tensors.length; ++i) {
                    if (typeof object.tensors[i] !== "object")
                        throw TypeError(".onnx.AttributeProto.tensors: object expected");
                    message.tensors[i] = $root.onnx.TensorProto.fromObject(object.tensors[i]);
                }
            }
            if (object.graphs) {
                if (!Array.isArray(object.graphs))
                    throw TypeError(".onnx.AttributeProto.graphs: array expected");
                message.graphs = [];
                for (let i = 0; i < object.graphs.length; ++i) {
                    if (typeof object.graphs[i] !== "object")
                        throw TypeError(".onnx.AttributeProto.graphs: object expected");
                    message.graphs[i] = $root.onnx.GraphProto.fromObject(object.graphs[i]);
                }
            }
            if (object.sparse_tensors) {
                if (!Array.isArray(object.sparse_tensors))
                    throw TypeError(".onnx.AttributeProto.sparse_tensors: array expected");
                message.sparse_tensors = [];
                for (let i = 0; i < object.sparse_tensors.length; ++i) {
                    if (typeof object.sparse_tensors[i] !== "object")
                        throw TypeError(".onnx.AttributeProto.sparse_tensors: object expected");
                    message.sparse_tensors[i] = $root.onnx.SparseTensorProto.fromObject(object.sparse_tensors[i]);
                }
            }
            if (object.type_protos) {
                if (!Array.isArray(object.type_protos))
                    throw TypeError(".onnx.AttributeProto.type_protos: array expected");
                message.type_protos = [];
                for (let i = 0; i < object.type_protos.length; ++i) {
                    if (typeof object.type_protos[i] !== "object")
                        throw TypeError(".onnx.AttributeProto.type_protos: object expected");
                    message.type_protos[i] = $root.onnx.TypeProto.fromObject(object.type_protos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AttributeProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.AttributeProto
         * @static
         * @param {onnx.AttributeProto} message AttributeProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttributeProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.floats = [];
                object.ints = [];
                object.strings = [];
                object.tensors = [];
                object.graphs = [];
                object.type_protos = [];
                object.sparse_tensors = [];
            }
            if (options.defaults) {
                object.name = "";
                object.f = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.i = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.i = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.s = "";
                else {
                    object.s = [];
                    if (options.bytes !== Array)
                        object.s = $util.newBuffer(object.s);
                }
                object.t = null;
                object.g = null;
                object.doc_string = "";
                object.tp = null;
                object.type = options.enums === String ? "UNDEFINED" : 0;
                object.ref_attr_name = "";
                object.sparse_tensor = null;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.f != null && message.hasOwnProperty("f"))
                object.f = options.json && !isFinite(message.f) ? String(message.f) : message.f;
            if (message.i != null && message.hasOwnProperty("i"))
                if (typeof message.i === "number")
                    object.i = options.longs === String ? String(message.i) : message.i;
                else
                    object.i = options.longs === String ? $util.Long.prototype.toString.call(message.i) : options.longs === Number ? new $util.LongBits(message.i.low >>> 0, message.i.high >>> 0).toNumber() : message.i;
            if (message.s != null && message.hasOwnProperty("s"))
                object.s = options.bytes === String ? $util.base64.encode(message.s, 0, message.s.length) : options.bytes === Array ? Array.prototype.slice.call(message.s) : message.s;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = $root.onnx.TensorProto.toObject(message.t, options);
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = $root.onnx.GraphProto.toObject(message.g, options);
            if (message.floats && message.floats.length) {
                object.floats = [];
                for (let j = 0; j < message.floats.length; ++j)
                    object.floats[j] = options.json && !isFinite(message.floats[j]) ? String(message.floats[j]) : message.floats[j];
            }
            if (message.ints && message.ints.length) {
                object.ints = [];
                for (let j = 0; j < message.ints.length; ++j)
                    if (typeof message.ints[j] === "number")
                        object.ints[j] = options.longs === String ? String(message.ints[j]) : message.ints[j];
                    else
                        object.ints[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ints[j]) : options.longs === Number ? new $util.LongBits(message.ints[j].low >>> 0, message.ints[j].high >>> 0).toNumber() : message.ints[j];
            }
            if (message.strings && message.strings.length) {
                object.strings = [];
                for (let j = 0; j < message.strings.length; ++j)
                    object.strings[j] = options.bytes === String ? $util.base64.encode(message.strings[j], 0, message.strings[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.strings[j]) : message.strings[j];
            }
            if (message.tensors && message.tensors.length) {
                object.tensors = [];
                for (let j = 0; j < message.tensors.length; ++j)
                    object.tensors[j] = $root.onnx.TensorProto.toObject(message.tensors[j], options);
            }
            if (message.graphs && message.graphs.length) {
                object.graphs = [];
                for (let j = 0; j < message.graphs.length; ++j)
                    object.graphs[j] = $root.onnx.GraphProto.toObject(message.graphs[j], options);
            }
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                object.doc_string = message.doc_string;
            if (message.tp != null && message.hasOwnProperty("tp"))
                object.tp = $root.onnx.TypeProto.toObject(message.tp, options);
            if (message.type_protos && message.type_protos.length) {
                object.type_protos = [];
                for (let j = 0; j < message.type_protos.length; ++j)
                    object.type_protos[j] = $root.onnx.TypeProto.toObject(message.type_protos[j], options);
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.onnx.AttributeProto.AttributeType[message.type] : message.type;
            if (message.ref_attr_name != null && message.hasOwnProperty("ref_attr_name"))
                object.ref_attr_name = message.ref_attr_name;
            if (message.sparse_tensor != null && message.hasOwnProperty("sparse_tensor"))
                object.sparse_tensor = $root.onnx.SparseTensorProto.toObject(message.sparse_tensor, options);
            if (message.sparse_tensors && message.sparse_tensors.length) {
                object.sparse_tensors = [];
                for (let j = 0; j < message.sparse_tensors.length; ++j)
                    object.sparse_tensors[j] = $root.onnx.SparseTensorProto.toObject(message.sparse_tensors[j], options);
            }
            return object;
        };

        /**
         * Converts this AttributeProto to JSON.
         * @function toJSON
         * @memberof onnx.AttributeProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttributeProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * AttributeType enum.
         * @name onnx.AttributeProto.AttributeType
         * @enum {number}
         * @property {number} UNDEFINED=0 UNDEFINED value
         * @property {number} FLOAT=1 FLOAT value
         * @property {number} INT=2 INT value
         * @property {number} STRING=3 STRING value
         * @property {number} TENSOR=4 TENSOR value
         * @property {number} GRAPH=5 GRAPH value
         * @property {number} SPARSE_TENSOR=11 SPARSE_TENSOR value
         * @property {number} TYPE_PROTO=13 TYPE_PROTO value
         * @property {number} FLOATS=6 FLOATS value
         * @property {number} INTS=7 INTS value
         * @property {number} STRINGS=8 STRINGS value
         * @property {number} TENSORS=9 TENSORS value
         * @property {number} GRAPHS=10 GRAPHS value
         * @property {number} SPARSE_TENSORS=12 SPARSE_TENSORS value
         * @property {number} TYPE_PROTOS=14 TYPE_PROTOS value
         */
        AttributeProto.AttributeType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNDEFINED"] = 0;
            values[valuesById[1] = "FLOAT"] = 1;
            values[valuesById[2] = "INT"] = 2;
            values[valuesById[3] = "STRING"] = 3;
            values[valuesById[4] = "TENSOR"] = 4;
            values[valuesById[5] = "GRAPH"] = 5;
            values[valuesById[11] = "SPARSE_TENSOR"] = 11;
            values[valuesById[13] = "TYPE_PROTO"] = 13;
            values[valuesById[6] = "FLOATS"] = 6;
            values[valuesById[7] = "INTS"] = 7;
            values[valuesById[8] = "STRINGS"] = 8;
            values[valuesById[9] = "TENSORS"] = 9;
            values[valuesById[10] = "GRAPHS"] = 10;
            values[valuesById[12] = "SPARSE_TENSORS"] = 12;
            values[valuesById[14] = "TYPE_PROTOS"] = 14;
            return values;
        })();

        return AttributeProto;
    })();

    onnx.ValueInfoProto = (function() {

        /**
         * Properties of a ValueInfoProto.
         * @memberof onnx
         * @interface IValueInfoProto
         * @property {string|null} [name] ValueInfoProto name
         * @property {onnx.ITypeProto|null} [type] ValueInfoProto type
         * @property {string|null} [doc_string] ValueInfoProto doc_string
         */

        /**
         * Constructs a new ValueInfoProto.
         * @memberof onnx
         * @classdesc Represents a ValueInfoProto.
         * @implements IValueInfoProto
         * @constructor
         * @param {onnx.IValueInfoProto=} [properties] Properties to set
         */
        function ValueInfoProto(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValueInfoProto name.
         * @member {string} name
         * @memberof onnx.ValueInfoProto
         * @instance
         */
        ValueInfoProto.prototype.name = "";

        /**
         * ValueInfoProto type.
         * @member {onnx.ITypeProto|null|undefined} type
         * @memberof onnx.ValueInfoProto
         * @instance
         */
        ValueInfoProto.prototype.type = null;

        /**
         * ValueInfoProto doc_string.
         * @member {string} doc_string
         * @memberof onnx.ValueInfoProto
         * @instance
         */
        ValueInfoProto.prototype.doc_string = "";

        /**
         * Creates a new ValueInfoProto instance using the specified properties.
         * @function create
         * @memberof onnx.ValueInfoProto
         * @static
         * @param {onnx.IValueInfoProto=} [properties] Properties to set
         * @returns {onnx.ValueInfoProto} ValueInfoProto instance
         */
        ValueInfoProto.create = function create(properties) {
            return new ValueInfoProto(properties);
        };

        /**
         * Encodes the specified ValueInfoProto message. Does not implicitly {@link onnx.ValueInfoProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.ValueInfoProto
         * @static
         * @param {onnx.IValueInfoProto} message ValueInfoProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValueInfoProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                $root.onnx.TypeProto.encode(message.type, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.doc_string != null && Object.hasOwnProperty.call(message, "doc_string"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.doc_string);
            return writer;
        };

        /**
         * Encodes the specified ValueInfoProto message, length delimited. Does not implicitly {@link onnx.ValueInfoProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.ValueInfoProto
         * @static
         * @param {onnx.IValueInfoProto} message ValueInfoProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValueInfoProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ValueInfoProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.ValueInfoProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.ValueInfoProto} ValueInfoProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValueInfoProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.ValueInfoProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = $root.onnx.TypeProto.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.doc_string = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ValueInfoProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.ValueInfoProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.ValueInfoProto} ValueInfoProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValueInfoProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ValueInfoProto message.
         * @function verify
         * @memberof onnx.ValueInfoProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ValueInfoProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type")) {
                let error = $root.onnx.TypeProto.verify(message.type);
                if (error)
                    return "type." + error;
            }
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                if (!$util.isString(message.doc_string))
                    return "doc_string: string expected";
            return null;
        };

        /**
         * Creates a ValueInfoProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.ValueInfoProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.ValueInfoProto} ValueInfoProto
         */
        ValueInfoProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.ValueInfoProto)
                return object;
            let message = new $root.onnx.ValueInfoProto();
            if (object.name != null)
                message.name = String(object.name);
            if (object.type != null) {
                if (typeof object.type !== "object")
                    throw TypeError(".onnx.ValueInfoProto.type: object expected");
                message.type = $root.onnx.TypeProto.fromObject(object.type);
            }
            if (object.doc_string != null)
                message.doc_string = String(object.doc_string);
            return message;
        };

        /**
         * Creates a plain object from a ValueInfoProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.ValueInfoProto
         * @static
         * @param {onnx.ValueInfoProto} message ValueInfoProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ValueInfoProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.type = null;
                object.doc_string = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = $root.onnx.TypeProto.toObject(message.type, options);
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                object.doc_string = message.doc_string;
            return object;
        };

        /**
         * Converts this ValueInfoProto to JSON.
         * @function toJSON
         * @memberof onnx.ValueInfoProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ValueInfoProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ValueInfoProto;
    })();

    onnx.NodeProto = (function() {

        /**
         * Properties of a NodeProto.
         * @memberof onnx
         * @interface INodeProto
         * @property {Array.<string>|null} [input] NodeProto input
         * @property {Array.<string>|null} [output] NodeProto output
         * @property {string|null} [name] NodeProto name
         * @property {string|null} [op_type] NodeProto op_type
         * @property {string|null} [domain] NodeProto domain
         * @property {Array.<onnx.IAttributeProto>|null} [attribute] NodeProto attribute
         * @property {string|null} [doc_string] NodeProto doc_string
         */

        /**
         * Constructs a new NodeProto.
         * @memberof onnx
         * @classdesc Represents a NodeProto.
         * @implements INodeProto
         * @constructor
         * @param {onnx.INodeProto=} [properties] Properties to set
         */
        function NodeProto(properties) {
            this.input = [];
            this.output = [];
            this.attribute = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeProto input.
         * @member {Array.<string>} input
         * @memberof onnx.NodeProto
         * @instance
         */
        NodeProto.prototype.input = $util.emptyArray;

        /**
         * NodeProto output.
         * @member {Array.<string>} output
         * @memberof onnx.NodeProto
         * @instance
         */
        NodeProto.prototype.output = $util.emptyArray;

        /**
         * NodeProto name.
         * @member {string} name
         * @memberof onnx.NodeProto
         * @instance
         */
        NodeProto.prototype.name = "";

        /**
         * NodeProto op_type.
         * @member {string} op_type
         * @memberof onnx.NodeProto
         * @instance
         */
        NodeProto.prototype.op_type = "";

        /**
         * NodeProto domain.
         * @member {string} domain
         * @memberof onnx.NodeProto
         * @instance
         */
        NodeProto.prototype.domain = "";

        /**
         * NodeProto attribute.
         * @member {Array.<onnx.IAttributeProto>} attribute
         * @memberof onnx.NodeProto
         * @instance
         */
        NodeProto.prototype.attribute = $util.emptyArray;

        /**
         * NodeProto doc_string.
         * @member {string} doc_string
         * @memberof onnx.NodeProto
         * @instance
         */
        NodeProto.prototype.doc_string = "";

        /**
         * Creates a new NodeProto instance using the specified properties.
         * @function create
         * @memberof onnx.NodeProto
         * @static
         * @param {onnx.INodeProto=} [properties] Properties to set
         * @returns {onnx.NodeProto} NodeProto instance
         */
        NodeProto.create = function create(properties) {
            return new NodeProto(properties);
        };

        /**
         * Encodes the specified NodeProto message. Does not implicitly {@link onnx.NodeProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.NodeProto
         * @static
         * @param {onnx.INodeProto} message NodeProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input != null && message.input.length)
                for (let i = 0; i < message.input.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.input[i]);
            if (message.output != null && message.output.length)
                for (let i = 0; i < message.output.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.output[i]);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.op_type != null && Object.hasOwnProperty.call(message, "op_type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.op_type);
            if (message.attribute != null && message.attribute.length)
                for (let i = 0; i < message.attribute.length; ++i)
                    $root.onnx.AttributeProto.encode(message.attribute[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.doc_string != null && Object.hasOwnProperty.call(message, "doc_string"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.doc_string);
            if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.domain);
            return writer;
        };

        /**
         * Encodes the specified NodeProto message, length delimited. Does not implicitly {@link onnx.NodeProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.NodeProto
         * @static
         * @param {onnx.INodeProto} message NodeProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.NodeProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.NodeProto} NodeProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.NodeProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.input && message.input.length))
                        message.input = [];
                    message.input.push(reader.string());
                    break;
                case 2:
                    if (!(message.output && message.output.length))
                        message.output = [];
                    message.output.push(reader.string());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.op_type = reader.string();
                    break;
                case 7:
                    message.domain = reader.string();
                    break;
                case 5:
                    if (!(message.attribute && message.attribute.length))
                        message.attribute = [];
                    message.attribute.push($root.onnx.AttributeProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.doc_string = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.NodeProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.NodeProto} NodeProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeProto message.
         * @function verify
         * @memberof onnx.NodeProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input != null && message.hasOwnProperty("input")) {
                if (!Array.isArray(message.input))
                    return "input: array expected";
                for (let i = 0; i < message.input.length; ++i)
                    if (!$util.isString(message.input[i]))
                        return "input: string[] expected";
            }
            if (message.output != null && message.hasOwnProperty("output")) {
                if (!Array.isArray(message.output))
                    return "output: array expected";
                for (let i = 0; i < message.output.length; ++i)
                    if (!$util.isString(message.output[i]))
                        return "output: string[] expected";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.op_type != null && message.hasOwnProperty("op_type"))
                if (!$util.isString(message.op_type))
                    return "op_type: string expected";
            if (message.domain != null && message.hasOwnProperty("domain"))
                if (!$util.isString(message.domain))
                    return "domain: string expected";
            if (message.attribute != null && message.hasOwnProperty("attribute")) {
                if (!Array.isArray(message.attribute))
                    return "attribute: array expected";
                for (let i = 0; i < message.attribute.length; ++i) {
                    let error = $root.onnx.AttributeProto.verify(message.attribute[i]);
                    if (error)
                        return "attribute." + error;
                }
            }
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                if (!$util.isString(message.doc_string))
                    return "doc_string: string expected";
            return null;
        };

        /**
         * Creates a NodeProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.NodeProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.NodeProto} NodeProto
         */
        NodeProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.NodeProto)
                return object;
            let message = new $root.onnx.NodeProto();
            if (object.input) {
                if (!Array.isArray(object.input))
                    throw TypeError(".onnx.NodeProto.input: array expected");
                message.input = [];
                for (let i = 0; i < object.input.length; ++i)
                    message.input[i] = String(object.input[i]);
            }
            if (object.output) {
                if (!Array.isArray(object.output))
                    throw TypeError(".onnx.NodeProto.output: array expected");
                message.output = [];
                for (let i = 0; i < object.output.length; ++i)
                    message.output[i] = String(object.output[i]);
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.op_type != null)
                message.op_type = String(object.op_type);
            if (object.domain != null)
                message.domain = String(object.domain);
            if (object.attribute) {
                if (!Array.isArray(object.attribute))
                    throw TypeError(".onnx.NodeProto.attribute: array expected");
                message.attribute = [];
                for (let i = 0; i < object.attribute.length; ++i) {
                    if (typeof object.attribute[i] !== "object")
                        throw TypeError(".onnx.NodeProto.attribute: object expected");
                    message.attribute[i] = $root.onnx.AttributeProto.fromObject(object.attribute[i]);
                }
            }
            if (object.doc_string != null)
                message.doc_string = String(object.doc_string);
            return message;
        };

        /**
         * Creates a plain object from a NodeProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.NodeProto
         * @static
         * @param {onnx.NodeProto} message NodeProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.input = [];
                object.output = [];
                object.attribute = [];
            }
            if (options.defaults) {
                object.name = "";
                object.op_type = "";
                object.doc_string = "";
                object.domain = "";
            }
            if (message.input && message.input.length) {
                object.input = [];
                for (let j = 0; j < message.input.length; ++j)
                    object.input[j] = message.input[j];
            }
            if (message.output && message.output.length) {
                object.output = [];
                for (let j = 0; j < message.output.length; ++j)
                    object.output[j] = message.output[j];
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.op_type != null && message.hasOwnProperty("op_type"))
                object.op_type = message.op_type;
            if (message.attribute && message.attribute.length) {
                object.attribute = [];
                for (let j = 0; j < message.attribute.length; ++j)
                    object.attribute[j] = $root.onnx.AttributeProto.toObject(message.attribute[j], options);
            }
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                object.doc_string = message.doc_string;
            if (message.domain != null && message.hasOwnProperty("domain"))
                object.domain = message.domain;
            return object;
        };

        /**
         * Converts this NodeProto to JSON.
         * @function toJSON
         * @memberof onnx.NodeProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NodeProto;
    })();

    onnx.TrainingInfoProto = (function() {

        /**
         * Properties of a TrainingInfoProto.
         * @memberof onnx
         * @interface ITrainingInfoProto
         * @property {onnx.IGraphProto|null} [initialization] TrainingInfoProto initialization
         * @property {onnx.IGraphProto|null} [algorithm] TrainingInfoProto algorithm
         * @property {Array.<onnx.IStringStringEntryProto>|null} [initialization_binding] TrainingInfoProto initialization_binding
         * @property {Array.<onnx.IStringStringEntryProto>|null} [update_binding] TrainingInfoProto update_binding
         */

        /**
         * Constructs a new TrainingInfoProto.
         * @memberof onnx
         * @classdesc Represents a TrainingInfoProto.
         * @implements ITrainingInfoProto
         * @constructor
         * @param {onnx.ITrainingInfoProto=} [properties] Properties to set
         */
        function TrainingInfoProto(properties) {
            this.initialization_binding = [];
            this.update_binding = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TrainingInfoProto initialization.
         * @member {onnx.IGraphProto|null|undefined} initialization
         * @memberof onnx.TrainingInfoProto
         * @instance
         */
        TrainingInfoProto.prototype.initialization = null;

        /**
         * TrainingInfoProto algorithm.
         * @member {onnx.IGraphProto|null|undefined} algorithm
         * @memberof onnx.TrainingInfoProto
         * @instance
         */
        TrainingInfoProto.prototype.algorithm = null;

        /**
         * TrainingInfoProto initialization_binding.
         * @member {Array.<onnx.IStringStringEntryProto>} initialization_binding
         * @memberof onnx.TrainingInfoProto
         * @instance
         */
        TrainingInfoProto.prototype.initialization_binding = $util.emptyArray;

        /**
         * TrainingInfoProto update_binding.
         * @member {Array.<onnx.IStringStringEntryProto>} update_binding
         * @memberof onnx.TrainingInfoProto
         * @instance
         */
        TrainingInfoProto.prototype.update_binding = $util.emptyArray;

        /**
         * Creates a new TrainingInfoProto instance using the specified properties.
         * @function create
         * @memberof onnx.TrainingInfoProto
         * @static
         * @param {onnx.ITrainingInfoProto=} [properties] Properties to set
         * @returns {onnx.TrainingInfoProto} TrainingInfoProto instance
         */
        TrainingInfoProto.create = function create(properties) {
            return new TrainingInfoProto(properties);
        };

        /**
         * Encodes the specified TrainingInfoProto message. Does not implicitly {@link onnx.TrainingInfoProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.TrainingInfoProto
         * @static
         * @param {onnx.ITrainingInfoProto} message TrainingInfoProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TrainingInfoProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.initialization != null && Object.hasOwnProperty.call(message, "initialization"))
                $root.onnx.GraphProto.encode(message.initialization, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.algorithm != null && Object.hasOwnProperty.call(message, "algorithm"))
                $root.onnx.GraphProto.encode(message.algorithm, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.initialization_binding != null && message.initialization_binding.length)
                for (let i = 0; i < message.initialization_binding.length; ++i)
                    $root.onnx.StringStringEntryProto.encode(message.initialization_binding[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.update_binding != null && message.update_binding.length)
                for (let i = 0; i < message.update_binding.length; ++i)
                    $root.onnx.StringStringEntryProto.encode(message.update_binding[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TrainingInfoProto message, length delimited. Does not implicitly {@link onnx.TrainingInfoProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.TrainingInfoProto
         * @static
         * @param {onnx.ITrainingInfoProto} message TrainingInfoProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TrainingInfoProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TrainingInfoProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.TrainingInfoProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.TrainingInfoProto} TrainingInfoProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TrainingInfoProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.TrainingInfoProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.initialization = $root.onnx.GraphProto.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.algorithm = $root.onnx.GraphProto.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.initialization_binding && message.initialization_binding.length))
                        message.initialization_binding = [];
                    message.initialization_binding.push($root.onnx.StringStringEntryProto.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.update_binding && message.update_binding.length))
                        message.update_binding = [];
                    message.update_binding.push($root.onnx.StringStringEntryProto.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TrainingInfoProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.TrainingInfoProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.TrainingInfoProto} TrainingInfoProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TrainingInfoProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TrainingInfoProto message.
         * @function verify
         * @memberof onnx.TrainingInfoProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TrainingInfoProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.initialization != null && message.hasOwnProperty("initialization")) {
                let error = $root.onnx.GraphProto.verify(message.initialization);
                if (error)
                    return "initialization." + error;
            }
            if (message.algorithm != null && message.hasOwnProperty("algorithm")) {
                let error = $root.onnx.GraphProto.verify(message.algorithm);
                if (error)
                    return "algorithm." + error;
            }
            if (message.initialization_binding != null && message.hasOwnProperty("initialization_binding")) {
                if (!Array.isArray(message.initialization_binding))
                    return "initialization_binding: array expected";
                for (let i = 0; i < message.initialization_binding.length; ++i) {
                    let error = $root.onnx.StringStringEntryProto.verify(message.initialization_binding[i]);
                    if (error)
                        return "initialization_binding." + error;
                }
            }
            if (message.update_binding != null && message.hasOwnProperty("update_binding")) {
                if (!Array.isArray(message.update_binding))
                    return "update_binding: array expected";
                for (let i = 0; i < message.update_binding.length; ++i) {
                    let error = $root.onnx.StringStringEntryProto.verify(message.update_binding[i]);
                    if (error)
                        return "update_binding." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TrainingInfoProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.TrainingInfoProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.TrainingInfoProto} TrainingInfoProto
         */
        TrainingInfoProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.TrainingInfoProto)
                return object;
            let message = new $root.onnx.TrainingInfoProto();
            if (object.initialization != null) {
                if (typeof object.initialization !== "object")
                    throw TypeError(".onnx.TrainingInfoProto.initialization: object expected");
                message.initialization = $root.onnx.GraphProto.fromObject(object.initialization);
            }
            if (object.algorithm != null) {
                if (typeof object.algorithm !== "object")
                    throw TypeError(".onnx.TrainingInfoProto.algorithm: object expected");
                message.algorithm = $root.onnx.GraphProto.fromObject(object.algorithm);
            }
            if (object.initialization_binding) {
                if (!Array.isArray(object.initialization_binding))
                    throw TypeError(".onnx.TrainingInfoProto.initialization_binding: array expected");
                message.initialization_binding = [];
                for (let i = 0; i < object.initialization_binding.length; ++i) {
                    if (typeof object.initialization_binding[i] !== "object")
                        throw TypeError(".onnx.TrainingInfoProto.initialization_binding: object expected");
                    message.initialization_binding[i] = $root.onnx.StringStringEntryProto.fromObject(object.initialization_binding[i]);
                }
            }
            if (object.update_binding) {
                if (!Array.isArray(object.update_binding))
                    throw TypeError(".onnx.TrainingInfoProto.update_binding: array expected");
                message.update_binding = [];
                for (let i = 0; i < object.update_binding.length; ++i) {
                    if (typeof object.update_binding[i] !== "object")
                        throw TypeError(".onnx.TrainingInfoProto.update_binding: object expected");
                    message.update_binding[i] = $root.onnx.StringStringEntryProto.fromObject(object.update_binding[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TrainingInfoProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.TrainingInfoProto
         * @static
         * @param {onnx.TrainingInfoProto} message TrainingInfoProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TrainingInfoProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.initialization_binding = [];
                object.update_binding = [];
            }
            if (options.defaults) {
                object.initialization = null;
                object.algorithm = null;
            }
            if (message.initialization != null && message.hasOwnProperty("initialization"))
                object.initialization = $root.onnx.GraphProto.toObject(message.initialization, options);
            if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                object.algorithm = $root.onnx.GraphProto.toObject(message.algorithm, options);
            if (message.initialization_binding && message.initialization_binding.length) {
                object.initialization_binding = [];
                for (let j = 0; j < message.initialization_binding.length; ++j)
                    object.initialization_binding[j] = $root.onnx.StringStringEntryProto.toObject(message.initialization_binding[j], options);
            }
            if (message.update_binding && message.update_binding.length) {
                object.update_binding = [];
                for (let j = 0; j < message.update_binding.length; ++j)
                    object.update_binding[j] = $root.onnx.StringStringEntryProto.toObject(message.update_binding[j], options);
            }
            return object;
        };

        /**
         * Converts this TrainingInfoProto to JSON.
         * @function toJSON
         * @memberof onnx.TrainingInfoProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TrainingInfoProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TrainingInfoProto;
    })();

    onnx.ModelProto = (function() {

        /**
         * Properties of a ModelProto.
         * @memberof onnx
         * @interface IModelProto
         * @property {number|Long|null} [ir_version] ModelProto ir_version
         * @property {Array.<onnx.IOperatorSetIdProto>|null} [opset_import] ModelProto opset_import
         * @property {string|null} [producer_name] ModelProto producer_name
         * @property {string|null} [producer_version] ModelProto producer_version
         * @property {string|null} [domain] ModelProto domain
         * @property {number|Long|null} [model_version] ModelProto model_version
         * @property {string|null} [doc_string] ModelProto doc_string
         * @property {onnx.IGraphProto|null} [graph] ModelProto graph
         * @property {Array.<onnx.IStringStringEntryProto>|null} [metadata_props] ModelProto metadata_props
         * @property {Array.<onnx.ITrainingInfoProto>|null} [training_info] ModelProto training_info
         * @property {Array.<onnx.IFunctionProto>|null} [functions] ModelProto functions
         */

        /**
         * Constructs a new ModelProto.
         * @memberof onnx
         * @classdesc Represents a ModelProto.
         * @implements IModelProto
         * @constructor
         * @param {onnx.IModelProto=} [properties] Properties to set
         */
        function ModelProto(properties) {
            this.opset_import = [];
            this.metadata_props = [];
            this.training_info = [];
            this.functions = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModelProto ir_version.
         * @member {number|Long} ir_version
         * @memberof onnx.ModelProto
         * @instance
         */
        ModelProto.prototype.ir_version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ModelProto opset_import.
         * @member {Array.<onnx.IOperatorSetIdProto>} opset_import
         * @memberof onnx.ModelProto
         * @instance
         */
        ModelProto.prototype.opset_import = $util.emptyArray;

        /**
         * ModelProto producer_name.
         * @member {string} producer_name
         * @memberof onnx.ModelProto
         * @instance
         */
        ModelProto.prototype.producer_name = "";

        /**
         * ModelProto producer_version.
         * @member {string} producer_version
         * @memberof onnx.ModelProto
         * @instance
         */
        ModelProto.prototype.producer_version = "";

        /**
         * ModelProto domain.
         * @member {string} domain
         * @memberof onnx.ModelProto
         * @instance
         */
        ModelProto.prototype.domain = "";

        /**
         * ModelProto model_version.
         * @member {number|Long} model_version
         * @memberof onnx.ModelProto
         * @instance
         */
        ModelProto.prototype.model_version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ModelProto doc_string.
         * @member {string} doc_string
         * @memberof onnx.ModelProto
         * @instance
         */
        ModelProto.prototype.doc_string = "";

        /**
         * ModelProto graph.
         * @member {onnx.IGraphProto|null|undefined} graph
         * @memberof onnx.ModelProto
         * @instance
         */
        ModelProto.prototype.graph = null;

        /**
         * ModelProto metadata_props.
         * @member {Array.<onnx.IStringStringEntryProto>} metadata_props
         * @memberof onnx.ModelProto
         * @instance
         */
        ModelProto.prototype.metadata_props = $util.emptyArray;

        /**
         * ModelProto training_info.
         * @member {Array.<onnx.ITrainingInfoProto>} training_info
         * @memberof onnx.ModelProto
         * @instance
         */
        ModelProto.prototype.training_info = $util.emptyArray;

        /**
         * ModelProto functions.
         * @member {Array.<onnx.IFunctionProto>} functions
         * @memberof onnx.ModelProto
         * @instance
         */
        ModelProto.prototype.functions = $util.emptyArray;

        /**
         * Creates a new ModelProto instance using the specified properties.
         * @function create
         * @memberof onnx.ModelProto
         * @static
         * @param {onnx.IModelProto=} [properties] Properties to set
         * @returns {onnx.ModelProto} ModelProto instance
         */
        ModelProto.create = function create(properties) {
            return new ModelProto(properties);
        };

        /**
         * Encodes the specified ModelProto message. Does not implicitly {@link onnx.ModelProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.ModelProto
         * @static
         * @param {onnx.IModelProto} message ModelProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModelProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ir_version != null && Object.hasOwnProperty.call(message, "ir_version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.ir_version);
            if (message.producer_name != null && Object.hasOwnProperty.call(message, "producer_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.producer_name);
            if (message.producer_version != null && Object.hasOwnProperty.call(message, "producer_version"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.producer_version);
            if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.domain);
            if (message.model_version != null && Object.hasOwnProperty.call(message, "model_version"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.model_version);
            if (message.doc_string != null && Object.hasOwnProperty.call(message, "doc_string"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.doc_string);
            if (message.graph != null && Object.hasOwnProperty.call(message, "graph"))
                $root.onnx.GraphProto.encode(message.graph, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.opset_import != null && message.opset_import.length)
                for (let i = 0; i < message.opset_import.length; ++i)
                    $root.onnx.OperatorSetIdProto.encode(message.opset_import[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.metadata_props != null && message.metadata_props.length)
                for (let i = 0; i < message.metadata_props.length; ++i)
                    $root.onnx.StringStringEntryProto.encode(message.metadata_props[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.training_info != null && message.training_info.length)
                for (let i = 0; i < message.training_info.length; ++i)
                    $root.onnx.TrainingInfoProto.encode(message.training_info[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.functions != null && message.functions.length)
                for (let i = 0; i < message.functions.length; ++i)
                    $root.onnx.FunctionProto.encode(message.functions[i], writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ModelProto message, length delimited. Does not implicitly {@link onnx.ModelProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.ModelProto
         * @static
         * @param {onnx.IModelProto} message ModelProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModelProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModelProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.ModelProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.ModelProto} ModelProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModelProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.ModelProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ir_version = reader.int64();
                    break;
                case 8:
                    if (!(message.opset_import && message.opset_import.length))
                        message.opset_import = [];
                    message.opset_import.push($root.onnx.OperatorSetIdProto.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.producer_name = reader.string();
                    break;
                case 3:
                    message.producer_version = reader.string();
                    break;
                case 4:
                    message.domain = reader.string();
                    break;
                case 5:
                    message.model_version = reader.int64();
                    break;
                case 6:
                    message.doc_string = reader.string();
                    break;
                case 7:
                    message.graph = $root.onnx.GraphProto.decode(reader, reader.uint32());
                    break;
                case 14:
                    if (!(message.metadata_props && message.metadata_props.length))
                        message.metadata_props = [];
                    message.metadata_props.push($root.onnx.StringStringEntryProto.decode(reader, reader.uint32()));
                    break;
                case 20:
                    if (!(message.training_info && message.training_info.length))
                        message.training_info = [];
                    message.training_info.push($root.onnx.TrainingInfoProto.decode(reader, reader.uint32()));
                    break;
                case 25:
                    if (!(message.functions && message.functions.length))
                        message.functions = [];
                    message.functions.push($root.onnx.FunctionProto.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ModelProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.ModelProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.ModelProto} ModelProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModelProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModelProto message.
         * @function verify
         * @memberof onnx.ModelProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModelProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ir_version != null && message.hasOwnProperty("ir_version"))
                if (!$util.isInteger(message.ir_version) && !(message.ir_version && $util.isInteger(message.ir_version.low) && $util.isInteger(message.ir_version.high)))
                    return "ir_version: integer|Long expected";
            if (message.opset_import != null && message.hasOwnProperty("opset_import")) {
                if (!Array.isArray(message.opset_import))
                    return "opset_import: array expected";
                for (let i = 0; i < message.opset_import.length; ++i) {
                    let error = $root.onnx.OperatorSetIdProto.verify(message.opset_import[i]);
                    if (error)
                        return "opset_import." + error;
                }
            }
            if (message.producer_name != null && message.hasOwnProperty("producer_name"))
                if (!$util.isString(message.producer_name))
                    return "producer_name: string expected";
            if (message.producer_version != null && message.hasOwnProperty("producer_version"))
                if (!$util.isString(message.producer_version))
                    return "producer_version: string expected";
            if (message.domain != null && message.hasOwnProperty("domain"))
                if (!$util.isString(message.domain))
                    return "domain: string expected";
            if (message.model_version != null && message.hasOwnProperty("model_version"))
                if (!$util.isInteger(message.model_version) && !(message.model_version && $util.isInteger(message.model_version.low) && $util.isInteger(message.model_version.high)))
                    return "model_version: integer|Long expected";
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                if (!$util.isString(message.doc_string))
                    return "doc_string: string expected";
            if (message.graph != null && message.hasOwnProperty("graph")) {
                let error = $root.onnx.GraphProto.verify(message.graph);
                if (error)
                    return "graph." + error;
            }
            if (message.metadata_props != null && message.hasOwnProperty("metadata_props")) {
                if (!Array.isArray(message.metadata_props))
                    return "metadata_props: array expected";
                for (let i = 0; i < message.metadata_props.length; ++i) {
                    let error = $root.onnx.StringStringEntryProto.verify(message.metadata_props[i]);
                    if (error)
                        return "metadata_props." + error;
                }
            }
            if (message.training_info != null && message.hasOwnProperty("training_info")) {
                if (!Array.isArray(message.training_info))
                    return "training_info: array expected";
                for (let i = 0; i < message.training_info.length; ++i) {
                    let error = $root.onnx.TrainingInfoProto.verify(message.training_info[i]);
                    if (error)
                        return "training_info." + error;
                }
            }
            if (message.functions != null && message.hasOwnProperty("functions")) {
                if (!Array.isArray(message.functions))
                    return "functions: array expected";
                for (let i = 0; i < message.functions.length; ++i) {
                    let error = $root.onnx.FunctionProto.verify(message.functions[i]);
                    if (error)
                        return "functions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ModelProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.ModelProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.ModelProto} ModelProto
         */
        ModelProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.ModelProto)
                return object;
            let message = new $root.onnx.ModelProto();
            if (object.ir_version != null)
                if ($util.Long)
                    (message.ir_version = $util.Long.fromValue(object.ir_version)).unsigned = false;
                else if (typeof object.ir_version === "string")
                    message.ir_version = parseInt(object.ir_version, 10);
                else if (typeof object.ir_version === "number")
                    message.ir_version = object.ir_version;
                else if (typeof object.ir_version === "object")
                    message.ir_version = new $util.LongBits(object.ir_version.low >>> 0, object.ir_version.high >>> 0).toNumber();
            if (object.opset_import) {
                if (!Array.isArray(object.opset_import))
                    throw TypeError(".onnx.ModelProto.opset_import: array expected");
                message.opset_import = [];
                for (let i = 0; i < object.opset_import.length; ++i) {
                    if (typeof object.opset_import[i] !== "object")
                        throw TypeError(".onnx.ModelProto.opset_import: object expected");
                    message.opset_import[i] = $root.onnx.OperatorSetIdProto.fromObject(object.opset_import[i]);
                }
            }
            if (object.producer_name != null)
                message.producer_name = String(object.producer_name);
            if (object.producer_version != null)
                message.producer_version = String(object.producer_version);
            if (object.domain != null)
                message.domain = String(object.domain);
            if (object.model_version != null)
                if ($util.Long)
                    (message.model_version = $util.Long.fromValue(object.model_version)).unsigned = false;
                else if (typeof object.model_version === "string")
                    message.model_version = parseInt(object.model_version, 10);
                else if (typeof object.model_version === "number")
                    message.model_version = object.model_version;
                else if (typeof object.model_version === "object")
                    message.model_version = new $util.LongBits(object.model_version.low >>> 0, object.model_version.high >>> 0).toNumber();
            if (object.doc_string != null)
                message.doc_string = String(object.doc_string);
            if (object.graph != null) {
                if (typeof object.graph !== "object")
                    throw TypeError(".onnx.ModelProto.graph: object expected");
                message.graph = $root.onnx.GraphProto.fromObject(object.graph);
            }
            if (object.metadata_props) {
                if (!Array.isArray(object.metadata_props))
                    throw TypeError(".onnx.ModelProto.metadata_props: array expected");
                message.metadata_props = [];
                for (let i = 0; i < object.metadata_props.length; ++i) {
                    if (typeof object.metadata_props[i] !== "object")
                        throw TypeError(".onnx.ModelProto.metadata_props: object expected");
                    message.metadata_props[i] = $root.onnx.StringStringEntryProto.fromObject(object.metadata_props[i]);
                }
            }
            if (object.training_info) {
                if (!Array.isArray(object.training_info))
                    throw TypeError(".onnx.ModelProto.training_info: array expected");
                message.training_info = [];
                for (let i = 0; i < object.training_info.length; ++i) {
                    if (typeof object.training_info[i] !== "object")
                        throw TypeError(".onnx.ModelProto.training_info: object expected");
                    message.training_info[i] = $root.onnx.TrainingInfoProto.fromObject(object.training_info[i]);
                }
            }
            if (object.functions) {
                if (!Array.isArray(object.functions))
                    throw TypeError(".onnx.ModelProto.functions: array expected");
                message.functions = [];
                for (let i = 0; i < object.functions.length; ++i) {
                    if (typeof object.functions[i] !== "object")
                        throw TypeError(".onnx.ModelProto.functions: object expected");
                    message.functions[i] = $root.onnx.FunctionProto.fromObject(object.functions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ModelProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.ModelProto
         * @static
         * @param {onnx.ModelProto} message ModelProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModelProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.opset_import = [];
                object.metadata_props = [];
                object.training_info = [];
                object.functions = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ir_version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ir_version = options.longs === String ? "0" : 0;
                object.producer_name = "";
                object.producer_version = "";
                object.domain = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.model_version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.model_version = options.longs === String ? "0" : 0;
                object.doc_string = "";
                object.graph = null;
            }
            if (message.ir_version != null && message.hasOwnProperty("ir_version"))
                if (typeof message.ir_version === "number")
                    object.ir_version = options.longs === String ? String(message.ir_version) : message.ir_version;
                else
                    object.ir_version = options.longs === String ? $util.Long.prototype.toString.call(message.ir_version) : options.longs === Number ? new $util.LongBits(message.ir_version.low >>> 0, message.ir_version.high >>> 0).toNumber() : message.ir_version;
            if (message.producer_name != null && message.hasOwnProperty("producer_name"))
                object.producer_name = message.producer_name;
            if (message.producer_version != null && message.hasOwnProperty("producer_version"))
                object.producer_version = message.producer_version;
            if (message.domain != null && message.hasOwnProperty("domain"))
                object.domain = message.domain;
            if (message.model_version != null && message.hasOwnProperty("model_version"))
                if (typeof message.model_version === "number")
                    object.model_version = options.longs === String ? String(message.model_version) : message.model_version;
                else
                    object.model_version = options.longs === String ? $util.Long.prototype.toString.call(message.model_version) : options.longs === Number ? new $util.LongBits(message.model_version.low >>> 0, message.model_version.high >>> 0).toNumber() : message.model_version;
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                object.doc_string = message.doc_string;
            if (message.graph != null && message.hasOwnProperty("graph"))
                object.graph = $root.onnx.GraphProto.toObject(message.graph, options);
            if (message.opset_import && message.opset_import.length) {
                object.opset_import = [];
                for (let j = 0; j < message.opset_import.length; ++j)
                    object.opset_import[j] = $root.onnx.OperatorSetIdProto.toObject(message.opset_import[j], options);
            }
            if (message.metadata_props && message.metadata_props.length) {
                object.metadata_props = [];
                for (let j = 0; j < message.metadata_props.length; ++j)
                    object.metadata_props[j] = $root.onnx.StringStringEntryProto.toObject(message.metadata_props[j], options);
            }
            if (message.training_info && message.training_info.length) {
                object.training_info = [];
                for (let j = 0; j < message.training_info.length; ++j)
                    object.training_info[j] = $root.onnx.TrainingInfoProto.toObject(message.training_info[j], options);
            }
            if (message.functions && message.functions.length) {
                object.functions = [];
                for (let j = 0; j < message.functions.length; ++j)
                    object.functions[j] = $root.onnx.FunctionProto.toObject(message.functions[j], options);
            }
            return object;
        };

        /**
         * Converts this ModelProto to JSON.
         * @function toJSON
         * @memberof onnx.ModelProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModelProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModelProto;
    })();

    onnx.StringStringEntryProto = (function() {

        /**
         * Properties of a StringStringEntryProto.
         * @memberof onnx
         * @interface IStringStringEntryProto
         * @property {string|null} [key] StringStringEntryProto key
         * @property {string|null} [value] StringStringEntryProto value
         */

        /**
         * Constructs a new StringStringEntryProto.
         * @memberof onnx
         * @classdesc Represents a StringStringEntryProto.
         * @implements IStringStringEntryProto
         * @constructor
         * @param {onnx.IStringStringEntryProto=} [properties] Properties to set
         */
        function StringStringEntryProto(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StringStringEntryProto key.
         * @member {string} key
         * @memberof onnx.StringStringEntryProto
         * @instance
         */
        StringStringEntryProto.prototype.key = "";

        /**
         * StringStringEntryProto value.
         * @member {string} value
         * @memberof onnx.StringStringEntryProto
         * @instance
         */
        StringStringEntryProto.prototype.value = "";

        /**
         * Creates a new StringStringEntryProto instance using the specified properties.
         * @function create
         * @memberof onnx.StringStringEntryProto
         * @static
         * @param {onnx.IStringStringEntryProto=} [properties] Properties to set
         * @returns {onnx.StringStringEntryProto} StringStringEntryProto instance
         */
        StringStringEntryProto.create = function create(properties) {
            return new StringStringEntryProto(properties);
        };

        /**
         * Encodes the specified StringStringEntryProto message. Does not implicitly {@link onnx.StringStringEntryProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.StringStringEntryProto
         * @static
         * @param {onnx.IStringStringEntryProto} message StringStringEntryProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringStringEntryProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified StringStringEntryProto message, length delimited. Does not implicitly {@link onnx.StringStringEntryProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.StringStringEntryProto
         * @static
         * @param {onnx.IStringStringEntryProto} message StringStringEntryProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringStringEntryProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StringStringEntryProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.StringStringEntryProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.StringStringEntryProto} StringStringEntryProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringStringEntryProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.StringStringEntryProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StringStringEntryProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.StringStringEntryProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.StringStringEntryProto} StringStringEntryProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringStringEntryProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StringStringEntryProto message.
         * @function verify
         * @memberof onnx.StringStringEntryProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StringStringEntryProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a StringStringEntryProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.StringStringEntryProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.StringStringEntryProto} StringStringEntryProto
         */
        StringStringEntryProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.StringStringEntryProto)
                return object;
            let message = new $root.onnx.StringStringEntryProto();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a StringStringEntryProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.StringStringEntryProto
         * @static
         * @param {onnx.StringStringEntryProto} message StringStringEntryProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StringStringEntryProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.key = "";
                object.value = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this StringStringEntryProto to JSON.
         * @function toJSON
         * @memberof onnx.StringStringEntryProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StringStringEntryProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StringStringEntryProto;
    })();

    onnx.TensorAnnotation = (function() {

        /**
         * Properties of a TensorAnnotation.
         * @memberof onnx
         * @interface ITensorAnnotation
         * @property {string|null} [tensor_name] TensorAnnotation tensor_name
         * @property {Array.<onnx.IStringStringEntryProto>|null} [quant_parameter_tensor_names] TensorAnnotation quant_parameter_tensor_names
         */

        /**
         * Constructs a new TensorAnnotation.
         * @memberof onnx
         * @classdesc Represents a TensorAnnotation.
         * @implements ITensorAnnotation
         * @constructor
         * @param {onnx.ITensorAnnotation=} [properties] Properties to set
         */
        function TensorAnnotation(properties) {
            this.quant_parameter_tensor_names = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TensorAnnotation tensor_name.
         * @member {string} tensor_name
         * @memberof onnx.TensorAnnotation
         * @instance
         */
        TensorAnnotation.prototype.tensor_name = "";

        /**
         * TensorAnnotation quant_parameter_tensor_names.
         * @member {Array.<onnx.IStringStringEntryProto>} quant_parameter_tensor_names
         * @memberof onnx.TensorAnnotation
         * @instance
         */
        TensorAnnotation.prototype.quant_parameter_tensor_names = $util.emptyArray;

        /**
         * Creates a new TensorAnnotation instance using the specified properties.
         * @function create
         * @memberof onnx.TensorAnnotation
         * @static
         * @param {onnx.ITensorAnnotation=} [properties] Properties to set
         * @returns {onnx.TensorAnnotation} TensorAnnotation instance
         */
        TensorAnnotation.create = function create(properties) {
            return new TensorAnnotation(properties);
        };

        /**
         * Encodes the specified TensorAnnotation message. Does not implicitly {@link onnx.TensorAnnotation.verify|verify} messages.
         * @function encode
         * @memberof onnx.TensorAnnotation
         * @static
         * @param {onnx.ITensorAnnotation} message TensorAnnotation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TensorAnnotation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tensor_name != null && Object.hasOwnProperty.call(message, "tensor_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tensor_name);
            if (message.quant_parameter_tensor_names != null && message.quant_parameter_tensor_names.length)
                for (let i = 0; i < message.quant_parameter_tensor_names.length; ++i)
                    $root.onnx.StringStringEntryProto.encode(message.quant_parameter_tensor_names[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TensorAnnotation message, length delimited. Does not implicitly {@link onnx.TensorAnnotation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.TensorAnnotation
         * @static
         * @param {onnx.ITensorAnnotation} message TensorAnnotation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TensorAnnotation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TensorAnnotation message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.TensorAnnotation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.TensorAnnotation} TensorAnnotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TensorAnnotation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.TensorAnnotation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tensor_name = reader.string();
                    break;
                case 2:
                    if (!(message.quant_parameter_tensor_names && message.quant_parameter_tensor_names.length))
                        message.quant_parameter_tensor_names = [];
                    message.quant_parameter_tensor_names.push($root.onnx.StringStringEntryProto.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TensorAnnotation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.TensorAnnotation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.TensorAnnotation} TensorAnnotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TensorAnnotation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TensorAnnotation message.
         * @function verify
         * @memberof onnx.TensorAnnotation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TensorAnnotation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tensor_name != null && message.hasOwnProperty("tensor_name"))
                if (!$util.isString(message.tensor_name))
                    return "tensor_name: string expected";
            if (message.quant_parameter_tensor_names != null && message.hasOwnProperty("quant_parameter_tensor_names")) {
                if (!Array.isArray(message.quant_parameter_tensor_names))
                    return "quant_parameter_tensor_names: array expected";
                for (let i = 0; i < message.quant_parameter_tensor_names.length; ++i) {
                    let error = $root.onnx.StringStringEntryProto.verify(message.quant_parameter_tensor_names[i]);
                    if (error)
                        return "quant_parameter_tensor_names." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TensorAnnotation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.TensorAnnotation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.TensorAnnotation} TensorAnnotation
         */
        TensorAnnotation.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.TensorAnnotation)
                return object;
            let message = new $root.onnx.TensorAnnotation();
            if (object.tensor_name != null)
                message.tensor_name = String(object.tensor_name);
            if (object.quant_parameter_tensor_names) {
                if (!Array.isArray(object.quant_parameter_tensor_names))
                    throw TypeError(".onnx.TensorAnnotation.quant_parameter_tensor_names: array expected");
                message.quant_parameter_tensor_names = [];
                for (let i = 0; i < object.quant_parameter_tensor_names.length; ++i) {
                    if (typeof object.quant_parameter_tensor_names[i] !== "object")
                        throw TypeError(".onnx.TensorAnnotation.quant_parameter_tensor_names: object expected");
                    message.quant_parameter_tensor_names[i] = $root.onnx.StringStringEntryProto.fromObject(object.quant_parameter_tensor_names[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TensorAnnotation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.TensorAnnotation
         * @static
         * @param {onnx.TensorAnnotation} message TensorAnnotation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TensorAnnotation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.quant_parameter_tensor_names = [];
            if (options.defaults)
                object.tensor_name = "";
            if (message.tensor_name != null && message.hasOwnProperty("tensor_name"))
                object.tensor_name = message.tensor_name;
            if (message.quant_parameter_tensor_names && message.quant_parameter_tensor_names.length) {
                object.quant_parameter_tensor_names = [];
                for (let j = 0; j < message.quant_parameter_tensor_names.length; ++j)
                    object.quant_parameter_tensor_names[j] = $root.onnx.StringStringEntryProto.toObject(message.quant_parameter_tensor_names[j], options);
            }
            return object;
        };

        /**
         * Converts this TensorAnnotation to JSON.
         * @function toJSON
         * @memberof onnx.TensorAnnotation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TensorAnnotation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TensorAnnotation;
    })();

    onnx.GraphProto = (function() {

        /**
         * Properties of a GraphProto.
         * @memberof onnx
         * @interface IGraphProto
         * @property {Array.<onnx.INodeProto>|null} [node] GraphProto node
         * @property {string|null} [name] GraphProto name
         * @property {Array.<onnx.ITensorProto>|null} [initializer] GraphProto initializer
         * @property {Array.<onnx.ISparseTensorProto>|null} [sparse_initializer] GraphProto sparse_initializer
         * @property {string|null} [doc_string] GraphProto doc_string
         * @property {Array.<onnx.IValueInfoProto>|null} [input] GraphProto input
         * @property {Array.<onnx.IValueInfoProto>|null} [output] GraphProto output
         * @property {Array.<onnx.IValueInfoProto>|null} [value_info] GraphProto value_info
         * @property {Array.<onnx.ITensorAnnotation>|null} [quantization_annotation] GraphProto quantization_annotation
         */

        /**
         * Constructs a new GraphProto.
         * @memberof onnx
         * @classdesc Represents a GraphProto.
         * @implements IGraphProto
         * @constructor
         * @param {onnx.IGraphProto=} [properties] Properties to set
         */
        function GraphProto(properties) {
            this.node = [];
            this.initializer = [];
            this.sparse_initializer = [];
            this.input = [];
            this.output = [];
            this.value_info = [];
            this.quantization_annotation = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GraphProto node.
         * @member {Array.<onnx.INodeProto>} node
         * @memberof onnx.GraphProto
         * @instance
         */
        GraphProto.prototype.node = $util.emptyArray;

        /**
         * GraphProto name.
         * @member {string} name
         * @memberof onnx.GraphProto
         * @instance
         */
        GraphProto.prototype.name = "";

        /**
         * GraphProto initializer.
         * @member {Array.<onnx.ITensorProto>} initializer
         * @memberof onnx.GraphProto
         * @instance
         */
        GraphProto.prototype.initializer = $util.emptyArray;

        /**
         * GraphProto sparse_initializer.
         * @member {Array.<onnx.ISparseTensorProto>} sparse_initializer
         * @memberof onnx.GraphProto
         * @instance
         */
        GraphProto.prototype.sparse_initializer = $util.emptyArray;

        /**
         * GraphProto doc_string.
         * @member {string} doc_string
         * @memberof onnx.GraphProto
         * @instance
         */
        GraphProto.prototype.doc_string = "";

        /**
         * GraphProto input.
         * @member {Array.<onnx.IValueInfoProto>} input
         * @memberof onnx.GraphProto
         * @instance
         */
        GraphProto.prototype.input = $util.emptyArray;

        /**
         * GraphProto output.
         * @member {Array.<onnx.IValueInfoProto>} output
         * @memberof onnx.GraphProto
         * @instance
         */
        GraphProto.prototype.output = $util.emptyArray;

        /**
         * GraphProto value_info.
         * @member {Array.<onnx.IValueInfoProto>} value_info
         * @memberof onnx.GraphProto
         * @instance
         */
        GraphProto.prototype.value_info = $util.emptyArray;

        /**
         * GraphProto quantization_annotation.
         * @member {Array.<onnx.ITensorAnnotation>} quantization_annotation
         * @memberof onnx.GraphProto
         * @instance
         */
        GraphProto.prototype.quantization_annotation = $util.emptyArray;

        /**
         * Creates a new GraphProto instance using the specified properties.
         * @function create
         * @memberof onnx.GraphProto
         * @static
         * @param {onnx.IGraphProto=} [properties] Properties to set
         * @returns {onnx.GraphProto} GraphProto instance
         */
        GraphProto.create = function create(properties) {
            return new GraphProto(properties);
        };

        /**
         * Encodes the specified GraphProto message. Does not implicitly {@link onnx.GraphProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.GraphProto
         * @static
         * @param {onnx.IGraphProto} message GraphProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GraphProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.node != null && message.node.length)
                for (let i = 0; i < message.node.length; ++i)
                    $root.onnx.NodeProto.encode(message.node[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.initializer != null && message.initializer.length)
                for (let i = 0; i < message.initializer.length; ++i)
                    $root.onnx.TensorProto.encode(message.initializer[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.doc_string != null && Object.hasOwnProperty.call(message, "doc_string"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.doc_string);
            if (message.input != null && message.input.length)
                for (let i = 0; i < message.input.length; ++i)
                    $root.onnx.ValueInfoProto.encode(message.input[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.output != null && message.output.length)
                for (let i = 0; i < message.output.length; ++i)
                    $root.onnx.ValueInfoProto.encode(message.output[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.value_info != null && message.value_info.length)
                for (let i = 0; i < message.value_info.length; ++i)
                    $root.onnx.ValueInfoProto.encode(message.value_info[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.quantization_annotation != null && message.quantization_annotation.length)
                for (let i = 0; i < message.quantization_annotation.length; ++i)
                    $root.onnx.TensorAnnotation.encode(message.quantization_annotation[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.sparse_initializer != null && message.sparse_initializer.length)
                for (let i = 0; i < message.sparse_initializer.length; ++i)
                    $root.onnx.SparseTensorProto.encode(message.sparse_initializer[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GraphProto message, length delimited. Does not implicitly {@link onnx.GraphProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.GraphProto
         * @static
         * @param {onnx.IGraphProto} message GraphProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GraphProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GraphProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.GraphProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.GraphProto} GraphProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GraphProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.GraphProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.node && message.node.length))
                        message.node = [];
                    message.node.push($root.onnx.NodeProto.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 5:
                    if (!(message.initializer && message.initializer.length))
                        message.initializer = [];
                    message.initializer.push($root.onnx.TensorProto.decode(reader, reader.uint32()));
                    break;
                case 15:
                    if (!(message.sparse_initializer && message.sparse_initializer.length))
                        message.sparse_initializer = [];
                    message.sparse_initializer.push($root.onnx.SparseTensorProto.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.doc_string = reader.string();
                    break;
                case 11:
                    if (!(message.input && message.input.length))
                        message.input = [];
                    message.input.push($root.onnx.ValueInfoProto.decode(reader, reader.uint32()));
                    break;
                case 12:
                    if (!(message.output && message.output.length))
                        message.output = [];
                    message.output.push($root.onnx.ValueInfoProto.decode(reader, reader.uint32()));
                    break;
                case 13:
                    if (!(message.value_info && message.value_info.length))
                        message.value_info = [];
                    message.value_info.push($root.onnx.ValueInfoProto.decode(reader, reader.uint32()));
                    break;
                case 14:
                    if (!(message.quantization_annotation && message.quantization_annotation.length))
                        message.quantization_annotation = [];
                    message.quantization_annotation.push($root.onnx.TensorAnnotation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GraphProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.GraphProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.GraphProto} GraphProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GraphProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GraphProto message.
         * @function verify
         * @memberof onnx.GraphProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GraphProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.node != null && message.hasOwnProperty("node")) {
                if (!Array.isArray(message.node))
                    return "node: array expected";
                for (let i = 0; i < message.node.length; ++i) {
                    let error = $root.onnx.NodeProto.verify(message.node[i]);
                    if (error)
                        return "node." + error;
                }
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.initializer != null && message.hasOwnProperty("initializer")) {
                if (!Array.isArray(message.initializer))
                    return "initializer: array expected";
                for (let i = 0; i < message.initializer.length; ++i) {
                    let error = $root.onnx.TensorProto.verify(message.initializer[i]);
                    if (error)
                        return "initializer." + error;
                }
            }
            if (message.sparse_initializer != null && message.hasOwnProperty("sparse_initializer")) {
                if (!Array.isArray(message.sparse_initializer))
                    return "sparse_initializer: array expected";
                for (let i = 0; i < message.sparse_initializer.length; ++i) {
                    let error = $root.onnx.SparseTensorProto.verify(message.sparse_initializer[i]);
                    if (error)
                        return "sparse_initializer." + error;
                }
            }
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                if (!$util.isString(message.doc_string))
                    return "doc_string: string expected";
            if (message.input != null && message.hasOwnProperty("input")) {
                if (!Array.isArray(message.input))
                    return "input: array expected";
                for (let i = 0; i < message.input.length; ++i) {
                    let error = $root.onnx.ValueInfoProto.verify(message.input[i]);
                    if (error)
                        return "input." + error;
                }
            }
            if (message.output != null && message.hasOwnProperty("output")) {
                if (!Array.isArray(message.output))
                    return "output: array expected";
                for (let i = 0; i < message.output.length; ++i) {
                    let error = $root.onnx.ValueInfoProto.verify(message.output[i]);
                    if (error)
                        return "output." + error;
                }
            }
            if (message.value_info != null && message.hasOwnProperty("value_info")) {
                if (!Array.isArray(message.value_info))
                    return "value_info: array expected";
                for (let i = 0; i < message.value_info.length; ++i) {
                    let error = $root.onnx.ValueInfoProto.verify(message.value_info[i]);
                    if (error)
                        return "value_info." + error;
                }
            }
            if (message.quantization_annotation != null && message.hasOwnProperty("quantization_annotation")) {
                if (!Array.isArray(message.quantization_annotation))
                    return "quantization_annotation: array expected";
                for (let i = 0; i < message.quantization_annotation.length; ++i) {
                    let error = $root.onnx.TensorAnnotation.verify(message.quantization_annotation[i]);
                    if (error)
                        return "quantization_annotation." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GraphProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.GraphProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.GraphProto} GraphProto
         */
        GraphProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.GraphProto)
                return object;
            let message = new $root.onnx.GraphProto();
            if (object.node) {
                if (!Array.isArray(object.node))
                    throw TypeError(".onnx.GraphProto.node: array expected");
                message.node = [];
                for (let i = 0; i < object.node.length; ++i) {
                    if (typeof object.node[i] !== "object")
                        throw TypeError(".onnx.GraphProto.node: object expected");
                    message.node[i] = $root.onnx.NodeProto.fromObject(object.node[i]);
                }
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.initializer) {
                if (!Array.isArray(object.initializer))
                    throw TypeError(".onnx.GraphProto.initializer: array expected");
                message.initializer = [];
                for (let i = 0; i < object.initializer.length; ++i) {
                    if (typeof object.initializer[i] !== "object")
                        throw TypeError(".onnx.GraphProto.initializer: object expected");
                    message.initializer[i] = $root.onnx.TensorProto.fromObject(object.initializer[i]);
                }
            }
            if (object.sparse_initializer) {
                if (!Array.isArray(object.sparse_initializer))
                    throw TypeError(".onnx.GraphProto.sparse_initializer: array expected");
                message.sparse_initializer = [];
                for (let i = 0; i < object.sparse_initializer.length; ++i) {
                    if (typeof object.sparse_initializer[i] !== "object")
                        throw TypeError(".onnx.GraphProto.sparse_initializer: object expected");
                    message.sparse_initializer[i] = $root.onnx.SparseTensorProto.fromObject(object.sparse_initializer[i]);
                }
            }
            if (object.doc_string != null)
                message.doc_string = String(object.doc_string);
            if (object.input) {
                if (!Array.isArray(object.input))
                    throw TypeError(".onnx.GraphProto.input: array expected");
                message.input = [];
                for (let i = 0; i < object.input.length; ++i) {
                    if (typeof object.input[i] !== "object")
                        throw TypeError(".onnx.GraphProto.input: object expected");
                    message.input[i] = $root.onnx.ValueInfoProto.fromObject(object.input[i]);
                }
            }
            if (object.output) {
                if (!Array.isArray(object.output))
                    throw TypeError(".onnx.GraphProto.output: array expected");
                message.output = [];
                for (let i = 0; i < object.output.length; ++i) {
                    if (typeof object.output[i] !== "object")
                        throw TypeError(".onnx.GraphProto.output: object expected");
                    message.output[i] = $root.onnx.ValueInfoProto.fromObject(object.output[i]);
                }
            }
            if (object.value_info) {
                if (!Array.isArray(object.value_info))
                    throw TypeError(".onnx.GraphProto.value_info: array expected");
                message.value_info = [];
                for (let i = 0; i < object.value_info.length; ++i) {
                    if (typeof object.value_info[i] !== "object")
                        throw TypeError(".onnx.GraphProto.value_info: object expected");
                    message.value_info[i] = $root.onnx.ValueInfoProto.fromObject(object.value_info[i]);
                }
            }
            if (object.quantization_annotation) {
                if (!Array.isArray(object.quantization_annotation))
                    throw TypeError(".onnx.GraphProto.quantization_annotation: array expected");
                message.quantization_annotation = [];
                for (let i = 0; i < object.quantization_annotation.length; ++i) {
                    if (typeof object.quantization_annotation[i] !== "object")
                        throw TypeError(".onnx.GraphProto.quantization_annotation: object expected");
                    message.quantization_annotation[i] = $root.onnx.TensorAnnotation.fromObject(object.quantization_annotation[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GraphProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.GraphProto
         * @static
         * @param {onnx.GraphProto} message GraphProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GraphProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.node = [];
                object.initializer = [];
                object.input = [];
                object.output = [];
                object.value_info = [];
                object.quantization_annotation = [];
                object.sparse_initializer = [];
            }
            if (options.defaults) {
                object.name = "";
                object.doc_string = "";
            }
            if (message.node && message.node.length) {
                object.node = [];
                for (let j = 0; j < message.node.length; ++j)
                    object.node[j] = $root.onnx.NodeProto.toObject(message.node[j], options);
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.initializer && message.initializer.length) {
                object.initializer = [];
                for (let j = 0; j < message.initializer.length; ++j)
                    object.initializer[j] = $root.onnx.TensorProto.toObject(message.initializer[j], options);
            }
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                object.doc_string = message.doc_string;
            if (message.input && message.input.length) {
                object.input = [];
                for (let j = 0; j < message.input.length; ++j)
                    object.input[j] = $root.onnx.ValueInfoProto.toObject(message.input[j], options);
            }
            if (message.output && message.output.length) {
                object.output = [];
                for (let j = 0; j < message.output.length; ++j)
                    object.output[j] = $root.onnx.ValueInfoProto.toObject(message.output[j], options);
            }
            if (message.value_info && message.value_info.length) {
                object.value_info = [];
                for (let j = 0; j < message.value_info.length; ++j)
                    object.value_info[j] = $root.onnx.ValueInfoProto.toObject(message.value_info[j], options);
            }
            if (message.quantization_annotation && message.quantization_annotation.length) {
                object.quantization_annotation = [];
                for (let j = 0; j < message.quantization_annotation.length; ++j)
                    object.quantization_annotation[j] = $root.onnx.TensorAnnotation.toObject(message.quantization_annotation[j], options);
            }
            if (message.sparse_initializer && message.sparse_initializer.length) {
                object.sparse_initializer = [];
                for (let j = 0; j < message.sparse_initializer.length; ++j)
                    object.sparse_initializer[j] = $root.onnx.SparseTensorProto.toObject(message.sparse_initializer[j], options);
            }
            return object;
        };

        /**
         * Converts this GraphProto to JSON.
         * @function toJSON
         * @memberof onnx.GraphProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GraphProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GraphProto;
    })();

    onnx.TensorProto = (function() {

        /**
         * Properties of a TensorProto.
         * @memberof onnx
         * @interface ITensorProto
         * @property {Array.<number|Long>|null} [dims] TensorProto dims
         * @property {number|null} [data_type] TensorProto data_type
         * @property {onnx.TensorProto.ISegment|null} [segment] TensorProto segment
         * @property {Array.<number>|null} [float_data] TensorProto float_data
         * @property {Array.<number>|null} [int32_data] TensorProto int32_data
         * @property {Array.<Uint8Array>|null} [string_data] TensorProto string_data
         * @property {Array.<number|Long>|null} [int64_data] TensorProto int64_data
         * @property {string|null} [name] TensorProto name
         * @property {string|null} [doc_string] TensorProto doc_string
         * @property {Uint8Array|null} [raw_data] TensorProto raw_data
         * @property {Array.<onnx.IStringStringEntryProto>|null} [external_data] TensorProto external_data
         * @property {onnx.TensorProto.DataLocation|null} [data_location] TensorProto data_location
         * @property {Array.<number>|null} [double_data] TensorProto double_data
         * @property {Array.<number|Long>|null} [uint64_data] TensorProto uint64_data
         */

        /**
         * Constructs a new TensorProto.
         * @memberof onnx
         * @classdesc Represents a TensorProto.
         * @implements ITensorProto
         * @constructor
         * @param {onnx.ITensorProto=} [properties] Properties to set
         */
        function TensorProto(properties) {
            this.dims = [];
            this.float_data = [];
            this.int32_data = [];
            this.string_data = [];
            this.int64_data = [];
            this.external_data = [];
            this.double_data = [];
            this.uint64_data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TensorProto dims.
         * @member {Array.<number|Long>} dims
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.dims = $util.emptyArray;

        /**
         * TensorProto data_type.
         * @member {number} data_type
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.data_type = 0;

        /**
         * TensorProto segment.
         * @member {onnx.TensorProto.ISegment|null|undefined} segment
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.segment = null;

        /**
         * TensorProto float_data.
         * @member {Array.<number>} float_data
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.float_data = $util.emptyArray;

        /**
         * TensorProto int32_data.
         * @member {Array.<number>} int32_data
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.int32_data = $util.emptyArray;

        /**
         * TensorProto string_data.
         * @member {Array.<Uint8Array>} string_data
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.string_data = $util.emptyArray;

        /**
         * TensorProto int64_data.
         * @member {Array.<number|Long>} int64_data
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.int64_data = $util.emptyArray;

        /**
         * TensorProto name.
         * @member {string} name
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.name = "";

        /**
         * TensorProto doc_string.
         * @member {string} doc_string
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.doc_string = "";

        /**
         * TensorProto raw_data.
         * @member {Uint8Array} raw_data
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.raw_data = $util.newBuffer([]);

        /**
         * TensorProto external_data.
         * @member {Array.<onnx.IStringStringEntryProto>} external_data
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.external_data = $util.emptyArray;

        /**
         * TensorProto data_location.
         * @member {onnx.TensorProto.DataLocation} data_location
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.data_location = 0;

        /**
         * TensorProto double_data.
         * @member {Array.<number>} double_data
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.double_data = $util.emptyArray;

        /**
         * TensorProto uint64_data.
         * @member {Array.<number|Long>} uint64_data
         * @memberof onnx.TensorProto
         * @instance
         */
        TensorProto.prototype.uint64_data = $util.emptyArray;

        /**
         * Creates a new TensorProto instance using the specified properties.
         * @function create
         * @memberof onnx.TensorProto
         * @static
         * @param {onnx.ITensorProto=} [properties] Properties to set
         * @returns {onnx.TensorProto} TensorProto instance
         */
        TensorProto.create = function create(properties) {
            return new TensorProto(properties);
        };

        /**
         * Encodes the specified TensorProto message. Does not implicitly {@link onnx.TensorProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.TensorProto
         * @static
         * @param {onnx.ITensorProto} message TensorProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TensorProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dims != null && message.dims.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.dims.length; ++i)
                    writer.int64(message.dims[i]);
                writer.ldelim();
            }
            if (message.data_type != null && Object.hasOwnProperty.call(message, "data_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.data_type);
            if (message.segment != null && Object.hasOwnProperty.call(message, "segment"))
                $root.onnx.TensorProto.Segment.encode(message.segment, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.float_data != null && message.float_data.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (let i = 0; i < message.float_data.length; ++i)
                    writer.float(message.float_data[i]);
                writer.ldelim();
            }
            if (message.int32_data != null && message.int32_data.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.int32_data.length; ++i)
                    writer.int32(message.int32_data[i]);
                writer.ldelim();
            }
            if (message.string_data != null && message.string_data.length)
                for (let i = 0; i < message.string_data.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.string_data[i]);
            if (message.int64_data != null && message.int64_data.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (let i = 0; i < message.int64_data.length; ++i)
                    writer.int64(message.int64_data[i]);
                writer.ldelim();
            }
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.name);
            if (message.raw_data != null && Object.hasOwnProperty.call(message, "raw_data"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.raw_data);
            if (message.double_data != null && message.double_data.length) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork();
                for (let i = 0; i < message.double_data.length; ++i)
                    writer.double(message.double_data[i]);
                writer.ldelim();
            }
            if (message.uint64_data != null && message.uint64_data.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (let i = 0; i < message.uint64_data.length; ++i)
                    writer.uint64(message.uint64_data[i]);
                writer.ldelim();
            }
            if (message.doc_string != null && Object.hasOwnProperty.call(message, "doc_string"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.doc_string);
            if (message.external_data != null && message.external_data.length)
                for (let i = 0; i < message.external_data.length; ++i)
                    $root.onnx.StringStringEntryProto.encode(message.external_data[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.data_location != null && Object.hasOwnProperty.call(message, "data_location"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.data_location);
            return writer;
        };

        /**
         * Encodes the specified TensorProto message, length delimited. Does not implicitly {@link onnx.TensorProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.TensorProto
         * @static
         * @param {onnx.ITensorProto} message TensorProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TensorProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TensorProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.TensorProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.TensorProto} TensorProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TensorProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.TensorProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.dims && message.dims.length))
                        message.dims = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dims.push(reader.int64());
                    } else
                        message.dims.push(reader.int64());
                    break;
                case 2:
                    message.data_type = reader.int32();
                    break;
                case 3:
                    message.segment = $root.onnx.TensorProto.Segment.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.float_data && message.float_data.length))
                        message.float_data = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.float_data.push(reader.float());
                    } else
                        message.float_data.push(reader.float());
                    break;
                case 5:
                    if (!(message.int32_data && message.int32_data.length))
                        message.int32_data = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.int32_data.push(reader.int32());
                    } else
                        message.int32_data.push(reader.int32());
                    break;
                case 6:
                    if (!(message.string_data && message.string_data.length))
                        message.string_data = [];
                    message.string_data.push(reader.bytes());
                    break;
                case 7:
                    if (!(message.int64_data && message.int64_data.length))
                        message.int64_data = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.int64_data.push(reader.int64());
                    } else
                        message.int64_data.push(reader.int64());
                    break;
                case 8:
                    message.name = reader.string();
                    break;
                case 12:
                    message.doc_string = reader.string();
                    break;
                case 9:
                    message.raw_data = reader.bytes();
                    break;
                case 13:
                    if (!(message.external_data && message.external_data.length))
                        message.external_data = [];
                    message.external_data.push($root.onnx.StringStringEntryProto.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.data_location = reader.int32();
                    break;
                case 10:
                    if (!(message.double_data && message.double_data.length))
                        message.double_data = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.double_data.push(reader.double());
                    } else
                        message.double_data.push(reader.double());
                    break;
                case 11:
                    if (!(message.uint64_data && message.uint64_data.length))
                        message.uint64_data = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.uint64_data.push(reader.uint64());
                    } else
                        message.uint64_data.push(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TensorProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.TensorProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.TensorProto} TensorProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TensorProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TensorProto message.
         * @function verify
         * @memberof onnx.TensorProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TensorProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dims != null && message.hasOwnProperty("dims")) {
                if (!Array.isArray(message.dims))
                    return "dims: array expected";
                for (let i = 0; i < message.dims.length; ++i)
                    if (!$util.isInteger(message.dims[i]) && !(message.dims[i] && $util.isInteger(message.dims[i].low) && $util.isInteger(message.dims[i].high)))
                        return "dims: integer|Long[] expected";
            }
            if (message.data_type != null && message.hasOwnProperty("data_type"))
                if (!$util.isInteger(message.data_type))
                    return "data_type: integer expected";
            if (message.segment != null && message.hasOwnProperty("segment")) {
                let error = $root.onnx.TensorProto.Segment.verify(message.segment);
                if (error)
                    return "segment." + error;
            }
            if (message.float_data != null && message.hasOwnProperty("float_data")) {
                if (!Array.isArray(message.float_data))
                    return "float_data: array expected";
                for (let i = 0; i < message.float_data.length; ++i)
                    if (typeof message.float_data[i] !== "number")
                        return "float_data: number[] expected";
            }
            if (message.int32_data != null && message.hasOwnProperty("int32_data")) {
                if (!Array.isArray(message.int32_data))
                    return "int32_data: array expected";
                for (let i = 0; i < message.int32_data.length; ++i)
                    if (!$util.isInteger(message.int32_data[i]))
                        return "int32_data: integer[] expected";
            }
            if (message.string_data != null && message.hasOwnProperty("string_data")) {
                if (!Array.isArray(message.string_data))
                    return "string_data: array expected";
                for (let i = 0; i < message.string_data.length; ++i)
                    if (!(message.string_data[i] && typeof message.string_data[i].length === "number" || $util.isString(message.string_data[i])))
                        return "string_data: buffer[] expected";
            }
            if (message.int64_data != null && message.hasOwnProperty("int64_data")) {
                if (!Array.isArray(message.int64_data))
                    return "int64_data: array expected";
                for (let i = 0; i < message.int64_data.length; ++i)
                    if (!$util.isInteger(message.int64_data[i]) && !(message.int64_data[i] && $util.isInteger(message.int64_data[i].low) && $util.isInteger(message.int64_data[i].high)))
                        return "int64_data: integer|Long[] expected";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                if (!$util.isString(message.doc_string))
                    return "doc_string: string expected";
            if (message.raw_data != null && message.hasOwnProperty("raw_data"))
                if (!(message.raw_data && typeof message.raw_data.length === "number" || $util.isString(message.raw_data)))
                    return "raw_data: buffer expected";
            if (message.external_data != null && message.hasOwnProperty("external_data")) {
                if (!Array.isArray(message.external_data))
                    return "external_data: array expected";
                for (let i = 0; i < message.external_data.length; ++i) {
                    let error = $root.onnx.StringStringEntryProto.verify(message.external_data[i]);
                    if (error)
                        return "external_data." + error;
                }
            }
            if (message.data_location != null && message.hasOwnProperty("data_location"))
                switch (message.data_location) {
                default:
                    return "data_location: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.double_data != null && message.hasOwnProperty("double_data")) {
                if (!Array.isArray(message.double_data))
                    return "double_data: array expected";
                for (let i = 0; i < message.double_data.length; ++i)
                    if (typeof message.double_data[i] !== "number")
                        return "double_data: number[] expected";
            }
            if (message.uint64_data != null && message.hasOwnProperty("uint64_data")) {
                if (!Array.isArray(message.uint64_data))
                    return "uint64_data: array expected";
                for (let i = 0; i < message.uint64_data.length; ++i)
                    if (!$util.isInteger(message.uint64_data[i]) && !(message.uint64_data[i] && $util.isInteger(message.uint64_data[i].low) && $util.isInteger(message.uint64_data[i].high)))
                        return "uint64_data: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a TensorProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.TensorProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.TensorProto} TensorProto
         */
        TensorProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.TensorProto)
                return object;
            let message = new $root.onnx.TensorProto();
            if (object.dims) {
                if (!Array.isArray(object.dims))
                    throw TypeError(".onnx.TensorProto.dims: array expected");
                message.dims = [];
                for (let i = 0; i < object.dims.length; ++i)
                    if ($util.Long)
                        (message.dims[i] = $util.Long.fromValue(object.dims[i])).unsigned = false;
                    else if (typeof object.dims[i] === "string")
                        message.dims[i] = parseInt(object.dims[i], 10);
                    else if (typeof object.dims[i] === "number")
                        message.dims[i] = object.dims[i];
                    else if (typeof object.dims[i] === "object")
                        message.dims[i] = new $util.LongBits(object.dims[i].low >>> 0, object.dims[i].high >>> 0).toNumber();
            }
            if (object.data_type != null)
                message.data_type = object.data_type | 0;
            if (object.segment != null) {
                if (typeof object.segment !== "object")
                    throw TypeError(".onnx.TensorProto.segment: object expected");
                message.segment = $root.onnx.TensorProto.Segment.fromObject(object.segment);
            }
            if (object.float_data) {
                if (!Array.isArray(object.float_data))
                    throw TypeError(".onnx.TensorProto.float_data: array expected");
                message.float_data = [];
                for (let i = 0; i < object.float_data.length; ++i)
                    message.float_data[i] = Number(object.float_data[i]);
            }
            if (object.int32_data) {
                if (!Array.isArray(object.int32_data))
                    throw TypeError(".onnx.TensorProto.int32_data: array expected");
                message.int32_data = [];
                for (let i = 0; i < object.int32_data.length; ++i)
                    message.int32_data[i] = object.int32_data[i] | 0;
            }
            if (object.string_data) {
                if (!Array.isArray(object.string_data))
                    throw TypeError(".onnx.TensorProto.string_data: array expected");
                message.string_data = [];
                for (let i = 0; i < object.string_data.length; ++i)
                    if (typeof object.string_data[i] === "string")
                        $util.base64.decode(object.string_data[i], message.string_data[i] = $util.newBuffer($util.base64.length(object.string_data[i])), 0);
                    else if (object.string_data[i].length)
                        message.string_data[i] = object.string_data[i];
            }
            if (object.int64_data) {
                if (!Array.isArray(object.int64_data))
                    throw TypeError(".onnx.TensorProto.int64_data: array expected");
                message.int64_data = [];
                for (let i = 0; i < object.int64_data.length; ++i)
                    if ($util.Long)
                        (message.int64_data[i] = $util.Long.fromValue(object.int64_data[i])).unsigned = false;
                    else if (typeof object.int64_data[i] === "string")
                        message.int64_data[i] = parseInt(object.int64_data[i], 10);
                    else if (typeof object.int64_data[i] === "number")
                        message.int64_data[i] = object.int64_data[i];
                    else if (typeof object.int64_data[i] === "object")
                        message.int64_data[i] = new $util.LongBits(object.int64_data[i].low >>> 0, object.int64_data[i].high >>> 0).toNumber();
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.doc_string != null)
                message.doc_string = String(object.doc_string);
            if (object.raw_data != null)
                if (typeof object.raw_data === "string")
                    $util.base64.decode(object.raw_data, message.raw_data = $util.newBuffer($util.base64.length(object.raw_data)), 0);
                else if (object.raw_data.length)
                    message.raw_data = object.raw_data;
            if (object.external_data) {
                if (!Array.isArray(object.external_data))
                    throw TypeError(".onnx.TensorProto.external_data: array expected");
                message.external_data = [];
                for (let i = 0; i < object.external_data.length; ++i) {
                    if (typeof object.external_data[i] !== "object")
                        throw TypeError(".onnx.TensorProto.external_data: object expected");
                    message.external_data[i] = $root.onnx.StringStringEntryProto.fromObject(object.external_data[i]);
                }
            }
            switch (object.data_location) {
            case "DEFAULT":
            case 0:
                message.data_location = 0;
                break;
            case "EXTERNAL":
            case 1:
                message.data_location = 1;
                break;
            }
            if (object.double_data) {
                if (!Array.isArray(object.double_data))
                    throw TypeError(".onnx.TensorProto.double_data: array expected");
                message.double_data = [];
                for (let i = 0; i < object.double_data.length; ++i)
                    message.double_data[i] = Number(object.double_data[i]);
            }
            if (object.uint64_data) {
                if (!Array.isArray(object.uint64_data))
                    throw TypeError(".onnx.TensorProto.uint64_data: array expected");
                message.uint64_data = [];
                for (let i = 0; i < object.uint64_data.length; ++i)
                    if ($util.Long)
                        (message.uint64_data[i] = $util.Long.fromValue(object.uint64_data[i])).unsigned = true;
                    else if (typeof object.uint64_data[i] === "string")
                        message.uint64_data[i] = parseInt(object.uint64_data[i], 10);
                    else if (typeof object.uint64_data[i] === "number")
                        message.uint64_data[i] = object.uint64_data[i];
                    else if (typeof object.uint64_data[i] === "object")
                        message.uint64_data[i] = new $util.LongBits(object.uint64_data[i].low >>> 0, object.uint64_data[i].high >>> 0).toNumber(true);
            }
            return message;
        };

        /**
         * Creates a plain object from a TensorProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.TensorProto
         * @static
         * @param {onnx.TensorProto} message TensorProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TensorProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.dims = [];
                object.float_data = [];
                object.int32_data = [];
                object.string_data = [];
                object.int64_data = [];
                object.double_data = [];
                object.uint64_data = [];
                object.external_data = [];
            }
            if (options.defaults) {
                object.data_type = 0;
                object.segment = null;
                object.name = "";
                if (options.bytes === String)
                    object.raw_data = "";
                else {
                    object.raw_data = [];
                    if (options.bytes !== Array)
                        object.raw_data = $util.newBuffer(object.raw_data);
                }
                object.doc_string = "";
                object.data_location = options.enums === String ? "DEFAULT" : 0;
            }
            if (message.dims && message.dims.length) {
                object.dims = [];
                for (let j = 0; j < message.dims.length; ++j)
                    if (typeof message.dims[j] === "number")
                        object.dims[j] = options.longs === String ? String(message.dims[j]) : message.dims[j];
                    else
                        object.dims[j] = options.longs === String ? $util.Long.prototype.toString.call(message.dims[j]) : options.longs === Number ? new $util.LongBits(message.dims[j].low >>> 0, message.dims[j].high >>> 0).toNumber() : message.dims[j];
            }
            if (message.data_type != null && message.hasOwnProperty("data_type"))
                object.data_type = message.data_type;
            if (message.segment != null && message.hasOwnProperty("segment"))
                object.segment = $root.onnx.TensorProto.Segment.toObject(message.segment, options);
            if (message.float_data && message.float_data.length) {
                object.float_data = [];
                for (let j = 0; j < message.float_data.length; ++j)
                    object.float_data[j] = options.json && !isFinite(message.float_data[j]) ? String(message.float_data[j]) : message.float_data[j];
            }
            if (message.int32_data && message.int32_data.length) {
                object.int32_data = [];
                for (let j = 0; j < message.int32_data.length; ++j)
                    object.int32_data[j] = message.int32_data[j];
            }
            if (message.string_data && message.string_data.length) {
                object.string_data = [];
                for (let j = 0; j < message.string_data.length; ++j)
                    object.string_data[j] = options.bytes === String ? $util.base64.encode(message.string_data[j], 0, message.string_data[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.string_data[j]) : message.string_data[j];
            }
            if (message.int64_data && message.int64_data.length) {
                object.int64_data = [];
                for (let j = 0; j < message.int64_data.length; ++j)
                    if (typeof message.int64_data[j] === "number")
                        object.int64_data[j] = options.longs === String ? String(message.int64_data[j]) : message.int64_data[j];
                    else
                        object.int64_data[j] = options.longs === String ? $util.Long.prototype.toString.call(message.int64_data[j]) : options.longs === Number ? new $util.LongBits(message.int64_data[j].low >>> 0, message.int64_data[j].high >>> 0).toNumber() : message.int64_data[j];
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.raw_data != null && message.hasOwnProperty("raw_data"))
                object.raw_data = options.bytes === String ? $util.base64.encode(message.raw_data, 0, message.raw_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.raw_data) : message.raw_data;
            if (message.double_data && message.double_data.length) {
                object.double_data = [];
                for (let j = 0; j < message.double_data.length; ++j)
                    object.double_data[j] = options.json && !isFinite(message.double_data[j]) ? String(message.double_data[j]) : message.double_data[j];
            }
            if (message.uint64_data && message.uint64_data.length) {
                object.uint64_data = [];
                for (let j = 0; j < message.uint64_data.length; ++j)
                    if (typeof message.uint64_data[j] === "number")
                        object.uint64_data[j] = options.longs === String ? String(message.uint64_data[j]) : message.uint64_data[j];
                    else
                        object.uint64_data[j] = options.longs === String ? $util.Long.prototype.toString.call(message.uint64_data[j]) : options.longs === Number ? new $util.LongBits(message.uint64_data[j].low >>> 0, message.uint64_data[j].high >>> 0).toNumber(true) : message.uint64_data[j];
            }
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                object.doc_string = message.doc_string;
            if (message.external_data && message.external_data.length) {
                object.external_data = [];
                for (let j = 0; j < message.external_data.length; ++j)
                    object.external_data[j] = $root.onnx.StringStringEntryProto.toObject(message.external_data[j], options);
            }
            if (message.data_location != null && message.hasOwnProperty("data_location"))
                object.data_location = options.enums === String ? $root.onnx.TensorProto.DataLocation[message.data_location] : message.data_location;
            return object;
        };

        /**
         * Converts this TensorProto to JSON.
         * @function toJSON
         * @memberof onnx.TensorProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TensorProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DataType enum.
         * @name onnx.TensorProto.DataType
         * @enum {number}
         * @property {number} UNDEFINED=0 UNDEFINED value
         * @property {number} FLOAT=1 FLOAT value
         * @property {number} UINT8=2 UINT8 value
         * @property {number} INT8=3 INT8 value
         * @property {number} UINT16=4 UINT16 value
         * @property {number} INT16=5 INT16 value
         * @property {number} INT32=6 INT32 value
         * @property {number} INT64=7 INT64 value
         * @property {number} STRING=8 STRING value
         * @property {number} BOOL=9 BOOL value
         * @property {number} FLOAT16=10 FLOAT16 value
         * @property {number} DOUBLE=11 DOUBLE value
         * @property {number} UINT32=12 UINT32 value
         * @property {number} UINT64=13 UINT64 value
         * @property {number} COMPLEX64=14 COMPLEX64 value
         * @property {number} COMPLEX128=15 COMPLEX128 value
         * @property {number} BFLOAT16=16 BFLOAT16 value
         * @property {number} FLOAT8E4M3FN=17 FLOAT8E4M3FN value
         * @property {number} FLOAT8E4M3FNUZ=18 FLOAT8E4M3FNUZ value
         * @property {number} FLOAT8E5M2=19 FLOAT8E5M2 value
         * @property {number} FLOAT8E5M2FNUZ=20 FLOAT8E5M2FNUZ value
         */
        TensorProto.DataType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNDEFINED"] = 0;
            values[valuesById[1] = "FLOAT"] = 1;
            values[valuesById[2] = "UINT8"] = 2;
            values[valuesById[3] = "INT8"] = 3;
            values[valuesById[4] = "UINT16"] = 4;
            values[valuesById[5] = "INT16"] = 5;
            values[valuesById[6] = "INT32"] = 6;
            values[valuesById[7] = "INT64"] = 7;
            values[valuesById[8] = "STRING"] = 8;
            values[valuesById[9] = "BOOL"] = 9;
            values[valuesById[10] = "FLOAT16"] = 10;
            values[valuesById[11] = "DOUBLE"] = 11;
            values[valuesById[12] = "UINT32"] = 12;
            values[valuesById[13] = "UINT64"] = 13;
            values[valuesById[14] = "COMPLEX64"] = 14;
            values[valuesById[15] = "COMPLEX128"] = 15;
            values[valuesById[16] = "BFLOAT16"] = 16;
            values[valuesById[17] = "FLOAT8E4M3FN"] = 17;
            values[valuesById[18] = "FLOAT8E4M3FNUZ"] = 18;
            values[valuesById[19] = "FLOAT8E5M2"] = 19;
            values[valuesById[20] = "FLOAT8E5M2FNUZ"] = 20;
            return values;
        })();

        TensorProto.Segment = (function() {

            /**
             * Properties of a Segment.
             * @memberof onnx.TensorProto
             * @interface ISegment
             * @property {number|Long|null} [begin] Segment begin
             * @property {number|Long|null} [end] Segment end
             */

            /**
             * Constructs a new Segment.
             * @memberof onnx.TensorProto
             * @classdesc Represents a Segment.
             * @implements ISegment
             * @constructor
             * @param {onnx.TensorProto.ISegment=} [properties] Properties to set
             */
            function Segment(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Segment begin.
             * @member {number|Long} begin
             * @memberof onnx.TensorProto.Segment
             * @instance
             */
            Segment.prototype.begin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Segment end.
             * @member {number|Long} end
             * @memberof onnx.TensorProto.Segment
             * @instance
             */
            Segment.prototype.end = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Segment instance using the specified properties.
             * @function create
             * @memberof onnx.TensorProto.Segment
             * @static
             * @param {onnx.TensorProto.ISegment=} [properties] Properties to set
             * @returns {onnx.TensorProto.Segment} Segment instance
             */
            Segment.create = function create(properties) {
                return new Segment(properties);
            };

            /**
             * Encodes the specified Segment message. Does not implicitly {@link onnx.TensorProto.Segment.verify|verify} messages.
             * @function encode
             * @memberof onnx.TensorProto.Segment
             * @static
             * @param {onnx.TensorProto.ISegment} message Segment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Segment.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.begin);
                if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.end);
                return writer;
            };

            /**
             * Encodes the specified Segment message, length delimited. Does not implicitly {@link onnx.TensorProto.Segment.verify|verify} messages.
             * @function encodeDelimited
             * @memberof onnx.TensorProto.Segment
             * @static
             * @param {onnx.TensorProto.ISegment} message Segment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Segment.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Segment message from the specified reader or buffer.
             * @function decode
             * @memberof onnx.TensorProto.Segment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {onnx.TensorProto.Segment} Segment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Segment.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.TensorProto.Segment();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.begin = reader.int64();
                        break;
                    case 2:
                        message.end = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Segment message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof onnx.TensorProto.Segment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {onnx.TensorProto.Segment} Segment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Segment.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Segment message.
             * @function verify
             * @memberof onnx.TensorProto.Segment
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Segment.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.begin != null && message.hasOwnProperty("begin"))
                    if (!$util.isInteger(message.begin) && !(message.begin && $util.isInteger(message.begin.low) && $util.isInteger(message.begin.high)))
                        return "begin: integer|Long expected";
                if (message.end != null && message.hasOwnProperty("end"))
                    if (!$util.isInteger(message.end) && !(message.end && $util.isInteger(message.end.low) && $util.isInteger(message.end.high)))
                        return "end: integer|Long expected";
                return null;
            };

            /**
             * Creates a Segment message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof onnx.TensorProto.Segment
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {onnx.TensorProto.Segment} Segment
             */
            Segment.fromObject = function fromObject(object) {
                if (object instanceof $root.onnx.TensorProto.Segment)
                    return object;
                let message = new $root.onnx.TensorProto.Segment();
                if (object.begin != null)
                    if ($util.Long)
                        (message.begin = $util.Long.fromValue(object.begin)).unsigned = false;
                    else if (typeof object.begin === "string")
                        message.begin = parseInt(object.begin, 10);
                    else if (typeof object.begin === "number")
                        message.begin = object.begin;
                    else if (typeof object.begin === "object")
                        message.begin = new $util.LongBits(object.begin.low >>> 0, object.begin.high >>> 0).toNumber();
                if (object.end != null)
                    if ($util.Long)
                        (message.end = $util.Long.fromValue(object.end)).unsigned = false;
                    else if (typeof object.end === "string")
                        message.end = parseInt(object.end, 10);
                    else if (typeof object.end === "number")
                        message.end = object.end;
                    else if (typeof object.end === "object")
                        message.end = new $util.LongBits(object.end.low >>> 0, object.end.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Segment message. Also converts values to other types if specified.
             * @function toObject
             * @memberof onnx.TensorProto.Segment
             * @static
             * @param {onnx.TensorProto.Segment} message Segment
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Segment.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.begin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.begin = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.end = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.end = options.longs === String ? "0" : 0;
                }
                if (message.begin != null && message.hasOwnProperty("begin"))
                    if (typeof message.begin === "number")
                        object.begin = options.longs === String ? String(message.begin) : message.begin;
                    else
                        object.begin = options.longs === String ? $util.Long.prototype.toString.call(message.begin) : options.longs === Number ? new $util.LongBits(message.begin.low >>> 0, message.begin.high >>> 0).toNumber() : message.begin;
                if (message.end != null && message.hasOwnProperty("end"))
                    if (typeof message.end === "number")
                        object.end = options.longs === String ? String(message.end) : message.end;
                    else
                        object.end = options.longs === String ? $util.Long.prototype.toString.call(message.end) : options.longs === Number ? new $util.LongBits(message.end.low >>> 0, message.end.high >>> 0).toNumber() : message.end;
                return object;
            };

            /**
             * Converts this Segment to JSON.
             * @function toJSON
             * @memberof onnx.TensorProto.Segment
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Segment.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Segment;
        })();

        /**
         * DataLocation enum.
         * @name onnx.TensorProto.DataLocation
         * @enum {number}
         * @property {number} DEFAULT=0 DEFAULT value
         * @property {number} EXTERNAL=1 EXTERNAL value
         */
        TensorProto.DataLocation = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT"] = 0;
            values[valuesById[1] = "EXTERNAL"] = 1;
            return values;
        })();

        return TensorProto;
    })();

    onnx.SparseTensorProto = (function() {

        /**
         * Properties of a SparseTensorProto.
         * @memberof onnx
         * @interface ISparseTensorProto
         * @property {onnx.ITensorProto|null} [values] SparseTensorProto values
         * @property {onnx.ITensorProto|null} [indices] SparseTensorProto indices
         * @property {Array.<number|Long>|null} [dims] SparseTensorProto dims
         */

        /**
         * Constructs a new SparseTensorProto.
         * @memberof onnx
         * @classdesc Represents a SparseTensorProto.
         * @implements ISparseTensorProto
         * @constructor
         * @param {onnx.ISparseTensorProto=} [properties] Properties to set
         */
        function SparseTensorProto(properties) {
            this.dims = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SparseTensorProto values.
         * @member {onnx.ITensorProto|null|undefined} values
         * @memberof onnx.SparseTensorProto
         * @instance
         */
        SparseTensorProto.prototype.values = null;

        /**
         * SparseTensorProto indices.
         * @member {onnx.ITensorProto|null|undefined} indices
         * @memberof onnx.SparseTensorProto
         * @instance
         */
        SparseTensorProto.prototype.indices = null;

        /**
         * SparseTensorProto dims.
         * @member {Array.<number|Long>} dims
         * @memberof onnx.SparseTensorProto
         * @instance
         */
        SparseTensorProto.prototype.dims = $util.emptyArray;

        /**
         * Creates a new SparseTensorProto instance using the specified properties.
         * @function create
         * @memberof onnx.SparseTensorProto
         * @static
         * @param {onnx.ISparseTensorProto=} [properties] Properties to set
         * @returns {onnx.SparseTensorProto} SparseTensorProto instance
         */
        SparseTensorProto.create = function create(properties) {
            return new SparseTensorProto(properties);
        };

        /**
         * Encodes the specified SparseTensorProto message. Does not implicitly {@link onnx.SparseTensorProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.SparseTensorProto
         * @static
         * @param {onnx.ISparseTensorProto} message SparseTensorProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SparseTensorProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.values != null && Object.hasOwnProperty.call(message, "values"))
                $root.onnx.TensorProto.encode(message.values, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.indices != null && Object.hasOwnProperty.call(message, "indices"))
                $root.onnx.TensorProto.encode(message.indices, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.dims != null && message.dims.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.dims.length; ++i)
                    writer.int64(message.dims[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified SparseTensorProto message, length delimited. Does not implicitly {@link onnx.SparseTensorProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.SparseTensorProto
         * @static
         * @param {onnx.ISparseTensorProto} message SparseTensorProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SparseTensorProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SparseTensorProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.SparseTensorProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.SparseTensorProto} SparseTensorProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SparseTensorProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.SparseTensorProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.values = $root.onnx.TensorProto.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.indices = $root.onnx.TensorProto.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.dims && message.dims.length))
                        message.dims = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dims.push(reader.int64());
                    } else
                        message.dims.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SparseTensorProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.SparseTensorProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.SparseTensorProto} SparseTensorProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SparseTensorProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SparseTensorProto message.
         * @function verify
         * @memberof onnx.SparseTensorProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SparseTensorProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.values != null && message.hasOwnProperty("values")) {
                let error = $root.onnx.TensorProto.verify(message.values);
                if (error)
                    return "values." + error;
            }
            if (message.indices != null && message.hasOwnProperty("indices")) {
                let error = $root.onnx.TensorProto.verify(message.indices);
                if (error)
                    return "indices." + error;
            }
            if (message.dims != null && message.hasOwnProperty("dims")) {
                if (!Array.isArray(message.dims))
                    return "dims: array expected";
                for (let i = 0; i < message.dims.length; ++i)
                    if (!$util.isInteger(message.dims[i]) && !(message.dims[i] && $util.isInteger(message.dims[i].low) && $util.isInteger(message.dims[i].high)))
                        return "dims: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a SparseTensorProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.SparseTensorProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.SparseTensorProto} SparseTensorProto
         */
        SparseTensorProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.SparseTensorProto)
                return object;
            let message = new $root.onnx.SparseTensorProto();
            if (object.values != null) {
                if (typeof object.values !== "object")
                    throw TypeError(".onnx.SparseTensorProto.values: object expected");
                message.values = $root.onnx.TensorProto.fromObject(object.values);
            }
            if (object.indices != null) {
                if (typeof object.indices !== "object")
                    throw TypeError(".onnx.SparseTensorProto.indices: object expected");
                message.indices = $root.onnx.TensorProto.fromObject(object.indices);
            }
            if (object.dims) {
                if (!Array.isArray(object.dims))
                    throw TypeError(".onnx.SparseTensorProto.dims: array expected");
                message.dims = [];
                for (let i = 0; i < object.dims.length; ++i)
                    if ($util.Long)
                        (message.dims[i] = $util.Long.fromValue(object.dims[i])).unsigned = false;
                    else if (typeof object.dims[i] === "string")
                        message.dims[i] = parseInt(object.dims[i], 10);
                    else if (typeof object.dims[i] === "number")
                        message.dims[i] = object.dims[i];
                    else if (typeof object.dims[i] === "object")
                        message.dims[i] = new $util.LongBits(object.dims[i].low >>> 0, object.dims[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a SparseTensorProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.SparseTensorProto
         * @static
         * @param {onnx.SparseTensorProto} message SparseTensorProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SparseTensorProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.dims = [];
            if (options.defaults) {
                object.values = null;
                object.indices = null;
            }
            if (message.values != null && message.hasOwnProperty("values"))
                object.values = $root.onnx.TensorProto.toObject(message.values, options);
            if (message.indices != null && message.hasOwnProperty("indices"))
                object.indices = $root.onnx.TensorProto.toObject(message.indices, options);
            if (message.dims && message.dims.length) {
                object.dims = [];
                for (let j = 0; j < message.dims.length; ++j)
                    if (typeof message.dims[j] === "number")
                        object.dims[j] = options.longs === String ? String(message.dims[j]) : message.dims[j];
                    else
                        object.dims[j] = options.longs === String ? $util.Long.prototype.toString.call(message.dims[j]) : options.longs === Number ? new $util.LongBits(message.dims[j].low >>> 0, message.dims[j].high >>> 0).toNumber() : message.dims[j];
            }
            return object;
        };

        /**
         * Converts this SparseTensorProto to JSON.
         * @function toJSON
         * @memberof onnx.SparseTensorProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SparseTensorProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SparseTensorProto;
    })();

    onnx.TensorShapeProto = (function() {

        /**
         * Properties of a TensorShapeProto.
         * @memberof onnx
         * @interface ITensorShapeProto
         * @property {Array.<onnx.TensorShapeProto.IDimension>|null} [dim] TensorShapeProto dim
         */

        /**
         * Constructs a new TensorShapeProto.
         * @memberof onnx
         * @classdesc Represents a TensorShapeProto.
         * @implements ITensorShapeProto
         * @constructor
         * @param {onnx.ITensorShapeProto=} [properties] Properties to set
         */
        function TensorShapeProto(properties) {
            this.dim = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TensorShapeProto dim.
         * @member {Array.<onnx.TensorShapeProto.IDimension>} dim
         * @memberof onnx.TensorShapeProto
         * @instance
         */
        TensorShapeProto.prototype.dim = $util.emptyArray;

        /**
         * Creates a new TensorShapeProto instance using the specified properties.
         * @function create
         * @memberof onnx.TensorShapeProto
         * @static
         * @param {onnx.ITensorShapeProto=} [properties] Properties to set
         * @returns {onnx.TensorShapeProto} TensorShapeProto instance
         */
        TensorShapeProto.create = function create(properties) {
            return new TensorShapeProto(properties);
        };

        /**
         * Encodes the specified TensorShapeProto message. Does not implicitly {@link onnx.TensorShapeProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.TensorShapeProto
         * @static
         * @param {onnx.ITensorShapeProto} message TensorShapeProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TensorShapeProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dim != null && message.dim.length)
                for (let i = 0; i < message.dim.length; ++i)
                    $root.onnx.TensorShapeProto.Dimension.encode(message.dim[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TensorShapeProto message, length delimited. Does not implicitly {@link onnx.TensorShapeProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.TensorShapeProto
         * @static
         * @param {onnx.ITensorShapeProto} message TensorShapeProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TensorShapeProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TensorShapeProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.TensorShapeProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.TensorShapeProto} TensorShapeProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TensorShapeProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.TensorShapeProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.dim && message.dim.length))
                        message.dim = [];
                    message.dim.push($root.onnx.TensorShapeProto.Dimension.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TensorShapeProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.TensorShapeProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.TensorShapeProto} TensorShapeProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TensorShapeProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TensorShapeProto message.
         * @function verify
         * @memberof onnx.TensorShapeProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TensorShapeProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dim != null && message.hasOwnProperty("dim")) {
                if (!Array.isArray(message.dim))
                    return "dim: array expected";
                for (let i = 0; i < message.dim.length; ++i) {
                    let error = $root.onnx.TensorShapeProto.Dimension.verify(message.dim[i]);
                    if (error)
                        return "dim." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TensorShapeProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.TensorShapeProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.TensorShapeProto} TensorShapeProto
         */
        TensorShapeProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.TensorShapeProto)
                return object;
            let message = new $root.onnx.TensorShapeProto();
            if (object.dim) {
                if (!Array.isArray(object.dim))
                    throw TypeError(".onnx.TensorShapeProto.dim: array expected");
                message.dim = [];
                for (let i = 0; i < object.dim.length; ++i) {
                    if (typeof object.dim[i] !== "object")
                        throw TypeError(".onnx.TensorShapeProto.dim: object expected");
                    message.dim[i] = $root.onnx.TensorShapeProto.Dimension.fromObject(object.dim[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TensorShapeProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.TensorShapeProto
         * @static
         * @param {onnx.TensorShapeProto} message TensorShapeProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TensorShapeProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.dim = [];
            if (message.dim && message.dim.length) {
                object.dim = [];
                for (let j = 0; j < message.dim.length; ++j)
                    object.dim[j] = $root.onnx.TensorShapeProto.Dimension.toObject(message.dim[j], options);
            }
            return object;
        };

        /**
         * Converts this TensorShapeProto to JSON.
         * @function toJSON
         * @memberof onnx.TensorShapeProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TensorShapeProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TensorShapeProto.Dimension = (function() {

            /**
             * Properties of a Dimension.
             * @memberof onnx.TensorShapeProto
             * @interface IDimension
             * @property {number|Long|null} [dim_value] Dimension dim_value
             * @property {string|null} [dim_param] Dimension dim_param
             * @property {string|null} [denotation] Dimension denotation
             */

            /**
             * Constructs a new Dimension.
             * @memberof onnx.TensorShapeProto
             * @classdesc Represents a Dimension.
             * @implements IDimension
             * @constructor
             * @param {onnx.TensorShapeProto.IDimension=} [properties] Properties to set
             */
            function Dimension(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Dimension dim_value.
             * @member {number|Long|null|undefined} dim_value
             * @memberof onnx.TensorShapeProto.Dimension
             * @instance
             */
            Dimension.prototype.dim_value = null;

            /**
             * Dimension dim_param.
             * @member {string|null|undefined} dim_param
             * @memberof onnx.TensorShapeProto.Dimension
             * @instance
             */
            Dimension.prototype.dim_param = null;

            /**
             * Dimension denotation.
             * @member {string} denotation
             * @memberof onnx.TensorShapeProto.Dimension
             * @instance
             */
            Dimension.prototype.denotation = "";

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Dimension value.
             * @member {"dim_value"|"dim_param"|undefined} value
             * @memberof onnx.TensorShapeProto.Dimension
             * @instance
             */
            Object.defineProperty(Dimension.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["dim_value", "dim_param"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Dimension instance using the specified properties.
             * @function create
             * @memberof onnx.TensorShapeProto.Dimension
             * @static
             * @param {onnx.TensorShapeProto.IDimension=} [properties] Properties to set
             * @returns {onnx.TensorShapeProto.Dimension} Dimension instance
             */
            Dimension.create = function create(properties) {
                return new Dimension(properties);
            };

            /**
             * Encodes the specified Dimension message. Does not implicitly {@link onnx.TensorShapeProto.Dimension.verify|verify} messages.
             * @function encode
             * @memberof onnx.TensorShapeProto.Dimension
             * @static
             * @param {onnx.TensorShapeProto.IDimension} message Dimension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Dimension.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dim_value != null && Object.hasOwnProperty.call(message, "dim_value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.dim_value);
                if (message.dim_param != null && Object.hasOwnProperty.call(message, "dim_param"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.dim_param);
                if (message.denotation != null && Object.hasOwnProperty.call(message, "denotation"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.denotation);
                return writer;
            };

            /**
             * Encodes the specified Dimension message, length delimited. Does not implicitly {@link onnx.TensorShapeProto.Dimension.verify|verify} messages.
             * @function encodeDelimited
             * @memberof onnx.TensorShapeProto.Dimension
             * @static
             * @param {onnx.TensorShapeProto.IDimension} message Dimension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Dimension.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Dimension message from the specified reader or buffer.
             * @function decode
             * @memberof onnx.TensorShapeProto.Dimension
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {onnx.TensorShapeProto.Dimension} Dimension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Dimension.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.TensorShapeProto.Dimension();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dim_value = reader.int64();
                        break;
                    case 2:
                        message.dim_param = reader.string();
                        break;
                    case 3:
                        message.denotation = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Dimension message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof onnx.TensorShapeProto.Dimension
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {onnx.TensorShapeProto.Dimension} Dimension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Dimension.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Dimension message.
             * @function verify
             * @memberof onnx.TensorShapeProto.Dimension
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Dimension.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.dim_value != null && message.hasOwnProperty("dim_value")) {
                    properties.value = 1;
                    if (!$util.isInteger(message.dim_value) && !(message.dim_value && $util.isInteger(message.dim_value.low) && $util.isInteger(message.dim_value.high)))
                        return "dim_value: integer|Long expected";
                }
                if (message.dim_param != null && message.hasOwnProperty("dim_param")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isString(message.dim_param))
                        return "dim_param: string expected";
                }
                if (message.denotation != null && message.hasOwnProperty("denotation"))
                    if (!$util.isString(message.denotation))
                        return "denotation: string expected";
                return null;
            };

            /**
             * Creates a Dimension message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof onnx.TensorShapeProto.Dimension
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {onnx.TensorShapeProto.Dimension} Dimension
             */
            Dimension.fromObject = function fromObject(object) {
                if (object instanceof $root.onnx.TensorShapeProto.Dimension)
                    return object;
                let message = new $root.onnx.TensorShapeProto.Dimension();
                if (object.dim_value != null)
                    if ($util.Long)
                        (message.dim_value = $util.Long.fromValue(object.dim_value)).unsigned = false;
                    else if (typeof object.dim_value === "string")
                        message.dim_value = parseInt(object.dim_value, 10);
                    else if (typeof object.dim_value === "number")
                        message.dim_value = object.dim_value;
                    else if (typeof object.dim_value === "object")
                        message.dim_value = new $util.LongBits(object.dim_value.low >>> 0, object.dim_value.high >>> 0).toNumber();
                if (object.dim_param != null)
                    message.dim_param = String(object.dim_param);
                if (object.denotation != null)
                    message.denotation = String(object.denotation);
                return message;
            };

            /**
             * Creates a plain object from a Dimension message. Also converts values to other types if specified.
             * @function toObject
             * @memberof onnx.TensorShapeProto.Dimension
             * @static
             * @param {onnx.TensorShapeProto.Dimension} message Dimension
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Dimension.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.denotation = "";
                if (message.dim_value != null && message.hasOwnProperty("dim_value")) {
                    if (typeof message.dim_value === "number")
                        object.dim_value = options.longs === String ? String(message.dim_value) : message.dim_value;
                    else
                        object.dim_value = options.longs === String ? $util.Long.prototype.toString.call(message.dim_value) : options.longs === Number ? new $util.LongBits(message.dim_value.low >>> 0, message.dim_value.high >>> 0).toNumber() : message.dim_value;
                    if (options.oneofs)
                        object.value = "dim_value";
                }
                if (message.dim_param != null && message.hasOwnProperty("dim_param")) {
                    object.dim_param = message.dim_param;
                    if (options.oneofs)
                        object.value = "dim_param";
                }
                if (message.denotation != null && message.hasOwnProperty("denotation"))
                    object.denotation = message.denotation;
                return object;
            };

            /**
             * Converts this Dimension to JSON.
             * @function toJSON
             * @memberof onnx.TensorShapeProto.Dimension
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Dimension.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Dimension;
        })();

        return TensorShapeProto;
    })();

    onnx.TypeProto = (function() {

        /**
         * Properties of a TypeProto.
         * @memberof onnx
         * @interface ITypeProto
         * @property {onnx.TypeProto.ITensor|null} [tensor_type] TypeProto tensor_type
         * @property {onnx.TypeProto.ISequence|null} [sequence_type] TypeProto sequence_type
         * @property {onnx.TypeProto.IMap|null} [map_type] TypeProto map_type
         * @property {onnx.TypeProto.IOptional|null} [optional_type] TypeProto optional_type
         * @property {onnx.TypeProto.ISparseTensor|null} [sparse_tensor_type] TypeProto sparse_tensor_type
         * @property {string|null} [denotation] TypeProto denotation
         */

        /**
         * Constructs a new TypeProto.
         * @memberof onnx
         * @classdesc Represents a TypeProto.
         * @implements ITypeProto
         * @constructor
         * @param {onnx.ITypeProto=} [properties] Properties to set
         */
        function TypeProto(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TypeProto tensor_type.
         * @member {onnx.TypeProto.ITensor|null|undefined} tensor_type
         * @memberof onnx.TypeProto
         * @instance
         */
        TypeProto.prototype.tensor_type = null;

        /**
         * TypeProto sequence_type.
         * @member {onnx.TypeProto.ISequence|null|undefined} sequence_type
         * @memberof onnx.TypeProto
         * @instance
         */
        TypeProto.prototype.sequence_type = null;

        /**
         * TypeProto map_type.
         * @member {onnx.TypeProto.IMap|null|undefined} map_type
         * @memberof onnx.TypeProto
         * @instance
         */
        TypeProto.prototype.map_type = null;

        /**
         * TypeProto optional_type.
         * @member {onnx.TypeProto.IOptional|null|undefined} optional_type
         * @memberof onnx.TypeProto
         * @instance
         */
        TypeProto.prototype.optional_type = null;

        /**
         * TypeProto sparse_tensor_type.
         * @member {onnx.TypeProto.ISparseTensor|null|undefined} sparse_tensor_type
         * @memberof onnx.TypeProto
         * @instance
         */
        TypeProto.prototype.sparse_tensor_type = null;

        /**
         * TypeProto denotation.
         * @member {string} denotation
         * @memberof onnx.TypeProto
         * @instance
         */
        TypeProto.prototype.denotation = "";

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * TypeProto value.
         * @member {"tensor_type"|"sequence_type"|"map_type"|"optional_type"|"sparse_tensor_type"|undefined} value
         * @memberof onnx.TypeProto
         * @instance
         */
        Object.defineProperty(TypeProto.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["tensor_type", "sequence_type", "map_type", "optional_type", "sparse_tensor_type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new TypeProto instance using the specified properties.
         * @function create
         * @memberof onnx.TypeProto
         * @static
         * @param {onnx.ITypeProto=} [properties] Properties to set
         * @returns {onnx.TypeProto} TypeProto instance
         */
        TypeProto.create = function create(properties) {
            return new TypeProto(properties);
        };

        /**
         * Encodes the specified TypeProto message. Does not implicitly {@link onnx.TypeProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.TypeProto
         * @static
         * @param {onnx.ITypeProto} message TypeProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TypeProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tensor_type != null && Object.hasOwnProperty.call(message, "tensor_type"))
                $root.onnx.TypeProto.Tensor.encode(message.tensor_type, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.sequence_type != null && Object.hasOwnProperty.call(message, "sequence_type"))
                $root.onnx.TypeProto.Sequence.encode(message.sequence_type, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.map_type != null && Object.hasOwnProperty.call(message, "map_type"))
                $root.onnx.TypeProto.Map.encode(message.map_type, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.denotation != null && Object.hasOwnProperty.call(message, "denotation"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.denotation);
            if (message.sparse_tensor_type != null && Object.hasOwnProperty.call(message, "sparse_tensor_type"))
                $root.onnx.TypeProto.SparseTensor.encode(message.sparse_tensor_type, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.optional_type != null && Object.hasOwnProperty.call(message, "optional_type"))
                $root.onnx.TypeProto.Optional.encode(message.optional_type, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TypeProto message, length delimited. Does not implicitly {@link onnx.TypeProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.TypeProto
         * @static
         * @param {onnx.ITypeProto} message TypeProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TypeProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TypeProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.TypeProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.TypeProto} TypeProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TypeProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.TypeProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tensor_type = $root.onnx.TypeProto.Tensor.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sequence_type = $root.onnx.TypeProto.Sequence.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.map_type = $root.onnx.TypeProto.Map.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.optional_type = $root.onnx.TypeProto.Optional.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.sparse_tensor_type = $root.onnx.TypeProto.SparseTensor.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.denotation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TypeProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.TypeProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.TypeProto} TypeProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TypeProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TypeProto message.
         * @function verify
         * @memberof onnx.TypeProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TypeProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.tensor_type != null && message.hasOwnProperty("tensor_type")) {
                properties.value = 1;
                {
                    let error = $root.onnx.TypeProto.Tensor.verify(message.tensor_type);
                    if (error)
                        return "tensor_type." + error;
                }
            }
            if (message.sequence_type != null && message.hasOwnProperty("sequence_type")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                {
                    let error = $root.onnx.TypeProto.Sequence.verify(message.sequence_type);
                    if (error)
                        return "sequence_type." + error;
                }
            }
            if (message.map_type != null && message.hasOwnProperty("map_type")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                {
                    let error = $root.onnx.TypeProto.Map.verify(message.map_type);
                    if (error)
                        return "map_type." + error;
                }
            }
            if (message.optional_type != null && message.hasOwnProperty("optional_type")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                {
                    let error = $root.onnx.TypeProto.Optional.verify(message.optional_type);
                    if (error)
                        return "optional_type." + error;
                }
            }
            if (message.sparse_tensor_type != null && message.hasOwnProperty("sparse_tensor_type")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                {
                    let error = $root.onnx.TypeProto.SparseTensor.verify(message.sparse_tensor_type);
                    if (error)
                        return "sparse_tensor_type." + error;
                }
            }
            if (message.denotation != null && message.hasOwnProperty("denotation"))
                if (!$util.isString(message.denotation))
                    return "denotation: string expected";
            return null;
        };

        /**
         * Creates a TypeProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.TypeProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.TypeProto} TypeProto
         */
        TypeProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.TypeProto)
                return object;
            let message = new $root.onnx.TypeProto();
            if (object.tensor_type != null) {
                if (typeof object.tensor_type !== "object")
                    throw TypeError(".onnx.TypeProto.tensor_type: object expected");
                message.tensor_type = $root.onnx.TypeProto.Tensor.fromObject(object.tensor_type);
            }
            if (object.sequence_type != null) {
                if (typeof object.sequence_type !== "object")
                    throw TypeError(".onnx.TypeProto.sequence_type: object expected");
                message.sequence_type = $root.onnx.TypeProto.Sequence.fromObject(object.sequence_type);
            }
            if (object.map_type != null) {
                if (typeof object.map_type !== "object")
                    throw TypeError(".onnx.TypeProto.map_type: object expected");
                message.map_type = $root.onnx.TypeProto.Map.fromObject(object.map_type);
            }
            if (object.optional_type != null) {
                if (typeof object.optional_type !== "object")
                    throw TypeError(".onnx.TypeProto.optional_type: object expected");
                message.optional_type = $root.onnx.TypeProto.Optional.fromObject(object.optional_type);
            }
            if (object.sparse_tensor_type != null) {
                if (typeof object.sparse_tensor_type !== "object")
                    throw TypeError(".onnx.TypeProto.sparse_tensor_type: object expected");
                message.sparse_tensor_type = $root.onnx.TypeProto.SparseTensor.fromObject(object.sparse_tensor_type);
            }
            if (object.denotation != null)
                message.denotation = String(object.denotation);
            return message;
        };

        /**
         * Creates a plain object from a TypeProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.TypeProto
         * @static
         * @param {onnx.TypeProto} message TypeProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TypeProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.denotation = "";
            if (message.tensor_type != null && message.hasOwnProperty("tensor_type")) {
                object.tensor_type = $root.onnx.TypeProto.Tensor.toObject(message.tensor_type, options);
                if (options.oneofs)
                    object.value = "tensor_type";
            }
            if (message.sequence_type != null && message.hasOwnProperty("sequence_type")) {
                object.sequence_type = $root.onnx.TypeProto.Sequence.toObject(message.sequence_type, options);
                if (options.oneofs)
                    object.value = "sequence_type";
            }
            if (message.map_type != null && message.hasOwnProperty("map_type")) {
                object.map_type = $root.onnx.TypeProto.Map.toObject(message.map_type, options);
                if (options.oneofs)
                    object.value = "map_type";
            }
            if (message.denotation != null && message.hasOwnProperty("denotation"))
                object.denotation = message.denotation;
            if (message.sparse_tensor_type != null && message.hasOwnProperty("sparse_tensor_type")) {
                object.sparse_tensor_type = $root.onnx.TypeProto.SparseTensor.toObject(message.sparse_tensor_type, options);
                if (options.oneofs)
                    object.value = "sparse_tensor_type";
            }
            if (message.optional_type != null && message.hasOwnProperty("optional_type")) {
                object.optional_type = $root.onnx.TypeProto.Optional.toObject(message.optional_type, options);
                if (options.oneofs)
                    object.value = "optional_type";
            }
            return object;
        };

        /**
         * Converts this TypeProto to JSON.
         * @function toJSON
         * @memberof onnx.TypeProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TypeProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TypeProto.Tensor = (function() {

            /**
             * Properties of a Tensor.
             * @memberof onnx.TypeProto
             * @interface ITensor
             * @property {number|null} [elem_type] Tensor elem_type
             * @property {onnx.ITensorShapeProto|null} [shape] Tensor shape
             */

            /**
             * Constructs a new Tensor.
             * @memberof onnx.TypeProto
             * @classdesc Represents a Tensor.
             * @implements ITensor
             * @constructor
             * @param {onnx.TypeProto.ITensor=} [properties] Properties to set
             */
            function Tensor(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Tensor elem_type.
             * @member {number} elem_type
             * @memberof onnx.TypeProto.Tensor
             * @instance
             */
            Tensor.prototype.elem_type = 0;

            /**
             * Tensor shape.
             * @member {onnx.ITensorShapeProto|null|undefined} shape
             * @memberof onnx.TypeProto.Tensor
             * @instance
             */
            Tensor.prototype.shape = null;

            /**
             * Creates a new Tensor instance using the specified properties.
             * @function create
             * @memberof onnx.TypeProto.Tensor
             * @static
             * @param {onnx.TypeProto.ITensor=} [properties] Properties to set
             * @returns {onnx.TypeProto.Tensor} Tensor instance
             */
            Tensor.create = function create(properties) {
                return new Tensor(properties);
            };

            /**
             * Encodes the specified Tensor message. Does not implicitly {@link onnx.TypeProto.Tensor.verify|verify} messages.
             * @function encode
             * @memberof onnx.TypeProto.Tensor
             * @static
             * @param {onnx.TypeProto.ITensor} message Tensor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tensor.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elem_type != null && Object.hasOwnProperty.call(message, "elem_type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.elem_type);
                if (message.shape != null && Object.hasOwnProperty.call(message, "shape"))
                    $root.onnx.TensorShapeProto.encode(message.shape, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Tensor message, length delimited. Does not implicitly {@link onnx.TypeProto.Tensor.verify|verify} messages.
             * @function encodeDelimited
             * @memberof onnx.TypeProto.Tensor
             * @static
             * @param {onnx.TypeProto.ITensor} message Tensor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tensor.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Tensor message from the specified reader or buffer.
             * @function decode
             * @memberof onnx.TypeProto.Tensor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {onnx.TypeProto.Tensor} Tensor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tensor.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.TypeProto.Tensor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.elem_type = reader.int32();
                        break;
                    case 2:
                        message.shape = $root.onnx.TensorShapeProto.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Tensor message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof onnx.TypeProto.Tensor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {onnx.TypeProto.Tensor} Tensor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tensor.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Tensor message.
             * @function verify
             * @memberof onnx.TypeProto.Tensor
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Tensor.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elem_type != null && message.hasOwnProperty("elem_type"))
                    if (!$util.isInteger(message.elem_type))
                        return "elem_type: integer expected";
                if (message.shape != null && message.hasOwnProperty("shape")) {
                    let error = $root.onnx.TensorShapeProto.verify(message.shape);
                    if (error)
                        return "shape." + error;
                }
                return null;
            };

            /**
             * Creates a Tensor message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof onnx.TypeProto.Tensor
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {onnx.TypeProto.Tensor} Tensor
             */
            Tensor.fromObject = function fromObject(object) {
                if (object instanceof $root.onnx.TypeProto.Tensor)
                    return object;
                let message = new $root.onnx.TypeProto.Tensor();
                if (object.elem_type != null)
                    message.elem_type = object.elem_type | 0;
                if (object.shape != null) {
                    if (typeof object.shape !== "object")
                        throw TypeError(".onnx.TypeProto.Tensor.shape: object expected");
                    message.shape = $root.onnx.TensorShapeProto.fromObject(object.shape);
                }
                return message;
            };

            /**
             * Creates a plain object from a Tensor message. Also converts values to other types if specified.
             * @function toObject
             * @memberof onnx.TypeProto.Tensor
             * @static
             * @param {onnx.TypeProto.Tensor} message Tensor
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Tensor.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.elem_type = 0;
                    object.shape = null;
                }
                if (message.elem_type != null && message.hasOwnProperty("elem_type"))
                    object.elem_type = message.elem_type;
                if (message.shape != null && message.hasOwnProperty("shape"))
                    object.shape = $root.onnx.TensorShapeProto.toObject(message.shape, options);
                return object;
            };

            /**
             * Converts this Tensor to JSON.
             * @function toJSON
             * @memberof onnx.TypeProto.Tensor
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tensor.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Tensor;
        })();

        TypeProto.Sequence = (function() {

            /**
             * Properties of a Sequence.
             * @memberof onnx.TypeProto
             * @interface ISequence
             * @property {onnx.ITypeProto|null} [elem_type] Sequence elem_type
             */

            /**
             * Constructs a new Sequence.
             * @memberof onnx.TypeProto
             * @classdesc Represents a Sequence.
             * @implements ISequence
             * @constructor
             * @param {onnx.TypeProto.ISequence=} [properties] Properties to set
             */
            function Sequence(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Sequence elem_type.
             * @member {onnx.ITypeProto|null|undefined} elem_type
             * @memberof onnx.TypeProto.Sequence
             * @instance
             */
            Sequence.prototype.elem_type = null;

            /**
             * Creates a new Sequence instance using the specified properties.
             * @function create
             * @memberof onnx.TypeProto.Sequence
             * @static
             * @param {onnx.TypeProto.ISequence=} [properties] Properties to set
             * @returns {onnx.TypeProto.Sequence} Sequence instance
             */
            Sequence.create = function create(properties) {
                return new Sequence(properties);
            };

            /**
             * Encodes the specified Sequence message. Does not implicitly {@link onnx.TypeProto.Sequence.verify|verify} messages.
             * @function encode
             * @memberof onnx.TypeProto.Sequence
             * @static
             * @param {onnx.TypeProto.ISequence} message Sequence message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sequence.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elem_type != null && Object.hasOwnProperty.call(message, "elem_type"))
                    $root.onnx.TypeProto.encode(message.elem_type, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Sequence message, length delimited. Does not implicitly {@link onnx.TypeProto.Sequence.verify|verify} messages.
             * @function encodeDelimited
             * @memberof onnx.TypeProto.Sequence
             * @static
             * @param {onnx.TypeProto.ISequence} message Sequence message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sequence.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Sequence message from the specified reader or buffer.
             * @function decode
             * @memberof onnx.TypeProto.Sequence
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {onnx.TypeProto.Sequence} Sequence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sequence.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.TypeProto.Sequence();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.elem_type = $root.onnx.TypeProto.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Sequence message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof onnx.TypeProto.Sequence
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {onnx.TypeProto.Sequence} Sequence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sequence.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Sequence message.
             * @function verify
             * @memberof onnx.TypeProto.Sequence
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Sequence.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elem_type != null && message.hasOwnProperty("elem_type")) {
                    let error = $root.onnx.TypeProto.verify(message.elem_type);
                    if (error)
                        return "elem_type." + error;
                }
                return null;
            };

            /**
             * Creates a Sequence message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof onnx.TypeProto.Sequence
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {onnx.TypeProto.Sequence} Sequence
             */
            Sequence.fromObject = function fromObject(object) {
                if (object instanceof $root.onnx.TypeProto.Sequence)
                    return object;
                let message = new $root.onnx.TypeProto.Sequence();
                if (object.elem_type != null) {
                    if (typeof object.elem_type !== "object")
                        throw TypeError(".onnx.TypeProto.Sequence.elem_type: object expected");
                    message.elem_type = $root.onnx.TypeProto.fromObject(object.elem_type);
                }
                return message;
            };

            /**
             * Creates a plain object from a Sequence message. Also converts values to other types if specified.
             * @function toObject
             * @memberof onnx.TypeProto.Sequence
             * @static
             * @param {onnx.TypeProto.Sequence} message Sequence
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Sequence.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.elem_type = null;
                if (message.elem_type != null && message.hasOwnProperty("elem_type"))
                    object.elem_type = $root.onnx.TypeProto.toObject(message.elem_type, options);
                return object;
            };

            /**
             * Converts this Sequence to JSON.
             * @function toJSON
             * @memberof onnx.TypeProto.Sequence
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Sequence.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Sequence;
        })();

        TypeProto.Map = (function() {

            /**
             * Properties of a Map.
             * @memberof onnx.TypeProto
             * @interface IMap
             * @property {number|null} [key_type] Map key_type
             * @property {onnx.ITypeProto|null} [value_type] Map value_type
             */

            /**
             * Constructs a new Map.
             * @memberof onnx.TypeProto
             * @classdesc Represents a Map.
             * @implements IMap
             * @constructor
             * @param {onnx.TypeProto.IMap=} [properties] Properties to set
             */
            function Map(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Map key_type.
             * @member {number} key_type
             * @memberof onnx.TypeProto.Map
             * @instance
             */
            Map.prototype.key_type = 0;

            /**
             * Map value_type.
             * @member {onnx.ITypeProto|null|undefined} value_type
             * @memberof onnx.TypeProto.Map
             * @instance
             */
            Map.prototype.value_type = null;

            /**
             * Creates a new Map instance using the specified properties.
             * @function create
             * @memberof onnx.TypeProto.Map
             * @static
             * @param {onnx.TypeProto.IMap=} [properties] Properties to set
             * @returns {onnx.TypeProto.Map} Map instance
             */
            Map.create = function create(properties) {
                return new Map(properties);
            };

            /**
             * Encodes the specified Map message. Does not implicitly {@link onnx.TypeProto.Map.verify|verify} messages.
             * @function encode
             * @memberof onnx.TypeProto.Map
             * @static
             * @param {onnx.TypeProto.IMap} message Map message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Map.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key_type != null && Object.hasOwnProperty.call(message, "key_type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.key_type);
                if (message.value_type != null && Object.hasOwnProperty.call(message, "value_type"))
                    $root.onnx.TypeProto.encode(message.value_type, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Map message, length delimited. Does not implicitly {@link onnx.TypeProto.Map.verify|verify} messages.
             * @function encodeDelimited
             * @memberof onnx.TypeProto.Map
             * @static
             * @param {onnx.TypeProto.IMap} message Map message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Map.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Map message from the specified reader or buffer.
             * @function decode
             * @memberof onnx.TypeProto.Map
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {onnx.TypeProto.Map} Map
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Map.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.TypeProto.Map();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key_type = reader.int32();
                        break;
                    case 2:
                        message.value_type = $root.onnx.TypeProto.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Map message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof onnx.TypeProto.Map
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {onnx.TypeProto.Map} Map
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Map.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Map message.
             * @function verify
             * @memberof onnx.TypeProto.Map
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Map.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key_type != null && message.hasOwnProperty("key_type"))
                    if (!$util.isInteger(message.key_type))
                        return "key_type: integer expected";
                if (message.value_type != null && message.hasOwnProperty("value_type")) {
                    let error = $root.onnx.TypeProto.verify(message.value_type);
                    if (error)
                        return "value_type." + error;
                }
                return null;
            };

            /**
             * Creates a Map message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof onnx.TypeProto.Map
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {onnx.TypeProto.Map} Map
             */
            Map.fromObject = function fromObject(object) {
                if (object instanceof $root.onnx.TypeProto.Map)
                    return object;
                let message = new $root.onnx.TypeProto.Map();
                if (object.key_type != null)
                    message.key_type = object.key_type | 0;
                if (object.value_type != null) {
                    if (typeof object.value_type !== "object")
                        throw TypeError(".onnx.TypeProto.Map.value_type: object expected");
                    message.value_type = $root.onnx.TypeProto.fromObject(object.value_type);
                }
                return message;
            };

            /**
             * Creates a plain object from a Map message. Also converts values to other types if specified.
             * @function toObject
             * @memberof onnx.TypeProto.Map
             * @static
             * @param {onnx.TypeProto.Map} message Map
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Map.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.key_type = 0;
                    object.value_type = null;
                }
                if (message.key_type != null && message.hasOwnProperty("key_type"))
                    object.key_type = message.key_type;
                if (message.value_type != null && message.hasOwnProperty("value_type"))
                    object.value_type = $root.onnx.TypeProto.toObject(message.value_type, options);
                return object;
            };

            /**
             * Converts this Map to JSON.
             * @function toJSON
             * @memberof onnx.TypeProto.Map
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Map.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Map;
        })();

        TypeProto.Optional = (function() {

            /**
             * Properties of an Optional.
             * @memberof onnx.TypeProto
             * @interface IOptional
             * @property {onnx.ITypeProto|null} [elem_type] Optional elem_type
             */

            /**
             * Constructs a new Optional.
             * @memberof onnx.TypeProto
             * @classdesc Represents an Optional.
             * @implements IOptional
             * @constructor
             * @param {onnx.TypeProto.IOptional=} [properties] Properties to set
             */
            function Optional(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Optional elem_type.
             * @member {onnx.ITypeProto|null|undefined} elem_type
             * @memberof onnx.TypeProto.Optional
             * @instance
             */
            Optional.prototype.elem_type = null;

            /**
             * Creates a new Optional instance using the specified properties.
             * @function create
             * @memberof onnx.TypeProto.Optional
             * @static
             * @param {onnx.TypeProto.IOptional=} [properties] Properties to set
             * @returns {onnx.TypeProto.Optional} Optional instance
             */
            Optional.create = function create(properties) {
                return new Optional(properties);
            };

            /**
             * Encodes the specified Optional message. Does not implicitly {@link onnx.TypeProto.Optional.verify|verify} messages.
             * @function encode
             * @memberof onnx.TypeProto.Optional
             * @static
             * @param {onnx.TypeProto.IOptional} message Optional message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Optional.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elem_type != null && Object.hasOwnProperty.call(message, "elem_type"))
                    $root.onnx.TypeProto.encode(message.elem_type, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Optional message, length delimited. Does not implicitly {@link onnx.TypeProto.Optional.verify|verify} messages.
             * @function encodeDelimited
             * @memberof onnx.TypeProto.Optional
             * @static
             * @param {onnx.TypeProto.IOptional} message Optional message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Optional.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Optional message from the specified reader or buffer.
             * @function decode
             * @memberof onnx.TypeProto.Optional
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {onnx.TypeProto.Optional} Optional
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Optional.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.TypeProto.Optional();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.elem_type = $root.onnx.TypeProto.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Optional message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof onnx.TypeProto.Optional
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {onnx.TypeProto.Optional} Optional
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Optional.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Optional message.
             * @function verify
             * @memberof onnx.TypeProto.Optional
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Optional.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elem_type != null && message.hasOwnProperty("elem_type")) {
                    let error = $root.onnx.TypeProto.verify(message.elem_type);
                    if (error)
                        return "elem_type." + error;
                }
                return null;
            };

            /**
             * Creates an Optional message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof onnx.TypeProto.Optional
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {onnx.TypeProto.Optional} Optional
             */
            Optional.fromObject = function fromObject(object) {
                if (object instanceof $root.onnx.TypeProto.Optional)
                    return object;
                let message = new $root.onnx.TypeProto.Optional();
                if (object.elem_type != null) {
                    if (typeof object.elem_type !== "object")
                        throw TypeError(".onnx.TypeProto.Optional.elem_type: object expected");
                    message.elem_type = $root.onnx.TypeProto.fromObject(object.elem_type);
                }
                return message;
            };

            /**
             * Creates a plain object from an Optional message. Also converts values to other types if specified.
             * @function toObject
             * @memberof onnx.TypeProto.Optional
             * @static
             * @param {onnx.TypeProto.Optional} message Optional
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Optional.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.elem_type = null;
                if (message.elem_type != null && message.hasOwnProperty("elem_type"))
                    object.elem_type = $root.onnx.TypeProto.toObject(message.elem_type, options);
                return object;
            };

            /**
             * Converts this Optional to JSON.
             * @function toJSON
             * @memberof onnx.TypeProto.Optional
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Optional.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Optional;
        })();

        TypeProto.SparseTensor = (function() {

            /**
             * Properties of a SparseTensor.
             * @memberof onnx.TypeProto
             * @interface ISparseTensor
             * @property {number|null} [elem_type] SparseTensor elem_type
             * @property {onnx.ITensorShapeProto|null} [shape] SparseTensor shape
             */

            /**
             * Constructs a new SparseTensor.
             * @memberof onnx.TypeProto
             * @classdesc Represents a SparseTensor.
             * @implements ISparseTensor
             * @constructor
             * @param {onnx.TypeProto.ISparseTensor=} [properties] Properties to set
             */
            function SparseTensor(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SparseTensor elem_type.
             * @member {number} elem_type
             * @memberof onnx.TypeProto.SparseTensor
             * @instance
             */
            SparseTensor.prototype.elem_type = 0;

            /**
             * SparseTensor shape.
             * @member {onnx.ITensorShapeProto|null|undefined} shape
             * @memberof onnx.TypeProto.SparseTensor
             * @instance
             */
            SparseTensor.prototype.shape = null;

            /**
             * Creates a new SparseTensor instance using the specified properties.
             * @function create
             * @memberof onnx.TypeProto.SparseTensor
             * @static
             * @param {onnx.TypeProto.ISparseTensor=} [properties] Properties to set
             * @returns {onnx.TypeProto.SparseTensor} SparseTensor instance
             */
            SparseTensor.create = function create(properties) {
                return new SparseTensor(properties);
            };

            /**
             * Encodes the specified SparseTensor message. Does not implicitly {@link onnx.TypeProto.SparseTensor.verify|verify} messages.
             * @function encode
             * @memberof onnx.TypeProto.SparseTensor
             * @static
             * @param {onnx.TypeProto.ISparseTensor} message SparseTensor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SparseTensor.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elem_type != null && Object.hasOwnProperty.call(message, "elem_type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.elem_type);
                if (message.shape != null && Object.hasOwnProperty.call(message, "shape"))
                    $root.onnx.TensorShapeProto.encode(message.shape, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SparseTensor message, length delimited. Does not implicitly {@link onnx.TypeProto.SparseTensor.verify|verify} messages.
             * @function encodeDelimited
             * @memberof onnx.TypeProto.SparseTensor
             * @static
             * @param {onnx.TypeProto.ISparseTensor} message SparseTensor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SparseTensor.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SparseTensor message from the specified reader or buffer.
             * @function decode
             * @memberof onnx.TypeProto.SparseTensor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {onnx.TypeProto.SparseTensor} SparseTensor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SparseTensor.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.TypeProto.SparseTensor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.elem_type = reader.int32();
                        break;
                    case 2:
                        message.shape = $root.onnx.TensorShapeProto.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SparseTensor message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof onnx.TypeProto.SparseTensor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {onnx.TypeProto.SparseTensor} SparseTensor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SparseTensor.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SparseTensor message.
             * @function verify
             * @memberof onnx.TypeProto.SparseTensor
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SparseTensor.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elem_type != null && message.hasOwnProperty("elem_type"))
                    if (!$util.isInteger(message.elem_type))
                        return "elem_type: integer expected";
                if (message.shape != null && message.hasOwnProperty("shape")) {
                    let error = $root.onnx.TensorShapeProto.verify(message.shape);
                    if (error)
                        return "shape." + error;
                }
                return null;
            };

            /**
             * Creates a SparseTensor message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof onnx.TypeProto.SparseTensor
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {onnx.TypeProto.SparseTensor} SparseTensor
             */
            SparseTensor.fromObject = function fromObject(object) {
                if (object instanceof $root.onnx.TypeProto.SparseTensor)
                    return object;
                let message = new $root.onnx.TypeProto.SparseTensor();
                if (object.elem_type != null)
                    message.elem_type = object.elem_type | 0;
                if (object.shape != null) {
                    if (typeof object.shape !== "object")
                        throw TypeError(".onnx.TypeProto.SparseTensor.shape: object expected");
                    message.shape = $root.onnx.TensorShapeProto.fromObject(object.shape);
                }
                return message;
            };

            /**
             * Creates a plain object from a SparseTensor message. Also converts values to other types if specified.
             * @function toObject
             * @memberof onnx.TypeProto.SparseTensor
             * @static
             * @param {onnx.TypeProto.SparseTensor} message SparseTensor
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SparseTensor.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.elem_type = 0;
                    object.shape = null;
                }
                if (message.elem_type != null && message.hasOwnProperty("elem_type"))
                    object.elem_type = message.elem_type;
                if (message.shape != null && message.hasOwnProperty("shape"))
                    object.shape = $root.onnx.TensorShapeProto.toObject(message.shape, options);
                return object;
            };

            /**
             * Converts this SparseTensor to JSON.
             * @function toJSON
             * @memberof onnx.TypeProto.SparseTensor
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SparseTensor.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SparseTensor;
        })();

        return TypeProto;
    })();

    onnx.OperatorSetIdProto = (function() {

        /**
         * Properties of an OperatorSetIdProto.
         * @memberof onnx
         * @interface IOperatorSetIdProto
         * @property {string|null} [domain] OperatorSetIdProto domain
         * @property {number|Long|null} [version] OperatorSetIdProto version
         */

        /**
         * Constructs a new OperatorSetIdProto.
         * @memberof onnx
         * @classdesc Represents an OperatorSetIdProto.
         * @implements IOperatorSetIdProto
         * @constructor
         * @param {onnx.IOperatorSetIdProto=} [properties] Properties to set
         */
        function OperatorSetIdProto(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperatorSetIdProto domain.
         * @member {string} domain
         * @memberof onnx.OperatorSetIdProto
         * @instance
         */
        OperatorSetIdProto.prototype.domain = "";

        /**
         * OperatorSetIdProto version.
         * @member {number|Long} version
         * @memberof onnx.OperatorSetIdProto
         * @instance
         */
        OperatorSetIdProto.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new OperatorSetIdProto instance using the specified properties.
         * @function create
         * @memberof onnx.OperatorSetIdProto
         * @static
         * @param {onnx.IOperatorSetIdProto=} [properties] Properties to set
         * @returns {onnx.OperatorSetIdProto} OperatorSetIdProto instance
         */
        OperatorSetIdProto.create = function create(properties) {
            return new OperatorSetIdProto(properties);
        };

        /**
         * Encodes the specified OperatorSetIdProto message. Does not implicitly {@link onnx.OperatorSetIdProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.OperatorSetIdProto
         * @static
         * @param {onnx.IOperatorSetIdProto} message OperatorSetIdProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperatorSetIdProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.domain);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.version);
            return writer;
        };

        /**
         * Encodes the specified OperatorSetIdProto message, length delimited. Does not implicitly {@link onnx.OperatorSetIdProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.OperatorSetIdProto
         * @static
         * @param {onnx.IOperatorSetIdProto} message OperatorSetIdProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperatorSetIdProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperatorSetIdProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.OperatorSetIdProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.OperatorSetIdProto} OperatorSetIdProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperatorSetIdProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.OperatorSetIdProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.domain = reader.string();
                    break;
                case 2:
                    message.version = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperatorSetIdProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.OperatorSetIdProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.OperatorSetIdProto} OperatorSetIdProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperatorSetIdProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperatorSetIdProto message.
         * @function verify
         * @memberof onnx.OperatorSetIdProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperatorSetIdProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.domain != null && message.hasOwnProperty("domain"))
                if (!$util.isString(message.domain))
                    return "domain: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            return null;
        };

        /**
         * Creates an OperatorSetIdProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.OperatorSetIdProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.OperatorSetIdProto} OperatorSetIdProto
         */
        OperatorSetIdProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.OperatorSetIdProto)
                return object;
            let message = new $root.onnx.OperatorSetIdProto();
            if (object.domain != null)
                message.domain = String(object.domain);
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = false;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an OperatorSetIdProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.OperatorSetIdProto
         * @static
         * @param {onnx.OperatorSetIdProto} message OperatorSetIdProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperatorSetIdProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.domain = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
            }
            if (message.domain != null && message.hasOwnProperty("domain"))
                object.domain = message.domain;
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
            return object;
        };

        /**
         * Converts this OperatorSetIdProto to JSON.
         * @function toJSON
         * @memberof onnx.OperatorSetIdProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperatorSetIdProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OperatorSetIdProto;
    })();

    /**
     * OperatorStatus enum.
     * @name onnx.OperatorStatus
     * @enum {number}
     * @property {number} EXPERIMENTAL=0 EXPERIMENTAL value
     * @property {number} STABLE=1 STABLE value
     */
    onnx.OperatorStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EXPERIMENTAL"] = 0;
        values[valuesById[1] = "STABLE"] = 1;
        return values;
    })();

    onnx.FunctionProto = (function() {

        /**
         * Properties of a FunctionProto.
         * @memberof onnx
         * @interface IFunctionProto
         * @property {string|null} [name] FunctionProto name
         * @property {Array.<string>|null} [input] FunctionProto input
         * @property {Array.<string>|null} [output] FunctionProto output
         * @property {Array.<string>|null} [attribute] FunctionProto attribute
         * @property {Array.<onnx.IAttributeProto>|null} [attribute_proto] FunctionProto attribute_proto
         * @property {Array.<onnx.INodeProto>|null} [node] FunctionProto node
         * @property {string|null} [doc_string] FunctionProto doc_string
         * @property {Array.<onnx.IOperatorSetIdProto>|null} [opset_import] FunctionProto opset_import
         * @property {string|null} [domain] FunctionProto domain
         */

        /**
         * Constructs a new FunctionProto.
         * @memberof onnx
         * @classdesc Represents a FunctionProto.
         * @implements IFunctionProto
         * @constructor
         * @param {onnx.IFunctionProto=} [properties] Properties to set
         */
        function FunctionProto(properties) {
            this.input = [];
            this.output = [];
            this.attribute = [];
            this.attribute_proto = [];
            this.node = [];
            this.opset_import = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FunctionProto name.
         * @member {string} name
         * @memberof onnx.FunctionProto
         * @instance
         */
        FunctionProto.prototype.name = "";

        /**
         * FunctionProto input.
         * @member {Array.<string>} input
         * @memberof onnx.FunctionProto
         * @instance
         */
        FunctionProto.prototype.input = $util.emptyArray;

        /**
         * FunctionProto output.
         * @member {Array.<string>} output
         * @memberof onnx.FunctionProto
         * @instance
         */
        FunctionProto.prototype.output = $util.emptyArray;

        /**
         * FunctionProto attribute.
         * @member {Array.<string>} attribute
         * @memberof onnx.FunctionProto
         * @instance
         */
        FunctionProto.prototype.attribute = $util.emptyArray;

        /**
         * FunctionProto attribute_proto.
         * @member {Array.<onnx.IAttributeProto>} attribute_proto
         * @memberof onnx.FunctionProto
         * @instance
         */
        FunctionProto.prototype.attribute_proto = $util.emptyArray;

        /**
         * FunctionProto node.
         * @member {Array.<onnx.INodeProto>} node
         * @memberof onnx.FunctionProto
         * @instance
         */
        FunctionProto.prototype.node = $util.emptyArray;

        /**
         * FunctionProto doc_string.
         * @member {string} doc_string
         * @memberof onnx.FunctionProto
         * @instance
         */
        FunctionProto.prototype.doc_string = "";

        /**
         * FunctionProto opset_import.
         * @member {Array.<onnx.IOperatorSetIdProto>} opset_import
         * @memberof onnx.FunctionProto
         * @instance
         */
        FunctionProto.prototype.opset_import = $util.emptyArray;

        /**
         * FunctionProto domain.
         * @member {string} domain
         * @memberof onnx.FunctionProto
         * @instance
         */
        FunctionProto.prototype.domain = "";

        /**
         * Creates a new FunctionProto instance using the specified properties.
         * @function create
         * @memberof onnx.FunctionProto
         * @static
         * @param {onnx.IFunctionProto=} [properties] Properties to set
         * @returns {onnx.FunctionProto} FunctionProto instance
         */
        FunctionProto.create = function create(properties) {
            return new FunctionProto(properties);
        };

        /**
         * Encodes the specified FunctionProto message. Does not implicitly {@link onnx.FunctionProto.verify|verify} messages.
         * @function encode
         * @memberof onnx.FunctionProto
         * @static
         * @param {onnx.IFunctionProto} message FunctionProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FunctionProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.input != null && message.input.length)
                for (let i = 0; i < message.input.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.input[i]);
            if (message.output != null && message.output.length)
                for (let i = 0; i < message.output.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.output[i]);
            if (message.attribute != null && message.attribute.length)
                for (let i = 0; i < message.attribute.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.attribute[i]);
            if (message.node != null && message.node.length)
                for (let i = 0; i < message.node.length; ++i)
                    $root.onnx.NodeProto.encode(message.node[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.doc_string != null && Object.hasOwnProperty.call(message, "doc_string"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.doc_string);
            if (message.opset_import != null && message.opset_import.length)
                for (let i = 0; i < message.opset_import.length; ++i)
                    $root.onnx.OperatorSetIdProto.encode(message.opset_import[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.domain);
            if (message.attribute_proto != null && message.attribute_proto.length)
                for (let i = 0; i < message.attribute_proto.length; ++i)
                    $root.onnx.AttributeProto.encode(message.attribute_proto[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FunctionProto message, length delimited. Does not implicitly {@link onnx.FunctionProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof onnx.FunctionProto
         * @static
         * @param {onnx.IFunctionProto} message FunctionProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FunctionProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FunctionProto message from the specified reader or buffer.
         * @function decode
         * @memberof onnx.FunctionProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {onnx.FunctionProto} FunctionProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FunctionProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.onnx.FunctionProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 4:
                    if (!(message.input && message.input.length))
                        message.input = [];
                    message.input.push(reader.string());
                    break;
                case 5:
                    if (!(message.output && message.output.length))
                        message.output = [];
                    message.output.push(reader.string());
                    break;
                case 6:
                    if (!(message.attribute && message.attribute.length))
                        message.attribute = [];
                    message.attribute.push(reader.string());
                    break;
                case 11:
                    if (!(message.attribute_proto && message.attribute_proto.length))
                        message.attribute_proto = [];
                    message.attribute_proto.push($root.onnx.AttributeProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.node && message.node.length))
                        message.node = [];
                    message.node.push($root.onnx.NodeProto.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.doc_string = reader.string();
                    break;
                case 9:
                    if (!(message.opset_import && message.opset_import.length))
                        message.opset_import = [];
                    message.opset_import.push($root.onnx.OperatorSetIdProto.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FunctionProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof onnx.FunctionProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {onnx.FunctionProto} FunctionProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FunctionProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FunctionProto message.
         * @function verify
         * @memberof onnx.FunctionProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FunctionProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.input != null && message.hasOwnProperty("input")) {
                if (!Array.isArray(message.input))
                    return "input: array expected";
                for (let i = 0; i < message.input.length; ++i)
                    if (!$util.isString(message.input[i]))
                        return "input: string[] expected";
            }
            if (message.output != null && message.hasOwnProperty("output")) {
                if (!Array.isArray(message.output))
                    return "output: array expected";
                for (let i = 0; i < message.output.length; ++i)
                    if (!$util.isString(message.output[i]))
                        return "output: string[] expected";
            }
            if (message.attribute != null && message.hasOwnProperty("attribute")) {
                if (!Array.isArray(message.attribute))
                    return "attribute: array expected";
                for (let i = 0; i < message.attribute.length; ++i)
                    if (!$util.isString(message.attribute[i]))
                        return "attribute: string[] expected";
            }
            if (message.attribute_proto != null && message.hasOwnProperty("attribute_proto")) {
                if (!Array.isArray(message.attribute_proto))
                    return "attribute_proto: array expected";
                for (let i = 0; i < message.attribute_proto.length; ++i) {
                    let error = $root.onnx.AttributeProto.verify(message.attribute_proto[i]);
                    if (error)
                        return "attribute_proto." + error;
                }
            }
            if (message.node != null && message.hasOwnProperty("node")) {
                if (!Array.isArray(message.node))
                    return "node: array expected";
                for (let i = 0; i < message.node.length; ++i) {
                    let error = $root.onnx.NodeProto.verify(message.node[i]);
                    if (error)
                        return "node." + error;
                }
            }
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                if (!$util.isString(message.doc_string))
                    return "doc_string: string expected";
            if (message.opset_import != null && message.hasOwnProperty("opset_import")) {
                if (!Array.isArray(message.opset_import))
                    return "opset_import: array expected";
                for (let i = 0; i < message.opset_import.length; ++i) {
                    let error = $root.onnx.OperatorSetIdProto.verify(message.opset_import[i]);
                    if (error)
                        return "opset_import." + error;
                }
            }
            if (message.domain != null && message.hasOwnProperty("domain"))
                if (!$util.isString(message.domain))
                    return "domain: string expected";
            return null;
        };

        /**
         * Creates a FunctionProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof onnx.FunctionProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {onnx.FunctionProto} FunctionProto
         */
        FunctionProto.fromObject = function fromObject(object) {
            if (object instanceof $root.onnx.FunctionProto)
                return object;
            let message = new $root.onnx.FunctionProto();
            if (object.name != null)
                message.name = String(object.name);
            if (object.input) {
                if (!Array.isArray(object.input))
                    throw TypeError(".onnx.FunctionProto.input: array expected");
                message.input = [];
                for (let i = 0; i < object.input.length; ++i)
                    message.input[i] = String(object.input[i]);
            }
            if (object.output) {
                if (!Array.isArray(object.output))
                    throw TypeError(".onnx.FunctionProto.output: array expected");
                message.output = [];
                for (let i = 0; i < object.output.length; ++i)
                    message.output[i] = String(object.output[i]);
            }
            if (object.attribute) {
                if (!Array.isArray(object.attribute))
                    throw TypeError(".onnx.FunctionProto.attribute: array expected");
                message.attribute = [];
                for (let i = 0; i < object.attribute.length; ++i)
                    message.attribute[i] = String(object.attribute[i]);
            }
            if (object.attribute_proto) {
                if (!Array.isArray(object.attribute_proto))
                    throw TypeError(".onnx.FunctionProto.attribute_proto: array expected");
                message.attribute_proto = [];
                for (let i = 0; i < object.attribute_proto.length; ++i) {
                    if (typeof object.attribute_proto[i] !== "object")
                        throw TypeError(".onnx.FunctionProto.attribute_proto: object expected");
                    message.attribute_proto[i] = $root.onnx.AttributeProto.fromObject(object.attribute_proto[i]);
                }
            }
            if (object.node) {
                if (!Array.isArray(object.node))
                    throw TypeError(".onnx.FunctionProto.node: array expected");
                message.node = [];
                for (let i = 0; i < object.node.length; ++i) {
                    if (typeof object.node[i] !== "object")
                        throw TypeError(".onnx.FunctionProto.node: object expected");
                    message.node[i] = $root.onnx.NodeProto.fromObject(object.node[i]);
                }
            }
            if (object.doc_string != null)
                message.doc_string = String(object.doc_string);
            if (object.opset_import) {
                if (!Array.isArray(object.opset_import))
                    throw TypeError(".onnx.FunctionProto.opset_import: array expected");
                message.opset_import = [];
                for (let i = 0; i < object.opset_import.length; ++i) {
                    if (typeof object.opset_import[i] !== "object")
                        throw TypeError(".onnx.FunctionProto.opset_import: object expected");
                    message.opset_import[i] = $root.onnx.OperatorSetIdProto.fromObject(object.opset_import[i]);
                }
            }
            if (object.domain != null)
                message.domain = String(object.domain);
            return message;
        };

        /**
         * Creates a plain object from a FunctionProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof onnx.FunctionProto
         * @static
         * @param {onnx.FunctionProto} message FunctionProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FunctionProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.input = [];
                object.output = [];
                object.attribute = [];
                object.node = [];
                object.opset_import = [];
                object.attribute_proto = [];
            }
            if (options.defaults) {
                object.name = "";
                object.doc_string = "";
                object.domain = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.input && message.input.length) {
                object.input = [];
                for (let j = 0; j < message.input.length; ++j)
                    object.input[j] = message.input[j];
            }
            if (message.output && message.output.length) {
                object.output = [];
                for (let j = 0; j < message.output.length; ++j)
                    object.output[j] = message.output[j];
            }
            if (message.attribute && message.attribute.length) {
                object.attribute = [];
                for (let j = 0; j < message.attribute.length; ++j)
                    object.attribute[j] = message.attribute[j];
            }
            if (message.node && message.node.length) {
                object.node = [];
                for (let j = 0; j < message.node.length; ++j)
                    object.node[j] = $root.onnx.NodeProto.toObject(message.node[j], options);
            }
            if (message.doc_string != null && message.hasOwnProperty("doc_string"))
                object.doc_string = message.doc_string;
            if (message.opset_import && message.opset_import.length) {
                object.opset_import = [];
                for (let j = 0; j < message.opset_import.length; ++j)
                    object.opset_import[j] = $root.onnx.OperatorSetIdProto.toObject(message.opset_import[j], options);
            }
            if (message.domain != null && message.hasOwnProperty("domain"))
                object.domain = message.domain;
            if (message.attribute_proto && message.attribute_proto.length) {
                object.attribute_proto = [];
                for (let j = 0; j < message.attribute_proto.length; ++j)
                    object.attribute_proto[j] = $root.onnx.AttributeProto.toObject(message.attribute_proto[j], options);
            }
            return object;
        };

        /**
         * Converts this FunctionProto to JSON.
         * @function toJSON
         * @memberof onnx.FunctionProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FunctionProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FunctionProto;
    })();

    return onnx;
})();

module.exports = $root;
