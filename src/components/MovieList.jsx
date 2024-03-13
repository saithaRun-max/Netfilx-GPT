import React from "react";
import MovieCard from "./MovieCard";
import { GrFormNext } from "react-icons/gr";

const MovieList = ({ title, movies }) => {
  if (!movies) return;


  return (
    <div>
      <div className="pl-12 pr-6 ">
        <h1 className="text-2xl py-4 text-white">{title}<GrFormNext className="inline-block" /></h1>
        <div className="flex overflow-x-scroll ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
