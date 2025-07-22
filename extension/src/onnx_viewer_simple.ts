import * as vscode from 'vscode';
import { Utils } from 'vscode-uri';
import * as path from 'path';
import * as os from 'os';
import { execFile } from 'child_process';

// Shared output channel
let outputChannel: vscode.OutputChannel | undefined;

function getOutputChannel(): vscode.OutputChannel {
    if (!outputChannel) {
        outputChannel = vscode.window.createOutputChannel('QTron');
    }
    return outputChannel;
}

/**
 * Define the document (the data model) used for onnx files.
 */
class OnnxDocument implements vscode.CustomDocument {

    static async create(
        uri: vscode.Uri,
        backupId: string | undefined,
        extensionContext: vscode.ExtensionContext
    ): Promise<OnnxDocument | PromiseLike<OnnxDocument>> {
        const channel = getOutputChannel();
        channel.appendLine(`[QTron] Starting to load ONNX file: ${uri.fsPath}`);
        channel.show();
        
        // If we have a backup, read that. Otherwise read the resource from the workspace
        const dataFile = typeof backupId === 'string' ? vscode.Uri.parse(backupId) : uri;

        // Get configuration settings
        const config = vscode.workspace.getConfiguration('qtron');
        const enableSimplification = config.get<boolean>('enableSimplification') ?? true;

        channel.appendLine(`[QTron] Simplification enabled: ${enableSimplification}`);

        let fileData: Uint8Array;

        if (!enableSimplification) {
            channel.appendLine(`[QTron] Simplification disabled, loading original file`);
            fileData = await vscode.workspace.fs.readFile(dataFile);
            channel.appendLine(`[QTron] Successfully loaded original file (${fileData.length} bytes)`);
            return new OnnxDocument(uri, new Uint8Array(fileData));
        }

        // Simplification logic (if enabled)
        const inputPath = dataFile.fsPath;
        const tempDir = os.tmpdir();
        const tempFile = path.join(tempDir, `onnxsim_${Date.now()}_${Math.random().toString(36).slice(2)}.onnx`);
        const simplifyScript = extensionContext.asAbsolutePath(path.join('scripts', 'simplify_onnx.py'));
        const pythonPath = config.get<string>('pythonPath') || 'python';

        channel.appendLine(`[QTron] Script path: ${simplifyScript}`);
        channel.appendLine(`[QTron] Python path: ${pythonPath}`);
        channel.appendLine(`[QTron] Input path: ${inputPath}`);
        channel.appendLine(`[QTron] Temp file: ${tempFile}`);

        // Check if script exists
        try {
            await vscode.workspace.fs.stat(vscode.Uri.file(simplifyScript));
            channel.appendLine(`[QTron] Script found`);
        } catch (e) {
            channel.appendLine(`[QTron] Script not found, falling back to original file`);
            fileData = await vscode.workspace.fs.readFile(dataFile);
            return new OnnxDocument(uri, new Uint8Array(fileData));
        }

        // Try simplification with timeout and fallback
        try {
            channel.appendLine(`[QTron] Starting simplification process...`);
            
            await new Promise<void>((resolve, reject) => {
                const timeoutId = setTimeout(() => {
                    channel.appendLine(`[QTron] Simplification timed out`);
                    reject(new Error('Timeout'));
                }, 8000); // 8 second timeout

                const child = execFile(
                    pythonPath,
                    [simplifyScript, inputPath, tempFile],
                    { timeout: 7000 },
                    (error, stdout, stderr) => {
                        clearTimeout(timeoutId);
                        channel.appendLine(`[QTron] Command completed`);
                        channel.appendLine(`[QTron] stdout: ${stdout || '<empty>'}`);
                        channel.appendLine(`[QTron] stderr: ${stderr || '<empty>'}`);
                        
                        if (error) {
                            channel.appendLine(`[QTron] Error: ${error.message}`);
                            reject(error);
                        } else {
                            channel.appendLine(`[QTron] Simplification command succeeded`);
                            resolve();
                        }
                    }
                );
            });

            // Check if simplified file exists and read it
            try {
                await vscode.workspace.fs.stat(vscode.Uri.file(tempFile));
                fileData = await vscode.workspace.fs.readFile(vscode.Uri.file(tempFile));
                channel.appendLine(`[QTron] Using simplified file (${fileData.length} bytes)`);
                vscode.window.showInformationMessage('ONNX simplification succeeded');
            } catch (statError) {
                throw new Error('Simplified file not created');
            }
        } catch (err: any) {
            channel.appendLine(`[QTron] Simplification failed: ${err.message}, using original file`);
            fileData = await vscode.workspace.fs.readFile(dataFile);
            vscode.window.showWarningMessage('ONNX simplification failed, using original file');
        } finally {
            // Clean up temp file
            try {
                await vscode.workspace.fs.delete(vscode.Uri.file(tempFile));
                channel.appendLine(`[QTron] Cleaned up temp file`);
            } catch {}
        }

        channel.appendLine(`[QTron] Document creation completed`);
        return new OnnxDocument(uri, new Uint8Array(fileData));
    }

    private readonly _uri: vscode.Uri;
    private _documentData: Uint8Array;

    private constructor(uri: vscode.Uri, initialContent: Uint8Array) {
        this._uri = uri;
        this._documentData = initialContent;
    }

    public get uri() { return this._uri; }
    public get documentData(): Uint8Array { return this._documentData; }

    dispose(): void {
        getOutputChannel().appendLine(`[QTron] Document disposed: ${this._uri.fsPath}`);
    }
}

// Rest of the code remains the same...
// (I'll copy the rest from the original file)
