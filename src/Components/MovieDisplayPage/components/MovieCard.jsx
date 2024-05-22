import React from "react";
import ReactDOM from "react-dom";
import '../../../ComponentsCSS/MovieCard.css'


export function MovieCard(props) {
  const imgSrc =`https://image.tmdb.org/t/p/w500${props.path}`
  return (
    // JSX code for rendering the component
      <div className="MovieCard" >
        <img src={imgSrc} alt={props.title}></img>

        <div className="movie-info">
            <h3>{props.title}</h3>
            <p>Rating:{props.rating}</p>
        </div>

      </div>
  );
}

export default MovieCard;