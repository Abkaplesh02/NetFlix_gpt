import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!(state.showGptSearch);
        }
    }
})

export default GPTSlice.reducer;
export const{toggleGptSearchView}=GPTSlice.actions;