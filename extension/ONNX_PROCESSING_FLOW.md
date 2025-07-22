# QTron ONNX Processing Flow Diagram

## Overview
This document illustrates the seamless ONNX processing workflow in QTron, showing how model simplification and onnx_tool analysis are integrated.

## Processing Flow Diagram

```mermaid
flowchart TD
    A[User Opens ONNX File] --> B{Check Configuration}
    B --> C[Read VS Code Settings]
    C --> D{onnx_tool Profiling Enabled?}
    
    D -->|No| E[Run Simplification Only]
    D -->|Yes| F[Check onnx_tool Availability]
    
    F --> G{onnx_tool Available?}
    G -->|No| H[Show Warning & Run Simplification Only]
    G -->|Yes| I[Run Integrated onnx_tool Analysis]
    
    I --> J[profile_model includes:]
    J --> K[• Load ONNX Model]
    K --> L[• Run onnxsim Simplification]
    L --> M[• Execute onnx_tool Profiling]
    M --> N[• Generate Analysis Reports]
    N --> O[Copy Processed Model to Output]
    
    E --> P[Load Original Model]
    P --> Q[Run onnxsim Simplification]
    Q --> R[Save Simplified Model]
    
    H --> P
    O --> S[Load Processed Model in Viewer]
    R --> S
    
    S --> T[Display Model in QTron Viewer]
    
    I --> U{Analysis Success?}
    U -->|No| V[Fallback to Simplification Only]
    U -->|Yes| O
    V --> P
    
    subgraph "Optimized Workflow (onnx_tool enabled)"
        I
        J
        K
        L
        M
        N
        O
    end
    
    subgraph "Fallback Workflow (simplification only)"
        P
        Q
        R
    end
    
    subgraph "Analysis Outputs"
        N --> Z1[Text Report (.txt)]
        N --> Z2[CSV Report (.csv)]
        N --> Z3[Shape-Only Model (.onnx)]
    end
    
    subgraph "Configuration Settings"
        C --> C1[qtron.enableSimplification]
        C --> C2[qtron.enableOnnxToolProfiling]
        C --> C3[qtron.onnxToolResultsPath]
        C --> C4[qtron.pythonPath]
    end
    
    style A fill:#e1f5fe
    style T fill:#c8e6c9
    style I fill:#fff3e0
    style S fill:#f3e5f5
    style D fill:#fff9c4
    style G fill:#fff9c4
```

## ASCII Flow Diagram (Alternative)

```
┌─────────────────────┐
│  User Opens ONNX    │
│       File          │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Read VS Code       │
│   Configuration     │
└──────────┬──────────┘
           │
           ▼
    ┌─────────────┐
    │Simplification│     NO
    │  Enabled?   ├─────────┐
    └──────┬──────┘         │
           │ YES             │
           ▼                 │
┌─────────────────────┐      │
│ Check Python &      │      │
│ Script Available    │      │
└──────────┬──────────┘      │
           │                 │
           ▼                 │
    ┌─────────────┐          │
    │Environment  │     NO   │
    │    OK?      ├──────────┤
    └──────┬──────┘          │
           │ YES             │
           ▼                 │
┌─────────────────────┐      │
│ Run onnxsim        │      │
│ Simplification     │      │
└──────────┬──────────┘      │
           │                 │
           ▼                 │
    ┌─────────────┐          │
    │Simplification│    NO   │
    │  Success?   ├──────────┤
    └──────┬──────┘          │
           │ YES             │
           ▼                 │
┌─────────────────────┐      │
│ Save Simplified     │      │
│     Model          │      │
└──────────┬──────────┘      │
           │                 │
           ▼                 │
    ┌─────────────┐          │
    │ onnx_tool   │     NO   │
    │ Profiling   ├──────────┤
    │ Enabled?    │          │
    └──────┬──────┘          │
           │ YES             │
           ▼                 │
┌─────────────────────┐      │
│ Check onnx_tool     │      │
│   Availability      │      │
└──────────┬──────────┘      │
           │                 │
           ▼                 │
    ┌─────────────┐          │
    │ onnx_tool   │     NO   │
    │ Available?  ├──────────┤
    └──────┬──────┘          │
           │ YES             │
           ▼                 │
┌─────────────────────┐      │
│ Run onnx_tool      │      │
│    Analysis        │      │
└──────────┬──────────┘      │
           │                 │
           ▼                 │
┌─────────────────────┐      │
│ Generate Reports:   │      │
│ • Text (.txt)       │      │
│ • CSV (.csv)        │      │
│ • Shape-only (.onnx)│      │
└──────────┬──────────┘      │
           │                 │
           ▼                 │
┌─────────────────────┐      │
│ Cleanup Temp Files  │      │
└──────────┬──────────┘      │
           │                 │
           ▼                 ▼
┌─────────────────────────────┐
│    Load Model in QTron      │
│        Viewer              │
└─────────────────────────────┘

Legend:
├─── Decision Point
├─── Process Step
└─── Terminal/Result

Configuration Settings:
• qtron.enableSimplification
• qtron.enableOnnxToolProfiling  
• qtron.onnxToolResultsPath
• qtron.pythonPath
```

