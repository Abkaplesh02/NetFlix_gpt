import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMoviies from "../hooks/usePopularMoviies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = ()=>{
        const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

    useNowPlayingMovies();
    usePopularMoviies();
    useTrendingMovies();
    useUpcomingMovies();
    
    return(
        <div >
            <Header/>
            {
                showGptSearch ? (
                    <GPTSearch/>
                ) : (
                    <>  
                    <MainContainer/>
                    <SecondaryContainer/>
                    </>
                )
            }


            {/* <GPTSearch/>
            <MainContainer/>
            <SecondaryContainer/> */}
            {/* 
            MainContainer 
                -Video Background
                -Video Title
            SecondaryContainer
                 -MovieList *n
                 -Cards     *n
            */}

        </div>
    )
}

export default Browse;