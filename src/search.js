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
