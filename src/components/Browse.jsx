import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMoviies from "../hooks/usePopularMoviies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = ()=>{

    useNowPlayingMovies();
    usePopularMoviies();
    useTrendingMovies();
    useUpcomingMovies();
    
    return(
        <div className="bg-black">
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
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