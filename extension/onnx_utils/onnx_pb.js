const proto = require('../third_party/onnx_proto/onnx_pb_commonjs')
const onnx = require('../onnx_model/onnx_model')

/**
 * Get the graphs and tensors external locations
 * @param {proto.onnx.ModelProto} model the onnx proto model
 * @returns {locations, graphs}, the external locations and the graphs in the model
 */
function getTensorExternalLocations(model) {
    let locations = new Set();

    const location = (tensor) => {
        if (tensor instanceof proto.onnx.SparseTensorProto) {
            location(tensor.indices);
        } else if (tensor.data_location === proto.onnx.TensorProto.DataLocation.EXTERNAL) {
            for (const entry of tensor.external_data) {
                if (entry.key === 'location') {
                    let loc = entry.value;
                    while(loc.startsWith("../")){
                        loc = loc.substring(3);
                    }
                    
                    locations.add(loc);
                }
            }
        }
    };

    let graphs = new Set();
    const queue = [model.graph];
    while (queue.length > 0) {
        const graph = queue.shift();
        for (const initializer of graph.initializer) {
            location(initializer);
        }

        for (const sparse_initializer of graph.sparse_initializer) {
            location(sparse_initializer);
        }

        for (const node of graph.node) {
            for (const attribute of node.attribute) {
                if (attribute.g) {
                    queue.push(attribute.g);
                } else if (attribute.t) {
                    location(attribute.t);
                } else if (attribute.sparse_tensor) {
                    location(attribute.sparse_tensor);
                } else if (attribute.graphs && attribute.graphs.length > 0) {
                    for (const graph of attribute.graphs) {
                        queue.push(graph);
                    }
                } else if (attribute.tensors && attribute.tensors.length > 0) {
                    for (const tensor of attribute.tensors) {
                        location(tensor);
                    }
                } else if (attribute.sparse_tensors && attribute.sparse_tensors.length > 0) {
                    for (const tensor of attribute.sparse_tensors) {
                        location(tensor);
                    }
                }
            }
        }

        graphs.add(graph);
    }

    return { locations: Array.from(locations), graphs: Array.from(graphs) };
}

/**
 * parse data, and return onnx.Model
 * @param {Uint8Array} data the raw data
 * @param {CallableFunction} the external tensors data callback function
 * @returns {onnx.Model} the onnx model
 */
var parseModel = async function (data, externalCallback) {
    let protoModel = proto.onnx.ModelProto.decode(data);
    let { locations, graphs } = getTensorExternalLocations(protoModel);
    let locationsMap = new Map();
    if(externalCallback){
        locationsMap = await externalCallback(locations);
    }

    let model = new onnx.Model(protoModel, graphs, locationsMap);
    return model;
}

if (typeof window !== 'undefined' && typeof window === 'object') {
    window.onnx = onnx;
    window.proto = proto;
    window.parseOnnxModel = parseModel;
    window.getExternalLocations = getTensorExternalLocations;
}

if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    module.exports = { onnx: onnx, proto: proto, parseOnnxModel: parseModel, getExternalLocations: getTensorExternalLocations };
}