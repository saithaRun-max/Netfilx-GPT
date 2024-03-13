import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoBagkground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1096197/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const filterData = await json.results.filter(
      (video) => video.type === "Trailer"
    );

    // const trailer = filterData[0] ;

    //if no trailer takes 1st video
    const trailer = filterData.length ? filterData[0] : json?.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div className="lg:-mt-32 ">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen 
      ></iframe>
    </div>
  );
};

export default VideoBagkground;
