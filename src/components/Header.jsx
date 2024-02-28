import React from "react";
import { FiLogOut } from "react-icons/fi";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="absolute h-24 w-screen bg-gradient-to-b from-black">
          <img
            className="w-44  left-5 top-4 "
            src="
https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </div>

       {user && 
        <div className="flex absolute top-4 left-3/4  xl:ml-32">
         
        <div className="ml-14">
          
          <img
            className="w-10 mx-2 h-10"
            src={user?.photoURL}
          />
           <span className="text-white">{user?.displayName}</span>
        </div>
        <button
          onClick={handleSignOut}
          className="border text-white  px-2"
        >
          Out
        </button>
      </div>
       } 
      </div>
    </>
  );
};

export default Header;
