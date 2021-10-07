/*  Handles all the logic related to setting up input stream and handling user input.
*/
// jshint esversion : 6

const { log } = require('./logger');
const constants = require('./constants');
const { moveUp, moveLeft, moveDown, moveRight } = require('./constants');

let tcpConnection;

const setupInput = (conn) => {
    tcpConnection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
  
    stdin.on('data', (data) => {
      /* ctrl + c ====> EXIT application */
      handleInput(data);

    });
  return stdin;
}


const handleInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else {
    if (key === moveUp){
      conn.write("Move: up");
    }
  
    if (key === moveLeft){
      conn.write('Move: left');
    }
  
    if (key === moveDown){
      conn.write('Move: down');
    }
  
    if (key === moveRight){
      conn.write('Move: right');
    }
  }

};


module.exports = {setupInput};
