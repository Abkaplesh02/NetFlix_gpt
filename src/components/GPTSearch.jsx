import { BG_URL } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GPTSearchBar";

const GPTSearch=()=>{
    return(
        <>
         <div className="fixed -z-10 ">
                        <img className="h-[100vh] object-cover md:w-[100vw]" src={BG_URL} alt="background" />
                        </div>
                        <div className="">
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
        </>
       
    )
}

export default GPTSearch;