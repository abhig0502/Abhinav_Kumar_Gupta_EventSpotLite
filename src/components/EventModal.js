// import React from 'react';

// const EventModal = ({ event, onClose }) => {
//   return (
//     <div className="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center  animate-fadeIn mt-32 bg-black bg-opacity-60" onClick={onClose}>
//       <div className="relative top-0 left-0 bg-white w-[680px] h-[485px] mt-16 p-5 rounded-2xl " onClick={(e) => e.stopPropagation()}>
//         <button className="absolute top-[10px] left-[650px] text-black text-[18px] cursor-pointer z-10" onClick={onClose}>X</button>
//         <h2 className='font-bold -mt-3 mb-2 text-[20px]'>{event.name}</h2>
//         <img src={event.image} alt={event.name} className='w-[650px] h-[350px] rounded-xl' />
//         <p className='font-bold mt-2 text-[18px]'>{event.description}</p>
//         <p className='font-bold'>{event.location}</p>
//         <p className='font-bold '>{event.date}</p>
//       </div>
//     </div>
//   );
// };

// export default EventModal;


import React from 'react';

const EventModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center animate-fadeIn bg-black bg-opacity-60" onClick={onClose}>
      <div className="relative bg-white w-full max-w-lg mx-4 md:mx-0 md:w-[680px] h-auto md:h-[485px] mt-16 p-5 rounded-2xl md:mt-60 animate-slideIn" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-black text-lg cursor-pointer z-10" onClick={onClose}>X</button>
        <h2 className='font-bold mb-2 text-lg md:text-[20px]'>{event.name}</h2>
        <img src={event.image} alt={event.name} className='w-full h-48 md:w-[650px] md:h-[350px] rounded-xl object-cover' />
        <p className='font-bold mt-2 text-base md:text-[18px]'>{event.description}</p>
        <p className='font-bold text-sm md:text-base'>{event.location}</p>
        <p className='font-bold text-sm md:text-base'>{event.date}</p>
      </div>
    </div>
  );
};

export default EventModal;
