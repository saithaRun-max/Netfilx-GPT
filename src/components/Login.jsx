import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleToggleSignIn = () => {
    setIsSignInForm(!isSignInForm);

    // console.log(isSignUpForm);
  };

  return (
    <div>
      <Header />
      <div className="fixed">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-image"
          className=""
        />
      </div>

      <div className="relative top-20  bg-black opacity-80 w-[420px] h-[600px] p-2  mx-auto ">
        <h1 className="font-semibold text-white text-4xl px-1 mt-10 ml-8 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form className=" flex flex-col mt-10 px-10">
          {!isSignInForm ? <div className="">
              <input
              className=" bg-slate-500 placeholder:text-indigo-100 text-white font-medium w-full  p-3 mb-5  rounded-sm"
              type="text"
              placeholder="Enter Full Name"
            />
            
            <input
            className=" bg-slate-500 placeholder:text-indigo-100 text-white font-medium w-full p-3 mb-5  rounded-sm"
            type="text"
            placeholder="Enter Phone Number" /> 
            
            
            </div> : ""
        }

          <input
            className=" bg-slate-500 placeholder:text-indigo-100  font-medium p-3 mb-5  rounded-sm"
            type="text"
            placeholder="Email Address"
          />
          <input
            className=" bg-slate-500 placeholder:text-indigo-100 font-medium p-3 mb-5 rounded-sm"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-600 p-3 text-white w-full rounded-sm mt-5 mx-auto  font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p
          onClick={() => handleToggleSignIn()}
          className="text-white mx-10 px-1 mt-14 cursor-pointer"
        >
          {isSignInForm
            ? "New to Netfilx? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
      </div>
    </div>
  );
};

export default Login;
