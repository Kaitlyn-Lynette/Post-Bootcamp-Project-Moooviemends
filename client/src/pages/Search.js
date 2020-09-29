import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieTitle from '../components/MovieTitle';
import PlaylistButtons from '../components/PlaylistButtons';
import API from "../utils/API";
import Logo from '../components/Logo';
import {Grid, Typography} from '@material-ui/core';

const Search = () => {
    const [search, setSearch] = useState('');
    const [movie, setMovie] = useState({});
    const [save, setSave] = useState({});
    const [playlistButton, setPlaylistButton] = React.useState(false)

    const searchMovies = query => {
        console.log(query)
        API.search(query)
            .then((res) => { 
                console.log(res.data)
                setMovie({
                    title: res.data.Title, 
                    director: res.data.Director,
                    genre: res.data.Genre,
                    poster: res.data.Poster,
                    released: res.data.Released
                 })
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // When the form is submitted, search the OMDB API for the movie
   const handleInputChange = event => {
        const {value} = event.target; 
        setSearch(value)
        console.log('this is the value', value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        //Calls searchMovies
        searchMovies(search);
        
    };

    const handleSaveMovie = (event, playlistId) => {
        event.preventDefault();
        setSave({
            title: movie.title, 
            director: movie.director,
            genre: movie.genre,
            released: movie.released,
        })
        console.log(save)
        API.saveMovie({...save})
            .then((res)=> {
            console.log(res) 
            console.log("I saved the movie!")
            })
            .catch((err) => {

                console.log(err);
            });
            // setPlaylistButton(!playlistButton)
    }
        return (
            <Grid 
            container
            style={container}
            justify='center'
            alignItems='center'
            direction='column'
            >
            <Grid item> 
                <Logo></Logo>
            </Grid>
            <Grid item>
                <Header></Header>
            </Grid>
            <Grid item>
                <Typography style={searchStyle}>Search YO' MOOOVIE</Typography>
                <SearchBar
                value={search.result}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                >
                </SearchBar>
            </Grid>
            {movie.title ? (
            <Grid container
            style={container}
            justify='center'
            alignItems='center'
            direction='column'
            >
            <Grid item>
                <MovieTitle>
                    {movie.title || "Search for a movie to begin"}
                </MovieTitle>
                <MovieCard
                src={movie.poster}
                director={movie.director}
                genre={movie.genre}
                released={movie.released}
                />
            </Grid>
            <Grid item>
                <PlaylistButtons
                onClick={handleSaveMovie}
                ></PlaylistButtons>  
            </Grid>

            </Grid>
            ) : (
                <Typography style={resultsStyle}>No Results to Display</Typography>
            )}   
            </Grid>
        )
    }


const searchStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    color: '#FFFFFF',
    position: 'absolute',
    width: '71.9%',
    height: '3.5%',
    left: '7%',
    top: '25%',
}

const resultsStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    color: '#FFFFFF',
}



// const playlistStyle = {
//     position: 'absolute',
//     width: '85%',
//     height: '5.4%',
//     right: '7%',
//     top: '47%',
//     fontFamily: 'Luckiest Guy',
//     fontSize: '24px',
//     fontWeight: 'normal',
//     fontStretch: 'normal',
//     fontStyle: 'normal',
//     lineHeight: 'normal',
//     letterSpacing: 'normal',
//     color: '#000000'
// }

const container = {
    backgroundColor: '#FF5200',
    width: '100vw',
    height: '100vh',
    flewgrow: '1',
  };

 
export default Search;