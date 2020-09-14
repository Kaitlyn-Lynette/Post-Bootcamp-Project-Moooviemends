const db = require ('../models');


module.exports = {
    findAll: (req,res) => {
        db.Playlist.find({})
        .populate('movie')
        .then((dbPlaylist)=> res.json(dbPlaylist))
        .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Playlist.create({
            title: req.body.title, 
            description: req.body.description, 
        })
            .then(function(dbPlaylist) {
                res.json(dbPlaylist)
            })
            .catch(err => {
                res.status(422).json(err)
            });

    }
}