QUnit.test("ntv.Utils : match()", function(assert){
  assert.ok(ntv.Util.match("he1lo", mock.array.strings), "'he1lo' Should Match");
  assert.ok(ntv.Util.match("hello", mock.array.strings), "'hello' Should Match");
  assert.notOk(ntv.Util.match("oompaloompa", mock.array.strings), "'oompaloompa' Should Not Match");
});
QUnit.test("ntv.Utils : getRandomInt()", function (assert) {
  var value = ntv.Util.getRandomInt();
  assert.notOk(isNaN(value), "Should Be a Number");
  assert.ok(value == parseInt(value,10), "Is Integer");
});
QUnit.test("ntv.Utils : getElementOffset()", function (assert) {
  jQuery("<div id='testOffset' style='width:400px;height:200px'></div>").insertBefore("#qunit");
  var dimensions = ntv.Util.getElementOffset(jQuery("#testOffset")[0])
  assert.equal(dimensions.width, 400, "Node width should be 400");
  assert.equal(dimensions.height, 200, "Node width should be 200");
  jQuery("#testOffset").remove()
});