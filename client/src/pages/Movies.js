import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import {Grid, Typography, Button } from '@material-ui/core';
import API from '../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

function ListItemLink(props) {
return <ListItem button component="a" {...props} />;
}

export default function Movies() {
    const [moviesSaved, setMoviesSaved,] = useState([])
    const classes = useStyles ();
    
      //Load all the playlist and store them with setPlaylist
      useEffect(() => {
        loadMovies()
    }, [])

    //This will fetch the API for playlist saved in the database 
    function loadMovies() {
        API.getMovies()
        .then(res => 
            setMoviesSaved(res.data)
        )
        .catch(err => console.log(err));
    };

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
        <List component="nav" aria-label="all-movies">
            {moviesSaved.map(movies=> {
            return (
                <ListItem 
                button={movies._id}>
                <ListItemText>{movies.title}</ListItemText>
                <ListItemText>{movies.director}</ListItemText>
                <ListItemText>{movies.genre}</ListItemText>
                <ListItemText>{movies.released}</ListItemText>
                </ListItem>
            );
            })}
        </List>
        </Grid>
        </Grid>
    )
}

const container = {
    backgroundColor: '#FF5200',
    width: '100vw',
    height: '100vh',
    flewgrow: '1',
    // height: '100%',
  };


const titleStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    color: '#000000',
    position: 'absolute',
    width: '65.7%',
    height: '4.7%',
    top: '145px',
    left: '7%',
    right: '25%',
}

const descStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '24px',
    color: '#000000',
    position: 'absolute',
    width: '248px',
    height: '31px',
    top: '200px',
    left: '7%',
    right: '25%',
}

const tableStyle = {
    minWidth: '650',
    position: 'absolute',
    top: '300px', 
    left: '7%',
    right: '25%',
    
}

const tableFontStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '24px',
    color: '#000000',
}

const btnStyle = {
    position: 'absolute',
    width: '118px',
    height: '32px',
    left: '35%',
    right: '50%',
    top: '430px',
    background: '#BA0FF7',
    borderRadius: '18px',
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px'
}