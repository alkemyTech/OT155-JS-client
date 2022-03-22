import React from "react";
import "./profile.css";

const Profile = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1>Nombre y apellido</h1>
        <h2>nombreyapellido@gmail.com</h2>
        <button className="bg-[#DB5752] p-3 m-3 w-60 rounded-2xl text-xl" >Edit profile</button>
        <button className="bg-[#FAFA88] p-3 m-3 w-60 rounded-2xl text-xl">Delete Acount</button>
    </div>
  );
};

export default Profile;
