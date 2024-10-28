import React from "react";
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";

const ArtExhibitionComponent = () => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl mt-10">
      <SideMenu />

      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-56 w-full object-cover md:w-56"
            src="https://globalexpo.ca/wp-content/uploads/2023/12/How-to-Organize-an-Art-Exhibition.jpg"
            alt="Art Exhibition"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">
            Art & Exhibitions
          </div>
          <a
            href="#"
            className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
          >
            The Modern Art Showcase
          </a>
          <p className="mt-2 text-gray-600">
            Experience the beauty and creativity of modern art at our exclusive
            exhibition featuring renowned artists from around the globe.
          </p>
          <div className="mt-4">
            <span className="text-gray-600">Date:</span>{" "}
            <span className="text-gray-800 font-semibold">
              November 15, 2023
            </span>
          </div>
          <div className="mt-2">
            <span className="text-gray-600">Location:</span>{" "}
            <span className="text-gray-800 font-semibold">
              Art Gallery of Ontario, Toronto
            </span>
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="text-teal-600 hover:text-teal-900 font-semibold"
            >
              Discover More &rarr;
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-56 w-full object-cover md:w-56"
            src="https://www.re-thinkingthefuture.com/architectural-community/a8291-what-is-the-purpose-and-importance-of-an-art-exhibition/attachment/image-2_exhibitions-open-to-people_https-tlmagazine-com/"
            alt="Art Exhibition"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">
            Art & Exhibitions
          </div>
          <a
            href="#"
            className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
          >
            The Modern Art Showcase
          </a>
          <p className="mt-2 text-gray-600">
            Experience the beauty and creativity of modern art at our exclusive
            exhibition featuring renowned artists from around the globe.
          </p>
          <div className="mt-4">
            <span className="text-gray-600">Date:</span>{" "}
            <span className="text-gray-800 font-semibold">
              November 15, 2023
            </span>
          </div>
          <div className="mt-2">
            <span className="text-gray-600">Location:</span>{" "}
            <span className="text-gray-800 font-semibold">
              Art Gallery of Ontario, Toronto
            </span>
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="text-teal-600 hover:text-teal-900 font-semibold"
            >
              Discover More &rarr;
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-56 w-full object-cover md:w-56"
            src="https://lh5.googleusercontent.com/proxy/TB15O3T0LYtrakEyARXXFFoI_2JDDLbF6wOcb3ksg8s3s0muNtn7hfyi1BbJabPHe0oWHY6kqZPYUVB-pa3511Qglpyc7Kb1BrDYCg0l0LUq26e6BJwAHetI6sl-fb70AACSMfTI4DUIHs_A6p79Xcnod9JrotY"
            alt="Art Exhibition"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">
            Art & Exhibitions
          </div>
          <a
            href="#"
            className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
          >
            The Modern Art Showcase
          </a>
          <p className="mt-2 text-gray-600">
            Experience the beauty and creativity of modern art at our exclusive
            exhibition featuring renowned artists from around the globe.
          </p>
          <div className="mt-4">
            <span className="text-gray-600">Date:</span>{" "}
            <span className="text-gray-800 font-semibold">
              November 15, 2023
            </span>
          </div>
          <div className="mt-2">
            <span className="text-gray-600">Location:</span>{" "}
            <span className="text-gray-800 font-semibold">
              Art Gallery of Ontario, Toronto
            </span>
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="text-teal-600 hover:text-teal-900 font-semibold"
            >
              Discover More &rarr;
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-56 w-full object-cover md:w-56"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3iGfNDK-TXqzNtQLo_sY0xzxt6aNB9ru2g&s"
            alt="Art Exhibition"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">
            Art & Exhibitions
          </div>
          <a
            href="#"
            className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
          >
            The Modern Art Showcase
          </a>
          <p className="mt-2 text-gray-600">
            Experience the beauty and creativity of modern art at our exclusive
            exhibition featuring renowned artists from around the globe.
          </p>
          <div className="mt-4">
            <span className="text-gray-600">Date:</span>{" "}
            <span className="text-gray-800 font-semibold">
              November 15, 2023
            </span>
          </div>
          <div className="mt-2">
            <span className="text-gray-600">Location:</span>{" "}
            <span className="text-gray-800 font-semibold">
              Art Gallery of Ontario, Toronto
            </span>
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="text-teal-600 hover:text-teal-900 font-semibold"
            >
              Discover More &rarr;
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-56 w-full object-cover md:w-56"
            src="https://www.artplacer.com/wp-content/uploads/2022/05/New-header-fairs-1-1-scaled.jpg"
            alt="Art Exhibition"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">
            Art & Exhibitions
          </div>
          <a
            href="#"
            className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
          >
            The Modern Art Showcase
          </a>
          <p className="mt-2 text-gray-600">
            Experience the beauty and creativity of modern art at our exclusive
            exhibition featuring renowned artists from around the globe.
          </p>
          <div className="mt-4">
            <span className="text-gray-600">Date:</span>{" "}
            <span className="text-gray-800 font-semibold">
              November 15, 2023
            </span>
          </div>
          <div className="mt-2">
            <span className="text-gray-600">Location:</span>{" "}
            <span className="text-gray-800 font-semibold">
              Art Gallery of Ontario, Toronto
            </span>
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="text-teal-600 hover:text-teal-900 font-semibold"
            >
              Discover More &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtExhibitionComponent;
