// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function (data) {
  const stdin = process.stdin;
  if (data === '\x03') {
    process.exit();
  }
};

module.exports = { setupInput };