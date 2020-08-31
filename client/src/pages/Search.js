import React, { Component,useState, useEffect  } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieTitle from '../components/MovieTitle';
import Buttons from '../components/Buttons';
import API from "../utils/API";
import {Grid, Typography} from '@material-ui/core';
import logo from '../assets/logo.png';

const Search = () => {

    const [search, setSearch] = useState('');
    const [movie, setMovie] = useState({});
    // const [title, setTitle] = useState('');
    // const [director,setDirector] = useState('');
    // const [genre, setGenre] = useState('');
   
    const searchMovies = query => {
        console.log(query)
        API.search(query)
            .then((res) => { 
                console.log(res.data)
                setMovie({
                    title: res.data.Title, 
                    director: res.data.Director,
                    genre: res.data.Genre,
                    poster: res.data.Poster
                 })
                 console.log(movie)
            })
            .catch((err) => {
                console.log(err);
            });
    };



    // When the form is submitted, search the OMDB API for the value of `this.state.search`
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

    // const [title, setTitle] = useState('');
    // const [director,setDirector] = useState('');
    // const [genre, setGenre] = useState('');

    // const handleCreateMovie = (event) => {
    //     event.preventDefault();
    //     API.createMovie({title: title, director: director, genre:genre})
    //         .then(()=> {
    //             setTitle('');
    //             setDirector('');
    //             setGenre('');
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

        return (
            <Container>
                <Grid item xs={12} lg={10}>
                    <img style={logoStyle} src={logo} alt='logo' />
                </Grid>
                <Grid item xs={12} lg={10} container>
                    <Header></Header>
                </Grid>
                <Grid item xs={12} lg={10} >
                    <Typography style={actionStyle}>Search YO' MOOOVIE</Typography>
                    <SearchBar
                    value={search.result}
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                    >
                    </SearchBar>
                </Grid>
                {movie.title ? (
                <Grid item xs={12} lg={10}>
                    <MovieTitle>
                        {movie.title || "Search for a movie to begin"}
                    </MovieTitle>
                    <MovieCard
                    src={movie.poster}
                    director={movie.director}
                    genre={movie.genre}
                    />
                </Grid>
              ) : (
                <h3>No Results to Display</h3>
              )}
              <Grid item xs={12} lg={10}>
                    <Buttons 
                    style={buttonStyle}
                    // handleCreateMovie={handleCreateMovie}
                    >Add to Playlist</Buttons>
              </Grid>
            </Container>
        );
};


const logoStyle = {
    height: '334px',
    width: '367px',
    position: 'absolute',
    textAlign: 'center',
    justify: 'center',
    top: 0,
    left: 0
}



const actionStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    color: '#000000',
    position: 'absolute',
    justify: 'center',
    width: '274px',
    height: '24px',
    left: '23px',
    top: '145px'
}


const buttonStyle = {
    background: '#BA0FF7',
    borderRadius: '18px',
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    position: 'absolute',
    width: '276px',
    height: '44px',
    left: '50px',
    top: '1070px'
}


export default Search;