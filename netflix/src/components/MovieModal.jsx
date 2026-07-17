import React from "react";
import "./MovieModal.css";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="modal-trailer">
          {movie.trailerUrl ? (
            <iframe
              width="100%"
              height="400"
              src={movie.trailerUrl}
              title={movie.name}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="no-trailer">
              No Trailer Available
            </div>
          )}
        </div>

        <div className="modal-metadata">
          <h2>{movie.name}</h2>

          <div className="movie-info">
            <p>
              <strong>Release Year:</strong>{" "}
              {movie.releaseYear}
            </p>

            <p>
              <strong>Genre:</strong> {movie.genre}
            </p>

            <p>
              <strong>Rating:</strong> {movie.rating}
            </p>

            <p>
              <strong>Duration:</strong> {movie.duration}
            </p>
          </div>

          <div className="movie-description">
            <h3>Overview</h3>

            <p>{movie.description}</p>
          </div>

          <div className="movie-cast">
            <h3>Cast</h3>

            <p>{movie.cast}</p>
          </div>

          <div className="movie-actions">
            <button className="play-btn">▶ Play</button>

            <button className="add-btn">
              + Add to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;