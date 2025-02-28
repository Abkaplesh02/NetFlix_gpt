import { useDispatch } from "react-redux";
import { API_options } from "../utils/constant";
import { useEffect } from "react";
import {  addTrendingMovies } from "../redux/moviesSlice";

const useTrendingMovies=()=>{

    const dispatch =useDispatch();

    const getTrendingMovies=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_options);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results))
    }

    useEffect(()=>{
        getTrendingMovies();
    },[])
}

export default useTrendingMovies;