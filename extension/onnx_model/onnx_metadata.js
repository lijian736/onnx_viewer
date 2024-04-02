const metadata = require('../third_party/onnx_proto/onnx-metadata.json')

const onnxMetadata = class {

    /**
    * Generate the onnx medata data map
    * @returns it's a map: key: module name, value: submap.
    * submap:  key: operator name, value: the operator object list
    * 
    * for example: { "ai.onnx": { "AveragePool": [AvgPoolV1, AvgPoolV2, AvgPoolV3, ...],
    *                             "Conv": [ConvV1, ConvV2, ConvV3, ...],
    *                              .... },
    *                "com.microsoft": {......}}
    */
    static _generateOnnxMetadataMap() {
        if (onnxMetadata._onnxMetadataMap) {
            return onnxMetadata._onnxMetadataMap;
        }

        //the module map. key: module name, value: the op submap
        let moduleMap = new Map();
        for (const opItem of metadata) {
            if (!moduleMap.has(opItem.module)) {
                moduleMap.set(opItem.module, new Map());
            }

            const opMap = moduleMap.get(opItem.module);
            if (!opMap.has(opItem.name)) {
                opMap.set(opItem.name, []);
            }
            opMap.get(opItem.name).push(opItem);
        }

        onnxMetadata._onnxMetadataMap = moduleMap;
        return onnxMetadata._onnxMetadataMap;
    }

    /**
      * get the onnx op latest meta data by domain and version, which version is equal or less than the `imports` version
      * @param {string} name the op name
      * @param {string} domain the op domain
      * @param {map} imports the imports version map. key: domain, value: the required version
      * @returns the op metadata in file `onnx-metadata.json`
      */
    static type(name, domain, imports) {
        let metadataMap = onnxMetadata._generateOnnxMetadataMap();
        domain = domain || 'ai.onnx';
        let current = null;
        if (metadataMap.has(domain)) {
            const domainMoule = metadataMap.get(domain);
            if (domainMoule.has(name)) {
                for (const op of domainMoule.get(name)) {
                    const matchVersion = current ? current.version : -1;
                    const importVersion = imports.get(op.module) || 0;
                    if (importVersion >= op.version && matchVersion < op.version) {
                        current = op;
                    }
                }
            }
        }
        return current;
    }
};

module.exports = onnxMetadata;