import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API";
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    playlistButton: {
        background: '#BA0FF7',
        borderRadius: '18px',
        fontFamily: 'Luckiest Guy',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '24px',
        // position: 'absolute',
        width: '200px',
        height: '40px',
        // left: '230px',
        top: '487px',
        left: '30%',
        right: '30%'

        // [theme.breakpoints.down("xs")]: {
        //     bottom: '-120px'
        // },  
    },
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
                    <ListItemText>{playlist.title}</ListItemText>
                </ListItem>                
            );
            })}
        
            
        </List>

        // <List component="nav" className={classes.root} aria-label="contacts">
        // <ListItem button>
        //     <ListItemIcon>
        //     <StarIcon />
        //     </ListItemIcon>
        //     <ListItemText primary="Chelsea Otakan" />
        // </ListItem>
        // <ListItem button>
        //     <ListItemText inset primary="Eric Hoffman" />
        // </ListItem>
        // </List>
    )
}