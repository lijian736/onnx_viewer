from typing import List, Optional
import onnx_tool
import numpy
from onnx_tool.tensor import Tensor
from onnxsim import simplify
import onnx
import os
import tempfile

def profile_model(modelpath: str, results_base_dir: Optional[str] = None):
    """
    Profile an ONNX model using onnx_tool
    
    Args:
        modelpath: Path to the ONNX model file
        results_base_dir: Base directory for saving results. If None, uses a default location.
    """
    
    # Use a more appropriate default results directory
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
            results_base_dir = os.path.join(tempfile.gettempdir(), "qtron_onnx_analysis")
    
    # Create model-specific subdirectory
    model_name = os.path.basename(modelpath).replace('.onnx', '')
    results_dir = os.path.join(results_base_dir, model_name) + "/"
    
    print(f"Results directory: {results_dir}")
    if not os.path.exists(results_dir):
        os.makedirs(results_dir)
    print(f"Profiling ONNX model: {modelpath}")
    onnx_model = onnx.load(modelpath)
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
    m.graph.print_node_map(results_dir+ os.path.basename(modelpath.replace('.onnx','.txt')))  # save file

    m.graph.shape_infer({input_name: numpy.zeros(input_shape)})  # update new resolution
    m.graph.profile()
    m.graph.print_node_map(results_dir+ os.path.basename(modelpath.replace('.onnx','.csv')))  # csv file

    m.save_model(results_dir+ os.path.basename(modelpath.replace('.onnx','_shapes_only.onnx')), shape_only=True)   # save model with updated shapes
                 # only with weight tensor shapes and dynamic tensor shapes
    # remove static weights, minimize storage space


# profile_model('/local/mnt/workspace/users/sathya/projects/efficientvit/experiment/onnx/efficientvit-b3-r288_relu.onnx')