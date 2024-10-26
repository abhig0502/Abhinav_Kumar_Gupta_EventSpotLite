import React from "react";
import LoginModal from "./LoginModal";

const LoginBody = ({ showModal, setShowModal }) => {
  return (
    <div>
      <div className=" flex justify-center items-center -mt-20 ">
        {showModal && <LoginModal setShowLoginModal={setShowModal} />}
        <h1 className="w-[1000px] text-[80px] font-bold text-white text-center mt-[200px] justify-items-center animate-scaleUp">
          Acute Mountain Sickness, Symptoms People Ignore During Trek
        </h1>
      </div>
    </div>
  );
};

export default LoginBody;
