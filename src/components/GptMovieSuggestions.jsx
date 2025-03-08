import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/languageConstants";

const GptMovieSuggestions=()=>{
    const movieResults=useSelector((store)=>store.gpt.TMDBMovies);
    const language=useSelector((store)=>store.config.lang);


    if(movieResults==null){
        return;
    }

    return(
        <div className="p-4 m-4 bg-black relative z-50 bg-opacity-70" >
             <MovieList  title={lang[language]?.searchResults} movies={movieResults}/>
           
        </div>
    )
}

export default GptMovieSuggestions;