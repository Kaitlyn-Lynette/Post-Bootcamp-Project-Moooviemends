import React, { Component } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieDetail from '../components/MovieDetail';
import API from "../utils/API";
import {Grid, Typography} from '@material-ui/core';
import logo from '../assets/logo.png';

class Search extends Component {
    state = {
        result: {},
        search: ""
    };

    componentDidMount() {
        this.searchMovies("The Matrix");
    }
    
    searchMovies = query => {
    API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
        console.log(value);
      };

    handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
    };

    render () {
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
                    <SearchBar
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    >
                    </SearchBar>
                </Grid>
                <Grid item xs={11} lg={10}>
                    <MovieCard
                    heading={this.state.result.Title || "Search for a movie to begin"}
                    >
                    {this.state.result.Title ? (
                    <MovieDetail
                    title={this.state.result.Title}
                    src={this.state.result.Poster}
                    director={this.state.result.Director}
                    genre={this.state.result.Genre}
                    released={this.state.result.Released}
                    />
              ) : (
                <h3>No Results to Display</h3>
              )}
                    </MovieCard>
                </Grid>
            </Container>
        )
    }   
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


export default Search;