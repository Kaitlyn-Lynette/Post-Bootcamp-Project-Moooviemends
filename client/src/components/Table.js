import React from 'react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import {Grid, Typography, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import API from '../utils/API';

export default function Playlist () {

    const [playlistCreated, setPlaylistCreated] = use([])

      //Load all the playlist and store them with setPlaylist
      useEffect(() => {
        loadPlaylist()
    }, [])

    //This will fetch the API for playlist saved in the database 
    function loadPlaylist () {
        API.getPlaylist()
        .then(res => 
            setPlaylist(res.data)
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
           <Typography style={titleStyle}>Playlist Name</Typography> 
        </Grid>
        <Grid item xs={6} lg={10}>
           <Typography style={descStyle}>Description of Playlist</Typography> 
        </Grid>
        <Grid item xs={6} lg={10}>
        <TableContainer>
            <Table style = {tableStyle}>
                <TableHead>
                    <TableRow>
                        <TableCell><Typography style={tableFontStyle}>Movie Title</Typography></TableCell>
                        <TableCell><Typography style={tableFontStyle}>Time</Typography></TableCell>
                        <TableCell><Typography style={tableFontStyle}>Rating</Typography></TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
        </Grid>
        <Grid item xs={11} lg={10}>
        <Button style = {btnStyle}>Search</Button>
        </Grid>
        {/* <Grid item xs={11} lg={10}>
            <h2>No movies added yet!</h2>
        </Grid> */}
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