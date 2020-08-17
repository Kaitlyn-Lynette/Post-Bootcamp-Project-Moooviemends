import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        position: 'absolute',
        width: '312px',
        height: '46px',
        left: '31px',
        top: '363px',
        background: '#EEEEEE',
        opacity: '0.26',
      },
      title: {
        fontFamily: 'Luckiest Guy',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '24px',
        textAlign: 'center',
        color: '#000000',
      }
    },
  }));
  
  export default function Search() {
    const classes = useStyles();
  
    return (
    <div className={classes.root}>
        <Paper/>
    </div>
    )
  }
