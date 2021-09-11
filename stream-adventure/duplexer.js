const { spawn } = require("child_process");
const duplexer2 = require("duplexer2");

module.exports = function (cmd, args) {
  const child = spawn(cmd, args);
  // joining together the stdin and stdout here
  return duplexer2(child.stdin, child.stdout);
};
