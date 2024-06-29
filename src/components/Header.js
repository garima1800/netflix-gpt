import React from "react";
import {  signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "./utils/firebase"

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
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
          src="https://occ-0-2039-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
        />
        <button className="font-bold text-white" onClick={handleClick}>
          {" "}
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
