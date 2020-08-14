import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import {Grid, Typography } from '@material-ui/core';
import logo from '../assets/logo.png';
import Search from '../components/Search';


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
                <Search>
                <Typography style={title}>Search</Typography>
                </Search>
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

const title = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    textAlign: 'center'
}

