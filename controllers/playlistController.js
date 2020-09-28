const db = require ('../models');


module.exports = {
    findAll: (req,res) => {
        db.Playlist.find({})
            .then((dbPlaylist)=> res.json(dbPlaylist))
            .catch((err) => res.status(422).json(err));
    },
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
    findById: function (req, res) {
        db.Playlist.findById(req.params.id)
            .populate('movie')
            .then(dbPlaylist => res.json(dbPlaylist))
            .catch(err => res.status(422).json(err));
        }
};
