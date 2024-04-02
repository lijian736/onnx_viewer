
// This script is run within the webview itself
(function () {
    const vscode = acquireVsCodeApi();

    //the onnx proto model
    let onnxProtoModel = null;
    //the onnx proto graphs
    let onnxProtoGraphs = null;
    //the onnx model name
    let onnxModelName = '';
    //the tensor external data map. key: location, value: Uint8Array
    let externalTensorMap = new Map();
    //the tensor external locations
    let externalTensorLocations = [];

    // Handle messages from the extension
    window.addEventListener('message', e => {
        const { type, body } = e.data;
        switch (type) {
            case 'init':
                {
                    //the onnx file content, Uint8Array
                    let onnxValue = body.modelData;
                    //the onnx file name
                    onnxModelName = body.modelName;

                    onnxProtoModel = window.proto.onnx.ModelProto.decode(onnxValue);
                    let { locations, graphs } = window.getExternalLocations(onnxProtoModel);

                    //refer to https://github.com/onnx/onnx/blob/main/docs/ExternalData.md
                    if (locations.length > 0) {
                        onnxProtoGraphs = graphs;
                        externalTensorMap.clear();
                        externalTensorLocations = locations;
                        //load tensor external data
                        vscode.postMessage({ type: 'external_tensor', external_locations: locations });
                    } else {
                        let model = new window.onnx.Model(onnxProtoModel, graphs, new Map());

                        let host = new window.host.BrowserHost(vscode);
                        let view = new window.View(host);
                        view.start().then((data) => {
                            view.open(model, onnxModelName);
                        }).catch((err) => {
                            console.log(err);
                        })
                    }

                    break;
                }

            case 'external_tensor': {
                //the external tensor data, Uint8Array
                let tensorData = body.tensorData;
                let loc = body.location;

                externalTensorMap.set(loc, tensorData);
                if (externalTensorMap.size == externalTensorLocations.length) {
                    let model = new window.onnx.Model(onnxProtoModel, onnxProtoGraphs, externalTensorMap);

                    let host = new window.host.BrowserHost(vscode);
                    let view = new window.View(host);
                    view.start().then((data) => {
                        view.open(model, onnxModelName);
                    }).catch((err) => {
                        console.log(err);
                    })
                }

                break;
            }

            default:
                {
                    break;
                }
        }
    });

    // Signal to VS Code that the webview is initialized.
    vscode.postMessage({ type: 'ready' });
}());
