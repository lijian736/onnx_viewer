const fs = require("fs")

const {proto, parseOnnxModel} = require('../onnx_utils/onnx_pb')

//read the Buffer from .onnx file
var onnxBuffer = fs.readFileSync("./data/yolov5s.onnx")
//create the Uint8Array object from the buffer
let onnxData = new Uint8Array(onnxBuffer)
//parse the Uint8Array, return the onnx model
let onnxModel = parseOnnxModel(onnxData);
//the proto model
let protoModel = onnxModel.protoModel;

console.log("the model basic info:");
console.log("\tformat:%s", onnxModel.format);
console.log("\tversion:%s", onnxModel.version);
console.log("\tproducer:%s", onnxModel.producer);
console.log("\tdescription:%s", onnxModel.description);
console.log("\tmetadata:");
for(let meta of onnxModel.metadata){
    console.log("\t\t%s : %s", meta.name, meta.value);
}

console.log("--------------------------------------")
console.log("the graphs info:")
for(let graph of onnxModel.graphs){
    console.log("Graph: %s", graph.name);
    console.log("\tdescription: %s", graph.description);
    console.log("\tinputs:");
    for(let input of graph.inputs){
        console.log("\t\tname: %s", input.name);
        for(let value of input.value){
            console.log("\t\tshape: %s", value.type.toString());
        }
    }
    console.log("\toutputs: ");
    for(let output of graph.outputs){
        console.log("\t\tname: %s", output.name);
        for(let value of output.value){
            console.log("\t\tshape: %s", value.type.toString());
        }
    }

    console.log("\nnodes: total - %d", graph.nodes.length);
    let nodeCount = new Map();
    for(let node of graph.nodes){
        nodeCount.set(node.type.name, (nodeCount.get(node.type.name) || 0) + 1);
    }
    for(let [key, value] of nodeCount){
        console.log("\t\t%s : %d", key, value);
    }
}

console.log("Pick the first node:");
let node = onnxModel.graphs[0].nodes[0];
console.log("\tnode name: %s", node.name);
console.log("\tnode type: %s", node.type.name);
for(let input of node.inputs){
    console.log("\tname: %s", input.name);
    for(let value of input.value){
        console.log("\t\tshape: %s", value.type.toString());
    }
}
console.log("\toutputs: ");
for(let output of node.outputs){
    console.log("\tname: %s", output.name);
    for(let value of output.value){
        console.log("\t\tshape: %s", value.type.toString());
    }
}


//modify the onnx model properties
protoModel.doc_string = "the yolov5s onnx model";
protoModel.domain = "ai.onnx";

//verify, null indicates everything is ok
verifyInfo = proto.onnx.ModelProto.verify(protoModel);
console.log("verify returns: ", verifyInfo);

//write back to the model
let writer = proto.onnx.ModelProto.encode(protoModel);
//the results is an Uint8Array
let results = writer.finish();
fs.writeFileSync("./data/yolov5s.onnx", results)


