import React, {useState} from 'react';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import Logo from '../components/Logo';
import {Grid, Typography, Input} from '@material-ui/core';
import API from "../utils/API";

export default function Create () {
  
    const [playlist, setPlaylist] = useState({title: "", description:""});
    

    const handleCreatePlaylist = e => {
        e.preventDefault();
        // const { name, value } = e.target;
        // setPlaylist(({
        //     [name]: value
        // }));
        // console.log('this is playlist', playlist)
        API.createPlaylist(playlist)
            .then((res)=> {
                // console.log("I'm listening")
                console.log('this is res',res)
            })
            .catch((err) => {
                console.log(err);
            });
        console.log('this is the playlist object', playlist)
        };

        const handleInputChange = e => {

            const { name, value } = e.target;
            setPlaylist(({
                ...playlist,
                [name]: value
            }));
            console.log('this is the value', value);
        };
  
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
            <Typography style={titleStyle}>Playlist Title</Typography>
            <Input 
            value={playlist.title}
            style={titleBoxStyle}
            name="title"
            onChange = {handleInputChange}
            type="text"
            placeholder="Cartoon movies"
            />
        </Grid>
        <Grid item>
            <Typography style={descStyle}>Description</Typography> 
            <Input 
            value={playlist.description}
            style={descBoxStyle}
            name="description"
            onChange={handleInputChange}
            // handleInputChange={handleInputChange}
            type="text"
            placeholder="Love me some good cartoon movies"
            id="outlined-multiline-static"
            multiline
            rows={4}
            variant="filled"
            />
        </Grid>
        <Grid item>
            <Buttons 
            style={btnStyle} 
            onClick={handleCreatePlaylist}
            >
            <Typography style={btnFontStyle}>Create</Typography>
            </Buttons>
        </Grid> 
        </Grid>
    )
}


const titleStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    color: '#000000',
    position: 'absolute',
    width: '74.7%',
    height: '3.5%',
    left: '5%',
    top: '30%'
}

const titleBoxStyle = {
    position: 'absolute',
    width: '85%',
    height: '5.4%',
    left: '5%',
    top: '35%',
    background: '#EEEEEE',
    border: '1px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
}

const descStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    color: '	#000000',
    position: 'absolute',
    width: '34.8%',
    height: '9.3%',
    left: '5%',
    top: '45%'
}

const descBoxStyle = {
    position: 'absolute',
    width: '85%',
    height: '15.1%',
    left: '5%',
    top: '50%',
    background: '#EEEEEE',
    border: '1px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
}

const btnStyle = {
    position: 'absolute',
    width: '32.3%',
    height: '4.7%',
    left: '5%',
    top: '69%',
    background: '#BA0FF7',
    borderRadius: '18px',
}

const btnFontStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px'
}

const container = {
    backgroundColor: '#FF5200',
    width: '100vw',
    height: '100vh',
    flewgrow: '1',
  };



