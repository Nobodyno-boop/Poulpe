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
