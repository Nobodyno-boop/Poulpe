Poulpe 
===
Simple Data binding Javascript Project

# Feature
  - Data binding with id 
  - Simple and speed.

# How to use
import for the latest version
[poulpe.min.js](https://unpkg.com/poulpe@latest/dist/poulpe.min.js)


*HTML code*.<br />
```
<div id="#e"> {{name}}</div>
```

*JavaScript code*. 
```
var poulpe = new poulpe();
poulpe.run({
	el: "#e",
	data: {
	 "name": "Poulpi"
	}
});
```
<br /><br /><br />

  Other
===
 [change log](https://github.com/Poulpinounette/Poulpe/blob/master/CHANGELOG.md)

Todo
- *add "special" use for nodejs*
- *Support XHR request.*
- *Debug mod*
- *Event system*
