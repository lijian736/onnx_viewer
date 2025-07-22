import * as vscode from 'vscode';
import { OnnxViewerProvider } from './onnx_viewer';

export function activate(context: vscode.ExtensionContext) {
	// Create QTron Output channel on activation for diagnostics
	const outputChannel = vscode.window.createOutputChannel('QTron');
	outputChannel.appendLine('[QTron] Extension activated');
	vscode.window.showInformationMessage('QTron extension activated');
	// Register ONNX editor providers
	context.subscriptions.push(OnnxViewerProvider.register(context));
}