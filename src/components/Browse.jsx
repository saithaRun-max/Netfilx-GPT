import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const gptStatus = useSelector((store)=> store.gpt.showGptSearch)

  return (
    <div>
      <Header />
{
  gptStatus && <GptSearch />
}
      
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
