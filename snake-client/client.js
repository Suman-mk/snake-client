
// jEs6 convert
const net = require('net');
const { log } = require('./logger');
const { IP, PORT } = require('./constants');


const client = {                          //establish connection with the game server
  connect: function() {
    const conn = net.createConnection({
      host: IP,
      port: port
    });

    conn.setEncoding('utf8');             //incoming data to text

    conn.on('connect',()=>{                //connect event
      log('Connected to server...');
      conn.write('Name: SM');
    });

    conn.on('data', (data) => {             //data event
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