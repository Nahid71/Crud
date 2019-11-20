const express = require('express');
const bodyParser = require('body-parser');

const properties = require('./config/properties');
const book = require('./routes/book');
const db = require('./config/database');

// initialize our express app
const app = express();

// call the database connectivity function
db();

// configure app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/books', book);

// error handling
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
  next();
});

// listen to port
app.listen(PORT, () => {
  console.log('Server is up and running on port numner ' + properties.PORT);
});
