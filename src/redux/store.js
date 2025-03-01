import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from"./moviesSlice"
import GptReducer from "./GPTSlice"
import ConfigReducer from "./configSlice"

const store=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:GptReducer,
            config:ConfigReducer,

        }
    }
)

export default store;