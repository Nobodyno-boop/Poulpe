const event = require('./events/event').default
const render = require('./render').default;
var search = (function(){
  return{
    textCached: "",
    search: function(option){
      if(!option){
        let a =[],
        regex = /(?:{{([^}]+)}})/g,
        e  = document.getElementsByTagName('tjs-render');
        this.textCached = e[0].innerHTML;
        if(e[0].innerHTML.match(regex)){
          let m;
          while(m = regex.exec(e[0].innerHTML)){
            a.push({e:e[0], m:m});
          }
          return a;
        }
      } else {
        switch (option) {
          case 'update':
            let regex = /(?:{{([^}]+)}})/g, m, e = document.getElementsByTagName('tjs-render'), a=[];
            e[0].innerHTML = this.textCached;
            if(e[0].innerHTML.match(regex)){
              while(m = regex.exec(e[0].innerHTML)){
                a.push({e:e, m:m});
              }
              return a;
            }
            break;
        }
      }
    }
  }

}());
export default search;
