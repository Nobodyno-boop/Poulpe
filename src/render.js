const event = require('./events/event').default

var render = (function(window){
  return{
    render: function(r, d){
      for(let i=0; i < Object.keys(r).length; i++){
        let v = r[i].m[1].trim();
        if(d[v] != null) this.draw(r[i].e, d[v], r[i].m);
      }
      this.text = r.innerHTML;
    },
    draw: function(r, v, m){
      r.innerHTML = r.innerHTML.replace(m[0], v);
    }
  }
})(window);

export default render;
