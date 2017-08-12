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