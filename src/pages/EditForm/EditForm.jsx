import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editUser } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
export const EditForm = () => {
  const user = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState(user.user.firstName);
  const [lastName, setLastName] = useState(user.user.lastName);
  const [email, setEmail] = useState(user.user.email);
  const [role, setRole] = useState("")
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const validateForm = (values) => {
  //   const errors = {};
  //   // firstNameValidate({ errors, values });
  //   // lastNameValidate({ errors, values });
  //   // emailValidate({ errors, values });
  //   return errors;
  // };

  // const firstNameValidate = ({ errors, values }) => {
  //   if (!values.firstName) {
  //     errors.firstName = "El nombre es necesario";
  //   }
  //   return errors;
  // };

  // const lastNameValidate = ({ errors, values }) => {
  //   if (!values.lastName) {
  //     errors.lastName = "El apellido es necesario";
  //   }
  //   return errors;
  // };

  // const emailValidate = ({ errors, values }) => {
  //   if (!values.email) {
  //     errors.email = "El email es necesario";
  //   }
  //   return errors;
  // };

  const handleSubmit = async(values) => {
    let roleId;
    if(role === "Admin"){
      roleId = 1
    } else {
      roleId = 2
    }
    dispatch(editUser(firstName,lastName,email,roleId,user.user.id))
    navigate("/profile")
  };

  return (
    <section className="flex justify-center items-center h-screen mb-12 pb-12">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        {/* <Formik validate={validateForm} onSubmit={handleSubmit}> */}
          {/* {({ errors, handleSubmit, handleChange, isSubmitting }) => ( */}
            <form >
              <div className="form-group mb-6">
                <label
                  htmlFor="inputFirstName"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Nombre
                </label>
                <h1 className="text-red-500 text-sm mb-2">
                  {/* {errors.firstName} */}
                </h1>
                <input
                  type="firstName"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="inputFirstName"
                  aria-describedby="nameInput"
                  placeholder="Enter first name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  name="firstName"
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="inputLastName"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Apellido
                </label>
                <h1 className="text-red-500 text-sm mb-2"></h1>
                <input
                  type="lastName"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="inputLastName"
                  aria-describedby="nameInput"
                  placeholder="Enter last name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="inputEmail"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  E-mail
                </label>
                <h1 className="text-red-500 text-sm mb-2"></h1>
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="inputEmail"
                  aria-describedby="nameInput"
                  placeholder="Enter e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={email}
                />
              </div>
              {user.user.roleId === 1 && (
                <div className="form-group mb-6">
                  <select
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="roleId"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option>User</option>
                    <option>Admin</option>
                  </select>
                </div>
              )}
              <button
                className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          )
        {/* </Formik> */}
      </div>
    </section>
  );
};
