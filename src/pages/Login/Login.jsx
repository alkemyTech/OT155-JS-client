import React from "react";
import { useFormik } from "formik";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";
import { useNavigate } from "react-router-dom";
import { errorAlert } from "../../helpers/AlertService";
import Input from "../../components/Form/Input";
import SubmitButton from "../../components/Form/SubmitButton";

const Login = () => {
  const navigate = useNavigate();

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
            errorAlert("Error.", "Datos inválidos.");
            formik.setSubmitting(false);
          }
        })
        .catch((err) => {
          errorAlert("Error.", "Datos inválidos.");
          formik.setSubmitting(false);
          return err;
        });
    },
  });

  return (
    <div className="flex">
      <div className="bg-ong-blue-500	 w-1/2 h-screen"></div>
      <div className="mx-auto flex flex-col justify-center">
        <p className="w-full text-left">Bienvenido</p>
        <h2 className="w-full text-left text-4xl">
          Inicia sesión en tu cuenta!
        </h2>
        <form className="mt-8 text-left" onSubmit={formik.handleSubmit}>
          <Input
            label="Email"
            error={formik.errors.email}
            touched={formik.touched.email}
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <Input
            label="Contraseña"
            error={formik.errors.password}
            touched={formik.touched.password}
            type="password"
            name="password"
            placeholder="Ingresa tu password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <div className="w-full h-16 my-4 flex flex-col items-end justify-center">
            <SubmitButton isSubmitting={formik.isSubmitting}>
              Login Now
            </SubmitButton>
          </div>
        </form>
        <div className="mt-6">
          <p className="text-left">
            No tienes cuenta?{" "}
            <a href="#" className="text-ong-blue-700">
              Join free today
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
