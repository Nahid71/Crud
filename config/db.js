//require mongoose module
var mongoose = require('mongoose');



//require database URL from properties file
var dbURL = require('./properties').DB;



//export this function 
module.exports =function(){

  mongoose.connect(dbURL);

  mongoose.connection.on('connected', function(){
      console.log("Mongoose default connection is open to ", dbURL);
  });

  mongoose.connection.on('error', function(err){
      console.log("Mongoose default connection has occured  error");
  });

  mongoose.connection.on('disconnected', function(){
      console.log("Mongoose default connection is disconnected");
  });

  
}