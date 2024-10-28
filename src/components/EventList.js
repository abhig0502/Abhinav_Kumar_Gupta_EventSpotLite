
import React, { useState } from "react";
import { events } from "../mockData";
import EventModal from "./EventModal";
import { useSearch } from "../utils/context";
import { useNavigate } from "react-router-dom";

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate=useNavigate();

//   const { setSearchTerm } = useSearch();

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black flex mt-[170px]">
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
                >
                  Tech&Innovation
                </li>
                <li
                  //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                  className="ml-3 px-3 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[15px] text-white hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                >
                  Sports Events
                </li>
                <li
                  //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                  className="ml-3 px-3 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[17px] text-white hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                >
                  Food & Drink
                </li>
                <li
                  //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                  className=" px-20 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[17px] text-white hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                >
                  Wellness&Fitness
                </li>
                <li
                  //   className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500"
                  className="px-20 py-3 cursor-pointer rounded-sm bg-black mb-0 mr-5 text-[17px] text-white hover:bg-sky-500 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-sm flex flex-col items-center justify-center "
                >
                  Outdoor&Adventure
                </li>
                <hr className=" mt-2 w-[145px] mb-2" />
              </div>
              {/* Add other menu items as needed */}
            </div>
          </ul>
        </div>
      </div>

      <div className="ml-[220px]">
        <div>
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-6 ml-5 pt-5">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              //   className="w-[400px] h-[240px] bg-gray-300 rounded-2xl"
              className="w-[380px] h-[400px] bg-black rounded-2xl shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center "
              onClick={() => setSelectedEvent(event)}
            >
              <div className="">
                <div
                  // className="w-[400px] h-[240px] rounded-3xl absolute object-cover"
                  className="w-[380px] h-[240px] bg-black rounded-2xl shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center "
                >
                  <img
                    alt="bg-img"
                    // className="w-[400px] h-[240px] rounded-2xl opacity-200  filter blur-[0.9px]"
                    className="w-[370px] h-[240px] bg-gray-200 rounded-2xl shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center border border-3-white" 
                    src={event.image}
                  />
                </div>
                <div className="relative pl-3 text-white bg-gray-950 pb-1 ">
                  <h3 className="font- text-[18px] mt-3">{event.name}</h3>
                  <p className="font- text-[18px]">{event.location}</p>
                  <p className="text-[16px] font-">{event.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default EventList;
