import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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



  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Discover", path: "/discover" },
    { name: "Location", path: "/location" },
    { name: "Trendings", path: "/trending" }
  ];


  return (
    <div className="bg-black fixed top-0 left-0 w-full z-10">
      <div className="flex flex-col md:flex-row items-center m-6">
        <div className="flex items-center ">
          <div className="w-20 h-20 md:w-[150px] md:h-[150px] rounded-full overflow-hidden hover:bg-sky-500 hover:text-white">
            <img
              className="w-full h-full object-cover"
              alt="profile-photo"
              src="https://c0.wallpaperflare.com/preview/684/566/377/backlit-beach-blue-dark-blue.jpg"
            />
          </div>
          <h1 className="font-serif text-white text-lg md:text-2xl ml-4">
            EventSpot Lite
          </h1>
        </div>
        <div className=" md:mt-0 flex flex-col md:flex-row items-center ml-44 mr-44 mt-6 ">
          <input
            type="text"
            className="w-[280px] h-7 md:w-[550px] md:h-10 text-sm text-center rounded-xl mb-4 md:mb-0 md:mr-4"
            placeholder="Search Events Or Location ..."
          />
          <div className="flex flex-row gap-5">
            <div className=" md:mr-[250px] ">
            <button
              className="px-2 py-1 md:px-3 md:py-2 bg-white rounded-2xl hover:bg-sky-500 hover:text-white"
              
            >
              search
            </button>
            </div>
            <div className="md:-mr-44 md:-mt-[50px]">
            <button
              className="px-2 py-1 md:px-3 md:py-2 bg-white rounded-2xl hover:bg-sky-500 hover:text-white"
              onClick={handleSignInButton}
            >
              {signIn}
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row md:flex-row justify-center md:justify-between p-4">
        {/* <ul className="flex flex-row md:flex-row items-center">
          {["Home", "Top Suggestions", "Location ", "Trendings"].map(
            (item, index) => (
              <li
                key={index}
                className="-mt-6 ml-1 md:ml-4 px-2 py-2 md:px-7 md:py-2 text-white bg-gray-900 rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex items-center justify-center"
                onClick={() =>
                  navigate(`/${item.toLowerCase().replace(/ /g, "")}`)
                }
              >
                {item}
              </li>
            )
          )}
        </ul> */}


        <ul className="flex flex-row md:flex-row items-center">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="-mt-6 ml-1 md:ml-4 px-2 py-2 md:px-7 md:py-2 text-white bg-gray-900 rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex items-center justify-center"
          onClick={() => navigate(item.path)}
        >
          {item.name}
        </li>
      ))}
    </ul>


      </div>
    </div>
  );
};

export default Header;
