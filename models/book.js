let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Creating book schema
let BookSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  author: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
});


// Export the model
module.exports = mongoose.model('Book', BookSchema);
