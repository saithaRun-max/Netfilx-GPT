import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black w-screen">
        <div className="-mt-56 relative z-10">
          <MovieList title={"Now Playing "} movies={movies.nowPlayingMovies} />
          <MovieList title={"Now Playing "} movies={movies.nowPlayingMovies} />
          <MovieList title={"Now Playing "} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
