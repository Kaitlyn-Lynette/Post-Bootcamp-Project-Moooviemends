import React from 'react';
import { Grid } from '@material-ui/core';

const Container = (props) => {
    return (
        <Grid 
        container style={container}
        justify='center'// Adding justify center moved the title center
        alignItems='center'
        direction='column'
        {...props}
        />
    )
}

const container = {
    backgroundColor: '#FF5200',
    color: 'white',
    width: '100vw',
    height: '100vh',
    flewgrow: '1',
  };

  export default Container;