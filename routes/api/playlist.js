const router = require("express").Router();
const playlistController = require('../../controllers/playlistController');

router 
    .route('/')
    .get(playlistController.findAll)
    .post(playlistController.create)
   
router 
    .route('/:id')
    .get(playlistController.findById)
    .post(playlistController.submit)

module.exports = router;