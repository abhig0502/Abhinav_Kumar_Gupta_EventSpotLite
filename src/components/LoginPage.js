import React from "react";
import LoginHeader from "./LoginHeader";
import LoginBody from "./LoginBody";
import { useState } from "react";
import LoginPageSlideshow from "./LoginPageSlideShow";

const Loginpage = () => {

  const [showModal, setShowModal] = useState(true);

  return (
    <div className="">
      <LoginHeader setShowModal={setShowModal} />
      <LoginBody showModal={showModal} setShowModal={setShowModal} />
      {/* <img
        className="absolute top-0 left-0 -z-10 bg-fixed h-screen w-screen blur-[2px]"
        src="https://miro.medium.com/v2/resize:fit:1086/0*HPE6A9wLH7yVSlrd.jpg"
        alt="background-img"
      /> */}
      <LoginPageSlideshow/>
    </div>
  );
};

export default Loginpage;
