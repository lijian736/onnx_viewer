# QTron ONNX Viewer

A lightweight VS Code extension for viewing and analyzing ONNX models, inspired by [Netron](https://github.com/lutzroeder/netron).

## Features

**Lightweight Model Viewing:**
- Automatically strips weights to make models lightweight for visualization
- Applies ONNX simplification (`onnxsim`) for cleaner graph visualization
- Fast loading and responsive UI

**Advanced Model Analysis (with onnx_tool integration):**
- Layer-wise profiling: MAC (Multiply-Accumulate) operations, parameters, and memory size
- Comprehensive analysis reports in TXT and CSV formats
- Shape-only ONNX files for efficient analysis
- Automated analysis alongside visualization - no separate tool invocation required

**Seamless Integration:**
- One-click analysis: Simply open any `.onnx` file in VS Code
- Intelligent configuration with smart defaults
- Configurable output paths and analysis options
- Graceful fallback when advanced tools are unavailable

## Quick Start

### Installation
```bash
./regen.sh
```

### Usage
1. Open any `.onnx` file in VS Code
2. The extension automatically:
   - Simplifies the model for better visualization
   - Runs comprehensive analysis (if onnx_tool is available)
   - Generates analysis reports in the same directory as your model

### Configuration
Access settings via VS Code preferences (`qtron.*`):
- `qtron.enableOnnxToolProfiling`: Enable/disable advanced profiling
- `qtron.onnxToolResultsPath`: Custom output directory for analysis results

## Analysis Output
When onnx_tool profiling is enabled, you'll get:
- `{model_name}_profile.txt`: Human-readable analysis summary
- `{model_name}_profile.csv`: Detailed layer-wise metrics
- `{model_name}_shapes_only.onnx`: Shape-optimized model file

## Requirements
- VS Code
- Python with ONNX support
- Optional: onnx_tool for advanced profiling (automatically installed via `regen.sh`)