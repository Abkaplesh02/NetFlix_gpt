import { useEffect } from "react";
import { API_options } from "../utils/constant";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const Browse = ()=>{
    const dispatch =useDispatch();

    const getNowPlayingMovies=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
        console.log(json.results)
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
    return(
        <div>
            <Header/>
        </div>
    )
}

export default Browse;