(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var store = require('./store');
var search = require('./search');
var render = require('./render');
var poulpe  = function () {};

poulpe.prototype.run = function(obj) {
	store.config(obj);
	search.s();
	render.render();
};

if(!window.poulpe){window.poulpe = poulpe};

module.exports = poulpe
},{"./render":2,"./search":3,"./store":4}],2:[function(require,module,exports){
var store = require('./store');
var render = function () {}
/**
 * 
 * @description  render the value.
 */
render.prototype.render = function () {
	for (var i = 0; i < Object.keys(store.a).length; i++) {
		var v = store.a[i], n = v[1].trim();
		if (store.data[n]) {
			this.draw(v, store.data);
		}
	}
}
/**
 * @param a : Value replace.
 * @param b : key in the html element
 * @description draw the html element
 */
render.prototype.draw = function(a,b){
	store.current = store.element.innerHTML.replace(a[0], b[a[1].trim()]);
	store.element.innerHTML = store.current;
}
module.exports = new render(); 
},{"./store":4}],3:[function(require,module,exports){
var store = require('./store');
var search = function () { }
/**
 * @desc search in the html this'{{}}' and store in array 
 */
search.prototype.s = function () {
	if (store.el === null) return;
	var el = document.querySelector(store.el);
	var regex = /(?:{{([^}]+)}})/g
	if (el.innerHTML.match(regex)) {
		var m;
		if (!store.old) store.old = el.innerHTML;
		store.element = el;
		while (m = regex.exec(el.innerHTML)) {
			store.a.push(m);
		}
	}
}
module.exports = new search()
},{"./store":4}],4:[function(require,module,exports){
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
},{}]},{},[1]);
