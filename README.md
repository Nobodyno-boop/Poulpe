TJS
===
Data binding Javascript Project

# Feature
  - Data binding with <tjs-render> tag.
  - Sample with test dir.
  - Simple and speed.

# How to use ?
**import the [code from the last version](https://gist.githubusercontent.com/Poulpinounette/a00c2f74960fdd31c6e09d23a3026c97/raw/b5e53aed90cfd6672f4e55fb51334f1fb45de662/tjs.js)**

*HTML code*.
```
<tjs-render> My name is {{name}} </tjs-render>
```

*JavaScript code*.
```
var data = {name: "Poulpi"};
tjs.setData(data).render();
```


 Change log
 ----------
 - **V0.1.1**
    - Webpack base server.
    - FrameWork support.
    - Clean code.

NEXT UPDATE
-----
 - *Render optional with other html tag.*
 - *Multi render*
 - *Support XHR request.*
 - *Debug mod*

other
----

_ command. _
```
$ npm run build
$ npm run dev
```
