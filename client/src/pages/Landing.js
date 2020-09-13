import React from 'react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import {Grid, Typography } from '@material-ui/core';

export default function Landing () {

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
                <Typography style={slogan}>Make your moooviemends to your friends</Typography>
            </Grid>
        </Grid>)
}

const slogan = {
    position: 'absolute',
    width: '80.9%',
    height: '9%',
    left: '10%',
    fontFamily: 'Crafty Girls',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '36px',
    color: '#FFFFFF',
    lineHeight: '52px',
    textAlign: 'center',
}

const container = {
    backgroundColor: '#FF5200',
    width: '100vw',
    height: '100vh',
    flewgrow: '1',
  };