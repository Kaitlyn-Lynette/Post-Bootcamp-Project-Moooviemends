import React from 'react'
import { Input } from '@material-ui/core';


const SearchBar = (props) => {
    return (
        <form>
            <Input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            place="Search for a Movie"
            id="search"
            style={paperStyle}
            {...props}
            />
            <br />
            <button onClick={props.handleFormSubmit}>
                Search
            </button>
        </form>
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

