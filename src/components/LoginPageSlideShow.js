import React, { useState, useEffect } from "react";

const LoginPageSlideShow = () => {
  // Array of background images

  const images = [
    "https://media.istockphoto.com/id/1478375497/photo/friends-dancing-at-the-festival.jpg?s=612x612&w=0&k=20&c=rVwFBKe__UuQld6kJUWjV48kyw-40OHlnuyQZd4_lgQ=",
    "https://t4.ftcdn.net/jpg/06/34/93/11/360_F_634931170_QtnVJ0lzC2B1gv6kI8vTGwEWdDi4izDF.jpg",
    "https://a.storyblok.com/f/188325/1920x1280/41e681c422/alexandre-pellaes-6vajp0pscx0-unsplash-1-1.jpg",
    "https://t4.ftcdn.net/jpg/06/53/02/73/360_F_653027384_PZF2nx2Bk9p5hAbucY6t5xswVymxygO2.jpg",
    "https://st2.depositphotos.com/2612745/7425/i/450/depositphotos_74250059-stock-photo-book-store-naples-italy.jpg",
    "https://t4.ftcdn.net/jpg/09/25/71/75/360_F_925717572_q7tiaGblJUHXtkT5m7Ysy5ESWJ1HQsmT.jpg",
    "https://media.istockphoto.com/id/526549773/photo/cannes-film-festival.jpg?s=612x612&w=0&k=20&c=tlgsDgiARlMcHbfVOFVw0k3rabFPB_cK2efhOEMZcSk=",
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change background every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  // Handler for next and previous controls (optional)
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative  w-full  object-fill animate-scaleUp">
      {/* Slideshow background */}
      {/* <div
        className="absolute top-0 left-0 w-full h-[680px] bg-cover bg-center transition-all duration-1000 object-cover"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div> */}
      <div
        className="absolute top-0 left-0 w-full h-[680px] sm:h-[500px] md:h-[600px] lg:h-[680px] bg-cover bg-center transition-all duration-1000 object-cover overflow-hidden"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Slideshow controls (Optional) */}

      {/* Slideshow indicators */}
    </div>
  );
};

export default LoginPageSlideShow;
