import React from "react";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      message: "",
    },
    validate: (values) => {},
    onSubmit: (values) => {},
  });

  return (
    <div className="container m-auto">
      <div className="flex p-4">
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
          <form>
            <div className="mb-2">
              <label>Nombre</label>
              <input
                type="text"
                name="contactName"
                className="text-xl block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                value={formik.values.contactName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="mb-2">
              <label>Email</label>
              <input
                type="email"
                name="contactName"
                className="text-xl block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                value={formik.values.contactEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="mb-2">
                <label>Mensaje</label>
                <textarea className="text-xl block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none resize-none"></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
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
