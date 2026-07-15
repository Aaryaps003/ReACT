import { useState } from 'react'
import "./App.css";
import movies_data from "./data/movies";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <nav>
        <div className="logo">NETFLIX</div>
      </nav>

      <div className="container">
        <h2>Trending Now</h2>

        <div className="movies">

          {movies_data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          
        </div>
      </div>
    </>
  );
}

export default App;
