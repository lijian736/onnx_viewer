import sys
import onnx
from onnxsim import simplify

if len(sys.argv) != 3:
    print("Usage: python simplify_onnx.py <input.onnx> <output.onnx>")
    sys.exit(1)

input_path = sys.argv[1]
output_path = sys.argv[2]

model = onnx.load(input_path)
model_simp, check = simplify(model)
if not check:
    print("Simplified ONNX model could not be validated")
    sys.exit(2)
onnx.save(model_simp, output_path)
print(f"Simplified model saved to {output_path}")
