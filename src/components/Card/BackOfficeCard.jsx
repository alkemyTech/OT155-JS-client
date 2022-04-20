import React from "react";
import { Link } from "react-router-dom";

const BackOfficeCard = ({ title, icon, link }) => {
  return (
    <div className="bg-white flex flex-col justify-around items-center shadow-md px-8 py-4 rounded-md">
      <h3 className="text-ong-blue-700 font-semibold">{title}</h3>
      <div className="w-24 h-24">{icon}</div>
      <Link
        className="bg-ong-blue-900 hover:bg-ong-blue-700 mt-6 text-sm text-white font-medium px-3 py-1 rounded"
        to={link}
      >
        Ir
      </Link>
    </div>
  );
};

export default BackOfficeCard;
