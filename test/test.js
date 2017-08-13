var assert = require('assert'),
jsdom = require('jsdom'),
{ JSDOM } = jsdom,
poulpe = require('../src/index')

describe('Poulpe Replace', function() {
    describe('#Text', function() {
      it('return the text with "Coucou"', function() {
        var t = {
            el: {
                text: "{{hey}}"
            },
            data: {
                hey: "Coucou"
            },
            html: false
        }
        var e = poulpe.run(t)
        assert.equal("Coucou", t.el.text);
      });
    }); 
    describe('#dom', function() {
        it('return the text with "Coucou"', function() {
            var dom = new JSDOM("")
            var div = dom.window.document.createElement('div');
            div.id = "hey";
            div.innerHTML = "{{hey}}";
          var t = {
              el: div,
              data: {
                 hey: "Coucou"
              },
              html: true //optionel default is true.
          }
          var e = poulpe.run(t)
          assert.equal("Coucou", t.data.hey);
        });
      });
});