import React from "react";

const SubmitButton = ({ children, isSubmitting }) => {
  return (
    <button
      className="w-full bg-blue-300 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300 mt-6"
      type="submit"
      disabled={isSubmitting}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
