import React, { useState } from "react";
import { events } from "../mockData";
import EventModal from "./EventModal";

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);


  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-300 flex mt-[170px]">
      <div className="w-[200px] h-[100%] ml-5 fixed">
        <ul className="flex flex-col justify-between">
          <li className="ml-3 px-5 py-5 mt-4 rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500 ">
            Popularity
          </li>
          <li className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500">
            Trending /Top Suggestions
          </li>
          <li className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500">
            Event Type
          </li>
          <li className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500">
            Date Filters
          </li>
          <li className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500">
            Location Filter
          </li>
          <li className="ml-3 px-5 py-5 mt- rounded-2xl cursor-pointer bg-white mb-4 mr-5 text-[17px] text-center hover:bg-sky-500">
            Trending
          </li>
        </ul>
      </div>
      <div className="ml-[220px]">
        {/* <div>
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}

        <div className="flex flex-wrap gap-6 ml-5 pt-5">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="w-[400px] h-[240px] bg-gray-300 rounded-2xl "
              onClick={() => setSelectedEvent(event)}
            >
              <div className="">
                <div className="w-[400px] h-[240px] rounded-3xl absolute object-cover">
                  <img
                    alt="bg-img"
                    className="w-[400px] h-[240px] rounded-2xl opacity-200  filter blur-[0.9px]"
                    src={event.image}
                  />
                </div>
                <div className="relative pt-32 pl-3 text-white">
                  <h3 className="font-bold text-[30px]">{event.name}</h3>
                  <p className="font-bold text-[25px]">{event.location}</p>
                  <p className="text-[20px] font-bold">{event.date}</p>
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
