var store = function () {
	this.old = "",
		this.current = "",
		this.a = [],
		this.data = null,
		this.el = null,
		this.element = null,
		this.IsHtml = true;
}

/**
 * @param object 
 * {el=> string: id, HTML element, or object => el :{text: string }
 * 
 * , data: object, html? =>default true. }
 * @desc set the config.
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
	if(obj['html'] != null && typeof obj['html'] === 'boolean'){
		this.IsHtml = obj['html'];
	}

	this.el = obj['el'];
	this.data = obj['data'];
}
module.exports = new store()