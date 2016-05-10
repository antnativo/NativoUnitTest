QUnit.test("_pr.AddScript() : Add External JS File", function(assert){
  var done = assert.async();
  new _pr().AddScript("localhost:8081/mocks/loadscript.js");
  setTimeout(function(){
    assert.ok(mock.isExternalScriptLoaded());
      done();
  },500);
  delete mock.isExternalScriptLoaded
});