import React from "react";
import { useFormik } from "formik";
import { informationAlert } from "../../helpers/AlertService";

const Contact = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.contactName) {
      errors.contactName = "Debes ingresar un nombre";
    } else if (values.contactName.length <= 4) {
      errors.contactName = "El nombre debe tener al menos 5 caracteres";
    }
    if (!values.contactEmail) {
      errors.contactEmail = "Debes ingresar tu mail";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.contactEmail)
    ) {
      errors.contactEmail = "Por favor ingresa un mail valido";
    }
    if (!values.message) {
      errors.message = "Debes ingresar un mensaje";
    } else if (values.message.length <= 4) {
      errors.message = "El mensaje debe tener al menos 5 caracteres";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      message: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      informationAlert("Mensaje enviado", "Gracias por contactarnos");
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className="container m-auto">
      <div className="flex p-8">
        <div className="w-1/2">
          <h1 className="text-4xl text-center mb-6">¿Quieres contribuir?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            velit dolores repudiandae cum voluptatem. Dicta animi fugit
            blanditiis aliquam rem eveniet aspernatur, totam laudantium voluptas
            vel nesciunt, modi mollitia repudiandae?
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl text-center mb-4">
            ¡Contactáte con nosotros!
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-2">
              <label>Nombre</label>
              <input
                type="text"
                name="contactName"
                placeholder="Tu nombre"
                className="text-xl block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                value={formik.values.contactName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="text-red-600">
                {formik.errors.contactName &&
                  formik.touched.contactName &&
                  formik.errors.contactName}
              </div>
            </div>
            <div className="mb-2">
              <label>Email</label>
              <input
                type="email"
                name="contactEmail"
                placeholder="Tu email"
                className="text-xl block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                value={formik.values.contactEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="text-red-600">
                {formik.errors.contactEmail &&
                  formik.touched.contactEmail &&
                  formik.errors.contactEmail}
              </div>
            </div>
            <div className="mb-2">
              <label>Mensaje</label>
              <textarea
                name="message"
                placeholder="Escribe tu mensaje aqui..."
                value={formik.values.message}
                onChange={formik.handleChange}
                className="text-xl h-40 block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none resize-none"
              ></textarea>
              <div className="text-red-600">
                {formik.errors.message &&
                  formik.touched.message &&
                  formik.errors.message}
              </div>
            </div>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300  text-white px-4 py-2 rounded-md text-1xl font-medium  transition duration-300 mt-6"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
