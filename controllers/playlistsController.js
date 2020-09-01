 const db = require ('../models/');

 module.exports = {

    //Post route for saving a new post 


    create: function (req, res) {
        db.Playlist.create({
            title: req.body.title, 
            director: req.body.director, 
            genre: req.body.genre,
            released: req.body.released
        })
            .then(function(dbMovie){
                res.json(dbMovie)
            });
    }
 };

