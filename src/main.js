  search = require('./search').default;
  render = require('./render').default;
  event = require('./events/event').default;

var tjs = {
    data: {},
    setData: function(data){
      if(typeof data == "object"){
        this.data = data;
        return this;
      }
    },
    render: function(){
      document.addEventListener('DOMContentLoaded', (z) => {
        let b = search.search();
        render.render(b, this.data);
      });
    }
}
if(!window.tjs){window.tjs = tjs;}
