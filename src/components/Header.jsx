import React from "react";
import { FiLogOut } from "react-icons/fi";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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

        <div className="flex absolute top-4 left-3/4 sm:ml-14 xl:ml-32">
          <img
            className="w-10 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          />
          <button
            onClick={handleSignOut}
            className="border text-white p-1 px-2"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
