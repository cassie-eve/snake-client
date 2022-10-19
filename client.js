const net = require("net");
const { IP, PORT, NAME } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write(`Name: ${NAME}`);
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  //what we should see once the client connects to the server
  conn.on("connect", () => {
    console.log(`Successfully connected to game server.`);
  });

  return conn;
};

module.exports = { connect };