# QTron Architecture & Data Flow Diagram

## System Architecture

```mermaid
graph TB
    subgraph "VS Code Extension"
        A[extension.ts] --> B[onnx_viewer.ts]
        B --> C[Configuration Reader]
        B --> D[Python Script Executor]
    end
    
    subgraph "Python Processing Layer"
        E[simplify_onnx.py] --> F[onnxsim]
        E --> G[onnx_prof_configurable.py]
        G --> H[onnx_tool.Model]
        H --> I[Analysis Engine]
    end
    
    subgraph "File System"
        J[Original ONNX] --> K[Temp Files]
        K --> L[Simplified ONNX]
        L --> M[Analysis Results]
    end
    
    subgraph "Viewer Components"
        N[onnx_view.js] --> O[Interactive Graph]
        P[onnx_model.js] --> Q[Model Parser]
    end
    
    D --> E
    E --> K
    M --> R[Results Directory]
    L --> N
    
    style A fill:#e3f2fd
    style E fill:#fff3e0
    style H fill:#e8f5e8
    style O fill:#fce4ec
```

## Data Flow Diagram

```mermaid
sequenceDiagram
    participant User
    participant VSCode as VS Code Extension
    participant Python as Python Scripts
    participant OnnxTool as onnx_tool
    participant FileSystem as File System
    participant Viewer as QTron Viewer
    
    User->>VSCode: Open ONNX file
    VSCode->>VSCode: Read configuration
    VSCode->>Python: Execute simplify_onnx.py
    
    alt Simplification enabled
        Python->>FileSystem: Load original ONNX
        Python->>Python: Run onnxsim
        Python->>FileSystem: Save simplified model
    end
    
    alt onnx_tool profiling enabled
        Python->>FileSystem: Create profiling copy
        Python->>OnnxTool: Run analysis
        OnnxTool->>OnnxTool: Generate reports
        OnnxTool->>FileSystem: Save analysis results
        Python->>FileSystem: Cleanup temp files
    end
    
    Python->>VSCode: Return processed model path
    VSCode->>Viewer: Load model for visualization
    Viewer->>User: Display interactive graph
    VSCode->>User: Show processing status
```

## Component Relationships

### Extension Layer
```
src/
├── extension.ts           # Entry point, extension activation
├── onnx_viewer.ts         # Main document provider, orchestrates processing
└── onnx3.ts              # Protocol buffer definitions
```

### Processing Layer
```
scripts/
├── simplify_onnx.py                    # Main processing script
└── onnx-tool-experiment/
    └── workflow/
        ├── onnx_prof.py                 # Original profiling function
        └── onnx_prof_configurable.py   # Enhanced configurable version
```

### Viewer Layer
```
onnx_view/
├── main.js               # WebView entry point
├── onnx_view.js          # Main visualization logic
├── onnx_model.js         # Model rendering
└── grapher.js            # Graph layout and interaction
```

### Model Layer
```
onnx_model/
├── onnx_model.js         # ONNX model abstraction
└── onnx_metadata.js      # Operator metadata and definitions
```

## Configuration Flow

```
User Settings (VS Code)
         ↓
    Configuration Reader
         ↓
┌─────────────────────┐
│ Processing Options  │
├─────────────────────┤
│ • enableSimplification
│ • enableOnnxToolProfiling  
│ • onnxToolResultsPath
│ • pythonPath
└─────────────────────┘
         ↓
    Script Parameters
         ↓
    Python Execution
```

## Error Handling Architecture

```mermaid
graph TD
    A[Error Occurs] --> B{Error Type}
    
    B -->|Python Missing| C[Show Error + Load Original]
    B -->|Script Missing| D[Show Error + Load Original]  
    B -->|Simplification Failed| E[Show Warning + Load Original]
    B -->|onnx_tool Missing| F[Show Warning + Continue]
    B -->|Analysis Failed| G[Show Warning + Continue]
    B -->|Timeout| H[Kill Process + Cleanup]
    
    C --> I[User Notification]
    D --> I
    E --> I
    F --> I
    G --> I
    H --> I
    
    I --> J[Graceful Degradation]
    J --> K[Viewer Loads Available Model]
```

## File Processing Pipeline

### Input Processing
1. **Original ONNX File** → Read by extension
2. **Temporary Copy** → Created for processing
3. **Configuration** → Applied to processing parameters

### Transformation Steps
1. **onnxsim Simplification** → Optimize model structure
2. **onnx_tool Analysis** → Generate performance metrics
3. **Report Generation** → Create text/CSV outputs
4. **Shape Extraction** → Create shape-only model

### Output Generation
1. **Simplified Model** → For visualization
2. **Analysis Reports** → For performance review
3. **Shape Model** → For structure analysis
4. **User Feedback** → Status and result notifications

## Integration Points

### VS Code Integration
- **Custom Editor Provider** → Handles .onnx file association
- **Configuration System** → User settings management
- **Output Channel** → Status and logging
- **Notification System** → User feedback

### Python Integration
- **execFile()** → Secure script execution
- **Parameter Passing** → Configuration to scripts
- **Error Capture** → stdout/stderr handling
- **Timeout Management** → Process lifecycle

### File System Integration
- **Temporary Files** → Safe processing workspace
- **Results Directory** → Organized output storage
- **Cleanup Logic** → Resource management
- **Path Resolution** → Cross-platform compatibility

This architecture ensures a robust, maintainable, and user-friendly integration of onnx_tool capabilities within the QTron ONNX viewer.
