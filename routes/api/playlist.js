const router = require("express").Router();
const playlistController = require('../../controllers/playlistController');

router 
    .route('/')
    .get(playlistController.findAll)
    .get(playlistController.populated)
    .post(playlistController.create)
   
module.exports = router;