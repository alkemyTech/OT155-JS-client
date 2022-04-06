import React from "react";

const TextArea = ({ label, error, touched, ...props }) => {
  return (
    <div className="mb-2">
      <label>{label}</label>
      <textarea
        {...props}
        className="text-xl h-40 block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none resize-none"
      ></textarea>
      <div className="text-red-600">{error && touched && error}</div>
    </div>
  );
};

export default TextArea;
