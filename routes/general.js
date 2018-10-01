var express = require('express');
var router = express.Router();

// Require controller modules.
var validation_controller = require('../controllers/validationController');

/// GENERAL ROUTES ///

// GET general home page.
router.get('/', validation_controller.index);

// GET request for validating a Json instance against a Json schema.
router.get('/validation/go', validation_controller.validation_get);

// POST request for validating a Json instance against a Json schema.
router.post('/validation/go', validation_controller.validation_post);

// GET request for loading files for example #2 of Json instance and schema.
router.get('/validation/go/example2', validation_controller.example2);


module.exports = router;
