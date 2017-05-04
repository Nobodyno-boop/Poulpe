var event = (function(){
    let listeners = new Map();
    let isFunction = function(obj) {
        return typeof obj == 'function' || false;
    };
    return{
      on: function(name, callback){
        listeners.has(name) || listeners.set(name, []);
        listeners.get(name).push(callback);
      },
      off: function(name, callback){
        let les = listeners.get(name), index;
        if(les && les.length){
          index = les.reduce((i, les, index) => {
            return (isFunction(les) && les === callback) ?
            i = index: i;
          }, -1);
          if(index >-1){
            les.splice(index, 1);
            listeners.set(name, les);
            return true;
          }
        }
        return false;
      },
      emit: function(name, ...args){
        let les = listeners.get(name);
        if(les && les.length){
          les.forEach( (e) =>{
            e(...args);
          });
          return true;
        }
        return false;
      }
    }

}());

export default event;
