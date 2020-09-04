import React from 'react';
import Header from '../components/Header';
import {Grid, Typography, Button } from '@material-ui/core';
import logo from '../assets/logo.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Playlist () {

    return (

        <Grid 
        container
        style={container}
        justify='center'
        alignItems='center'
        direction='column'
        >
        <Grid item xs={11} lg={10}>
            <img style={logoStyle} src={logo} alt='logo' />
        </Grid>
        <Grid item xs={11} lg={10}>
            <Header></Header>
        </Grid>
        <Grid item xs={11} lg={10}>
           <Typography style={titleStyle}>Playlist Name</Typography> 
        </Grid>
        <Grid item xs={11} lg={10}>
           <Typography style={descStyle}>Description of Playlist</Typography> 
        </Grid>
        <Grid item xs={11} lg={10}>
        <TableContainer>
            <Table style = {tableStyle}>
                <TableHead>
                    <TableRow>
                        <TableCell align="right"><Typography style={tableFontStyle}>Picture</Typography></TableCell>
                        <TableCell align="right"><Typography style={tableFontStyle}>Time</Typography></TableCell>
                        <TableCell align="right"><Typography style={tableFontStyle}>Rating</Typography></TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
        </Grid>
        <Grid item xs={11} lg={10}>
        <Button style = {btnStyle}>Search</Button>
        </Grid>
        <Grid item xs={11} lg={10}>
            <h2>No movies added yet!</h2>
        </Grid>
        </Grid>
    )
}

const container = {
    backgroundColor: '#FF5200',
    width: '150vw',
    height: '100vh',
    flewgrow: '1',
    // height: '100%',
  };

  const logoStyle = {
    height: '334px',
    width: '367px',
    left: '30%',
    right: '30%',
    position: 'absolute',
    textAlign: 'center'
}

const titleStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    color: '#000000',
    position: 'absolute',
    width: '274px',
    height: '24px',
    top: '145px',
    left: '30%',
    right: '30%',
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
    left: '30%',
    right: '30%',
}

const tableStyle = {
    minWidth: '650',
    position: 'absolute',
    top: '300px', 
    left: '30%', 
    right: '30%',
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
    left: '60%',
    right: '60%',
    top: '430px',
    background: '#BA0FF7',
    borderRadius: '18px',
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px'
}