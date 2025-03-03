import { useSelector } from "react-redux";

const GptMovieSuggestions=()=>{
    const movieResults=useSelector((store)=>store.gpt.TMDBMovies);
    return(
        <div>
            
        </div>
    )
}

export default GptMovieSuggestions;