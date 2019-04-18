let _confirmDialog = null;

class AppMem {
	static get confirmDialog() {
		return _confirmDialog;
	}

	static set confirmDialog(value) {
		_confirmDialog = value;
	}
}

module.exports = AppMem;
