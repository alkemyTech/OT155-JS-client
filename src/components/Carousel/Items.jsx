import React, { useState } from 'react';

export const Items = () => {

    const [active, setActive] = useState('active');

    
  return (
    <div
      className="duration-1000 ease-in-out absolute inset-0 transition-all transform translate-x-0"
      data-carousel-item={active === 'active' ? 'active' : setActive('') && ''}>
      <img
        src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901__340.jpg"
        className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
        alt="..."
      />
      {active === 'active' && (
        <p className="text-white px-20 absolute inset-x-0 bottom-10 font-bold bg-black/20">
          Primero
        </p>
      )}
    </div>
  );
};
