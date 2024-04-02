#!/bin/bash

set -e
ROOT_DIR=$(realpath $(dirname $(realpath "$0"))"/../")

#generate the JavaScript source code for onnx.proto3
browserify ${ROOT_DIR}/onnx_utils/onnx_pb.js  --outfile ${ROOT_DIR}/onnx_view/onnx_model.js
