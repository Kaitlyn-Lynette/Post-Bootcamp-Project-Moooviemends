const router = require("express").Router();
const Playlist = require('../models/Playlist');

router.post("/api/playlist", ({body},res)=>{
    Playlist.create(body)
    .then(dbPlaylist => {
        res.json(dbPlaylist);
        console.log(dbPlaylist)
    })
    .catch(err => {
        res.status(400).json(err);
    });
});




// router.post("/api/playlist", ({body}, res) =>{
//     Playlist.insertMany(body)
//     .then(dbPlaylist => {
//         res.json(dbPlaylist);
//     })
//     .catch(err=>{
//         res.status(400).json(err);
//     });
// });



module.exports = router;