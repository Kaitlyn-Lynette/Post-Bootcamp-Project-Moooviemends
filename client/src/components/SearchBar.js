import React from 'react'
import { InputBase, Button, Paper,Grid} from '@material-ui/core';


const SearchBar = (props) => {
    return (
        // <Paper component="form" style={paperStyle}>
        <Grid>
            <InputBase
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            placeholder="Search for a Movie"
            style={inputStyle}
            id="search"
            />
            <br />
            <Button style={btnStyle} onClick={props.handleFormSubmit} {...props}> Search </Button>
        {/* </Paper> */}
        </Grid>
    )
}

const paperStyle = {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
}

const inputStyle = {
    position: 'absolute',
    width: '312px',
    height: '37px',
    left: '23px',
    top: '206px',
    background: '#EEEEEE',
    border: '1px solid #000000',
    boxSizing: 'borderBox',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginLeft: 'theme.spacing(1)',
    flex: 1,
};

const btnStyle = {
    position: 'absolute',
    width: '118px',
    height: '32px',
    left: '29px',
    top: '266px',
    background: '#BA0FF7',
    borderRadius: '18px',
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px'
}

export default SearchBar;