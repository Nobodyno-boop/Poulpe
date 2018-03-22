var store = function () {
		this.old = "",
		this.current = "",
		this.a = [],
		this.data = null,
		this.el = null,
		this.element = null,
		this.IsHtml = true;
		this.inProd = true;
}

/**
 * @param object
 * {el=> string: id, HTML element, or object => el :{text: string }
 *
 * , data: object, html? =>default true. }
 * @desc set the config.
 */
store.prototype.config = function (obj) {
	if (!typeof obj === "object") { //

	}
	if (!obj['el']) {
		throw new Error("You need define a value to  bind !");
	}
	if (!obj['data']) {
		throw new Error("You need define 'data' object.");
	}
	if (!typeof obj['data'] === "object") {
		throw new Error("'Data' need a object");
	}
	if(typeof obj['data'] === "array"){
		throw new Error("You can't use a array !")
	}

	if(typeof obj['el'] == "string" && !obj['el'].includes("#")){
		this.IsHtml = false;
	}

	this.el = obj['el'];
	this.data = obj['data'];
	if(obj['prod']){
		this.prod = true;
	}
}
module.exports = new store()
