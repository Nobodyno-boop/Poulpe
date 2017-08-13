var store = require('./store');
var search = function () { }
/**
 * @desc search in the html this'{{}}' and store in array 
 */
search.prototype.s = function () {
	if (store.el === null) return;
	var regex = /(?:{{([^}]+)}})/g;
	if(store.IsHtml){
		if (typeof store.el === 'string'){
			var el = document.querySelector(store.el);
		}else {
			var el = store.el;
		}
		if (el.innerHTML.match(regex)) {
			var m;
			if (!store.old) store.old = el.innerHTML;
			store.element = el;
			while (m = regex.exec(el.innerHTML)) {
				store.a.push(m);
			}
		}
	}else {
		var el = store.el;
		if (el.text.match(regex)) {
			var m;
			if (!store.old) store.old = el.text;
			store.element = el;
			while (m = regex.exec(el.text)) {
				store.a.push(m);
			}
		}
	}

}
module.exports = new search()