(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
/* Polyfill indexOf. */
var indexOf;

if (typeof Array.prototype.indexOf === 'function') {
    indexOf = function (haystack, needle) {
        return haystack.indexOf(needle);
    };
} else {
    indexOf = function (haystack, needle) {
        var i = 0, length = haystack.length, idx = -1, found = false;

        while (i < length && !found) {
            if (haystack[i] === needle) {
                idx = i;
                found = true;
            }

            i++;
        }

        return idx;
    };
};


/* Polyfill EventEmitter. */
var EventEmitter = function () {
    this.events = {};
};

EventEmitter.prototype.on = function (event, listener) {
    if (typeof this.events[event] !== 'object') {
        this.events[event] = [];
    }

    this.events[event].push(listener);
};

EventEmitter.prototype.removeListener = function (event, listener) {
    var idx;

    if (typeof this.events[event] === 'object') {
        idx = indexOf(this.events[event], listener);

        if (idx > -1) {
            this.events[event].splice(idx, 1);
        }
    }
};

EventEmitter.prototype.emit = function (event) {
    var i, listeners, length, args = [].slice.call(arguments, 1);

    if (typeof this.events[event] === 'object') {
        listeners = this.events[event].slice();
        length = listeners.length;

        for (i = 0; i < length; i++) {
            listeners[i].apply(this, args);
        }
    }
};

EventEmitter.prototype.once = function (event, listener) {
    this.on(event, function g () {
        this.removeListener(event, g);
        listener.apply(this, arguments);
    });
};
module.exports = new EventEmitter();

},{}],2:[function(require,module,exports){
(function (global){
var store = require('./store');
var search = require('./search');
var render = require('./render');
var event = require('./event');
var poulpe  = function () {};

poulpe.prototype.run = function(obj) {
	store.config(obj);
	search.s();
	render.render();
};

/**
Event list
search: state match with text
match: state render
bind : state end
*/
poulpe.prototype.on = function(e, l){
	event.on(e,l);
}

if(global['process']){
	//with node
	module.exports = poulpe;
} else {
	//web browser
	window['poulpe'] = poulpe;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./event":1,"./render":3,"./search":4,"./store":5}],3:[function(require,module,exports){
var store = require('./store');
var event = require('./event')
var render = function () {}
/**
 *
 * @description  render the value.
 */
render.prototype.render = function () {
	for (var i = 0; i < Object.keys(store.a).length; i++) {
		var v = store.a[i], n = v[1].trim();
		if (store.data[n]) {
			event.emit("match", n, store.data[n]);
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
	if(store.IsHtml){
		store.current = store.element.innerHTML.replace(a[0], b[a[1].trim()]);
		store.element.innerHTML = store.current;
		event.emit( "bind" ,store.current);
	} else {
		store.current = store.element.replace(a[0], b[a[1].trim()]);
		store.element = store.current;
		event.emit( "bind", store.element);
	}

}
module.exports = new render();

},{"./event":1,"./store":5}],4:[function(require,module,exports){
var store = require('./store');
var event = require('./event');
var search = function () { }
/**
 * @desc search in the html this'{{}}' and store in array
 */
var regex = /(?:{{([^}]+)}})/g; // regex for text
search.prototype.s = function () {
	if (store.el === null) return;
	if(store.IsHtml){
		var el, m;
		if (typeof store.el === 'string' && store.el.includes("#")){
			 el = document.getElementById(store.el.replace("#", ""));
			 console.log(el);
		} else {
			 el = store.el;
		}
		if (el.innerHTML.match(regex)) {
			if (!store.old) store.old = el.innerHTML;
			store.element = el;
			wh(el.innerHTML);
		}
	} else {
		var el = store.el;
		if (el.match(regex)) {
			var m;
			if (!store.old) store.old = el;
			store.element = el;
			wh(el);
		}
	}
}

function wh(e){

	while (m = regex.exec(e)) {
		event.emit("search", m[0]);
		store.a.push(m);
	}
}
module.exports = new search()

},{"./event":1,"./store":5}],5:[function(require,module,exports){
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

},{}]},{},[2]);
