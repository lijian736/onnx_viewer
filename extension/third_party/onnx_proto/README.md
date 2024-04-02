## Third party files

The following files are generateg by onnx-proto(https://github.com/chaosmail/onnx-proto)
 - `onnx_pb_closure.js`
 - `onnx_pb_es6.js`
 - `onnx_pb_commonjs.js`

 the generate bash is: `./pbjs -t static-module -w commonjs --es6 --keep-case -o onnx_pb_commonjs_keep_case.js onnx.proto3`

The file `onnx-metadata.json` is from https://github.com/lutzroeder/netron/blob/main/source/onnx-metadata.json
The file `onnx.proto3` is from https://github.com/onnx/onnx/blob/main/onnx/onnx.proto3