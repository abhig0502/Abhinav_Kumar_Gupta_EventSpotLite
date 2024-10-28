import React from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";

const Trending = () => {
  const events = [
    {
      id: 1,
      title: "The Grand Music Festival",
      description:
        "Join us for an unforgettable night of music and entertainment featuring top artists from around the world.",
      date: "December 10, 2023",
      location: "Madison Square Garden, NY",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPV8C5kt6tE7yUnSHQCfYK1S7M2K-_l0w6xA&s",
    },
    {
      id: 2,
      title: "Champions League Final",
      description:
        "Witness the thrilling finale of the Champions League, where the best teams compete for the ultimate glory.",
      date: "May 28, 2024",
      location: "Wembley Stadium, London",
      imageUrl: "https://e0.365dm.com/24/05/1600x900/skysports-champions-league-trophy_6546891.jpg?20240507221454",
    },
    {
        id: 3,
        title: "The Grand Music Festival",
        description:
          "Witness the thrilling finale of the Champions League, where the best teams compete for the ultimate glory.",
        date: "May 28, 2024",
        location: "Wembley Stadium, London",
        imageUrl: "https://cdn.roadtrips.com/wp-content/uploads/2019/06/champions-league-final-liverpool-stadium.jpg",
      },
      {
        id: 4,
        title: "Champions League Final",
        description:
          "Witness the thrilling finale of the Champions League, where the best teams compete for the ultimate glory.",
        date: "May 28, 2024",
        location: "Wembley Stadium, London",
        imageUrl: "https://static01.nyt.com/images/2019/06/01/sports/01champions19/01champions19-videoSixteenByNineJumbo1600.jpg",
      },
      {
        id: 5,
        title: "Champions League Final",
        description:
          "Witness the thrilling finale of the Champions League, where the best teams compete for the ultimate glory.",
        date: "May 28, 2024",
        location: "Wembley Stadium, London",
        imageUrl: "https://pbs.twimg.com/media/GNFdml8XIAA9wtA.jpg:large",
      },
      {
        id: 6,
        title: "Champions League Final",
        description:
          "Witness the thrilling finale of the Champions League, where the best teams compete for the ultimate glory.",
        date: "May 28, 2024",
        location: "Wembley Stadium, London",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMwE663QIT_rQy-i-3SxNwJXZdNLFfG6239w&s",
      },
    // Add more events as needed
  ];

  return (
    <div className="bg-black min-h-screen p-4 mt-5 ">
      <Header />
      <SideMenu />
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 mt-60 animate-slideIn">
        Trending Events
      </h1>
      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md overflow-hidden animate-slideIn"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={event.imageUrl}
                  alt={event.title}
                />
              </div>
              <div className="p-6">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {event.title}
                </div>
                <p className="mt-2 text-gray-500">{event.description}</p>
                <div className="mt-4">
                  <span className="text-gray-600">Date:</span>{" "}
                  <span className="text-gray-800 font-semibold">
                    {event.date}
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-gray-600">Location:</span>{" "}
                  <span className="text-gray-800 font-semibold">
                    {event.location}
                  </span>
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 font-semibold"
                  >
                    Learn More &rarr;
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 font-semibold"
                  >
                    Get Tickets &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
