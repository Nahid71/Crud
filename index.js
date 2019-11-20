const express = require('express');
const bodyParser = require('body-parser');

const PORT = require('./config/properties').PORT;
const book = require('./routes/book');
const db = require('./config/database');

// initialize our express app
const app = express();

// call the database connectivity function
db();

// set all middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/books', book);

// listen to port
app.listen(PORT, () => {
  console.log('Server is up and running on port numner ' + PORT);
});