const router = require('express').Router();
const movieRoutes = require('./movies');
const playlistRoutes = require ('./playlist');

router.use('/movies', movieRoutes);
router.use('/playlist', playlistRoutes);

module.exports = router;