import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editUser } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { confirmationAlert } from "../../helpers/AlertService";
import Input from "../../components/Form/Input";
import SubmitButton from "../../components/Form/SubmitButton";

export const EditForm = () => {
  const user = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState(user.user.firstName);
  const [lastName, setLastName] = useState(user.user.lastName);
  const [email, setEmail] = useState(user.user.email);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const validateForm = (values) => {
    const errors = {};
    firstNameValidate({ errors, values });
    lastNameValidate({ errors, values });
    emailValidate({ errors, values });
    return errors;
  };

  const firstNameValidate = ({ errors, values }) => {
    if (!values.firstName) {
      errors.firstName = "El nombre es necesario";
      console.log("aca", errors.firstName);
    }
    return errors;
  };

  const lastNameValidate = ({ errors, values }) => {
    if (!values.lastName) {
      errors.lastName = "El apellido es necesario";
    }
    return errors;
  };

  const emailValidate = ({ errors, values }) => {
    if (!values.email) {
      errors.email = "El email es necesario";
    }
    return errors;
  };

  const handleEdit = async () => {
    let roleId;
    if (role === "Admin") {
      roleId = 1;
    } else {
      roleId = 2;
    }
    dispatch(
      editUser(
        formik.values.firstName,
        formik.values.lastName,
        formik.values.email,
        roleId,
        user.user.id
      )
    );
    confirmationAlert(
      "Exito",
      "Se han realizado los cambios de manera correcta"
    );
    navigate("/profile");
  };

  const formik = useFormik({
    initialValues: { firstName: firstName, lastName: lastName, email: email },
    validate: validateForm,
    onSubmit: handleEdit,
  });

  return (
    <section className="flex justify-center items-center h-screen mb-12 pb-12">
      <div className="block p-6 rounded-lg shadow-lg bg-white w-1/2 min-w-sm">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group mb-6">
            <h1 className="text-red-500 text-sm mb-2">
              {formik.errors.firstName}
            </h1>
            <Input
              label="Nombre"
              type="firstName"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="inputFirstName"
              aria-describedby="nameInput"
              placeholder="Ingrese Nombre"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              name="firstName"
              touched={formik.touched.firstName}
            />
          </div>
          <div className="form-group mb-6">
            <h1 className="text-red-500 text-sm mb-2">
              {formik.errors.lastName}
            </h1>

            <Input
              label="Apellido"
              type="lastName"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="inputLastName"
              aria-describedby="nameInput"
              placeholder="Ingrese Apellido"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.errors.lastName}
              name="lastName"
            />
          </div>
          <div className="form-group mb-6">
            <h1 className="text-red-500 text-sm mb-2">{formik.errors.email}</h1>

            <Input
              label="Email"
              type="email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="inputEmail"
              aria-describedby="nameInput"
              placeholder="Ingrese e-mail"
              onChange={formik.handleChange}
              name="email"
              value={formik.values.email}
              error={formik.errors.email}
            />
          </div>
          {user.user.roleId === 1 && (
            <div className="form-group mb-6">
              <select
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="roleId"
                onChange={(e) => setRole(e.target.value)}
                name="role"
                value={role}
              >
                <option>---Elegir Rol---</option>
                <option>User</option>
                <option>Admin</option>
              </select>
            </div>
          )}
          <SubmitButton isSubmitting={formik.isSubmitting}>
            Crear usuario
          </SubmitButton>
        </form>
      </div>
    </section>
  );
};
