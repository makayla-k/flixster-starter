import React, { useEffect } from "react";
import '../../../ComponentsCSS/DetailModal.css'


export function DetailModal({selectedMovie, onSelect}) {
  return (
    <div className="modal-overlay" onClick={onSelect}>
      <div className="modal-content">
        <div >
        <h2>{selectedMovie?.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500${selectedMovie?.backdrop_path}`} alt={selectedMovie?.title} />
        <p><strong>Release Date:</strong> {selectedMovie?.release_date}</p>
        <p><strong>Overview:</strong> {selectedMovie?.overview}</p>
        {selectedMovie?.trailerUrl && (
            <iframe
              src={selectedMovie.trailerUrl}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Movie Trailer"
              width="560" height="315"
            ></iframe>
        )}
        </div>
      </div>

    </div>
  );
}

export default DetailModal;