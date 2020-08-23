import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import {Grid, Typography } from '@material-ui/core';
import logo from '../assets/logo.png';

export default function Landing () {

    return (
        <Container>
            <Grid item xs={11} lg={10}>
                <img style={logoStyle} src={logo} alt='logo' />
            </Grid>
            <Grid item xs={11} lg={10}>
                <Header></Header>
            </Grid>
            <Grid item xs={11} lg={10}>
                <Typography style={slogan}>Make your movie mends to your friends</Typography>
            </Grid>
        </Container>
    )
}

const logoStyle = {
    height: '334px',
    width: '367px',
    position: 'relative',
    top: 0,
    left: 0
}


const slogan = {
    position: 'absolute',
    width: '297px',
    height: '61px',
    left: '39px',
    top: '402px',
    fontFamily: 'Crafty Girls',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '36px',
    lineHeight: '52px',
    textAlign: 'center',
    color: '#000000'

}