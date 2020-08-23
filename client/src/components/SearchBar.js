import React from 'react'
import {Paper} from '@material-ui/core';


const SearchBar = (props) => {
    return (
        <Paper 
        style={paperStyle}
        {...props}
        />
    )
}

const paperStyle = {
    position: 'absolute',
    width: '312px',
    height: '37px',
    left: '23px',
    top: '206px',
    background: '#EEEEEE',
    border: '1px solid #000000',
    boxSizing: 'borderBox',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
};


export default SearchBar;

