import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constant";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import { toggleGptSearchView } from "../redux/GPTSlice";
import { changeLanguage } from "../redux/configSlice";


const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

    const user=useSelector((store)=>store.user);

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            
            
          }).catch((error) => {
           
          });
    }

    const handleGPTSearchClick=()=>{
      dispatch(toggleGptSearchView())
    }

    const handleLangChange=(e)=>{
      dispatch(changeLanguage(e.target.value));
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              navigate("/browse");
              // ...
            } else {
             dispatch(removeUser());
             navigate("/");
            }
          });

        //   "Unsubscribed will be called when component unmounts"
          return()=>unsubscribe();
          
    },[]);


    return (
        <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between items-center" >
            <img className="w-44" src={LOGO} alt="Logo" />

            {user && <div className="flex p-2 items-center">
             { showGptSearch &&  <select className="p-2 bg-gray-900 text-white m-2" onChange={handleLangChange}>
                {
                  SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier} >{lang.name}</option>))
                }
              </select> }
            <button className="py-2 px-4 my-2 mx-4 text-white bg-purple-900 rounded-lg" onClick={handleGPTSearchClick}>GPT Search</button>
                <img className="w-12 h-12 rounded-full mr-4" src={user?.photoURL} alt="userIcon" />
                <button className=" text-white font-bold bg-red-600 rounded-xl h-10 px-2 hover:bg-red-800" onClick={handleSignOut}>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;