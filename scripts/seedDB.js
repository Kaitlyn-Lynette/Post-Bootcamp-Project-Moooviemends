const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/moooviemends');

const movieSeed = [
    {
        title: "Gladiator",
        director: "Ridley Scott",
        genre: "war"
    },
    {
        title: "Back to the Future",
        director: "Robert Zemeckis",
        genre: "Sci-Fi"
    },
    {
        title: "Troy",
        director: "Wolfgang Petersen",
        genre: "War"
    },
];

const playlistSeed = [
    {
        title: "Cartoon movies",
        description: "Love me some cartoons!",
    },
    {
        title: "Documentries",
        description: "When I wanna learn somethin'",
    },
    {
        title: "Throwbacks",
        description: "Childhood favorites",
    },
];


db.Movie.remove({})
.then(() => db.Movie.collection.insertMany(movieSeed))
.then((data) => {
    console.log(data.result.n + ' records inserted');
    process.exit(0);
})
.catch((err)=>{
    console.log(err);
    process.exit(1);
});

db.Playlist.remove({})
.then(() => db.Playlist.collection.insertMany(playlistSeed))
.then((data) => {
    console.log(data.result.n + ' records inserted');
    process.exit(0);
})
.catch((err)=>{
    console.log(err);
    process.exit(1);
});
