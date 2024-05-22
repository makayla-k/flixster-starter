import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom";
import '../../../ComponentsCSS/MovieList.css'
import MovieCard from "./MovieCard";

function MovieList({moviesList, onSelect}) {
  const cards = moviesList.map((movie) =>
    <div onClick={() => onSelect(movie)}>
      <MovieCard onSelect={onSelect} title={movie.original_title} rating= {movie.vote_average/10} path={movie.poster_path}/>
    </div>
  );
  return (
      <div>
        <div className="MovieList">
          {cards}
        </div>
      </div>
  );
}

export default MovieList;