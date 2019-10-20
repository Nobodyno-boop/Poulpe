Poulpe
===

Simple Data binding Javascript Project

[![CodeFactor](https://www.codefactor.io/repository/github/poulpinounette/poulpe/badge)](https://www.codefactor.io/repository/github/poulpinounette/poulpe)

# Feature
  - Data binding with text or HTMLElement
  - Simple and speed.
  - Multi Option
  - Event system

# How to use
import for the latest version from unpkg cdn
[poulpe.js](https://unpkg.com/poulpe@latest/dist/index.js)

and see sample.

# Dom
*HTML code*.<br />
```
<div id="#sample">i'm a {{animal}}</div>
```

*JavaScript code*.
```JavaScript
const data = {animal: "Ocotpus"}


let poulpe = new Poulpe({element:document.getElementById("sample"), data:data});

poulpe.on("end", (x) => {
    console.log(x) // x = HtmlElement
});

poulpe.run()

```
<br /><br /><br />

text
===

```JavaScript
var text = "Hey i'm a {{animal}}";
var poulpe = new poulpe({element: text, data: {animal: "Octopus"}});
poulpe.on('end', (x) => {
    console.log(x) // x = 'Hey i'm a Octopus'
});

poulpe.run();
```

  Other
===
 [change log](https://github.com/Poulpinounette/Poulpe/blob/master/CHANGELOG.md#)

___
# Event State

  - search
  - find
  - bind
  - end



  sample:

```JavaScript

var poulpe = new poulpe({...});

poulpe.on('search', function(search){
  console.log(search)
})


poulpe.on('find', function(find){
  console.log(find)
})


poulpe.on('bind', function(bind){
  console.log(bind)
});

poulpe.on('end', function(end){
  console.log(end)
});

poulpe.run();
```

# Option

- Element:
 - HTMLElement ([sample](#dom))
 - String (use the id. [sample](#text))
- data : Object ([sample](#dom))


Poulpe use Parcel for build this package.
