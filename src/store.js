var store = function () {
	this.old = "",
		this.current = "",
		this.a = [],
		this.data = null,
		this.el = null,
		this.element = null;
}

/**
 * @param object 
 * @see set the config.
 */
store.prototype.config = function (obj) {
	if (!typeof obj === "object") {
		throw new Error("Is not a object ! ");
	}
	if (!obj['el']) {
		throw new Error("You need define 'el'.");
	}
	if (!obj['data']) {
		throw new Error("You need define 'data' object.");
	}
	if (!typeof obj['data'] === "object") {
		throw new Error("'Data' need a object");
	}

	this.el = data['el'];
	this.data = data['data'];
}
module.exports = new store