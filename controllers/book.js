var book = require('../models/book');


exports.create = function (req, res) {
    var book = new Book(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    book.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Book Created successfully')
    })
};

exports.details = function (req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};

exports.update = function (req, res) {
    Book.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, book) {
        if (err) return next(err);
        res.send('book udpated.');
    });
};

exports.delete = function (req, res) {
    Book.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};