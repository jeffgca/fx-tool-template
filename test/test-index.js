var main = require("../");

exports["test main"] = function(assert) {
  assert.pass("Unit test running!");
  assert.fail("You should really write more tests...");
};

require("sdk/test").run(exports);
