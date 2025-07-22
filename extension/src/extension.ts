import * as vscode from 'vscode';
import { OnnxViewerProvider } from './onnx_viewer';

export function activate(context: vscode.ExtensionContext) {
	// Register ONNX editor providers
	context.subscriptions.push(OnnxViewerProvider.register(context));
}