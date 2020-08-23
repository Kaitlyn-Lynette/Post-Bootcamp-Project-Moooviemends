import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';
import {Grid, Typography, Paper, Button} from '@material-ui/core';
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

const paperStyle = {
    position: 'absolute',
    width: '312px',
    height: '37px',
    left: '23px',
    top: '206px',
    background: '#EEEEEE',
    border: '1px solid #000000',
    boxSizing: 'borderBox',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
}