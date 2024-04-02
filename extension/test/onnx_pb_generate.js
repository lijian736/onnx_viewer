const { verify } = require("crypto");
const fs = require("fs")
const root = require('../third_party/onnx_proto/onnx_pb_commonjs.js')

var onnxArrayBuffer = fs.readFileSync("./data/dead_code.onnx")
let onnxData = new Uint8Array(onnxArrayBuffer)

//read properties and print
let model = root.onnx.ModelProto.decode(onnxData);

//verify, null indicates everything is ok
let verifyInfo = root.onnx.ModelProto.verify(model);
console.log("verify returns: ", verifyInfo);
if(verifyInfo !== null){
    console.log("verify model fail: %s", verifyInfo);
    return;
}

console.log("ir version: ", model.ir_version.toString());
console.log("Producer name: ", model.producer_name);
console.log("Producer version: ", model.producer_version);
console.log("domain: ", model.domain);
console.log("doc: ", model.doc_string);

let graph = model.graph;

console.log("ValueInfo list:");
let valueInfos = graph.value_info;
valueInfos.forEach((value, index, array) => {
    console.log("%d: %s", index, value.name);
});

console.log("Initializer list:");
let initializers = graph.initializer;
initializers.forEach((value, index, array) => {
    console.log("Initializer[%d]: %s", index, value.name);
    console.log("External data:");
    let externals = value.external_data;
    externals.forEach((exter, exterIndex, exterArray)=>{
        console.log("%s: %s", exter.key, exter.value);
    });
});

console.log("Nodes list:")
let nodes = graph.node;
nodes.forEach((node, index, array) => {
    console.log("%d: %s - %s", index, node.op_type, node.name)
    //the inputs of this node
    let inputs = node.input;
    inputs.forEach((input, inputIndex, arr) => {
        console.log("\tinput[%d] - %s", inputIndex, input);
    });

    //the attributes of this node
    let attrs = node.attribute;
    attrs.forEach((attr, index, array) => {
        console.log("\tattribute[%d] - %s", index, attr.name);
    });
});

console.log("Graph inputs(including initializers):");
graph.input.forEach((input, index, array) => {
    console.log("Graph input[%d] - %s", index, input.name);
});


console.log("quantization annotations:");
let annotations = graph.quantization_annotation;
annotations.forEach((anno, index, array) => {
    console.log("quantization annotation: [%d] - %s", index, anno.tensor_tame);
    let quants = anno.quant_parameter_tensor_names;
    quants.forEach((quant, index, arr) => {
        console.log("\tquant: %s - %s", quant.key, quant.value);
    });
});

//modify the onnx model properties
model.doc_string = "test onnx model";
model.domain = "ai.onnx";
model.producer_name = "";
model.producer_version = "";
model.graph.doc_string = "";

//verify, null indicates everything is ok
verifyInfo = root.onnx.ModelProto.verify(model);
console.log("verify returns: ", verifyInfo);


//write back to the model
let writer = root.onnx.ModelProto.encode(model);
//the results is an Uint8Array
let results = writer.finish();
fs.writeFileSync("./data/dead_code.onnx", results)