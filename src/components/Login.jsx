import { useRef, useState } from "react";
import { BG_URL } from "../utils/constant";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login=()=>{
    const [isSignInForm,setSignInForm]=useState(true);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const [errorMessage,setErrorMessage]=useState(null);

    const toggleSignInForm=()=>{
        setSignInForm(!isSignInForm);
    }

    const handleButtonClick=()=>{
        // Form data validation
       const message= checkValidData(email.current.value,password.current.value,name.current.value);
       setErrorMessage(message);
       console.log(message);
        console.log(email.current.value);
        console.log(password.current.value);
    }

    return (
        <div >
            <Header/>
            <div className="absolute">
            <img src={BG_URL} alt="background" />
            </div>

            <form onSubmit={(e)=>e.preventDefault()} className="p-12 bg-black  absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 ">
            <h1 className="font-bold text-3xl py-4 text-white">{isSignInForm ? "Sign In" : "Sign Up"} </h1>
            {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 " />}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 " />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 "  />
                <p className="text-red-500 text-lg font-bold py-2 bg-opacity-40 bg-black">{errorMessage}</p>
                <button  className="p-4 my-6 bg-red-700 w-full rounded-lg text-white" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className="py-4 text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a member? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;

// rafce:: React arrow function component export 