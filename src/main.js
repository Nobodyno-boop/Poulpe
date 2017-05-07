var render = (function(){
  return{
    render: function(r, d){
      for(var i=0; i < Object.keys(r).length; i++){
        var v = r[i].m[1].trim();
        if(d[v] != null) this.draw(r[i].e, d[v], r[i].m);
      }
      this.text = r.innerHTML;
    },
    draw: function(r, v, m){
      r.innerHTML = r.innerHTML.replace(m[0], v);
    }
  }
})();
var search = (function(){
  return{
    textCached: [],
    search: function(html, option){
      if(!option){
        var a =[],
        regex = /(?:{{([^}]+)}})/g,
        e  = html;
        console.log(html);
        this.textCached.push({html:e, text: e.innerHTML});
        if(e.innerHTML.match(regex)){
          var m;
          while(m = regex.exec(e.innerHTML)){
            a.push({e:e, m:m});
          }
          return a;
        }
      }
    }
  }
})();
var error = (function(){
  return{
    error: function(text, code){
      console.log("[!] "+text+" {"+code+"} [!]");
    }
  }
}());

var tjs = {
    data: {},
    setData: function(data){
      if(typeof data == "object"){
        this.data = data;
        return this;
      } else {
        error.error("Data doesn't support.", "D1");
        return "";
      }
    },
    render: function(html){
      if(html){
        document.addEventListener('DOMContentLoaded', (z) => {;
          var b = search.search(html);

          render.render(b, this.data);
        });
      } else {
        html = document.getElementsByTagName('tjs-render');
        if(!html[0]){
          error.error("Render imposible cause with no tjs-render or html tag valid.", "E1");
          return;
        }
        document.addEventListener('DOMContentLoaded', (z) => {
          var b = search.search(html[0]);
          render.render(b, this.data);
        });
      }
    }
};
if(!window.tjs){window.tjs = tjs;}
