const router = require("express").Router();
const playlistsController = require('../../controllers/playlistsController');

//Matches with "/api/"

router 
    .route('/')
    .get(playlistsController.findAll)
    .post(playlistsController.create);


module.exports = router;

