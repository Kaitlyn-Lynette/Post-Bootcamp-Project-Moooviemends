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


db.Playlist.remove({})
.then(() => db.Playlist.collection.insertMany(movieSeed))
.then((data) => {
    console.log(data.result.n + ' records inserted');
    process.exit(0);
})
.catch((err)=>{
    console.log(err);
    process.exit(1);
});
