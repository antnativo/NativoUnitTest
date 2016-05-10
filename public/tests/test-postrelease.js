QUnit.test("_pr.AddScript() : Add External JS File", function(assert){
  var done = assert.async();
  new _pr().AddScript("localhost:8081/mocks/loadscript.js");
  assert.equal(jQuery("script[src='http://localhost:8081/mocks/loadscript.js']").length, 1, "JavaScript Tag is Added to Document");
  assert.ok(jQuery("script[src='http://localhost:8081/mocks/loadscript.js']").parent()[0].isSameNode(jQuery("head")[0]), "JavaScript Tag is Added to Head");
  setTimeout(function(){
    assert.ok(mock.isExternalScriptLoaded(), "JavaScript was successfully loaded and executed");
    done();
  },500);
  delete mock.isExternalScriptLoaded
});