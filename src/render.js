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
