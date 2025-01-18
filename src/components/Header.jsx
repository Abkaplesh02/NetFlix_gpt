import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO, USER_AVATAR } from "../utils/constant";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";


const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const user=useSelector((store)=>store.user);

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            
            
          }).catch((error) => {
           
          });
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
        <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
            <img className="w-44" src={LOGO} alt="Logo" />

            {user && <div className="flex p-2">
                <img className="w-12 h-12 rounded-full mr-4" src={user?.photoURL} alt="userIcon" />
                <button className=" text-white font-bold bg-red-600 rounded-xl h-10 px-2 hover:bg-red-800" onClick={handleSignOut}>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;