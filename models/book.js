var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creating book schema
var BookSchema = new Schema({
    name: {type: String, required: true, max: 100},
    author: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Product', BookSchema);