import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

function MovieCard (props) {
    return (
    <Card style={cardStyle}>
        <CardHeader
        title={props.heading}
        />
        <CardMedia
        style= {mediaStyle}
        image= {props.src}
        />
        <CardContent>
        <h2>{props.director}</h2>
        <h2>{props.genre}</h2>
        <h2>{props.released}</h2>
        </CardContent>
    </Card>
    )
}

const cardStyle = {
    position: 'absolute',
    // width: '130px',
    // height: '266px',
    left: '43px',
    top: '363.46px',
}

const mediaStyle = {
    height: '0',
    paddingTop: '56.25%', 
}

export default MovieCard;



