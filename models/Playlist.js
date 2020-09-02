const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema ({
    title: {type: String, required: true},
    director: {type: String, required: true},
    genre: {type: String, require: true},
    released: {type: Date, require:true}
});

const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = Playlist;