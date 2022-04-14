import React from "react";
import { Link } from "react-router-dom";

const BackOfficeCard = ({ title, icon, link }) => {
  return (
    <div className="bg-white flex flex-col justify-around items-center shadow-md px-8 py-4 rounded-md">
      <h3 className="text-ong-blue-700 font-semibold">{title}</h3>
      <div className="rounded-full bg-red-400 w-16 h-16">
        {/* <img src={icon} alt="img" /> */}
      </div>
      <Link
        className="bg-emerald-700 mt-3 text-sm text-white font-medium px-3 py-1 rounded"
        to={link}
      >
        Ir
      </Link>
    </div>
  );
};

export default BackOfficeCard;
