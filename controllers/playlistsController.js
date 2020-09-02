 const db = require ('../models/');

 module.exports = {

    //Post route for saving a new post 
   findAll: (req,res) => {
       db.Playlist.find({})
       .then((dbPlaylist)=> res.json(dbPlaylist))
       .catch((err) => res.status(422).json(err));
   },
    create: function (req, res) {
        db.Playlist.create(body)
            .then(function(dbPlaylist) {
                res.json(dbPlaylist)
            })
            .catch(err => {
                res.status(400).json(err);
              });
    }

    // create: function (req, res) {
    //     db.Playlist.create({
    //         title: req.body.title, 
    //         director: req.body.director, 
    //         genre: req.body.genre,
    //         released: req.body.released
    //     })
    //         .then(function(dbPlaylist) {
    //             res.json(dbPlaylist)
    //         });
    // }
 };

