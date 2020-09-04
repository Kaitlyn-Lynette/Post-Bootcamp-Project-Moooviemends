import React from 'react';
import {Button} from '@material-ui/core';

export default function Buttons (props) {
    return (
    <Button onClick={props.handleCreateMovie}{...props} />
    )
}

