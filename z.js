window.onload = function() {
  var gp = function(b){
    let rez = /(?:{{([^}]+)}})/g;
    return rez.test(b.textContent);
  }
  var re = /(?:{{([^}]+)}})/g;

  var polate = function(data){
    var c = Array.from(document.querySelectorAll('[bind]'));
    c.forEach(function(b){
      if(gp(b)){
        var v = b.textContent;
        var m = null;
        while (m = re.exec(v)){
          if(data.hasOwnProperty(m[1]) && m[1] !== null){
              var e  = v.replace(m[0], data[m[1]]);
              b.textContent = e;
            }
        }
      }
    })
  }
  polate({
    me: "developper",
    age: "18"
  })

var ar = function(data){
  var c = Array.from(document.querySelectorAll('[bindA]'));
  c.forEach(function (b) {
    b.style = "visibility: hidden;"
    var v = b.textContent;
    var m = null;
    m = re.exec(v);
    var av = m[1];
    for (var i = 0; i < Object.keys(data).length; i++) {
      if(data[i][av] !== null){
        var e = b.cloneNode(true);
        let r = v.replace(m[0], data[i][av]);
        e.innerText = r;
        e.style = "visibility: visible";
        b.parentNode.append(e);
      }
    }
    b.remove();
  })
}

ar([{
  name: "e"
},{
  name: "r"
}])
}
