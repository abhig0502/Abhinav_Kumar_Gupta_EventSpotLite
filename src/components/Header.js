import React from "react";
import { useState } from "react";

const Header = () => {

    const [signIn,setSignIn]=useState("SignIn");

    const handleSignInButton=()=>{
        signIn==="SignIn" ? setSignIn("SignOut") : setSignIn("SignIn");
    }
  return (
    <div className="bg-gray-300 fixed top-0 left-0 w-full z-10">
      <div className="flex">
        <div className="w-[150px] h-[150px] ml-11 mt-3 mb-2 rounded-3xl hover:bg-sky-500 hover:text-white">
          <img
            className="w-[150px] h-[150px] rounded-[500px] shadow-2xl"
            alt="profile-photo"
            src="https://c0.wallpaperflare.com/preview/684/566/377/backlit-beach-blue-dark-blue.jpg"
          />
        </div>
        <div className="">
          <div className="mt-1 ml-11 flex justify-between">
            <div className="text-[60px]">
              <h1 className="">EventSpot Lite</h1>
            </div>
            <div className="flex">
              <div className="">
                <button className="ml-5 mt-5 px-5 py-3 bg-gray-400 rounded-3xl hover:bg-sky-500 hover:text-white">
                  Location
                </button>
              </div>
              <div className="rounded-2xl cursor-pointer">
                <button className="ml-5 mt-5 px-5 py-3 bg-gray-400 rounded-3xl hover:bg-sky-500 hover:text-white" onClick={handleSignInButton}>
                  {signIn}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between ml-11 mb-2">
            <ul className="flex justify-between">
              <li className="mt-3 ml-11 px-11 py-2 bg-white rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white">
                Search
              </li>
              <li className="mt-3 ml-11 px-11 py-2 bg-white rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white">
                Discover
              </li>
              <li className="mt-3 ml-11 px-11 py-2 bg-white rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white">
                Location
              </li>
              <li className="mt-3 ml-11 px-11 py-2 bg-white rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white">
                Favourite
              </li>
              <li className="mt-3 ml-11 px-11 py-2 bg-white rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white">
                Profile Icon
              </li>
              <li className="mt-3 ml-11 px-11 py-2 bg-white rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white">
                Booking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
