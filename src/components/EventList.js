
import React, { useState } from "react";
import { events } from "../mockData";
import EventModal from "./EventModal";
import { useSearch } from "../utils/context";
import { useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const navigate=useNavigate();
  
  //   const { setSearchTerm } = useSearch();
  
  // Toggle sidebar function
  

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black flex mt-[170px]">
     <SideMenu/>
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
