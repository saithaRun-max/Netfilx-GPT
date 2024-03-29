import React, { useState, useRef } from "react";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { checkValidData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Bg_Img } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validStatus, setVlidStatus] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const mobileNumber = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setVlidStatus(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            photoURL: UserAvtar,
            displayName: fullName.current.value,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setVlidStatus(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setVlidStatus(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setVlidStatus(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleToggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className=" ">
        <img
          src={Bg_Img}
          alt="bg-image"
          className="xl:h-screen xl:w-screen sm:h-[700px] sm:w-[900px]"
        />
      </div>

      <div className="absolute top-24 left-1/3 bg-black opacity-80 w-[420px] h-[580px] p-2  mx-auto ">
        <h1 className="font-semibold text-white text-4xl px-1 mt-10 ml-8 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault(), handleButtonClick();
          }}
          className=" flex flex-col mt-10 px-10"
        >
          {!isSignInForm ? (
            <div className="">
              <input
                ref={fullName}
                className=" bg-slate-500 placeholder:text-indigo-100 text-white font-medium w-full  p-3 mb-5  rounded-sm"
                type="text"
                placeholder="Enter Full Name"
              />

              <input
                className=" bg-slate-500 placeholder:text-indigo-100 text-white font-medium w-full p-3 mb-5  rounded-sm"
                type="text"
                placeholder="Enter Phone Number"
              />
            </div>
          ) : (
            ""
          )}

          <input
            className=" bg-slate-500 placeholder:text-indigo-100  font-medium p-3 mb-5  rounded-sm"
            type="text"
            ref={email}
            placeholder="Email Address"
          />
          <input
            className=" bg-slate-500 placeholder:text-indigo-100 font-medium p-3 mb-5 rounded-sm"
            type="password"
            ref={password}
            placeholder="Password"
          />
          <p className="text-white mx-5  cursor-pointer">{validStatus}</p>

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
