import { useRef, useState } from "react";
import { BG_URL } from "../utils/constant";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login=()=>{
    const [isSignInForm,setSignInForm]=useState(true);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const [errorMessage,setErrorMessage]=useState(null);

    const toggleSignInForm=()=>{
        setSignInForm(!isSignInForm);
    }

    const handleButtonClick=()=>{
        // Form data validation
       const message= checkValidData(email.current.value,password.current.value);
       setErrorMessage(message);
       
       if(message===null){
        // create a new user

        if(!isSignInForm){
            // Sign up logic

            createUserWithEmailAndPassword(
                auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/v2/D5635AQHrizmaQA5_Lw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1706541257165?e=1741089600&v=beta&t=jtRg2yz2lmvWSnoA5NAJVykBmH45ap86Wvvd318zTLw"
        }).then(() => {
          // Profile updated!
          // ...
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error.message);
        });
        // console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" - "+ errorMessage);
        // ..
      });

        }
        else{
            // Sign in logic


            signInWithEmailAndPassword(
                auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" - " + errorMessage);
  });


        }
       }

    //    sign in /sign up
    }

    return (
      <div className="w-[100vw]" >
        
            <Header/>
            <div className="  absolute ">
            <img className="h-[100vh] object-cover md:w-[100vw]" src={BG_URL} alt="background" />
            </div>

            <form onSubmit={(e)=>e.preventDefault()} className="p-12 bg-black  absolute w-full md:w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 ">
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