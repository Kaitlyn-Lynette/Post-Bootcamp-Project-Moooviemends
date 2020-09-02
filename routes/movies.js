const router = require("express").Router();
const playlistsController = require('../controllers/playlistsController');

//Matches with "/api/"

router 
    .route('/')
    .post(playlistsController.create);


module.exports = router;