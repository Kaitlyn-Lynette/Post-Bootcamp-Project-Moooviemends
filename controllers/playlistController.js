const db = require ('../models');

module.exports = {
    //This is to retrieve the playlist created on the playlist page
    findAll: function (req,res) {
        db.Playlist.find({})
            .then(dbPlaylist => {
            res.json(dbPlaylist);
            })
            .catch(err => {
            res.json(err);
            });
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
            .then(dbLibrary => {
            console.log(dbLibrary);
          })
            .catch(({message}) => {
            console.log(message);
          });

    },
    //This is to add a movie to a specific playlist 
    populated :function (req, res) {
        db.Playlist.find({})
            .populate("movies")
            .then(dbPlaylist => {
            res.json(dbPlaylist);
        })
            .catch(err => {
            res.json(err);
        });
}}
