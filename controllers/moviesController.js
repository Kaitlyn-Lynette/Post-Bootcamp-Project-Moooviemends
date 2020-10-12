 const db = require ('../models');

 module.exports = {
    //Post route for saving a new post 
   findAll: (req,res) => {
    db.Movie.find({})
    .then(dbMovie => {
      res.json(dbMovie);
    })
    .catch(err => {
      res.json(err);
    });
   },
    create: function (req, res) {
        db.Movie.create({
            title: req.body.title, 
            director: req.body.director, 
            genre: req.body.genre,
            released: req.body.released,
        })
        // .then(({_id}) => db.Playlist.findOneAndUpdate({}, { $push: { movies: _id } }, { new: true }))
        .then(({_id}) => db.Playlist.findByIdAndUpdate({_id:"5f8495c44fd29780159b34e7"}, { $push: { movies: _id } }, { new: true }))
        .then(dbPlaylist => {res.json(dbPlaylist)})
        .catch(err => {
            res.json(err);
          });
    }
 }