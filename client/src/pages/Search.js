import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Buttons from '../components/Buttons';
import {Grid, Typography} from '@material-ui/core';
import logo from '../assets/logo.png';

export default function Search () {

    // state = {
    //     result: {},
    //     search: ""
    // };

    // componentDidMount() {
    //     this.searchMovies("The Matrix")
    //   }
    
    // searchMovies = query => {
    // API.search(query)
    //     .then(res => this.setState({ result: res.data }))
    //     .catch(err => console.log(err));
    // };

    // // When the form is submitted, search the OMDB API for the value of `this.state.search`
    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //       [name]: value
    //     });
    //   };

    // handleFormSubmit = event => {
    // event.preventDefault();
    // this.searchMovies(this.state.search);
    // };

    // render () {
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
                    {/* <Buttons onClick={handleInputChange}></Buttons> */}
                    <Buttons></Buttons>
                </Grid>
                <Grid item xs={11} lg={10}>
                    <MovieCard>
                    </MovieCard>
                </Grid>
            </Container>
        )
    }   

// }

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
