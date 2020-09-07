const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema ({
    name: {type: String, required: true}, 
    description: {type: String, required: true}
})

const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = Playlist