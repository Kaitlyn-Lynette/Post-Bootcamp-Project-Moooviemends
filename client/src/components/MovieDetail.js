import React from "react";
import {Grid} from '@material-ui/core';

function MovieDetail(props) {
  return (
      <Grid item xs={11} lg={10}>
        <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
        <h3>Director(s): {props.director}</h3>
        <h3>Genre: {props.genre}</h3>
        <h3>Released: {props.released}</h3>
      </Grid>
  );
}

export default MovieDetail;
