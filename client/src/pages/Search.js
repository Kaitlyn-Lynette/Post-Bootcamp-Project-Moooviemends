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

    const handleSaveMovie = (event) => {
        event.preventDefault();
        API.saveMovie({...movie})
            .then((res)=> {
            console.log(res) 
            console.log("I saved the movie!")
            })
            .catch((err) => {

                console.log(err);
            });
    }


        return (
            <Grid 
            container
            style={container}
            justify='center'
            alignItems='center'
            direction='column'
            >
            <Grid item item xs={6} lg={10}> 
                <Logo></Logo>
            </Grid>
            <Grid item item xs={6} lg={10}>
                <Header style={headerStyle}></Header>
            </Grid>
            <Grid item item xs={6} lg={10}>
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
            <Grid item item xs={6} lg={10}>
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
            <Grid item item xs={6} lg={10}>
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
    textAlign: 'center',
    position: 'absolute',
    width: '71.9%',
    height: '3.5%',
    left: '6%',
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

const headerStyle = {
    color: '#FFFFFF',
    bottom: '250px',
    position: 'absolute',
    fontSize: '3em',
    fontFamily: 'Luckiest Guy',
    width: '71.9%',
    height: '3.5%',
    left: '7%',
    top: '13%',
}

const container = {
    backgroundColor: '#FF5200',
    width: '200vw',
    height: '200vh',
    flewgrow: '1',
  };



export default Search;