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