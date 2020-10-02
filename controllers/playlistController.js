const db = require ('../models');

module.exports = {
    //This is to retrieve the playlist created on the playlist page
    findAll: function (req,res) {
        db.Playlist.find({})
            // .populate('movies')
            .then((dbPlaylist)=> res.json(dbPlaylist))
            .catch((err) => res.status(422).json(err));
    },
    //This should find one playlist and its movies 
    findById: function (req, res) {
        db.Playlist.findById(req.params.id)
            .populate('movies')
            .then(dbPlaylist => res.json(dbPlaylist))
            .catch(err => res.status(422).json(err));
        },
    //This is to just create a playlist on the Create.js page
    create: function (req, res) {
        db.Playlist.create({
            name: req.body.name, 
            description: req.body.description, 
        })
            .then(function(dbPlaylist) {
                res.json(dbPlaylist)
            })
            .catch(err => {
                res.status(422).json(err)
            });

    },
    //This is to add a movie to a specific playlist 
    submit :function (req, res)  {
        db.Playlist.create(req)
        .then(({_id}) => 
        db.Playlist.findOneAndUpdate({}, {$push: {movies: _id}}, {new: true}))
        .then(dbLibrary => {res.json(dbLibrary)})
        .catch(err => {res.json(err)});
    },

}
