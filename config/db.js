//require mongoose module
var mongoose = require('mongoose');



//require database URL from properties file
var dbURL = require('./properties').DB;

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

//export this function and imported by server.js
module.exports = function () {

  mongoose.connect(dbURL, { useNewUrlParser: true }, (error) => {
    if (!error) {
      console.log("DB connection is success")
    }
    else {
      console.log("DB not connected!!")
    }
  });

}