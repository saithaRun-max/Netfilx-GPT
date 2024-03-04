import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBagkground from "./VideoBagkground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log(movies[0]);

  return (
    <div>
      <VideoTitle />
      <VideoBagkground />
    </div>
  );
};

export default MainContainer;
