Poulpe
===
Simple Data binding Javascript Project

# Feature
  - Data binding with text, id or dom Element
  - Simple and speed.
  - Multi Option
  - Event system

# How to use
import for the latest version
[poulpe.min.js](https://unpkg.com/poulpe@latest/dist/poulpe.min.js)

See the [Option](#option)

# id
*HTML code*.<br />
```
<div id="#e"> {{name}}</div>
```

*JavaScript code*.
```JavaScript
var poulpe = new poulpe();
poulpe.run({
	el: "#e",
	data: {
	 "name": "Poulpi"
	}
});
```
<br /><br /><br />

text
===

```JavaScript
var text = "Hey i'm a {{animal}}";
var poulpe = new poulpe();
poulpe.on('bind', function(value) {
  console.log(bind); // <= return Hey i'm a Octopus
});

poulpe.run({
	"el": text
	"data": {
	 "animal": "Octopus"
	}
});
```

dom
===
```
<footer> {{web}}</footer>
```

```JavaScript
var footer = document.getElementsByTagName('footer')[0]
var poulpe = new poulpe();
poulpe.run({
	"el": footer,
	"data": {
	 "web": "Copyright all reserved."
	}
});
```


  Other
===
 [change log](https://github.com/Poulpinounette/Poulpe/blob/master/CHANGELOG.md)

Todo
- *add "special" use for nodejs*
- *Support XHR request.*
- *Debug mod*
- [x] Event system
- *DomContentLoaded option*
- add dev mod and prod mod.

___
# Event State

  - search
  - match
  - bind

  Search return the value match, one argrument.

  Match return the search value and data, 2 argrument.

  Bind is the latest value when the bind have been set, one argrument.

  sample:

```JavaScript

var poulpe = new poulpe();
poulpe.on('search', function(search){
  console.log(search)
})



poulpe.on('match', function(a, b){
  console.log("search value" + a + " data value" b)
})


poulpe.on('bind', function(bind){
  console.log(bind)    
});

poulpe.run({
  el: "Hello {{w}}",
  data: {
    "w": "You"
  }
});
```

# Option

- el  
 - HtmlElement ([sample](#dom))
 - String (use the id. [sample](#id))
 - String ([sample](#text))
- data : Object
