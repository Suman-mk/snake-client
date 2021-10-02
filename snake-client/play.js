/*
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: // IP address here,
    port: // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
*/

//
// jshint esversion : 6
const { log } = require('./logger');
const { connect } = require('./client');
const { setupInput } = require('./input');




log('Connecting ...');
const tcpConnection = connect();
setupInput(tcpConnection);