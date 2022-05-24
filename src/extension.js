const vscode = require('vscode');
const {parse} = require('meriyah');

function errorPopup(msg) {
	vscode.window.showInformationMessage('xyntax: error: ' + msg);
}

function activate(context) {
	function openAST() {
		if (vscode.window.activeTextEditor) {
			let text = vscode.window.activeTextEditor.document.getText();
			console.log(
				parse(text)
			);
		}
		else {
			errorPopup('open any file first');
		}
	}

	context.subscriptions.push(
		vscode.commands.registerCommand('xyntax.showAST', openAST)
	);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
