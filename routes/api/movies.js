const router = require("express").Router();
const moviesController = require('../../controllers/moviesController');

//Matches with "/api/"

router 
    .route('/')
    .get(moviesController.findAll)
    .post(moviesController.create);


// router 
//     .route('/:id')
//     .get(moviesController.findById)
//     .put(moviesController.update)
//     .delete(postsController.remove);

module.exports = router;

