import React, { useState } from 'react';

export const Carousel = () => {
  const [active, setActive] = useState('active');
  console.log(active);

  return (
    <div id="default-carousel" data-carousel="static" className="relative">
      {/* Carousel wrapper */}

      <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">

      {/* Items */}
        <div
          className="duration-1000 ease-in-out absolute inset-0 transition-all transform translate-x-0"
          data-carousel-item={
            active === 'active' ? 'active' : setActive('') && ''
          }>
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

        <div
          className="duration-1000 ease-in-out absolute inset-0 transition-all transform translate-x-full"
          data-carousel-item={active === 'active' ? 'active' : setActive('')}>
          <img
            src="https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327__340.jpg"
            className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
          {active && (
            <p className="text-white px-20 absolute inset-x-0 bottom-10 font-bold bg-black/20">
              Segundo
            </p>
          )}
        </div>

        <div
          className="hidden duration-1000 ease-in-out absolute inset-0 transition-all transform"
          data-carousel-item={
            active === 'active' ? 'active' : setActive('') && ''
          }>
          <img
            src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__340.jpg"
            className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
          {active && (
            <p className="text-white px-20 absolute inset-x-0 bottom-10 font-bold bg-black/20">
              Tercero
            </p>
          )}
        </div>
        <div
          className="hidden duration-1000 ease-in-out absolute inset-0 transition-all transform"
          data-carousel-item={
            active === 'active' ? 'active' : setActive('') && ''
          }>
          <img
            src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__340.jpg"
            className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
          {active && (
            <p className="text-white px-20 absolute inset-x-0 bottom-10 font-bold bg-black/20">
              Tercero 2
            </p>
          )}
        </div>

        <div
          className="hidden duration-1000 ease-in-out absolute inset-0 transition-all transform"
          data-carousel-item={
            active === 'active' ? 'active' : setActive('') && ''
          }>
          <img
            src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270__340.jpg"
            className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
          {active && (
            <p className="text-white px-20 absolute inset-x-0 bottom-10 font-bold bg-black/20">
              Cuarto
            </p>
          )}
        </div>

        <div
          className="duration-1000 ease-in-out absolute inset-0 transition-all transform -translate-x-full"
          data-carousel-item={
            active === 'active' ? 'active' : setActive('') && ''
          }>
          <img
            src="https://cdn.pixabay.com/photo/2016/05/05/11/22/computer-1373684__340.jpg"
            className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
          {active && (
            <p className="text-white px-20 absolute inset-x-0 bottom-10 font-bold bg-black/20">
              Quinto
            </p>
          )}
        </div>
      </div>

      {/* Slider indicators */}
      <div className="flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
          aria-current="false"
          aria-label="Slide 6"
          data-carousel-slide-to="6"></button>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev="">
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-next="">
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};
