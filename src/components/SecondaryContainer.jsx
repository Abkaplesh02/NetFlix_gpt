import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer=()=>{
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    const popular=useSelector((store)=>store.movies?.popularMovies);
    const trending=useSelector((store)=>store.movies?.trendingMovies);
    const upcoming=useSelector((store)=>store.movies?.upcomingMovies);
    return(
        <div className="-mt-44 relative z-50 pl-12">

            <MovieList title="Now Playing" movies={movies}/>
            <MovieList title="Trending" movies={trending}/>
            <MovieList title="Popular" movies={popular}/>
            <MovieList title="Upcoming movies" movies={upcoming}/>
            <MovieList title="Horror movies" movies={movies}/>

            {/* 
            MovieList-
                -Popular
                ---MovieCards
                -NowPlaying
                -Trending
                -Horror
            */}

        </div>
    )
}
export default SecondaryContainer;