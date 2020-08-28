const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema ({
    //Title
    //SRC
    //Director
    //Genre
    //Released
    title: {type: String, required: true},
    director: {type: String, required: true},
    genre: {type: String, require: true}
    // rating: {type: String, required: true},
    // time: {type: Number, required: true}
});

const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = Playlist;