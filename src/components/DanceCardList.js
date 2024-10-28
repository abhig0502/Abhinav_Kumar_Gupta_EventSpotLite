import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";
const MusicEventComponent = () => {
  return (
    <div className="bg-white">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
        <Header />
        <SideMenu />
        <div className="md:flex mt-56">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://img.freepik.com/premium-photo/quothispanic-couple-dancing-salsa-merengue-captivating-momentquot_1280275-271967.jpg?semt=ais_hybrid"
              alt="salsa dance"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Live Concert
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Salsa Dance
            </a>
            <p className="mt-2 text-gray-500">
              Join us for an unforgettable night of music and entertainment
              featuring top artists from around the world.
            </p>
            <div className="mt-4">
              <span className="text-gray-600">Date:</span>{" "}
              <span className="text-gray-800 font-semibold">
                December 10, 2023
              </span>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">Location:</span>{" "}
              <span className="text-gray-800 font-semibold">
                Madison Square Garden, NY
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://img.freepik.com/free-photo/ballet-dancer-white-tutu-dancing_23-2147765790.jpg"
              alt="ballet dance"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Live Concert
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Ballet Dance
            </a>
            <p className="mt-2 text-gray-500">
              Join us for an unforgettable night of music and entertainment
              featuring top artists from around the world.
            </p>
            <div className="mt-4">
              <span className="text-gray-600">Date:</span>{" "}
              <span className="text-gray-800 font-semibold">
                December 10, 2023
              </span>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">Location:</span>{" "}
              <span className="text-gray-800 font-semibold">
                Madison Square Garden, NY
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://img.freepik.com/free-photo/hip-hop-dancer-jumping_23-2147765791.jpg"
              alt="hiphop-dance"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Live Concert
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              HipHop Dance
            </a>
            <p className="mt-2 text-gray-500">
              Join us for an unforgettable night of music and entertainment
              featuring top artists from around the world.
            </p>
            <div className="mt-4">
              <span className="text-gray-600">Date:</span>{" "}
              <span className="text-gray-800 font-semibold">
                December 10, 2023
              </span>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">Location:</span>{" "}
              <span className="text-gray-800 font-semibold">
                Madison Square Garden, NY
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://img.freepik.com/free-photo/tango-dancers-passionate-embrace_23-2147765792.jpg"
              alt="Tango Dance"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Live Concert
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Tango Dance
            </a>
            <p className="mt-2 text-gray-500">
              Join us for an unforgettable night of music and entertainment
              featuring top artists from around the world.
            </p>
            <div className="mt-4">
              <span className="text-gray-600">Date:</span>{" "}
              <span className="text-gray-800 font-semibold">
                December 10, 2023
              </span>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">Location:</span>{" "}
              <span className="text-gray-800 font-semibold">
                Madison Square Garden, NY
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://img.freepik.com/free-photo/flamenco-dancer-red-dress_23-2147765793.jpg"
              alt="Flemenco Dance"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Live Concert
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Flemenco Dance
            </a>
            <p className="mt-2 text-gray-500">
              Join us for an unforgettable night of music and entertainment
              featuring top artists from around the world.
            </p>
            <div className="mt-4">
              <span className="text-gray-600">Date:</span>{" "}
              <span className="text-gray-800 font-semibold">
                December 10, 2023
              </span>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">Location:</span>{" "}
              <span className="text-gray-800 font-semibold">
                Madison Square Garden, NY
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicEventComponent;
