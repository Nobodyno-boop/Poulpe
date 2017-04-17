window.onload = function(){
    var regex =/(?:{{([^}]+)}})/g;
    var x =/(?:{{([^}]+)}})/g;
    var o = function(data){
        var c = Array.from(document.getElementsByTagName('*'));
        c.forEach(function(b){
            var tag = ['HTML', 'BODY', 'SCRIPT'];
            if(b.innerHTML.match(x) && !tag.includes(b.nodeName)){
                var m = null;
                while (m = regex.exec(b.innerText)) {
                    let v = m[1].trim();
                    if(data.hasOwnProperty(v) && data[v] !== null){
                        let p = b.innerHTML.replace(m[0], data[v]);
                        b.innerHTML = p;
                    }
                }
            }
        })
    }


    o({
        clara: "Je t'aime",
        name: "Cool",
        amour: "pz",
        link: "lol"
    })

    var oa = function(data){
        var c = Array.from(document.getElementsByTagName('*'));
        c.forEach(function(b){
            var tag = [
                "BODY", "HTML", "SCRIPT"
            ];
            if(regex.test(b.innerHTML)){
                if(!tag.includes(b.nodeName)){
                    var m = x.exec(b.innerText);
                    let v = m[1].trim();
                    b.hidden = true;
                    for (var i = 0; i < Object.keys(data).length; i++) {
                        if(data[i][v] !== null){
                            let p = b.cloneNode(true),
                            pe = p.innerHTML.replace(m[0], data[i][v]);
                            console.log(pe);
                            p.innerHTML = pe;
                            p.hidden = false;
                            b.parentNode.append(p);
                        }
                    }
                }
            }
        })
    }

// oa([
//     {
//         names: "Allan",
//         lol: "lol"
//     },
//     {
//         lol: "dzzs",
//         names: "Clara"
//     }
// ])
}
