/*
  Universal logger for this application
*/
// jshint esversion : 6
const logger = {
  log: (data) => {
    console.log(data);
  },
  logInline: (data) => {
    process.stdin.write(data);
  }
};

module.exports = logger;
© 2021 GitHub, Inc.
Terms
Privacy
