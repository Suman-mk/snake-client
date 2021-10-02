/*  Establishes connection to the server- assumes `localhost`.
//  Prints `Connected to server...` upon successful connection.
//  Sets the snake-name to `SNK` upon successful connection.
//  Logs server responses to screen.
*/
// jshint esversion : 6
const net = require('net');
const { log } = require('./logger');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const client = {
  connect: function() {
    const conn = net.createConnection({
      host: IP,
      port: PORT
    });

    /* interpret incoming data as text */
    conn.setEncoding('utf8');

    /* CONNECT event */
    conn.on('connect',()=>{
      log('Connected to server...');
      conn.write('Name: SNK');
    });

    /* DATA event */
    conn.on('data', (data) => {
      log(`Server says: ${data}`);
    });
    
    conn.on('end', () => {
      log('Connection Ended. Exitting application');
      process.exit();
    });
    conn.on('error', (err) => {
      log(err);
      if (err.code === 'ECONNRESET') {
        process.exit();
      }
    });

    return conn;
  }
};



module.exports = client;