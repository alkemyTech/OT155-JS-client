import React from "react";
import { useFormik } from "formik";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";
import { useNavigate } from "react-router-dom";
import { errorAlert } from "../../helpers/AlertService";
import Input from "../../components/Form/Input";
import SubmitButton from "../../components/Form/SubmitButton";

const Register = () => {
  const navigate = useNavigate();

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
        errorAlert("Error.", "Datos inválidos. Ese email ya está registrado.");

        return err;
      });
  };

  const formik = useFormik({
    initialValues: { name: "", surname: "", email: "", password: "" },
    validate: validateFormInputs,
    onSubmit: handleRegister,
  });

  return (
    <div className="w-full h-screen bg-slate-200 flex flex-col items-center justify-center">
      <div className="w-screen h-screen lg:w-1/2 lg:h-5/6 xl:w-1/3 xl:h-5/6 bg-white rounded-md shadow-md flex flex-col items-center justify-center ">
        <div className="text-2xl text-ong-blue-700">Crear nuevo usuario</div>
        <form
          className=" w-3/4 h-5/6 flex flex-col items-start justify-start p-2 "
          onSubmit={formik.handleSubmit}
        >
          <Input
            label="Nombre"
            error={formik.errors.name}
            touched={formik.touched.name}
            type="text"
            name="name"
            placeholder="Ingresa tu nombre..."
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            label="Apellido"
            error={formik.errors.surname}
            touched={formik.touched.surname}
            type="text"
            name="surname"
            placeholder="Ingresa tu apellido..."
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            label="Email"
            error={formik.errors.email}
            touched={formik.touched.email}
            type="email"
            name="email"
            placeholder="example@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            label="Contraseña"
            error={formik.errors.password}
            touched={formik.touched.password}
            type="password"
            name="password"
            placeholder=""
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <div className="w-full h-16 my-4 flex flex-col items-end justify-center">
            <SubmitButton isSubmitting={formik.isSubmitting}>
              Crear usuario
            </SubmitButton>
          </div>
          <div className="w-full flex flex-row items-center justify-center">
            <a className="text-sm text-ong-blue-700 hover:underline" href="#">
              Ya tengo una cuenta
            </a>
            <span className="mx-6 font-bold text-xl text-ong-blue-600 ">
              &#183;
            </span>
            <a className="text-sm text-ong-blue-700 hover:underline" href="#">
              Acerca de ONG somos más
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
