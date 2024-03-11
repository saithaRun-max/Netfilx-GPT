import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoBagkground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      // `https://api.themoviedb.org/3/movie/${movieId}videos?language=en-US`,
      // API_OPTIONS
      `https://api.themoviedb.org/3/find/${movieId}?external_source=`, API_OPTIONS
    );

    console.log(data)
    // const json = await data.json();

    // const filterData = await json.results.filter(
    //   (video) => video.type === "Trailer"
    // );

    //if no trailer takes 1st video
    // const trailer = filterData.length ? filterData[0] : json?.results[0];

    // const trailer = filterData[0] ;
   
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBagkground;
