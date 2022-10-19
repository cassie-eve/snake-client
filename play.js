const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
const conn = connect();

// takes in the object response to calling connect
setupInput(conn);