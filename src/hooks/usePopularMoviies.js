import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constant";
import { useEffect } from "react";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMoviies=()=>{

    const dispatch =useDispatch();
    const popularMovies=useSelector((store)=>store.movies.popularMovies)

    const getPopularMovies=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_options);
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{
        if(!popularMovies){
        getPopularMovies();
        }
    },[])
}

export default usePopularMoviies;