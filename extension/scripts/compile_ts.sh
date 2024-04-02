#!/bin/bash
set -e
ROOT_DIR=$(realpath $(dirname $(realpath "$0"))"/../")

# Compile to ts file
# reference: https://github.com/timostamm/protobuf-ts/blob/main/MANUAL.md
npx protoc  \
    --proto_path=${ROOT_DIR}/third_party/onnx_proto/    \
    --ts_out=${ROOT_DIR}/src/   \
    --ts_opt=long_type_number   \
    --ts_opt=use_proto_field_name \
    --ts_opt=ts_nocheck \
    --ts_opt=eslint_disable \
    ${ROOT_DIR}/third_party/onnx_proto/onnx.proto3