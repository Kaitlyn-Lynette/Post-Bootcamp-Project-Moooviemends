import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

export default {
  //Movie Routes
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },

  //Add a new movie to the playlist
  saveMovie: function (movieData) {
    return axios.post('/api/movies',movieData);
  },
  
  //Playlist Routes
  //Get the playlist from database. Using this on Playlist.js line 35. 
  getPlaylist: function () {
    return axios.get('api/playlists');
  },
  //Create playlist without movies. Using this on Create.js Line 15. 
  createPlaylist: function (playlistData) {
    return axios.post('api/playlists', playlistData);
  }


  

};