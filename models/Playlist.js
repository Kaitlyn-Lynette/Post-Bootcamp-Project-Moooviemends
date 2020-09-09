const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema ({
    title: {type: String, required: true}, 
    description: {type: String, required: true}
})

const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = Playlist