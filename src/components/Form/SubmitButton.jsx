import React from "react";

const SubmitButton = ({ children, isSubmitting }) => {
  return (
    <button
      className="w-full font-semibold bg-ong-blue-700 text-white px-4 py-2 mb-4 rounded-md text-1xl transition duration-300
        lg:w-fit lg:px-8 
        hover:bg-ong-blue-600   
        disabled:bg-ong-blue-500"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Validando..." : children}
    </button>
  );
};

export default SubmitButton;
