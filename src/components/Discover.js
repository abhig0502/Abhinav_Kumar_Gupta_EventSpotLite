import React from "react";
import Header from "./Header";
import EventModal from "./EventModal";
import { useState } from "react";
import { events } from "../mockData";
import ImageSlideshow from "./ImageSlideShow";
import SideMenu from "./SideMenu";

const Discover = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen">
      <div>
        <Header />
        <SideMenu />
      </div>
      <div className="px-4">
        <div className="flex flex-wrap gap-6 pt-5 mt-40 justify-center">
          <div className="relative w-full sm:w-[42%] h-[30%] mb-[380px]">
            <ImageSlideshow />
            <div className="text-[35px] sm:text-[30px] relative text-center md:mt-2 pt-[120px]">
              <p className="font-bold text-white underline">Discover Your Event</p>
            </div>
          </div>

          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="w-full sm:w-[300px] h-auto bg-black rounded-2xl shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center mt-7"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="w-full">
                <div className="w-full h-[260px] bg-black rounded-2xl shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center">
                  <img
                    alt="bg-img"
                    className="w-full h-full object-cover rounded-2xl"
                    src={event.image}
                  />
                </div>
                <div className="relative p-4 bg-gray-950 text-white">
                  <h3 className="text-[16px] sm:text-[18px]">{event.name}</h3>
                  <p className="text-[16px] sm:text-[18px]">{event.location}</p>
                  <p className="text-[14px] sm:text-[16px]">{event.date}</p>
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
