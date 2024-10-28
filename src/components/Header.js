import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../mockData";
import { useSearch } from "../utils/context";

const Header = () => {
    const { searchTerm } = useSearch();

  const [signIn, setSignIn] = useState("SignIn");

  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/location");
  };

  const handleSignInButton = () => {
    navigate("/Login");
    signIn === "SignIn" ? setSignIn("SignOut") : setSignIn("SignIn");
  };

  return (
    <div className="bg-black fixed top-0 left-0 w-full z-10">
      <div className="flex">
        <div className="w-[150px] h-[150px] ml-11 mt-3 mb-2 rounded-[500px] hover:bg-sky-500 hover:text-white">
          <img
            className="w-[150px] h-[150px] rounded-[500px] shadow-2xl"
            alt="profile-photo"
            src="https://c0.wallpaperflare.com/preview/684/566/377/backlit-beach-blue-dark-blue.jpg"
          />
        </div>
        <div className="">
          <div className="mt-1 ml-11 flex justify-between">
            <div className="text-[30px] mt-5 -ml-5">
              <h1 className="font-serif text-white">EventSpot Lite</h1>
            </div>
            <div className="text-[60px]">
              <div className="-mt-5 ml-32 mr-64">
                <input
                  type="text"
                  className=" w-[550px] h-[36px] text-[15px] text-center rounded-xl mr-11"
                  placeholder="Search Events Or Location ..."
                />
              </div>
            </div>
            <div className="flex">
              <div className="rounded-2xl cursor-pointer">
                <button
                  className="ml-5 mt-5 px-3 py-2 bg-white rounded-2xl hover:bg-sky-500 hover:text-white"
                  onClick={handleSignInButton}
                >
                  {signIn}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between ml-11 mb-2">
            <ul className="flex justify-between">
              <li
                //   className="mt-3 ml-11 px-11 py-2 bg-white rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white"
                className="mt-3 ml-11 px-7 py-2 text-white  bg-gray-900  rounded-2xl cursor-pointer  hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </li>
              <li
                //   className="mt-3 ml-11 px-11 py-2 bg-white rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white"
                className="mt-3 ml-11 px-7 py-2  text-white bg-gray-900  rounded-2xl cursor-pointer  hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center"
                onClick={() => {
                  navigate("/discover");
                }}
              >
                Trending/Top Suggestions
              </li>
              <li
                //   className="mt-3 ml-11 px-11 py-2 bg-white rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white"
                className="mt-3 ml-11 px-7 py-2  text-white bg-gray-900  rounded-2xl cursor-pointer  hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center"
                onClick={() => {
                  navigate("/location");
                }}
              >
                Location Filters
              </li>
              <li
                //   className="mt-3 ml-11 px-11 py-2 bg-white rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white"
                className="mt-3 ml-11 px-7 py-2 text-white  bg-gray-900  rounded-2xl cursor-pointer  hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center"
              >
                Date Filters
              </li>
              <li
                //   className="mt-3 ml-11 px-11 py-2 bg-white rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white"
                className="mt-3 ml-11 px-7 py-2 text-white  bg-gray-900  rounded-2xl cursor-pointer  hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center"
              >
                Event Type
              </li>
              <li
                //   className="mt-3 ml-11 px-11 py-2 bg-white rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white"
                className="mt-3 ml-11 px-7 py-2  text-white bg-gray-900  rounded-2xl cursor-pointer  hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center"
              >
                Trendings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Header;


