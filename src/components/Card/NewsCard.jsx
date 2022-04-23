import React from "react";

const NewsCard = ({ element, handleNewsClick }) => {
  return (
    <>
      <div
        className="w-64 h-52 flex flex-col m-4 border border-gray-200"
        key={element.id}
      >
        <img
          src={element.imageUrl}
          className="w-full h-1/2"
          onClick={() => handleNewsClick(element.id)}
        />
        <div className="w-full h-1/2 flex justify-center items-start p-4 overflow-hidden">
          <p
            className="text-sm text-justify py-2"
            onClick={() => handleNewsClick(element.id)}
          >
            {element.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
