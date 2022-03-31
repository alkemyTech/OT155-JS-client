import React, { useState } from "react";
import { useFormik } from "formik";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Debes ingresar tu mail";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Por favor ingresa un mail valido";
    }
    if (!values.password) {
      errors.password = "Debes ingresar una contraseña";
    }
    if (values.password.length <= 5) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const loginValues = values;

      apiConnectionWithoutToken("/users/login", loginValues, "post")
        .then((res) => {
          const data = res.data;
          if (data.value) {
            window.sessionStorage.setItem("jwt", JSON.stringify(data.jwt));
            navigate("/");
          } else {
            handleModal();
            formik.setSubmitting(false);
          }
        })
        .catch((err) => {
          handleModal();
          formik.setSubmitting(false);
          return err;
        });
    },
  });

  return (
    <div className="flex">
      <div className="bg-blue-300	 w-1/2 h-screen"></div>
      <div className="mt-7 m-auto">
        <p className="w-full text-left">Bienvenido</p>
        <h2 className="w-full text-left text-4xl">
          Inicia sesión en tu cuenta!
        </h2>
        <form className="mt-8 text-left" onSubmit={formik.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              className="text-xl block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none "
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <div className="text-red-600">
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
            </div>
          </div>
          <div className="mt-8">
            <label>Contraseña</label>
            <input
              className="text-xl block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              type="password"
              name="password"
              placeholder="Ingresa tu password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <div className="text-red-600">
              {formik.errors.password &&
                formik.touched.password &&
                formik.errors.password}
            </div>
          </div>
          <button
            className="w-full bg-blue-300 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300 mt-6"
            type="submit"
            disabled={formik.isSubmitting}
          >
            Login Now
          </button>
        </form>
        <div className="mt-6">
          <p className="text-left">
            No tienes cuenta?{" "}
            <a href="#" className="text-blue-600">
              Join free today
            </a>
          </p>
        </div>
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

export default Login;
