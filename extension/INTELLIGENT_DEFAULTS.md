# Intelligent Results Directory Configuration

## Overview
The updated `profile_model` function now uses intelligent defaults for the results directory, making it much more user-friendly and appropriate for different environments.

## Default Behavior Logic

### Priority 1: Next to ONNX File
```python
# If you have: /path/to/models/my_model.onnx
# Results will be saved to: /path/to/models/onnx_analysis_results/my_model/
```

### Priority 2: Temp Directory (Fallback)
```python
# If the model directory is not writable
# Results will be saved to: /tmp/qtron_onnx_analysis/my_model/
```

### Priority 3: Custom Directory (User Override)
```python
# User can specify custom path via VS Code settings
# Results will be saved to: [custom_path]/my_model/
```

## Configuration Examples

### VS Code Settings

#### Default (Intelligent)
```json
{
    "qtron.onnxToolResultsPath": ""
}
```
**Result**: Analysis results saved next to ONNX file

#### Custom Directory
```json
{
    "qtron.onnxToolResultsPath": "/Users/username/onnx_analysis"
}
```
**Result**: Analysis results saved to custom location

#### Project-relative Path
```json
{
    "qtron.onnxToolResultsPath": "./analysis_results"
}
```
**Result**: Analysis results saved relative to workspace

## File Structure Examples

### Example 1: Model in User Documents
```
📁 /Users/username/Documents/
├── my_model.onnx
└── onnx_analysis_results/          # ← Results directory created here
    └── my_model/
        ├── my_model.txt
        ├── my_model.csv
        └── my_model_shapes_only.onnx
```

### Example 2: Model in Read-only Location
```
📁 /usr/share/models/
├── system_model.onnx               # ← Read-only location
└── ...

📁 /tmp/qtron_onnx_analysis/        # ← Fallback location used
└── system_model/
    ├── system_model.txt
    ├── system_model.csv
    └── system_model_shapes_only.onnx
```

### Example 3: Custom Results Directory
```
📁 /Users/username/
├── models/
│   └── my_model.onnx
└── analysis_results/               # ← Custom directory from settings
    └── my_model/
        ├── my_model.txt
        ├── my_model.csv
        └── my_model_shapes_only.onnx
```

## Benefits of Intelligent Defaults

### ✅ User-Friendly
- **No configuration required** for basic usage
- **Results stay organized** with the source models
- **Predictable locations** for easy access

### ✅ Cross-Platform Compatible
- **Works on any OS** (Windows, macOS, Linux)
- **Handles permission issues** gracefully
- **Respects user workspace** structure

### ✅ Professional Behavior
- **No hardcoded paths** that won't work for other users
- **Follows software best practices** for data storage
- **Maintains clean workspace** organization

### ✅ Flexible
- **Easy to override** with custom paths
- **Supports relative paths** for project-based workflows
- **Handles edge cases** (read-only locations, permission issues)

## Migration from Old Behavior

### Before (Hardcoded)
```python
results_dir = "/local/mnt/workspace/users/sathya/projects/onnx-tool/results/"
# ❌ Only works on specific system
# ❌ Not configurable
# ❌ May not have write permissions
```

### After (Intelligent)
```python
if results_base_dir is None:
    model_dir = os.path.dirname(os.path.abspath(modelpath))
    results_base_dir = os.path.join(model_dir, "onnx_analysis_results")
    # Try to write, fallback to temp if needed
# ✅ Works everywhere
# ✅ Configurable
# ✅ Handles permissions gracefully
```

## Error Handling

The new implementation includes robust error handling:

1. **Write Test**: Tries to create a test file to verify write permissions
2. **Graceful Fallback**: Falls back to temp directory if write fails
3. **Clear Messaging**: Informs user where results are saved
4. **Directory Creation**: Automatically creates necessary directories

This ensures that onnx_tool analysis will always work, regardless of the environment or permissions, while providing sensible defaults that keep results organized and accessible.
