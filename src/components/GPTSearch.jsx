import { BG_URL } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GPTSearchBar";

const GPTSearch=()=>{
    return(
        <div>
             <div className="absolute">
                        <img className="" src={BG_URL} alt="background" />
                        </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>

            {/* 
            Gpt Search bar
            Gpt Movie Suggestions
            */}
        </div>
    )
}

export default GPTSearch;