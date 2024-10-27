import React from "react";
import Header from "./Header";
import EventModal from "./EventModal";
import { useState } from "react";
import { events } from "../mockData";
import ImageSlideshow from "./ImageSlideShow";

const Discover = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="bg-black">
      <div>
        <Header />
      </div>
      <div className="">
        <div className="flex flex-wrap gap-6 ml-5 pt-5 mt-40 ">
            <div className="relative z- w-[42%] h-[30%] ml-16">
                <ImageSlideshow/>
                <div className="text-[30px] relative ml-28  left-full -top-5">
                <p className="font-bold text-white underline">Find Your Location</p>
                </div>
            </div>
            
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              //   className="w-[400px] h-[240px] bg-gray-300 rounded-2xl"
              className="w-[300px] h-[400px] bg-black rounded-2xl shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center mt-7 "
              onClick={() => setSelectedEvent(event)}
            >
              <div className="">
                <div
                  // className="w-[400px] h-[240px] rounded-3xl absolute object-cover"
                  className="w-[300px] h-[260px] bg-black rounded-2xl shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center "
                >
                  <img
                    alt="bg-img"
                    // className="w-[400px] h-[240px] rounded-2xl opacity-200  filter blur-[0.9px]"
                    className="w-[300px] h-[260px] bg-black rounded-2xl shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center"
                    src={event.image}
                  />
                </div>
                <div className="relative pl-3 bg-gray-950 text-white p-4">
                  <h3 className="font- text-[18px]">{event.name}</h3>
                  <p className="font- text-[18px]">{event.location}</p>
                  <p className="text-[16px] font-">{event.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Discover;
