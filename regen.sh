#!/bin/bash

# Install onnx-tool in development mode
cd extension/scripts/onnx-tool-experiment
pip install -e .

# Go back to the main directory and then to extension folder
cd ../../../extension

# Remove old VSIX files if they exist
rm -f *.vsix

# Clean and rebuild extension
rm -rf node_modules out package-lock.json && npm install && npm run compile

# Package the extension
npx vsce package

# Install the extension
code --install-extension qtron-*.vsix --force