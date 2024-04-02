import * as vscode from 'vscode';
import { Utils } from 'vscode-uri';

/**
 * Define the document (the data model) used for onnx files.
 * 
 * Represents a custom document used by a CustomEditorProvider.
 * Custom documents are only used within a given `CustomEditorProvider`. The lifecycle of a `CustomDocument` is
 * managed by the editor. When no more references remain to a `CustomDocument`, it is disposed of.
 */
class OnnxDocument implements vscode.CustomDocument {

    static async create(
        uri: vscode.Uri,
        backupId: string | undefined,
    ): Promise<OnnxDocument | PromiseLike<OnnxDocument>> {
        // If we have a backup, read that. Otherwise read the resource from the workspace
        const dataFile = typeof backupId === 'string' ? vscode.Uri.parse(backupId) : uri;
        const fileData = await vscode.workspace.fs.readFile(dataFile)
        return new OnnxDocument(uri, new Uint8Array(fileData));
    }

    // the file uri
    private readonly _uri: vscode.Uri;
    // the file data as an Uint8Array
    private _documentData: Uint8Array;

    /**
     * the constructor
     * @param uri the file uri
     * @param initialContent the file data
     */
    private constructor(
        uri: vscode.Uri,
        initialContent: Uint8Array,
    ) {
        this._uri = uri;
        this._documentData = initialContent;
    }

    public get uri() { return this._uri; }
    public get documentData(): Uint8Array { return this._documentData; }

    /**
     * Called by VS Code when there are no more references to the document.
     *
     * This happens when all editors for it have been closed.
     */
    dispose(): void {
    }
}

/**
 * Provider for ONNX viewer.
 *
 * ONNX ViewerProvider are used for `.onnx` files
 */
export class OnnxViewerProvider implements vscode.CustomReadonlyEditorProvider<OnnxDocument> {

    /**
     * register the provider
     * @param context the vscode extension context
     * @returns vscode.Disposable object
     */
    public static register(context: vscode.ExtensionContext): vscode.Disposable {

        return vscode.window.registerCustomEditorProvider(OnnxViewerProvider.viewType, new OnnxViewerProvider(context),
            {
                // For this extension, we enable `retainContextWhenHidden` which keeps the
                // webview alive even when it is not visible. You should avoid using this setting
                // unless is absolutely required as it does have memory overhead.
                webviewOptions: {
                    enableFindWidget: false,
                    retainContextWhenHidden: true,
                },
                supportsMultipleEditorsPerDocument: false,
            });
    }

    // viewType defined in contributes.customEditors of package.json
    private static readonly viewType = 'lijian.onnx.file.viewer';

    // Tracks all known webviews
    private readonly webviews = new WebviewCollection();

    constructor(
        private readonly _context: vscode.ExtensionContext
    ) { }


    /**
     * Create a new document for a given resource.
     *
     * `openCustomDocument` is called when the first time an editor for a given resource is opened. The opened
     * document is then passed to `resolveCustomEditor` so that the editor can be shown to the user.
     *
     * Already opened `CustomDocument` are re-used if the user opened additional editors. When all editors for a
     * given resource are closed, the `CustomDocument` is disposed of. Opening an editor at this point will
     * trigger another call to `openCustomDocument`.
     * 
     * @param uri uri of the document to open.
     * @param openContext additional information about the opening custom document.
     * @param _token 
     * @returns OnnxDocument Promise
     */
    async openCustomDocument(
        uri: vscode.Uri,
        openContext: { backupId?: string },
        _token: vscode.CancellationToken
    ): Promise<OnnxDocument> {
        const document: OnnxDocument = await OnnxDocument.create(uri, openContext.backupId);
        return document;
    }

    /**
     * Resolve a custom editor for a given resource
     * This is called whenever the user opens a new editor for this `CustomEditorProvider`.
     * 
     * @param document document for the resource being resolved.
     * @param webviewPanel The webview panel used to display the editor UI for this resource.
     * @param _token A cancellation token that indicates the result is no longer needed.
     */
    async resolveCustomEditor(
        document: OnnxDocument,
        webviewPanel: vscode.WebviewPanel,
        _token: vscode.CancellationToken
    ): Promise<void> {
        // Add the webview to our internal set of active webviews
        this.webviews.add(document.uri, webviewPanel);

        // Setup initial content for the webview
        webviewPanel.webview.options = {
            enableScripts: true,
        };

        // Init the html contents
        webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview);

