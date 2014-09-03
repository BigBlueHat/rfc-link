var cm = require("sdk/context-menu");
var tabs = require("sdk/tabs");
var self = require("sdk/self");

cm.Menu({
  label: "Open RFC",
  context: cm.SelectionContext(),
  contentScriptFile: self.data.url('findrfc.js'),
  onMessage: function(number) {
    if (number === null) {
      this.items = [];
    } else {
      this.addItem(cm.Item({
        label: number,
        data: number,
        contentScript: 'self.on("click", self.postMessage);',
        onMessage: function() {
          tabs.open('http://tools.ietf.org/html/rfc' + this.data);
        }
      }));
    }
  }
});
