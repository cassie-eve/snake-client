// setup interface to handle user input from stdin
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// some canned phrases
const hello = `Hello!`;
const friends = `Hey friends!`;
const fun = `What fun!`

const handleUserInput = function (data) {
  const stdin = process.stdin;
  // if player clicks ctrl-c, game should exit
  if (data === '\x03') {
    process.exit();
  } else if (data === 'w') {
    connection.write('Move: up');
  } else if (data === 'a') {
    connection.write('Move: left');
  } else if (data === 's') {
    connection.write('Move: down');
  } else if (data === 'd') {
    connection.write('Move: right');
  } else if (data === 'h') {
    connection.write(`Say: ${hello}`);
  } else if (data === 'f') {
    connection.write(`Say: ${friends}`);
  } else if (data === 'n') {
    connection.write(`Say: ${fun}`);
  }
};

module.exports = { setupInput };