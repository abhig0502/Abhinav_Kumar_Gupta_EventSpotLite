import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SideMenu = () => {
    const navigate=useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      
<div className="relative">
        {/* Hamburger Icon */}
        <div
          className="hamburger-icon p-2 cursor-pointer fixed top-5 left-5 z-50 bg-black text-white rounded-full"
          onClick={toggleSidebar}
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`w-[200px] h-full bg-black text-white fixed top-0 left-0 transform ${
            isSidebarOpen ? "" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-40 ml-5 mt-5`}
        >
          <ul className="flex flex-col justify-between p-5">
            {/* Explore Section */}
            <div>
              <div className="px-3 py-2">
                <h1 className="text-white text-[20px] ml-2">Explore</h1>
              </div>
              <li
                //   className="ml-3 px-5 py-5 mt-4 rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500 "
                className="ml-3 px-3 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[17px] text-white hover:bg-sky-500 hover:text-white  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center mt-1"
                onClick={() => {
                  navigate("/");
                }}>
                Home
              </li>
              <li
                //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                className="ml-3 px-3 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[17px] text-white hover:bg-sky-500 hover:text-white  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                onClick={() => {
                  navigate("/discover");
                }}>
                Discover
              </li>
              <li
                //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                className="ml-3 px-3 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[17px] text-white hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                onClick={() => {
                  navigate("/dance");
                }}>
                Dancing
              </li>
              <hr className=" ml-3 mt-2 w-[145px] mb-2" />
              <div>
                <div className="px-3 py-2">
                  <h1 className="text-white text-[19px] ml-2 mb-1">
                    Top Categories
                  </h1>
                </div>
                <li
                  //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                  className="ml-3 px-3 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[17px] text-white hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                  onClick={() => {
                  navigate("/music");
                }}>
                  Music Events
                </li>
                <li
                  //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                  className="ml-3 px-3 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[17px] text-white hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                  onClick={() => {
                  navigate("/art");
                }}>
                  Art&Exhibitions
                </li>
                <li
                  //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                  className=" px-20 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[17px] text-white hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                  onClick={() => {
                  navigate("/tech");
                }}>
                  Tech&Innovation
                </li>
                <li
                  //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                  className="ml-3 px-3 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[15px] text-white hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                  onClick={() => {
                  navigate("/sport");
                }}>
                  Sports Events
                </li>
                <li
                  //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                  className="ml-3 px-3 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[17px] text-white hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                  onClick={() => {
                  navigate("/food");
                }}>
                  Food & Drink
                </li>
                <li
                  //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                  className=" px-20 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[17px] text-white hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                  onClick={() => {
                  navigate("/wellness");
                }}>
                  Wellness&Fitness
                </li>
                <li
                  //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                  className="px-20 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[17px] text-white hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                  onClick={() => {
                  navigate("/outdoor");
                }}>
                  Outdoor&Adventure
                </li>
                <hr className=" mt-2 w-[145px] mb-2" />
              </div>
              {/* Add other menu items as needed */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideMenu
