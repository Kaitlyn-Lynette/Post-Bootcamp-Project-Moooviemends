import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import {Grid, Typography } from '@material-ui/core';
import logo from '../assets/logo.png';

export default function Landing () {

    return (
        // <Container>
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
                <Typography style={slogan}>Make your movie mends to your friends</Typography>
            </Grid>
        {/* </Container> */}
        </Grid>)
}

const logoStyle = {
    height: '334px',
    width: '367px',
    left: '30%',
    right: '30%',
    position: 'absolute',
    textAlign: 'center'
}


const slogan = {
    position: 'absolute',
    width: '297px',
    height: '61px',
    left: '30%',
    right: '30%',
    top: '402px',
    fontFamily: 'Crafty Girls',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '36px',
    lineHeight: '52px',
    textAlign: 'center',
    color: '#000000'

}


const container = {
    backgroundColor: '#FF5200',
    width: '150vw',
    height: '100vh',
    flewgrow: '1',
    // height: '100%',
  };