const router = require('express').Router();
const movieRoutes = require('./movies');

router.use('/api', movieRoutes);

module.exports = router;