// Simple test to check if the extension can activate and load files
const vscode = require('vscode');

async function testExtension() {
    console.log('Testing QTron extension...');
    
    // Try to get the configuration
    const config = vscode.workspace.getConfiguration('qtron');
    console.log('Config loaded:', config);
    
    // Try to create output channel
    const outputChannel = vscode.window.createOutputChannel('QTron-Test');
    outputChannel.appendLine('Test message');
    outputChannel.show();
    
    console.log('Extension test completed');
}

// Export for testing
module.exports = { testExtension };
