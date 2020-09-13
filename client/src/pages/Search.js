import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieTitle from '../components/MovieTitle';
import PlaylistButtons from '../components/PlaylistButtons';
import API from "../utils/API";
import Logo from '../components/Logo';
import {Grid, Typography} from '@material-ui/core';
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
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      }
}));



const Search = () => {
    const [search, setSearch] = useState('');
    const [movie, setMovie] = useState({});
    const [save, setSave] = useState({});
    const [playlistButton, setPlaylistButton] = React.useState(false)
    // This will be for pulling the playlists from the database to show as buttons
    
    //Styling 
    const classes = useStyles ();
    // const theme = useTheme ();

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
        setPlaylistButton(!playlistButton)
    };

    const handleSaveMovie = (event) => {
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
            justify='center'
            alignItems='center'
            direction='column'
            >
                <Grid item xs={12} lg={10}>
                    <Logo></Logo>
                </Grid>
                <Grid item xs={12} lg={10}>
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
                <Grid item xs={6} lg={10} 
                container
                direction='row'
                >
                    <Grid item xs={6} lg={10}>
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
                    
                    <Grid item xs={6} lg={10}>
                        <Typography style={playlistStyle}>Add to Playlist</Typography>
                        <PlaylistButtons
                        onClick={handleSaveMovie}
                        ></PlaylistButtons>    
                    </Grid>
                </Grid>
                ) : (
                 <h3>No Results to Display</h3>
                )} 
            </Grid>
        );
};


const actionStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    color: '#FFFFFF',
    position: 'absolute',
    justify: 'center',
    width: '274px',
    height: '24px',
    top: '145px',
    left: '30%',
    right: '30%',
}

const playlistStyle = {
    width: '142px',
    height: '45px',
    fontFamily: 'Luckiest Guy',
    fontSize: '24px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#000000'
}

 
export default Search;