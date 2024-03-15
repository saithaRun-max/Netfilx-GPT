import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <>
      {/* <div className="flex absolute top-0 z-10 justify-between">
        <div className=" h-16 w-screen bg-gradient-to-b from-black">
          <img className="w-44  left-5 top-4 " src={LOGO} alt="logo" />
        </div>

        {user && (
          <div className="flex absolute top-4 left-3/4  xl:ml-32">
            <div className="ml-14">
              <img className="w-10 mx-2 h-10" src={user?.photoURL} />
              <span className="text-white">{user?.displayName}</span>
            </div>
            <button onClick={handleSignOut} className="border sm:text-black bg-white text-white px-2">
              Out
            </button>
          </div>
        )}
      </div> */}
      <div className="absolute z-10 grid grid-cols-12 bg-opacity-10 w-screen px-10">
        <div className="col-span-9">
          <img className="w-44" src={LOGO} alt="logo" />
        </div>

        {user && (
          <div className="col-span-3 flex align-middle py-4 mx-8 ">
            <button  className=" h-12 px-2 bg-slate-500 text-white rounded-sm border">GPT Search</button>
            <div className="">
              <img className="w-28" src={user?.photoURL} />
             
            </div>
            <button onClick={handleSignOut} className=" h-12 px-8 text-white rounded-sm bg-slate-700">
              Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
