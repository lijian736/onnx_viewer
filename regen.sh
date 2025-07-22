#!/bin/bash

rm /Users/sathya/Downloads/onnx_viewer/extension/qtron-1.0.1.vsix
cd /Users/sathya/Downloads/onnx_viewer/extension && rm -rf node_modules out package-lock.json && npm install && npm run compile
cd /Users/sathya/Downloads/onnx_viewer/extension && npx vsce package
cd /Users/sathya/Downloads/onnx_viewer/extension && code --install-extension qtron-1.0.1.vsix --force