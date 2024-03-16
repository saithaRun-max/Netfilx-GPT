import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggesitions from "./GptMoviesSuggesitions";
import { Bg_Img } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div>
        <img className="" src={Bg_Img} alt="bg-image" />
      </div>
        <div>
          <GptSearchBar />
          <GptMoviesSuggesitions />
        </div>
     
    </>
  );
};

export default GptSearch;
