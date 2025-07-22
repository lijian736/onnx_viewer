import sys
import onnx
from onnxsim import simplify
import shutil
import os

# Add the onnx-tool-experiment directory to Python path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'onnx-tool-experiment'))

# Try to import the configurable profiling function
try:
    from workflow.onnx_prof_configurable import profile_model
    ONNX_TOOL_AVAILABLE = True
    print("✅ onnx_tool configurable version loaded")
except ImportError:
    try:
        from workflow.onnx_prof import profile_model
        ONNX_TOOL_AVAILABLE = True
        print("✅ onnx_tool standard version loaded")
    except ImportError as e:
        ONNX_TOOL_AVAILABLE = False
        print(f"Warning: onnx_tool not available ({e}), profiling will be skipped")

def main():
    if len(sys.argv) < 3:
        print("Usage: python simplify_onnx.py <input.onnx> <output.onnx> [enable_profiling] [results_dir]")
        sys.exit(1)

    input_path = sys.argv[1]
    output_path = sys.argv[2]
    enable_profiling = len(sys.argv) > 3 and sys.argv[3].lower() == 'true'
    results_dir = sys.argv[4] if len(sys.argv) > 4 else None

    print(f"Loading ONNX model: {input_path}")
    
    # Optimized workflow: Use profile_model which includes simplification + profiling
    if enable_profiling and ONNX_TOOL_AVAILABLE:
        try:
            print("Starting integrated onnx_tool analysis (includes simplification)...")
            
            # Use profile_model directly - it handles both simplification and profiling
            if 'onnx_prof_configurable' in sys.modules:
                # Use configurable version with custom results directory
                profile_model(input_path, results_dir if results_dir else None, skip_simplification=False)
            else:
                # Use original version with results directory
                if results_dir:
                    # If we have a custom results dir, we need to use the configurable version
                    print("Warning: Custom results directory specified but configurable version not available")
                profile_model(input_path, results_dir if results_dir else None)
            
            # Copy the processed model to output location
            # profile_model modifies the input file, so we need to copy it to the expected output
            shutil.copy2(input_path, output_path)
            
            # Determine where results were actually saved
            if results_dir:
                results_path = results_dir
            else:
                # Default behavior: next to model file or temp directory
                model_dir = os.path.dirname(os.path.abspath(input_path))
                results_path = os.path.join(model_dir, "onnx_analysis_results")
            
            model_name = os.path.basename(input_path).replace('.onnx', '')
            print("onnx_tool analysis (with simplification) completed successfully")
            print(f"Simplified model saved to: {output_path}")
            print(f"Profiling results saved to: {os.path.join(results_path, model_name)}/")
            
        except Exception as e:
            print(f"Warning: onnx_tool analysis failed, falling back to simplification only: {e}")
            # Fallback to simplification-only workflow
            _run_simplification_only(input_path, output_path)
    else:
        # Simplification-only workflow (when profiling disabled or onnx_tool unavailable)
        if enable_profiling and not ONNX_TOOL_AVAILABLE:
            print("Warning: onnx_tool profiling requested but onnx_tool is not available")
        print("Running simplification only...")
        _run_simplification_only(input_path, output_path)

def _run_simplification_only(input_path: str, output_path: str):
    """Run only ONNX simplification without profiling"""
    model = onnx.load(input_path)
    
    print("Simplifying ONNX model...")
    model_simp, check = simplify(model)
    if not check:
        print("Simplified ONNX model could not be validated")
        sys.exit(2)
    
    onnx.save(model_simp, output_path)
    print(f"Simplified model saved to {output_path}")

if __name__ == "__main__":
    main()
