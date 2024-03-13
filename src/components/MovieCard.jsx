import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = (movies) => {
  if (!movies) return;
  const { poster_path } = movies.movie;

  return (
    <div className="lg:min-w-48 sm:min-w-36 p-2 rounded-sm">
      <img src={IMG_CDN + poster_path} alt="card" />
      <p></p>
    </div>
  );
};

export default MovieCard;
