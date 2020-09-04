import React, { Component,useState, useEffect  } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieTitle from '../components/MovieTitle';
import Buttons from '../components/Buttons';
import API from "../utils/API";
import {Grid, Typography} from '@material-ui/core';
import logo from '../assets/logo.png';
import {useTheme} from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FF5200',
        width: '150vw',
        height: '100vh',
        flewgrow: '1',
        [theme.breakpoints.down("xs")]: {
            height: '200vh'
        }, 
        [theme.breakpoints.up("lg")]: {
            height: '400vh'
        },         
    },
    playlistButton: {
        background: '#BA0FF7',
        borderRadius: '18px',
        fontFamily: 'Luckiest Guy',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '24px',
        position: 'absolute',
        width: '300px',
        height: '44px',
        left: '30%',
        right: '30%',
        [theme.breakpoints.down("xs")]: {
            bottom: '-120px'
        },  
    }

}));



const Search = () => {

    const [search, setSearch] = useState('');
    const [movie, setMovie] = useState({});
    const [save, setSave] = useState({});
    const [playlistButton, setPlaylistButton] = React.useState(false)
    
    //Styling 
    const classes = useStyles ();
    const theme = useTheme ();
    // const matches = useMediaQuery(theme.breakpoints.down("xs"))

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
        setPlaylistButton(!playlistButton)
    };

    
    const handleCreateMovie = (event) => {
        event.preventDefault();
        setSave({
            title: movie.title, 
            director: movie.director,
            genre: movie.genre,
            released: movie.released
        })
        API.saveMovie(save)
            .then((res)=> {
            console.log(res) 
            console.log("I'm listening")
            })
            .catch((err) => {
                console.log(err);
            });
    }

        return (
                <Grid 
                container
                className={classes.root}
                // style={container}
                justify='center'
                alignItems='center'
                direction='column'
                >
                <Grid item xs={12} lg={10}>
                    <img style={logoStyle} src={logo} alt='logo' />
                </Grid>
                <Grid item xs={12} lg={10} container>
                    <Header></Header>
                </Grid>
                <Grid item xs={12} lg={10}>
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
                    released={movie.released}
                    />
                </Grid>
              ) : (
                <h3>No Results to Display</h3>
              )}
                <Grid item xs={12} lg={10}>
                    {playlistButton &&  <Buttons 
                        className={classes.playlistButton}
                        handleCreateMovie={handleCreateMovie}
                        >Add to Playlist</Buttons>}
                </Grid>
                </Grid>
        );
};


const logoStyle = {
    height: '334px',
    width: '367px',
    left: '30%',
    right: '30%',
    position: 'absolute',
    textAlign: 'center'
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
    top: '145px',
    left: '30%',
    right: '30%',
}


 
export default Search;