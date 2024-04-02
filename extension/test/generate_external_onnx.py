import onnx

onnx_model = onnx.load("./data/yolov5s.onnx")
print(f"domain: {onnx_model.domain}")
onnx.save_model(onnx_model, "./data/yolov5s_external/yolov5s.onnx", save_as_external_data=True, all_tensors_to_one_file=True, location="./external_tensor", size_threshold=0, convert_attribute=False)
