from typing import List
import onnx_tool
import numpy
from onnx_tool.tensor import Tensor
from onnxsim import simplify
import onnx
import os
import sys

def profile_model(modelpath: str, results_base_dir: str = None, skip_simplification: bool = False):
    """
    Profile an ONNX model using onnx_tool
    
    Args:
        modelpath: Path to the ONNX model file
        results_base_dir: Base directory for saving results (optional)
        skip_simplification: Skip the internal simplification step if already simplified
    """
    
    # Use intelligent default results directory if not provided
    if results_base_dir is None:
        # Try to use a directory relative to the model location first
        model_dir = os.path.dirname(os.path.abspath(modelpath))
        results_base_dir = os.path.join(model_dir, "onnx_analysis_results")
        
        # If that's not writable, fall back to temp directory
        try:
            os.makedirs(results_base_dir, exist_ok=True)
            # Test if we can write to this directory
            test_file = os.path.join(results_base_dir, ".qtron_test")
            with open(test_file, 'w') as f:
                f.write("test")
            os.remove(test_file)
        except (OSError, PermissionError):
            # Fall back to temp directory
            import tempfile
            results_base_dir = os.path.join(tempfile.gettempdir(), "qtron_onnx_analysis")
    
    results_dir = os.path.join(results_base_dir, os.path.basename(modelpath).replace('.onnx',''))
    results_dir = results_dir + "/"
    
    print(f"Results directory: {results_dir}")
    if not os.path.exists(results_dir):
        os.makedirs(results_dir)
    
    print(f"Profiling ONNX model: {modelpath}")
    onnx_model = onnx.load(modelpath)
    
    # Skip simplification if requested (model is already simplified)
    if not skip_simplification:
        onnx_model = simplify(onnx_model)[0]  # optional simplification step
        onnx.save(onnx_model, modelpath)  # overwrite with simplified model
    
    input_proto = onnx_model.graph.input[0]
    input_name = input_proto.name
    input_shape_dims = input_proto.type.tensor_type.shape.dim
    input_shape = tuple(d.dim_value if (d.dim_value > 0) else 1 for d in input_shape_dims)

    m = onnx_tool.Model(modelpath)
    m.graph.shape_infer({input_name: numpy.zeros(input_shape)})  # update tensor shapes with new input tensor
    m.graph.profile()
    # m.graph.print_node_map()  # console print
    m.graph.print_node_map(results_dir + os.path.basename(modelpath.replace('.onnx','.txt')))  # save file

    m.graph.shape_infer({input_name: numpy.zeros(input_shape)})  # update new resolution
    m.graph.profile()
    m.graph.print_node_map(results_dir + os.path.basename(modelpath.replace('.onnx','.csv')))  # csv file

    m.save_model(results_dir + os.path.basename(modelpath.replace('.onnx','_shapes_only.onnx')), shape_only=True)   # save model with updated shapes
                 # only with weight tensor shapes and dynamic tensor shapes
    # remove static weights, minimize storage space

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python onnx_prof_configurable.py <model_path> [results_base_dir] [skip_simplification]")
        sys.exit(1)
    
    model_path = sys.argv[1]
    results_base_dir = sys.argv[2] if len(sys.argv) > 2 else None
    skip_simplification = len(sys.argv) > 3 and sys.argv[3].lower() == 'true'
    
    profile_model(model_path, results_base_dir, skip_simplification)
