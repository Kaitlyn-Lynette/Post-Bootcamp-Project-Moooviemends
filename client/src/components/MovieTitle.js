import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles (() => ({
    title: {
        fontFamily: 'Luckiest Guy',
        position: 'absolute',
        width: '300px',
        height: '45px',
        left: '12px',
        top: '331px',
        // fontSize: '1em',
    }
}));

const MovieTitle = (props) => {
    const classes = useStyles();
    return (
        <Typography variant='h3' className={classes.title} {...props}></Typography>
    )
}


export default MovieTitle;