/*  Handles all the logic related to setting up input stream and handling user input.
*/
// jshint esversion : 6

const { log } = require('./logger');

let tcpConnection;

const input = {
  setupInput : (conn) => {
    tcpConnection = conn;

    const stdin = process.stdin;
    stdin.setRawMode(true);
    //stdin.setEncoding('utf8');  
    stdin.resume();
    let previousMoveDirection, moveDirection, moveCommand;
  
    stdin.on('data', (data) => {
      /* ctrl + c ====> EXIT application */
      if (data === '\u0003') {
        process.exit();
      } else if (data === 'W' || data === 'w' || data === '8') {
        /* w, W, 8 ====> Move up */
        if (previousMoveDirection !== 'down') {
          moveDirection = 'up';
        }
      } else if (data === 'S' || data === 's' || data === '2') {
        /* S, s, 2 ====> Move down */
        if (previousMoveDirection !== 'up') {
          moveDirection = 'down';
        }
      } else if (data === 'D' || data === 'd' || data === '6') {
        /* D, d, 6 ====> Move right */
        if (previousMoveDirection !== 'left') {
          moveDirection = 'right';
        }
      } else if (data === 'A' || data === 'a' || data === '4') {
        /* w, W, 8 ====> Move left */
        if (previousMoveDirection !== 'right') {
          moveDirection = 'left';
        }
      } else if (data === 'H' || data === 'h') {
        /* H, h ====> Hi there */
        tcpConnection.write('Say: Hi there');
        log('Said: Hi there');
      } else if (data === 'G' || data === 'g') {
        /* g ====> Got to go */
        tcpConnection.write('Say: Got to go');
        log('Said: Got to go');
      } else if (data === 'B' || data === 'b') {
        /* b ====> Bye ppl */
        tcpConnection.write('Say: Bye ppl');
        log('Said: Bye ppl');
      } else {
        log('Unknown Command: ' + data + '.');
      }


      if (moveDirection !== previousMoveDirection) {
        tcpConnection.write(`Move: ${moveDirection}`);
        clearInterval(moveCommand);
        moveCommand = setInterval(() => {
          tcpConnection.write(`Move: ${moveDirection}`);
        }, 100);
        log(moveDirection);
        previousMoveDirection = moveDirection;
      }
    });

    return stdin;
  },


};



module.exports = input;