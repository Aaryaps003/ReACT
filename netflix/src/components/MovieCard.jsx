function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.bannerUrl} alt={movie.name} />

      <div className="info">
        <h3>{movie.name}</h3>

        <p className="genre">{movie.genre}</p>

        <p className="year">{movie.releaseYear}</p>
      </div>
    </div>
  );
}

export default MovieCard;