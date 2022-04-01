import React, { useState } from "react";
import { Formik } from "formik";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const nameRegExp = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
  const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validateName = ({ errors, values }) => {
    if (!values.name) {
      errors.name = "Es necesario ingresar tu nombre ";
    } else if (!nameRegExp.test(values.name)) {
      errors.name = "Debe empezar con mayusculas y solo contener letras";
    }
    return errors;
  };

  const validateSurname = ({ errors, values }) => {
    if (!values.surname) {
      errors.surname = "Es necesario ingresar tu apellido ";
    } else if (!nameRegExp.test(values.surname)) {
      errors.surname = "Debe empezar con mayusculas y solo contener letras";
    }
    return errors;
  };

  const validateEmail = ({ errors, values }) => {
    if (!values.email) {
      errors.email = "Es necesario ingresar tu email ";
    } else if (!emailRegExp.test(values.email)) {
      errors.email = "Ingrese un email válido ";
    }

    return errors;
  };
  const validatePassword = ({ errors, values }) => {
    if (!values.password) {
      errors.password = "Es necesaria una contraseña ";
    } else if (values.password.length < 6) {
      errors.password = "Ingresa al menos 6 carácteres ";
    }
    return errors;
  };

  const validateFormInputs = (values) => {
    const errors = {};

    validateName({ errors, values });
    validateSurname({ errors, values });
    validateEmail({ errors, values });
    validatePassword({ errors, values });

    return errors;
  };

  const handleRegister = (values) => {
    const user = {
      firstName: values.name,
      lastName: values.surname,
      email: values.email,
      password: values.password,
    };
   
    return apiConnectionWithoutToken("/users/register", user, "post")
      .then((res) => {
        const data = res.data;
        if (data.value) {
          window.sessionStorage.setItem("jwt", JSON.stringify(data.jwt));
          navigate("/");
        }
      })
      .catch((err) => {
        handleModal();

        return err;
      });
  };

  return (
    <div className="w-screen h-screen bg-slate-200 flex flex-col items-center justify-center">
      <div className="w-screen h-screen lg:w-1/2 lg:h-5/6 xl:w-1/3 xl:h-5/6 bg-white rounded-md shadow-md flex flex-col items-center justify-center ">
        <div className="text-2xl text-indigo-600">Crear nuevo usuario</div>
        <Formik
          initialValues={{ name: "", surname: "", email: "", password: "" }}
          validate={validateFormInputs}
          onSubmit={(values) => {
            return handleRegister(values);
          }}
        >
          {({ errors, touched, handleSubmit, handleChange, isSubmitting }) => (
            <form
              className=" w-3/4 h-5/6 flex flex-col items-start justify-start p-2 "
              onSubmit={handleSubmit}
            >
              <div className="w-full h-20 my-4 flex flex-col items-start justify-evenly">
                <div className="w-full h-6 flex flex-row items-center justify-between">
                  <label className="mb-2">Nombre:</label>
                  <small className="text-red-500 text-sm mb-2">
                    {errors.name && touched.name && errors.name}
                  </small>
                </div>

                <input
                  name="name"
                  className="w-full h-10 border border-solid border-gray-200 rounded-md px-2 focus:border-indigo-500 focus:border-2 outline-none"
                  type="text"
                  placeholder="Ingresa tu nombre..."
                  onChange={handleChange}
                ></input>
              </div>

              <div className="w-full h-20 my-4 flex flex-col items-start justify-evenly">
                <div className="w-full h-6 flex flex-row items-center justify-between">
                  <label className="mb-2">Apellido: </label>
                  <small className="text-red-500 text-sm mb-2">
                    {errors.surname && touched.surname && errors.surname}
                  </small>
                </div>

                <input
                  name="surname"
                  className="w-full h-10 border border-solid border-gray-200 rounded-md px-2 focus:border-indigo-500 focus:border-2 outline-none"
                  type="text"
                  placeholder="Ingresa tu apellido..."
                  onChange={handleChange}
                ></input>
              </div>

              <div className="w-full h-20 mb-4 flex flex-col items-start justify-evenly">
                <div className="w-full h-6 flex flex-row items-center justify-between">
                  <label className="mb-2">Email: </label>
                  <small className="text-red-500 text-sm mb-2">
                    {errors.email && touched.email && errors.email}
                  </small>
                </div>

                <input
                  name="email"
                  className="w-full h-10 border border-solid border-gray-200 rounded-md px-2 focus:border-indigo-500 focus:border-2 outline-none"
                  type="email"
                  placeholder="example@example.com"
                  onChange={handleChange}
                ></input>
              </div>

              <div className="w-full h-20 my-4 flex flex-col items-start justify-evenly">
                <div className="w-full h-6 flex flex-row items-center justify-between">
                  <label className="mb-2">Contraseña:</label>
                  <small className="text-red-500 text-sm mb-2">
                    {errors.password && touched.password && errors.password}
                  </small>
                </div>

                <input
                  name="password"
                  className="w-full h-10 border border-solid border-gray-200 rounded-md px-2 focus:border-indigo-500 focus:border-2 outline-none"
                  type="password"
                  placeholder=""
                  onChange={handleChange}
                ></input>
              </div>

              <div className="w-full h-16 my-4 flex flex-col items-center justify-center">
                {isSubmitting ? (
                  <span className="bg-indigo-600 text-white text-lg font-semibold px-16 py-2 rounded-md hover:bg-indigo-500 mb-4 hover:cursor-pointer">
                    Validando...
                  </span>
                ) : (
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white text-lg font-semibold px-16 py-2 rounded-md hover:bg-indigo-500 mb-4 hover:cursor-pointer"
                  >
                    Crear usuario
                  </button>
                )}
              </div>
              <div className="w-full flex flex-row items-center justify-center">
                <a className="text-sm text-indigo-500 hover:underline" href="#">
                  Ya tengo una cuenta
                </a>
                <span className="mx-6 font-bold text-xl text-indigo-600 ">
                  &#183;
                </span>
                <a className="text-sm text-indigo-500 hover:underline" href="#">
                  Acerca de ONG somos más
                </a>
              </div>
            </form>
          )}
        </Formik>
      </div>
      {showModal && (
        <div className="w-screen h-screen fixed backdrop-blur-sm flex justify-center items-center">
          <div className="w-1/2 h-1/3 bg-white flex flex-col justify-center items-center rounded">
            <span className=" my-4 text-2xl">
              Datos inválidos. Intente nuevamente
            </span>
            <button
              className="px-12 py-2 rounded my-4 bg-red-500 text-white text-xl"
              onClick={handleModal}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
