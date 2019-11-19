const express = require('express');
const bodyParser = require('body-parser');


const PORT = 3000


// initialize our express app
const app = express();

// parse requests of content-type 
app.use(bodyParser.urlencoded({ extended: true }))

// listen to port
app.listen(PORT, () => {
  console.log('Server is up and running on port numner ' + PORT);
});