## Detailed Process Steps

### 1. **Initialization Phase**
- User opens an ONNX file in VS Code
- QTron extension activates and reads configuration
- Determines processing pipeline based on user settings

### 2. **Workflow Selection**
**Option A: Optimized Workflow (onnx_tool enabled)**
- Checks onnx_tool availability in Python environment
- Runs `profile_model()` which includes:
  - Model loading
  - Automatic onnxsim simplification
  - Comprehensive onnx_tool analysis
  - Report generation (text, CSV, shape-only model)
- Copies processed model to expected output location

**Option B: Fallback Workflow (simplification only)**
- Used when onnx_tool profiling is disabled or unavailable
- Runs standalone onnxsim simplification
- Saves simplified model for visualization

### 3. **Visualization Phase**
- Loads the processed (optimized or simplified) model
- Displays interactive graph in QTron viewer
- Shows processing status and results location to user

### 4. **Error Handling**
- If onnx_tool analysis fails, automatically falls back to simplification-only
- Handles errors gracefully with fallback to original file
- Provides clear user feedback about what processing occurred

## Configuration Impact

| Setting | Impact on Flow |
|---------|----------------|
| `enableSimplification: false` | Skip simplification, load original file directly |
| `enableOnnxToolProfiling: false` | Skip analysis, proceed to visualization after simplification |
| `pythonPath: custom` | Use specified Python interpreter for processing |
| `onnxToolResultsPath: custom` | Save analysis results to specified directory |

## Error Handling Strategy

### Graceful Degradation
1. **Missing Dependencies**: Continue with available features
2. **Processing Failures**: Fallback to original file with warnings
3. **Timeout Protection**: Terminate long-running processes safely
4. **File System Issues**: Cleanup temporary files and report errors

### User Feedback
- Real-time status updates in VS Code Output Channel
- Success/warning notifications
- Detailed error information for troubleshooting
- Clear indication of which features are active/available

## Performance Considerations

### Processing Time
- **Simplification**: 1-10 seconds for typical models
- **onnx_tool Analysis**: 5-30 seconds depending on model complexity
- **Combined Workflow**: Optimized to run analysis on already-simplified model

### Resource Usage
- **Memory**: Temporary copies created for safe processing
- **Storage**: Analysis results saved to configurable location
- **CPU**: Processing occurs in background Python processes

## File Management

### Temporary Files
```
/tmp/onnxsim_[timestamp]_[random].onnx          # Simplified model
/tmp/[model]_for_profiling.onnx                 # Profiling copy
```

### Output Files
```
[results_path]/[model_name]/
├── [model_name].txt                            # Text report
├── [model_name].csv                            # CSV report
└── [model_name]_shapes_only.onnx              # Shape-only model
```

## Integration Benefits

### For End Users
- **Single Action**: Open file → Get visualization + analysis
- **Configurable**: Enable/disable features as needed
- **Transparent**: Clear feedback on what's happening
- **Safe**: Original files never modified

### For Developers
- **Modular**: Easy to extend or modify individual phases
- **Robust**: Comprehensive error handling and recovery
- **Testable**: Each phase can be tested independently
- **Maintainable**: Clear separation of concerns
