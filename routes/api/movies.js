const router = require("express").Router();
const moviesController = require('../../controllers/moviesController');

router 
    .route('/')
    .get(moviesController.findAll)
    .post(moviesController.create);

module.exports = router;

