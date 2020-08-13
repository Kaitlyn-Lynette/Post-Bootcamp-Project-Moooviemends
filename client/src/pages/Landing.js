import React from 'react'
import {Link} from 'react-router-dom';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles ((theme) => ({
    // root: {
    //     flexGrow: 1,
    // },
    title: {
        fontFamily: 'Luckiest Guy',
        color: 'white',
        position: 'absolute',
        width: '295px',
        height: '29px',
        left: '40px',
        top: '100px',
        
    }
}));


const Landing = () => {
    const classes = useStyles();
    return (
        <Grid 
        container style={container}
        flexWrap='wrap'
        justify='center'// Adding justify center moved the title center
        alignItems='center'
        direction='column'
        >
        <Grid item>
            <Typography variant='h1' className={classes.title}>Moooviemends</Typography>
        </Grid>
        
        </Grid>
        
    )
}

const container = {
  display: 'flex',
  backgroundColor: '#FF5200',
  color: 'white',
  width: '100vw',
  height: '100vh',
  flexGrow: '1',
};

// const headerStyle = {
//     position: 'absolute',
//     width: '295px',
//     height: '29px',
//     left: '40px',
//     top: '100px',
    
// }

export default Landing;