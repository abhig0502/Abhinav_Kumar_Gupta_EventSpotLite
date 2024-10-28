import React, { useState } from "react";
import { events } from "../mockData";
import EventModal from "./EventModal";
import { useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";
import { useContext } from "react";
import { SearchContext } from "../utils/SearchContextProvider";

const EventList = () => {
    const { eventSearchTerm } = useContext(SearchContext);
//   const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const navigate = useNavigate();

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(eventSearchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(eventSearchTerm.toLowerCase())
  );

  return (
    <div className="bg-black flex flex-col md:flex-row mt-[170px] animate-scaleUp">
      <SideMenu />
      <div className="md:ml-[220px] p-4 mt-28">
        {/* <div className="mb-4">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-auto p-2 rounded-md"
          />
        </div> */}

        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="w-full md:w-[380px] h-auto bg-black rounded-2xl shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="w-full">
                <div className=" ml-1 w-full h-[240px] bg-black rounded-2xl shadow-md flex flex-col items-center justify-center">
                  <img
                    alt="bg-img"
                    className="w-full h-[240px] bg-gray-200 rounded-2xl shadow-md border border-3-white"
                    src={event.image}
                  />
                </div>
                <div className="relative p-3 text-white bg-gray-950">
                  <h3 className="text-[18px] mt-3">{event.name}</h3>
                  <p className="text-[18px]">{event.location}</p>
                  <p className="text-[16px]">{event.date}</p>
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
