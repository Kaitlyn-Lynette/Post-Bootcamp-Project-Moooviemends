import React from 'react';
import { Grid } from '@material-ui/core';

const Container = (props) => {
    return (
        <Grid 
        container style={container}
        spacing = {3}
        justify='center'// Adding justify center moved the title center
        alignItems='center'
        direction='column'
        {...props}
        />
    )
}

const container = {
    backgroundColor: '#FF5200',
    width: '200vw',
    height: '300vh',
    overflow: 'auto',
  };

  export default Container;