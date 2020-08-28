import React from 'react';
import {Button} from '@material-ui/core';

export default function Buttons (props) {
    return (
    <Button style={btnStyle} {...props} />
    )
}

const btnStyle = {
    position: 'absolute',
    width: '118px',
    height: '32px',
    // left: '29px',
    // top: '266px',
    background: '#BA0FF7',
    borderRadius: '18px',
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px'
}