        // Wait for the webview to be properly ready before we init
        webviewPanel.webview.onDidReceiveMessage(e => {
            if (e.type === 'ready') {
                this.postMessage(webviewPanel, 'init', {
                    modelData: document.documentData,
                    modelName: Utils.basename(document.uri)
                });
            } else if (e.type === 'error') {
                if (!e.message) {
                    vscode.window.showErrorMessage(e.message);
                }
            } else if (e.type === 'external_tensor') {
                let locations = e.external_locations;

                for (let loc of locations) {
                    let externalURI = Utils.joinPath(Utils.dirname(document.uri), loc);
                    vscode.workspace.fs.readFile(externalURI).then((data) => {
                        this.postMessage(webviewPanel, 'external_tensor', {
                            tensorData: new Uint8Array(data),
                            location: loc
                        });
                    }, (err)=>{
                        vscode.window.showErrorMessage(err.message);
                        this.postMessage(webviewPanel, 'external_tensor', {
                            tensorData: new Uint8Array(),
                            location: loc
                        });
                    });
                }
            } else if (e.type === 'export') {
                //the export file name
                let fileName = e.fileName;
                //the data, Uint8Array
                let exportData = e.data;

                let dotIndex = fileName.lastIndexOf(".");
                let date = new Date();

                let year = date.getFullYear();
                let month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
                let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

                fileName = fileName.substring(0, dotIndex) + "_" + year + month + day + "_" + hour + minutes + seconds + fileName.substring(dotIndex);

                let savedUri = Utils.joinPath(Utils.dirname(document.uri), fileName);
                vscode.workspace.fs.writeFile(savedUri, exportData).then((data) => {
                    vscode.window.showInformationMessage("Saved File: " + savedUri.path);
                })
            }
        });
    }

    private postMessage(panel: vscode.WebviewPanel, type: string, body: any): void {
        panel.webview.postMessage({ type, body });
    }

    /**
     * Get the static HTML used for in our editor's webviews.
     */
    private getHtmlForWebview(webview: vscode.Webview): string {
        // Local path to script and css for the webview
        const baseScriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._context.extensionUri, 'onnx_view', 'base.js'));

        const dagreScriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._context.extensionUri, 'onnx_view', 'dagre.js'));

        const grapherScriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._context.extensionUri, 'onnx_view', 'grapher.js'));

        const hostScriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._context.extensionUri, 'onnx_view', 'host.js'));

        const onnxModelScriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._context.extensionUri, 'onnx_view', 'onnx_model.js'));

        const pythonScriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._context.extensionUri, 'onnx_view', 'python.js'));

        const onnxViewScriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._context.extensionUri, 'onnx_view', 'onnx_view.js'));

        const mainScriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._context.extensionUri, 'onnx_view', 'main.js'));

        const styleGrapherUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._context.extensionUri, 'onnx_view', 'grapher.css'));

        return /* html */`
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <title>onnx_viewer</title>
            <meta charset="utf-8">
            <meta name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, shrink-to-fit=no">
            <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src ${webview.cspSource} blob: data:; style-src ${webview.cspSource} 'unsafe-inline'; script-src ${webview.cspSource} 'unsafe-eval';">
            <link rel="shortcut icon" href="#" />
            
            <link rel="stylesheet" href="${styleGrapherUri}" />

            <script type="text/javascript" src="${baseScriptUri}"></script>
            <script type="text/javascript" src="${dagreScriptUri}"></script>
            <script type="text/javascript" src="${grapherScriptUri}"></script>
            <script type="text/javascript" src="${hostScriptUri}"></script>
            <script type="text/javascript" src="${onnxModelScriptUri}"></script>
            <script type="text/javascript" src="${pythonScriptUri}"></script>
            <script type="text/javascript" src="${onnxViewScriptUri}"></script>
            <script type="text/javascript" src="${mainScriptUri}"></script>
        
            <style>
                html { touch-action: none; overflow: hidden; width: 100%; height: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-rendering: optimizeLegibility; -webkit-text-rendering: optimizeLegibility; -moz-text-rendering: optimizeLegibility; -ms-text-rendering: optimizeLegibility; -o-text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; -moz-font-smoothing: antialiased; -ms-font-smoothing: antialiased; -o-font-smoothing: antialiased; }
                body { touch-action: none; overflow: hidden; width: 100%; height: 100%; margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", "Ubuntu", "Droid Sans", sans-serif, "PingFang SC"; font-size: 12px; text-rendering: geometricPrecision; }
                button { font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", "Ubuntu", "Droid Sans", sans-serif, "PingFang SC"; }
                .center { position: absolute; margin: auto; top: 0; right: 0; bottom: 0; left: 0; user-select: none; -webkit-user-select: none; -moz-user-select: none; }
                .select { user-select: text; -webkit-user-select: text; -moz-user-select: text; }
                .graph { display: flex; height: 100%; width: 100%; overflow: auto; outline: none; touch-action: pan-x pan-y; }
                .canvas { margin: auto; flex-shrink: 0; text-rendering: geometricPrecision; user-select: none; -webkit-user-select: none; -moz-user-select: none; }
                .default { background-color: #ffffff; }
                .default .logo { display: none; }
                .default .graph { display: flex; opacity: 1; }
                .default .toolbar { display: table; }
                .toolbar { position: absolute; bottom: 10px; left: 10px; padding: 0; margin: 0; user-select: none; -webkit-user-select: none; -moz-user-select: none; }
                .toolbar button:focus { outline: 0; }
                .toolbar-button { float: left; background: None; border-radius: 6px; border: 0; margin: 0; margin-right: 1px; padding: 0; fill: None; stroke: #777; cursor: pointer; width: 24px; height: 24px; user-select: none; }
                .toolbar-path { float: left }
                .toolbar-path-back-button { float: left; background: #777; border-top-left-radius: 6px; border-bottom-left-radius: 6px; border: 0px solid; border-color: #777; margin: 2px 0px 2px 8px; padding: 0 8px 0 8px; cursor: pointer; height: 20px; color: #ffffff; font-size: 11px; line-height: 0; transition: 0.1s; }
                .toolbar-path-back-button:hover { background: #000000; border-color: #000000; }
                .toolbar-path-name-button { float: left; background: #777; border: 0px solid; border-color: #777; color: #ffffff; border-left: 1px; border-left-color: #ffffff; margin: 2px 0 2px 1px; padding: 0 8px 0 8px; cursor: pointer; width: auto; height: 20px; font-size: 11px; line-height: 0; transition: 0.1s; }
                .toolbar-path-name-button:hover { background: #000000; border-color: #000000; }
                .toolbar-path-name-button:last-child { border-top-right-radius: 6px; border-bottom-right-radius: 6px; }
                .toolbar-icon .border { stroke: #fff; }
                .toolbar-icon .stroke { stroke: #808080; }
                .toolbar-icon:hover .stroke { stroke: #000000; }
                .welcome body { background-color: #ececec; }
                .welcome { background-color: #ececec; color: #242424; }
                .logo-icon { left: 0px; top: -18px; width: 106px; height: 106px; transition: 0.1s; }
                .logo-spinner { left: 0px; top: -18px; width: 106px; height: 106px; display: none; }
                .logo-stroke { stroke: #444444; }
                .logo-fill { fill: #444444; }
                .logo-border { stroke: #555555; }
                .logo-glyph { fill: #444444; }
                .logo-button { font-size: 12px; font-weight: bold; line-height: 1.25; text-align: center; vertical-align: middle; min-width: 5em; height: 2.7em; border-radius: 1.3em; transition: 0.1s; user-select: none; -webkit-user-select: none; -moz-user-select: none; color: #444444; background-color: #ececec; border: 1px solid #444444; }
                .logo-button:hover { color: #ececec; background-color: #444444; cursor: pointer; transition: 0.2s; }
                .logo-button:focus { outline: 0; }
                .progress { top: 120px; height: 2px; width: 400px; }
                .progress-bar { height: 100%; width: 0%; background-color: #444444; }
                .message .progress { display:none; }
                .welcome .graph { display: none; opacity: 0; }
                .welcome .menu { background-color: #ffffff; }
                .welcome.spinner .logo-spinner { display: block; -webkit-animation: orbit 0.5s infinite linear; animation: orbit 0.5s infinite linear; cursor: wait; }
                .welcome.spinner .menu-button { display: none; }
                .welcome.message .menu-button { display: none; }
                .titlebar { color: #aaaaaa; display: none; height: 32px; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 2; -webkit-app-region: drag; }
                .titlebar-visible { display: block; }
                .titlebar-content { display: block; padding: 0 142px; height: 100%; text-align: center; font-size: 14px; line-height: 32px; transition: all .1s ease-in-out; user-select: none; }
                .titlebar-content-text { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
                .spinner .titlebar-content { opacity: 0; }
                .active .titlebar { color: #464646; transition: all 0.05s ease-in-out; }
                .titlebar-control-box { display: none; align-items: center; flex-direction: row-reverse; height: 100%; position: absolute; top: 0; right: 0; width: 138px; }
                .titlebar-control-box-visible { display: flex; }
                .titlebar-icon { width: 1em; height: 1em; vertical-align: -0.15em; fill: currentColor; overflow: hidden; }
                .titlebar-button { display: flex; justify-content: center; align-items: center; width: 46px; height: 32px; user-select: none; -webkit-app-region: no-drag; }
                .titlebar-button:hover { color: #000000; background-color: rgba(0, 0, 0, 0.15); }
                .titlebar-button-close:hover { color: #ffffff; background-color: #b43029; }
                .menu-button { display: flex; justify-content: center; align-items: center; color: #aaaaaa; font-size: 20px; height: 32px; width: 32px; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 2; -webkit-app-region: no-drag; -webkit-app-region: no-drag; user-select: none; }
                .menu-button:hover { color: #000000; }
                .menu { display: block; position: absolute; left: -17em; width: 17em; top: 0; height: 100%; z-index: 2; background-color: #ececec; border-right: 1px solid rgba(255, 255, 255, 0.5); padding-top: 40px; padding-bottom: 2px; margin-left: 0; margin-top: 0; overflow: hidden; transition: 0.1s; }
                .menu .menu-group { margin-bottom: 12px; }
                .menu .menu-group .menu-group-header { display: block; border: none; border-radius: 0; color: black; width: 100%; text-align: left; margin: 4px 12px 5px 12px; white-space: no-wrap; font-size: 11px; font-weight: bold; color: #bbbbbb; white-space: nowrap; }
                .menu .menu-group .menu-command { display: block; border: none; border-radius: 0; background-color: transparent; color: black; width: 100%; text-align: left; padding: 4px 12px 5px 12px; font-size: 12px; }
                .menu .menu-group .menu-command:focus { color: #ffffff; background-color: #2e6bd2; outline: none; }
                .menu .menu-group .menu-command:disabled { color: #888888; }
                .menu .menu-group .menu-command .menu-label { display: block; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
                .menu .menu-group .menu-command .menu-shortcut { display: block; float: right; margin-left: 25px; color: #888888; }
                .menu .menu-group .menu-separator { border-top: 1px; border-bottom: 0; border-style: solid; border-color: #e5e5e5; margin-left: 12px; margin-right: 12px; }
                @-webkit-keyframes orbit { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }
                @keyframes orbit { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }
                .welcome.spinner .logo-spinner-stroke { stroke: #ececec; }
                .welcome.spinner .graph { display: flex; opacity: 0; }
                .welcome .toolbar { display: none; }
                @media (prefers-color-scheme: dark) {
                :root { color-scheme: dark; }
                .default { background-color: #404040; }
                .graph { background-color: #404040; }
                .welcome { background-color: #1e1e1e; color: #888888; }
                .logo-stroke { stroke: #888888; }
                .logo-fill { fill: #888888; }
                .logo-border { stroke: #000000; }
                .logo-glyph { fill: #888888; }
                .logo-spinner-stroke { stroke: #ffffff; }
                .logo-button { color: #888888; background-color: #1e1e1e; border-color: #888888; }
                .logo-button:hover { color: #1e1e1e; background-color: #888888; }
                .welcome .progress-bar { background-color: #888888; }
                .welcome .menu { background-color: #2d2d2d }
                .toolbar-icon .border { stroke: #1d1d1d; }
                .toolbar-icon .stroke { stroke: #aaaaaa; }
                .toolbar-icon:hover .stroke { stroke: #dfdfdf; }
                .toolbar-path-back-button { background: #aaaaaa; border-color: #aaaaaa; color: #333333; }
                .toolbar-path-back-button:hover { background: #dfdfdf; border-color: #dfdfdf; }
                .toolbar-path-name-button { background: #aaaaaa ; border-color: #aaaaaa; color: #404040; }
                .toolbar-path-name-button:hover { background: #dfdfdf; border-color: #dfdfdf; }
                .titlebar { color: #949494; }
                .welcome body { background-color: #1e1e1e; }
                .default body { background-color: #404040; }
                .active .titlebar { color: #c4c4c4; }
                .titlebar-button:hover { color: #ffffff; background-color: rgba(0, 0, 0, 0.15); }
                .titlebar-button-close:hover { color: #ffffff; background-color: #b43029; }
                .menu-button { color: #aaaaaa; }
                .menu-button:hover { color: #ffffff; }
                .menu { background-color: #2d2d2d; border-color: rgba(0, 0, 0, 0); }
                .menu .menu-group .menu-group-header { color: #666666; }
                .menu .menu-group .menu-command { color: #ffffff; }
                .menu .menu-group .menu-command:focus { color: #ffffff; background-color: #2e6bd2; }
                .menu .menu-group .menu-command:disabled { color: #888888; }
                .menu .menu-group .menu-command .shortcut { color: #888888; }
                .menu .menu-group .menu-separator { border-color: #363636; }
                }
                @media all and (max-width: 640px) {
                .logo { width: 240px; }
                .logo-icon { left: 0; top: 0; width: 128px; height: 128px; }
                .logo-spinner { left: 0; top: 0; width: 128px; height: 128px; }
                .progress { top: 160px; height: 2px; width: 100px; }
                }
                @media only screen and (max-device-width: 1024px) {
                .toolbar-button { width: 32px; height: 32px; }
                .toolbar-path-back-button { margin-top: 6px; margin-bottom: 6px; }
                .toolbar-path-name-button { margin-top: 6px; margin-bottom: 6px; }
                }
                .sidebar { display: flex; flex-direction: column; font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", "Ubuntu", "Droid Sans", sans-serif; font-size: 12px; height: 100%; right: -100%; position: fixed; transition: 0.1s; top: 0; background-color: #ececec; color: #242424; overflow: hidden; border-left: 1px solid rgba(255, 255, 255, 0.5); opacity: 0; }
                .sidebar-title { font-weight: bold; font-size: 12px; letter-spacing: 0.5px; text-transform: uppercase; height: 20px; margin: 0; padding: 20px; user-select: none; -webkit-user-select: none; -moz-user-select: none; }
                .sidebar-closebutton { padding: 8px 8px 8px 32px; text-decoration: none; font-size: 25px; color: #777777; opacity: 1.0; display: block; transition: 0.2s; position: absolute; top: 0; right: 15px; margin-left: 50px; user-select: none; -webkit-user-select: none; -moz-user-select: none; }
                .sidebar-closebutton:hover { color: #242424; }
                .sidebar-content { display: flex; flex-direction: column; flex-grow: 1; height: 0; }
                .sidebar-header { font-weight: bold; font-size: 11px; text-transform: uppercase; line-height: 1.25; margin-top: 16px; margin-bottom: 16px; border-bottom: 1px solid #ececec; display: block; user-select: none; -webkit-user-select: none; -moz-user-select: none; cursor: default; }
                .sidebar-object { flex-grow: 1; padding: 0px 20px 20px 20px; overflow-y: auto; }
                .sidebar-item { margin-bottom: 0px; display: block; }
                .sidebar-item-name { float: left; font-size: 11px; min-width: 95px; max-width: 95px; padding-right: 5px; padding-top: 7px; display: block; }
                .sidebar-item-name input { color: #777; font-family: inherit; font-size: inherit; color: inherit; background-color: inherit; width: 100%; text-align: right; margin: 0; padding: 0; border: 0; outline: none; text-overflow: ellipsis; }
                .sidebar-item-value-list { margin: 0; margin-left: 105px; overflow: hidden; display: block; padding: 0; }
                .sidebar-item-value { font-size: 11px; background-color: #fcfcfc; border-radius: 2px; border: 1px solid #fcfcfc; margin-top: 3px; margin-bottom: 3px; overflow: auto; }
                .sidebar-item-value-dark { background-color: #f8f8f8; border: 1px solid #f8f8f8; }
                .sidebar-item-value b { font-weight: bold; }
                .sidebar-item-value code { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; overflow: auto; white-space: pre-wrap; word-wrap: break-word; }
                .sidebar-item-value pre { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; margin: 0; overflow: auto; white-space: pre; word-wrap: normal; display: block; }
                .sidebar-item-value-line { padding: 4px 6px 4px 6px; }
                .sidebar-item-value-line-link { padding: 4px 6px 4px 6px; cursor: default; overflow-x: auto; }
                .sidebar-item-value-line-link:hover { text-decoration: underline; }
                .sidebar-item-value-line-border { padding: 4px 6px 4px 6px; border-top: 1px solid rgba(27, 31, 35, 0.05); }
                .sidebar-item-value-line-content { white-space: pre; word-wrap: normal; overflow: auto; display: block; }
                .sidebar-item-value-expander { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; float: right; color: #aaa; cursor: pointer; user-select: none; -webkit-user-select: none; -moz-user-select: none; padding: 4px 6px 4px 6px; }
                .sidebar-item-value-expander:hover { color: #000; }
                .sidebar-item-select {
                    font-family: inherit; font-size: 12px;
                    background-color: #fcfcfc; border: #fcfcfc; color: #333;
                    border-radius: 2px; width: 100%; height: 23px; padding: 3px 12px 3px 7px;
                    margin-top: 3px; margin-bottom: 3px; outline: none;
                    box-sizing: border-box; -moz-box-sizing: border-box;
                    appearance: none; -webkit-appearance: none; -moz-appearance: none;
                    background-image: linear-gradient(45deg, transparent 50%, #333 50%), linear-gradient(135deg, #333 50%, transparent 50%);
                    background-position: calc(100% - 12px) calc(10px), calc(100% - 7px) calc(10px);
                    background-size: 5px 5px, 5px 5px;
                    background-repeat: no-repeat;
                }
                .sidebar-separator { margin-bottom: 20px; }
                .sidebar-find-search { font-family: inherit; font-size: 13px; margin: 0px 20px 8px 20px; padding: 8px 16px 8px 16px; background: #fff; border-radius: 16px; border: 0; outline: 0; }
                .sidebar-find-content { flex-grow: 1; padding: 0px 20px 20px 20px; padding-right: 20px; overflow-y: auto; list-style-type: none; overflow-y: auto; margin: 0; }
                .sidebar-find-content li { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; margin: 0; padding: 5px 8px 5px 18px; outline: 0; white-space: nowrap; user-select: none; -webkit-user-select: none; -moz-user-select: none; }
                .sidebar-find-content li:hover { background: #e5e5e5; }
                .sidebar-documentation { flex-grow: 1; padding: 0px 20px 20px 20px; overflow-y: auto; font-size: 13px; line-height: 1.5; margin: 0; }
                .sidebar-documentation h1 { font-weight: bold; font-size: 13px; line-height: 1.25; border-bottom: 1px solid #e8e8e8; padding-bottom: 0.3em; margin-top: 0; margin-bottom: 16px; }
                .sidebar-documentation h2 { font-weight: bold; font-size: 11px; line-height: 1.25; margin-top: 20px; margin-bottom: 16px; text-transform: uppercase; border: 0; }
                .sidebar-documentation h3 { font-weight: bold; font-size: 11px; line-height: 1.25; }
                .sidebar-documentation p { margin-top: 4px; margin-bottom: 4px; margin-left: 0px; }
                .sidebar-documentation a { color: #237; }
                .sidebar-documentation code { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; background-color: rgba(27, 31, 35, 0.05); padding: 0.2em 0.4em; margin: 0; border-radius: 3px; }
                .sidebar-documentation pre { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; padding: 16px; overflow: auto; line-height: 1.45; background-color: rgba(27, 31, 35, 0.05); border-radius: 3px; }
                .sidebar-documentation pre code { font-size: 13px; padding: 16px; line-height: 1.45; background-color: transparent; padding: 0; border-radius: 0; }
                .sidebar-documentation tt { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-weight: bold; font-size: 90%; background-color: rgba(27, 31, 35, 0.05); border-radius: 3px; padding: 0.2em 0.4em; margin: 0; }
                .sidebar-documentation dl dt { font-size: 13px; font-weight: bold; padding: 0; margin-top: 16px; margin-left: 0px; }
                .sidebar-documentation dd { padding: 0 16px; margin-left: 0; margin-bottom: 16px; }
                .sidebar-documentation ul { margin-top: 6px; margin-bottom: 6px; padding-left: 20px; }
                .sidebar-documentation blockquote { margin-left: 15px; margin-right: 15px; }
                @media (prefers-color-scheme: dark) {
                    .sidebar html { color: #dfdfdf; }
                    .sidebar { background-color: #2d2d2d; color: #dfdfdf; border-left: 1px solid rgba(0, 0, 0, 0); }
                    .sidebar-closebutton { padding: 8px 8px 8px 32px; text-decoration: none; font-size: 25px; color: #777777; opacity: 1.0; display: block; transition: 0.2s; position: absolute; top: 0; right: 15px; margin-left: 50px; user-select: none; -webkit-user-select: none; -moz-user-select: none; }
                    .sidebar-closebutton:hover { color: #ffffff; }
                    .sidebar-item-value { background-color: #383838; border-color: #383838; }
                    .sidebar-item-value-dark { background-color: #3e3e3e; border-color: #3e3e3e; }
                    .sidebar-item-value-line-border { border-color: rgba(0, 0, 0, 0.09); }
                    .sidebar-item-select { background-color: #383838; border: #383838; color: #dfdfdf; background-image: linear-gradient(45deg, transparent 50%, #aaa 50%), linear-gradient(135deg, #aaa 50%, transparent 50%); }
                    .sidebar-header { border-bottom-color: #2d2d2d; color: #dfdfdf; }
                    .sidebar-documentation h1 { border-bottom: 1px solid #424242; color: #dfdfdf; }
                    .sidebar-documentation h2 { color: #dfdfdf; }
                    .sidebar-documentation p { color: #aaaaaa; }
                    .sidebar-documentation a { color: #6688aa; }
                    .sidebar-documentation tt { background-color:#1e1e1e; }
                    .sidebar-documentation code { background-color: #1e1e1e; }
                    .sidebar-documentation pre { background-color: #1e1e1e; }
                    .sidebar-find-search { background: #383838; color: #dfdfdf; border-color: #424242; }
                    .sidebar-find-content li:hover { background: #383838; }
                }
                @media screen and (prefers-reduced-motion: reduce) {
                .menu { transition: none; }
                .sidebar { transition: none; }
                }
            </style>
        </head>
        
        <body class="welcome spinner">
            <div id="graph" class="graph" tabindex="0">
                <svg id="canvas" class="canvas" preserveaspectratio="xMidYMid meet" width="100%" height="100%"></svg>
            </div>
            <div id="sidebar" class="sidebar">
                <h1 id="sidebar-title" class="sidebar-title"></h1>
                <a id="sidebar-closebutton" class="sidebar-closebutton" href="javascript:void(0)" draggable="false">&times;</a>
                <div id="sidebar-content" class="sidebar-content"></div>
            </div>
            <div id="toolbar" class="toolbar">
                <button id="sidebar-button" class="toolbar-button" title="Model Properties">
                    <svg class="toolbar-icon" viewbox="0 0 100 100">
                        <rect class="border" x="12" y="12" width="76" height="76" rx="16" ry="16" stroke-width="8"></rect>
                        <line class="border" x1="28" y1="37" x2="32" y2="37" stroke-width="8" stroke-linecap="round"
                            stroke="#fff"></line>
                        <line class="border" x1="28" y1="50" x2="32" y2="50" stroke-width="8" stroke-linecap="round"
                            stroke="#fff"></line>
                        <line class="border" x1="28" y1="63" x2="32" y2="63" stroke-width="8" stroke-linecap="round"
                            stroke="#fff"></line>
                        <line class="border" x1="40" y1="37" x2="70" y2="37" stroke-width="8" stroke-linecap="round"
                            stroke="#fff"></line>
                        <line class="border" x1="40" y1="50" x2="70" y2="50" stroke-width="8" stroke-linecap="round"
                            stroke="#fff"></line>
                        <line class="border" x1="40" y1="63" x2="70" y2="63" stroke-width="8" stroke-linecap="round"
                            stroke="#fff"></line>
                        <rect class="stroke" x="12" y="12" width="76" height="76" rx="16" ry="16" stroke-width="4"></rect>
                        <line class="stroke" x1="28" y1="37" x2="32" y2="37" stroke-width="4" stroke-linecap="round"></line>
                        <line class="stroke" x1="28" y1="50" x2="32" y2="50" stroke-width="4" stroke-linecap="round"></line>
                        <line class="stroke" x1="28" y1="63" x2="32" y2="63" stroke-width="4" stroke-linecap="round"></line>
                        <line class="stroke" x1="40" y1="37" x2="70" y2="37" stroke-width="4" stroke-linecap="round"></line>
                        <line class="stroke" x1="40" y1="50" x2="70" y2="50" stroke-width="4" stroke-linecap="round"></line>
                        <line class="stroke" x1="40" y1="63" x2="70" y2="63" stroke-width="4" stroke-linecap="round"></line>
                    </svg>
                </button>
                <button id="zoom-in-button" class="toolbar-button" title="Zoom In">
                    <svg class="toolbar-icon" viewbox="0 0 100 100">
                        <circle class="border" cx="50" cy="50" r="35" stroke-width="8" stroke="#fff"></circle>
                        <line class="border" x1="50" y1="38" x2="50" y2="62" stroke-width="8" stroke-linecap="round"
                            stroke="#fff"></line>
                        <line class="border" x1="38" y1="50" x2="62" y2="50" stroke-width="8" stroke-linecap="round"
                            stroke="#fff"></line>
                        <line class="border" x1="78" y1="78" x2="82" y2="82" stroke-width="12" stroke-linecap="square"
                            stroke="#fff"></line>
                        <circle class="stroke" cx="50" cy="50" r="35" stroke-width="4"></circle>
                        <line class="stroke" x1="50" y1="38" x2="50" y2="62" stroke-width="4" stroke-linecap="round"></line>
                        <line class="stroke" x1="38" y1="50" x2="62" y2="50" stroke-width="4" stroke-linecap="round"></line>
                        <line class="stroke" x1="78" y1="78" x2="82" y2="82" stroke-width="8" stroke-linecap="square"></line>
                    </svg>
                </button>
                <button id="zoom-out-button" class="toolbar-button" title="Zoom Out">
                    <svg class="toolbar-icon" viewbox="0 0 100 100">
                        <circle class="border" cx="50" cy="50" r="35" stroke-width="8" stroke="#fff"></circle>
                        <line class="border" x1="38" y1="50" x2="62" y2="50" stroke-width="8" stroke-linecap="round"
                            stroke="#fff"></line>
                        <line class="border" x1="78" y1="78" x2="82" y2="82" stroke-width="12" stroke-linecap="square"
                            stroke="#fff"></line>
                        <circle class="stroke" cx="50" cy="50" r="35" stroke-width="4"></circle>
                        <line class="stroke" x1="38" y1="50" x2="62" y2="50" stroke-width="4" stroke-linecap="round"></line>
                        <line class="stroke" x1="78" y1="78" x2="82" y2="82" stroke-width="8" stroke-linecap="square"></line>
                    </svg>
                </button>
                <div id="toolbar-path" class="toolbar-path">
                    <button id="toolbar-path-back-button" class="toolbar-path-back-button" title="Back">
                        &#x276E;
                    </button>
                </div>
            </div>
            <div id="logo" class="center logo">
                <a href="javascript:;" target="blank_">
                    <svg class="center logo-icon" viewbox="0 0 1024 1024">
                        <circle class="logo-stroke" cx="512" cy="512" r="431" fill="none" stroke-width="32"></circle>
                        <circle class="logo-border" cx="512" cy="512" r="450" fill="none" stroke-width="6"></circle>
                        <circle class="logo-border" cx="512" cy="512" r="412" fill="none" stroke-width="6"></circle>
                        <line class="logo-stroke" x1="296" y1="392" x2="540" y2="280" stroke-width="12"></line>
                        <line class="logo-stroke" x1="296" y1="632" x2="540" y2="280" stroke-width="12"></line>
                        <line class="logo-stroke" x1="296" y1="392" x2="540" y2="435" stroke-width="12"></line>
                        <line class="logo-stroke" x1="296" y1="632" x2="540" y2="435" stroke-width="12"></line>
                        <line class="logo-stroke" x1="296" y1="392" x2="540" y2="590" stroke-width="12"></line>
                        <line class="logo-stroke" x1="296" y1="632" x2="540" y2="590" stroke-width="12"></line>
                        <line class="logo-stroke" x1="296" y1="392" x2="540" y2="744" stroke-width="12"></line>
                        <line class="logo-stroke" x1="296" y1="632" x2="540" y2="744" stroke-width="12"></line>
                        <line class="logo-stroke" x1="540" y1="280" x2="785" y2="512" stroke-width="12"></line>
                        <line class="logo-stroke" x1="540" y1="590" x2="785" y2="512" stroke-width="12"></line>
                        <line class="logo-stroke" x1="540" y1="435" x2="785" y2="512" stroke-width="12"></line>
                        <line class="logo-stroke" x1="540" y1="744" x2="785" y2="512" stroke-width="12"></line>
                        <g transform="translate(296, 392)">
                            <circle class="logo-fill" cx="0" cy="0" r="51"></circle>
                            <circle class="logo-border" cx="0" cy="0" r="51" fill="none" stroke-width="6"></circle>
                        </g>
                        <g transform="translate(296, 632)">
                            <circle class="logo-fill" cx="0" cy="0" r="51"></circle>
                            <circle class="logo-border" cx="0" cy="0" r="51" fill="none" stroke-width="6"></circle>
                        </g>
                        <g transform="translate(540, 280)">
                            <circle class="logo-fill" cx="0" cy="0" r="51"></circle>
                            <circle class="logo-border" cx="0" cy="0" r="51" fill="none" stroke-width="6"></circle>
                        </g>
                        <g transform="translate(540, 435)">
                            <circle class="logo-fill" cx="0" cy="0" r="51"></circle>
                            <circle class="logo-border" cx="0" cy="0" r="51" fill="none" stroke-width="6"></circle>
                        </g>
                        <g transform="translate(540, 590)">
                            <circle class="logo-fill" cx="0" cy="0" r="51"></circle>
                            <circle class="logo-border" cx="0" cy="0" r="51" fill="none" stroke-width="6"></circle>
                        </g>
                        <g transform="translate(540, 744)">
                            <circle class="logo-fill" cx="0" cy="0" r="51"></circle>
                            <circle class="logo-border" cx="0" cy="0" r="51" fill="none" stroke-width="6"></circle>
                        </g>
                        <g transform="translate(785, 512)">
                            <circle class="logo-fill" cx="0" cy="0" r="51"></circle>
                            <circle class="logo-border" cx="0" cy="0" r="51" fill="none" stroke-width="6"></circle>
                        </g>
                    </svg>
                    <svg id="logo-spinner" class="center logo-spinner" viewbox="0 0 1024 1024">
                        <g transform="translate(512, 512)" style="opacity: 1">
                            <path class="logo-spinner-stroke" d="M-431,0 A-431,-431 0 0,1 0,-431" stroke-width="24" fill="None">
                            </path>
                        </g>
                    </svg>
                </a>
                <div class="center progress">
                    <div id="progress-bar" class="progress-bar"></div>
                </div>
                <!-- Preload fonts to workaround Chrome SVG layout issue -->
                <div style="font-weight: normal; color: rgba(0, 0, 0, 0.01); user-select: none;">.</div>
                <div style="font-weight: bold; color: rgba(0, 0, 0, 0.01); user-select: none;">.</div>
                <div style="font-weight: bold; color: rgba(0, 0, 0, 0.01); user-select: none;">.</div>
            </div>
            <div id="titlebar" class="titlebar">
                <svg style="position: absolute; width: 0px; height: 0px; overflow: hidden;" aria-hidden="true">
                    <symbol id="icon-arrow-right" viewBox="0 0 1024 1024">
                        <path
                            d="M698.75712 565.02272l-191.488 225.4848a81.73568 81.73568 0 0 1-62.48448 28.89728 81.89952 81.89952 0 0 1-62.40256-134.94272l146.432-172.4416-146.432-172.4416a81.92 81.92 0 0 1 124.88704-106.06592l191.488 225.4848a81.87904 81.87904 0 0 1 0 106.02496z">
                        </path>
                    </symbol>
                </svg>
                <div id="titlebar-content" class="titlebar-content">
                    <span id="titlebar-content-text" class="titlebar-content-text"></span>
                </div>
                <div id="titlebar-control-box" class="titlebar-control-box">
                    <div id="titlebar-close" class="titlebar-button titlebar-button-close" title="Close">
                        <svg class="titlebar-icon" aria-hidden="true">
                            <path
                                d="M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z">
                            </path>
                        </svg>
                    </div>
                    <div id="titlebar-toggle" class="titlebar-button" title="Maximize">
                        <svg id="titlebar-maximize" class="titlebar-icon" aria-hidden="true" style="position: absolute;">
                            <path d="M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z"></path>
                        </svg>
                        <svg id="titlebar-restore" class="titlebar-icon" aria-hidden="true" style="position: absolute;">
                            <path
                                d="m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z">
                            </path>
                        </svg>
                    </div>
                    <div id="titlebar-minimize" class="titlebar-button" title="Minimize">
                        <svg class="titlebar-icon" aria-hidden="true">
                            <path d="M 0,5 10,5 10,6 0,6 Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="menu" class="menu"></div>
            <div id="menu-button" class="menu-button">&#8801;</div>
        </body>
        </html>
			`;
    }
}

/**
 * Tracks all webviews.
 */
class WebviewCollection {

    /**
     * the webviews set
     */
    private readonly _webviews = new Set<{
        readonly resource: string;
        readonly webviewPanel: vscode.WebviewPanel;
    }>();

    /**
     * Add a new webview to the collection.
     * @param uri the uri of document
     * @param webviewPanel the WebviewPanel
     */
    public add(uri: vscode.Uri, webviewPanel: vscode.WebviewPanel) {
        const entry = { resource: uri.toString(), webviewPanel };
        this._webviews.add(entry);

        webviewPanel.onDidDispose(() => {
            this._webviews.delete(entry);
        });
    }
}