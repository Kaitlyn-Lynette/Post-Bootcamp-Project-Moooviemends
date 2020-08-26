import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function MovieCard (props) {
    return (
    <Card style={cardStyle}>
        <CardMedia
            style= {mediaStyle}
            image= {props.src}
        />
        <CardContent>
        <h2>Director: {props.director}</h2>
        <h2>Genre: {props.genre}</h2>
        <h2>Released: {props.released}</h2>
        </CardContent>
    </Card>
    )
}

const cardStyle = {
    position: 'absolute',
    left: '43px',
    top: '363.46px',
    margin: '0px auto'
}

const mediaStyle = {
    paddingTop: '150%',
    width: "170",
    height: "250"
}


export default MovieCard;



