Poulpe
===
Simple Data binding Javascript Project

# Feature
  - Data binding with id 
  - Simple and speed.

# How to use
import for the latest version
[poulpe.min.js](https://unpkg.com/poulpe@0.1.22/dist/poulpe.min.js)


*HTML code*.
```
<div id="#e"> {{name}}</div>
```

*JavaScript code*.
```
var tjs = new tjs();
tjs.run({
	el: "#e",
	data: {
	 "name": "Poulpi"
	}
});
```


 Change log
 ----------
 - **V0.1.2**
    - added module support and browser.
    - Clean code.

Todo
- *add "special" use for nodejs*
- *Support XHR request.*
- *Debug mod*
