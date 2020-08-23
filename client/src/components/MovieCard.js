import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

function MovieCard (props) {
    return (
        <Card style={cardStyle}>
            <CardHeader
                title={props.heading}
            />
            <CardMedia
               className={mediaStyle}
               image={props.children}
            />
        </Card>
    )
}

const cardStyle = {
    maxWidth: '345',
    position: 'absolute',
    width: '130px',
    height: '266px',
    left: '43px',
    top: '363.46px',
}

const mediaStyle = {
    height: '0',
    paddingTop: '56.25%', 
}

export default MovieCard;