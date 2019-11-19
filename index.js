const express = require('express');
const bodyParser = require('body-parser');


const PORT = require('./config/properties').PORT;

// initialize our express app
const app = express();

// parse requests of content-type 
app.use(bodyParser.urlencoded({ extended: true }))

// listen to port
app.listen(PORT, () => {
  console.log('Server is up and running on port numner ' + PORT);
});