import React from "react";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
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
          <FiLogOut className="text-white p-1 mx-1  rounded-md h-10 w-10 bg-slate-700" />
          <button className="border text-white flex align-middle p-1 ">
            (Sign Out)
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
