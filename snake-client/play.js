
/*const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: host,
    port: port
  });
*/
  /**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */


//
// jshint esversion : 6
const { log } = require('./logger');
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
connect();


log('Connecting ...');
const tcpConnection = connect();
setupInput(tcpConnection);