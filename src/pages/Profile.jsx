import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiConnectionWithToken } from "../helpers/apiConnection"

export const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
     const userQuery = async() => {
       try{
         const { data } = await apiConnectionWithToken('/auth/me');
         console.log(data)
       }catch(error){
         console.log(error)
       }
     }
       userQuery()
    
  }, []);

  const handleEdit = () => {
    navigate("/users/edit")
  }

  return (
    <div className="flex justify-center items-center h-screen text-center bg-[#EEF4FB]">
      <div className="flex flex-col justify-center rounded-lg bg-white shadow-lg p-8 text-center m-8">
        <h1 className="font-bold text-3xl">{firstName} {lastName}</h1>
        <h2 className="m-2 xl:m-4">{email}</h2>
        <div>
          <button className="inline-block px-6 py-2.5 bg-[#FAFA88] text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#CCCC4F] hover:shadow-lg focus:bg-[#CCCC4F] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#CCCC4F] active:shadow-lg transition duration-150 ease-in-out m-2"
          onClick={handleEdit}>
            Edit Account
          </button>
          <button className="inline-block px-6 py-2.5 bg-[#DB5752] text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#BA4642] hover:shadow-lg focus:bg-[#DB5752] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#DB5752] active:shadow-lg transition duration-150 ease-in-out m-2">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
