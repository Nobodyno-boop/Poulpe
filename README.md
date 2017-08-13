Poulpe 
===
Simple Data binding Javascript Project

# Feature
  - Data binding with text, id or dom Element
  - Simple and speed.
  - Multi Option

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
var text = "Hey i'm a {{animal}}"
var poulpe = new poulpe();
poulpe.run({
	"el": {
		"text": text
	},
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
- *Event system*
- *DomContentLoaded option*



# Option

- el | Object
	- HtmlElement ([sample](#dom))
	- String (use the id. [sample](#id))
	- Object 
		- String : text ([sample](#text))
- data : Object
- html : Boolean
	- true : default (use the document [id](#id) and [dom](#dom))
	- false (use for [text](#text))