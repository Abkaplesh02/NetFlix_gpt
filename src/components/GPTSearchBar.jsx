import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import {client} from "../utils/openai";
import { API_options, SearchApi } from "../utils/constant";
import { addGptMovies } from "../redux/GPTSlice";

const GptSearchBar=()=>{
    const language=useSelector((store)=>store.config.lang);
    const searchText=useRef(null);
    const dispatch=useDispatch();
    const handleGPTSearchClick=async()=>{
        // make api call to gpt ai and get movie results

        const gptQuery="Act as a Movie Recommendation System and suggest some movies for the query"+ searchText.current.value+" only give me name of 5 movies , comma seerated like the example result given ahead. Example Result: Gaddar, Sholay,Don,Zindagi na milegi dobara,Golmaal";

        // const data=await fetch(SearchApi+searchText.current.value+"list of 5 movies");
        // const json=await data.json();
        // console.log(json[1])

        // const url = 'https://api.themoviedb.org/3/search/movie?query=Andaaz%20%20apna%20apna&include_adult=false&language=en-US&page=1';

        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+searchText.current.value+"&include_adult=false&language=en-US&page=1",API_options);
        const json =await data.json();

        

        dispatch(addGptMovies(json.results));


        // const completion =await  client.chat.completions.create({
        //   model: "gpt-4o-mini",
        //   store: true,
        //   messages: [
        //     {"role": "user", "content": gptQuery},
        //   ],
        // });

        // console.log(completion.choices)
    }
    return(
        <div className="pt-[40%] md:pt-[10%] flex justify-center relative z-20">

            <form className=" bg-black w-full md:w-1/2 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input type="text" ref={searchText} className="p-4 m-4 col-span-9 " placeholder={lang[language].gptSearchPlaceholder} />
                <button className="py-2 px-4 bg-red-700 m-4 text-white rounded-lg col-span-3" onClick={handleGPTSearchClick}>{lang[language].search}</button>

            </form>
        </div>
    )
}

export default GptSearchBar;