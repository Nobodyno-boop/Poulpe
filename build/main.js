(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./render":2,"./search":3,"./store":4}],2:[function(require,module,exports){
var store = require('./store');

function render(){
	this.render = function() {
		for(var i=0; i < Object.keys(store.a).length; i++){
			var v = store.a[i], n = v[1].trim();
			if(store.data[n]){
				this.draw(v, store.data);
			} 
		}
	},
	this.draw = function(a, b) {
		store.current = store.element.innerHTML.replace(a[0], b[a[1].trim()]);
		store.element.innerHTML =  store.current;
	}
}



module.exports = new render(); 
},{"./store":4}],3:[function(require,module,exports){
var store = require('./store');

module.exports = {
	s: function()  {
		if(store.el === null) return;
		var el = document.querySelector(store.el);
		var regex = /(?:{{([^}]+)}})/g
		if(el.innerHTML.match(regex)){
			var m;
			if(!store.old) store.old = el.innerHTML;
			store.element = el;
			while(m = regex.exec(el.innerHTML)){
				store.a.push(m);
			}
		}
	}
}
},{"./store":4}],4:[function(require,module,exports){
module.exports = {
	old: "",
	current: "",
	a: [],
	data: null,
	el: null,
	element: null
}
},{}]},{},[1]);
