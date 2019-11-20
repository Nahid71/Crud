var express = require('express');
var router = express.Router();


var controller = require('../controllers/book');




router.post('/create', controller.create);

router.get('/:id', controller.details);

router.put('/:id/update', controller.update);

router.delete('/:id/delete', controller.delete);


module.exports = router;