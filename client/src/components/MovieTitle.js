import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles (() => ({
    title: {
        fontFamily: 'Luckiest Guy',
        position: 'absolute',
        width: '38.7%',
        height: '6.6%',
        left: '7%',
        top: '50%',
        textAlign: 'center'
    }
}));

const MovieTitle = (props) => {
    const classes = useStyles();
    return (
        <Typography variant='h4' className={classes.title} {...props}></Typography>
    )
}


export default MovieTitle;