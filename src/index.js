var store = require('./store');
var search = require('./search');
var render = require('./render');
var poulpe  = function () {};

poulpe.prototype.run = function(obj) {
	store.config(obj);
	search.s();
	render.render();
};

module.exports = new poulpe()