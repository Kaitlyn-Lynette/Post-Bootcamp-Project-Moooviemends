import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      position: 'absolute',
      left: '100%', 
      top: '47%'

    },
    playlistButton: {
        background: '#BA0FF7',
        borderRadius: '18px',
        fontFamily: 'Luckiest Guy',
        fontStyle: 'bold',
        fontSize: '24px',
        lineHeight: '24px',
        width: '150px',
        height: '40px',
        borderRadius: '17px',
        backgroundColor: '#FFFF00',
        top: '55%',
        right: '50%',
        margin: '10px',
    }
  }));

export default function PlaylistButtons (props) {
    //Setting the component's initial state 
    const [playlists, setPlaylist] = useState([]);
    const classes = useStyles ();

    //Load all the playlist and store them with setPlaylist
    useEffect(() => {
        loadPlaylist()
    }, [])

    //This will fetch the API for playlist saved in the database 
    function loadPlaylist () {
        API.getPlaylist()
        .then(res => 
            setPlaylist(res.data)
        )
        .catch(err => console.log(err));
    };

    return (
        <List component="nav" className={classes.root}>
            {playlists.map(playlist => {
            return (
                <ListItem 
                button={playlist._id}
                className={classes.playlistButton}
                {...props}
                >
                    <ListItemText> {playlist.title}</ListItemText>
                </ListItem>                
            );
            })}    
        </List>
    )
}