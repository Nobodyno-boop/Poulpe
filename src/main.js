var store = require('./store');
var search = require('./search');
var render = require('./render');

var tjs  = function () {};

tjs.prototype.run = function(obj) {
	if(!typeof obj === "object"){
		throw new Error("is not a object");
	}
	if(!obj['el']){
		throw new Error("You need define 'el'.");
	}
	if(!obj['data']){
		throw new Error('You need define data object.');
	}
	if(!typeof obj['data'] === "object"){
		throw new Error("'Data' need a object");
	}
	store.el = obj.el;
	store.data = obj.data;
	search.s();
	render.render();
};

if(!window.tjs){window.tjs = tjs};
module.exports = tjs;