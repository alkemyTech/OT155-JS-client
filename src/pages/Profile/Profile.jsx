import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiConnectionWithToken } from "../../helpers/apiConnection";
import Modal from "react-modal/lib/components/Modal";
import { errorAlert } from "../../helpers/AlertService";
import { confirmationAlert } from "../../helpers/AlertService";

export const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(0)

  const [isModalOpen, setModalOpen] = useState(false)
  const [emailConfirmation, setEmailConfirmation] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    const queryAPI = async () => {
      try {
        const { data } = await apiConnectionWithToken("/auth/me");
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setId(data.id)
      } catch (error) {
        console.log(error);
      }
    };
    queryAPI();
  }, []);

  const handleEdit = () => {
    navigate("/users/edit");
  };

  const handleDelete = () => {
    try{
     setModalOpen(true)
    }catch(error){
      console.log(error)
    }
  }

  const modalInformation = async() => {
    if(emailConfirmation === email){
      confirmationAlert("Exito", "Se ha eliminado su cuenta")
      setModalOpen(false)
      navigate("/")
      await apiConnectionWithToken(`/users/${id}`, {}, 'DELETE');
    }else{
      errorAlert("Error", 'Email incorrecto')
      setModalOpen(false)
    }
  }
  return (
    <div className="flex justify-center items-center h-screen text-center bg-[#EEF4FB]">
      <Modal isOpen={isModalOpen} ariaHideApp={false}>
        <div>
          <label>Insert E-mail</label>
          <input type="text" onChange={((e) => setEmailConfirmation(e.target.value))}></input>
          <button onClick={modalInformation}>Enter E-mail</button>
          <button onClick={(() => setModalOpen(false))}>Close</button>
        </div>
      </Modal>
      <div className="flex flex-col justify-center rounded-lg bg-white shadow-lg p-8 text-center m-8">
        <h1 className="font-bold text-3xl">
          {firstName} {lastName}
        </h1>
        <h2 className="m-2 xl:m-4">{email}</h2>
        <div>
          <button
            className="inline-block px-6 py-2.5 bg-[#FAFA88] text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#CCCC4F] hover:shadow-lg focus:bg-[#CCCC4F] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#CCCC4F] active:shadow-lg transition duration-150 ease-in-out m-2"
            onClick={handleEdit}
          >
            Edit Account
          </button>
          <button 
          className="inline-block px-6 py-2.5 bg-[#DB5752] text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#BA4642] hover:shadow-lg focus:bg-[#DB5752] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#DB5752] active:shadow-lg transition duration-150 ease-in-out m-2"
          onClick={handleDelete}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
