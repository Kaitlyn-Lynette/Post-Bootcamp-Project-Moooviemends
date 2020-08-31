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
   
    const searchMovies = query => {
        API.search(query)
            .then((res) => { 
                setSearch({ search: res.data });
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
        };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
   const handleInputChange = event => {
        const {value} = event.target; 
        console.log('this is the value',value);
    };


    const handleFormSubmit = event => {
        event.preventDefault();
        //Calls searchMovies
        searchMovies();
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
                {search.title ? (
                <Grid item xs={12} lg={10}>
                    <MovieTitle>
                        {search.title || "Search for a movie to begin"}
                    </MovieTitle>
                    <MovieCard
                    // src={search.Poster}
                    director={search.director}
                    genre={search.genre}
                    released={search.released}
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