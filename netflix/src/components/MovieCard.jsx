function MovieCard({ movie, onClick }) {

  return (

    <div className="card" onClick={onClick}>

      <img src={movie.bannerUrl} alt={movie.name} />

      <div className="info">

        <h3>{movie.name}</h3>

        <p className="genre">{movie.genre}</p>



      </div>
    </div>
  );
}

export default MovieCard;