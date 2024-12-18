import { useState } from "react";
import { BG_URL } from "../utils/constant";
import Header from "./Header";

const Login=()=>{
    const [isSignInForm,setSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        setSignInForm(!isSignInForm);
    }
    return (
        <div >
            <Header/>
            <div className="absolute">
            <img src={BG_URL} alt="background" />
            </div>
            <form className="p-12 bg-black  absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 ">
            <h1 className="font-bold text-3xl py-4 text-white">{isSignInForm ? "Sign In" : "Sign Up"} </h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 " />}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 " />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 "  />
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg text-white">{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className="py-4 text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a member? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;

// rafce:: React arrow function component export 