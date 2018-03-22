var assert = require('assert'),
jsdom = require('jsdom'),
{ JSDOM } = jsdom,
poulpe = require('../src/index')

describe('Poulpe Replace', function() {
    describe('#Text', function() {
      it('return the text with "Coucou"', function() {
        var t = {
            el: "{{hey}}",
            data: {
                hey: "Coucou"
            }
        }
        var e = new poulpe();
        e.on('bind', (e) => {
          assert.equal("Coucou", e);
        })

        e.run(t);
      });
    });
    describe('#dom', function() {
        it('return the text with "Coucou"', function() {
            var dom = new JSDOM("<div id='hey'>{{hey}}</div>");
            var div = dom.window.document.getElementById("hey");
          var t = {
              el: div,
              data: {
                 hey: "Coucou"
              },
          }
          var e = new poulpe();
          e.on("bind", (e) => {
            assert.equal("Coucou", e);
          })
        e.run(t)
        });
      });
});
