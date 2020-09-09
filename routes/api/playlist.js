const router = require("express").Router();
const playlistController = require('../../controllers/playlistController');

router 
    .route('/')
    .get(playlistController.findAll)
    .post(playlistController.create);

module.exports = router;