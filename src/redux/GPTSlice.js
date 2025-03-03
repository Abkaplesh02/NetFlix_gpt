import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        TMDBMovies:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!(state.showGptSearch);
        },
        addGptMovies:(state,action)=>{
            state.TMDBMovies=action.payload;
        }
    }
})

export default GPTSlice.reducer;
export const{toggleGptSearchView,addGptMovies}=GPTSlice.actions;