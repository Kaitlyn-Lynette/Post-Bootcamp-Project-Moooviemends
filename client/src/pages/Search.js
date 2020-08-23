import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';
import Buttons from '../components/Buttons';
import {Grid, Typography} from '@material-ui/core';
import logo from '../assets/logo.png';

export default function Search () {
    return (
        <Container>
            <Grid item xs={11} lg={10}>
                <img style={logoStyle} src={logo} alt='logo' />
            </Grid>
            <Grid item xs={11} lg={10}>
                <Header></Header>
            </Grid>
            <Grid item xs={11} lg={10}>
                <Typography style={actionStyle}>Search YO' MOOOVIE</Typography>
                <SearchBar></SearchBar>
                <Buttons>Search</Buttons>
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

const actionStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    color: '#000000',
    position: 'absolute',
    width: '274px',
    height: '24px',
    left: '12px',
    top: '174px'
}
