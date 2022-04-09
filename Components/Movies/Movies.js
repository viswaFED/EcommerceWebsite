import React from "react";
import classes from './Movies.module.css'
const Movie = (props) =>{
    return (
        <li className={classes.movie}>
            <h2>{props.title}</h2>
            <h3>{props.releaseDate}</h3>
            <p>{props.openingText} </p>
            <button className={classes.button} onClick={props.onDelete}>Delete movie</button>
        </li>
    )
}
export default Movie;