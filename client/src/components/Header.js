import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles (() => ({
    title: {
        color: '#FFFFFF',
        position: 'relative',
        fontSize: '3em',
        fontFamily: 'Luckiest Guy',
        bottom:'250px'
    }
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <Typography variant='h1' className={classes.title} {...props}>Moooviemends</Typography>
    )
}


export default Header;