/**
 * Parse text, return RFCs
 *
 * @param text String Content you want IETF RFC identifiers pulled out of
 *
 * @return Array The list of RFC numbers as strings. Ex: ["2616", "2068"]
 **/
function collectRFCs(text) {
  var rfc_rex = /RFC\W*([1-9][0-9]{0,3})/gi
  var match;
  var rv = [];

  while ((match = rfc_rex.exec(text)) != null) {
    rv.push(match[1]);
  }
  return rv;
}

self.on("context", function () {
  // clear out previous RFC's
  self.postMessage(null);
  var text = window.getSelection().toString();
  var rfcs = collectRFCs(text);
  for (var i = 0; i < rfcs.length; i++) {
    self.postMessage(rfcs[i]);
  }
  return rv.length > 0;
});
