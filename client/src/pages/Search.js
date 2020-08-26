import React, { Component } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieTitle from '../components/MovieTitle';
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
    console.log('this is the poster',this.state.result.Poster);
    };
    render () {
        return (
            <Container>
                <Grid item xs={12} lg={10}>
                    <img style={logoStyle} src={logo} alt='logo' />
                </Grid>
                <Grid item xs={12} lg={10}>
                    <Header></Header>
                </Grid>
                <Grid item xs={12} lg={10}>
                    <Typography style={actionStyle}>Search YO' MOOOVIE</Typography>
                        <SearchBar
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        >
                        </SearchBar>
                </Grid>
                {this.state.result.Title ? (
                        <Grid item xs={12} lg={10}>
                        <MovieTitle>
                        {this.state.result.Title || "Search for a movie to begin"}
                        </MovieTitle>
                        <MovieCard
                        src={this.state.result.Poster}
                        director={this.state.result.Director}
                        genre={this.state.result.Genre}
                        released={this.state.result.Released}
                        />
                        </Grid>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Container>
        )
    }   
}

const logoStyle = {
    height: '334px',
    width: '367px',
    position: 'absolute',
    textAlign: 'center',
    justify: 'center',
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
    position: 'relative',
    justify: 'center',
    width: '274px',
    height: '24px',
    left: '12px',
    top: '174px'
}


export default Search;