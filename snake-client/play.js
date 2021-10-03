
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 192.168.2.27,
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();


//
// jshint esversion : 6
const { log } = require('./logger');
const { connect } = require('./client');
const { setupInput } = require('./input');




log('Connecting ...');
const tcpConnection = connect();
setupInput(tcpConnection);