import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logo.png';

const useStyles = makeStyles (() => ({
    logoStyle: {
        height: '50%',
        width: '100%',
        position: 'fixed',
        top: '20px',
        left: '0px'
    }
}));

const Logo = () => {
    const classes = useStyles ();
    return (
        <img className={classes.logoStyle} src={logo} alt='logo' />
    )
}

export default Logo;