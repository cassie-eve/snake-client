const { endianness } = require('os');
const { connect } = require('./client')
const { setupInput } = require('./input')

console.log("Connecting ...");
connect();

setupInput();