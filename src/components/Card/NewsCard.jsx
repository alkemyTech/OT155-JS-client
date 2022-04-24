import React from 'react';

const NewsCard = ({ element, handleNewsClick }) => {
  return (

    <div className="flex justify-center cursor-pointer">
      <div className="rounded-lg shadow-xl bg-zinc-100 max-w-sm">
        <img
          className="rounded-t-lg w-full h-64"
          src={element.imageUrl}
          onClick={() => handleNewsClick(element.id)}
          alt=""
        />
        <div className="p-6">
          <h5
            className="text-gray-900 text-xl font-medium mb-2 text-center"
            onClick={() => handleNewsClick(element.id)}>
            {element.name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
