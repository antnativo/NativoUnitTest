QUnit.test("_pr : PostRelease Added to Global Object", function (assert) {
  if (window._pr)
    ntv.PostRelease = new _pr();  
  assert.ok(typeof ntv.PostRelease == "object",  "PostRelease is added to window")
});
QUnit.test("_pr : AddScript() : Add External JS File", function (assert) {
  var done = assert.async();
  new (window._pr || ntv.Core._pr)().AddScript("localhost:8081/mocks/loadscript.js");
  assert.equal(jQuery("script[src='http://localhost:8081/mocks/loadscript.js']").length, 1, "JavaScript Tag is Added to Document");
  assert.ok(jQuery("script[src='http://localhost:8081/mocks/loadscript.js']").parent()[0].isSameNode(jQuery("head")[0]), "JavaScript Tag is Added to Head");
  setTimeout(function(){
    assert.ok(mock.isExternalScriptLoaded(), "JavaScript was successfully loaded and executed");
    jQuery("script[src='http://localhost:8081/mocks/loadscript.js']").parent()[0].removeChild(jQuery("script[src='http://localhost:8081/mocks/loadscript.js']")[0]);    done();
  },500);
});
QUnit.test("_pr : getTopWindow() : Create iFrame and determine if the Top Window can be reached within the iFrame Window", function (assert) {
  var done = assert.async()
  var iframeTest = document.createElement("iframe");
  iframeTest.id = "getTopWindow";
  iframeTest.style.display = "none";
  var localPR = (window._pr || ntv.Core._pr);
  var global = window;
  iframeTest.onload = function (event) {
    var window = event.target.contentWindow;
    if (event.target.contentWindow != window.top) {
      window._pr = localPR.bind(window);
      var topWindow = new window._pr().getTopWindow();
      assert.equal(topWindow, window.top, "The window returned from wihin iframe should equal top window");
      assert.notEqual(topWindow,window, "The window returned from wihin iframe should not be equal iframe window");
    }
    done();
  }
  document.body.appendChild(iframeTest);
})