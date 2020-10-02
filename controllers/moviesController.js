 const db = require ('../models');

 module.exports = {
    //Post route for saving a new post 
   findAll: (req,res) => {
       db.Movie.find({})
        .populate('playlist')
        .then((dbMovie)=> res.json(dbMovie))
        .catch((err) => res.status(422).json(err));
   },
    create: function (req, res) {
        db.Movie.create({
            title: req.body.title, 
            director: req.body.director, 
            genre: req.body.genre,
            released: req.body.released,
        })
        .then((dbMovie)=> res.json(dbMovie))
        .catch((err) => res.status(422).json(err));
    }
 }