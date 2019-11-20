//require mongoose module
let mongoose = require('mongoose');



//require database URL from properties file
let dbURL = require('./properties');



//export this function 
module.exports = function () {

    mongoose.connect(dbURL.DB);

    mongoose.connection.on('connected', function () {
        console.log("Mongoose default connection is open to ", dbURL);
    });

    mongoose.connection.on('error', function (err) {
        console.log("Mongoose default connection has occured  error");
    });

    mongoose.connection.on('disconnected', function () {
        console.log("Mongoose default connection is disconnected");
    });


}
