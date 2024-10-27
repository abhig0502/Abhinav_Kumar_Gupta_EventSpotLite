import React from "react";

const LoginHeader = ({ setShowModal }) => {
  const onHandleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="flex justify-between bg-gradient-to-b from- relative z-20">
      <div className="px-8 py-1 flex w-[200px] h-[100px]">
        <img
          className="w-[100px] h-[100px] animate-scaleUp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98sO8L7URt8Qr2kyH2ad19UpZufsvCRNCAA&s"
          alt="eventspot-logo "
        />
      </div>
      <div>
        <button
          className="m-6 bg-blue-700 text-white font-bold py-3 px-4 rounded-lg hover:text-blue-700 hover:bg-white "
          onClick={onHandleClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LoginHeader;
