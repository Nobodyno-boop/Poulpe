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