import React from "react";

const Input = ({ label, error, touched, ...props }) => {
  return (
    <div className="w-full h-20 my-4 flex flex-col items-start justify-evenly">
      <div className="w-full h-6 flex flex-row items-center justify-between">
        <label className="mb-2">{label}</label>
        <small className="text-ong-red-500 text-sm mb-2">
          {error && touched && error}
        </small>
      </div>

      <input
        className="w-full h-10 border border-solid border-gray-200 rounded-md px-2 focus:border-ong-blue-700 focus:border-2 outline-none"
        {...props}
      ></input>
    </div>
  );
};

export default Input;
