import React from "react";
import {  signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "./utils/firebase"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addUser,removeUser} from "./utils/userSlice"
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "./utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const handleClickSignout = () => {
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/")
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error")
        // An error happened.
      });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      const {uid,email,displayName,photoURL}=user;
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL}));
        navigate("/browse")
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
      //   const uid = user.uid;
        // ...
      } else {
      dispatch(removeUser());
      navigate("/")
        // User is signed out
        // ...
      }
    });
    //unscubscribe when component unmount

    return ()=> unsubscribe();
  },[]);


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex p-2">
        <img
          className="w-12 h-12"
          alt="usericon"
          src={LOGO}
        />
        <button className="font-bold text-white" onClick={handleClickSignout}>
          {" "}
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
