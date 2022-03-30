import React from "react";
import { useFormik } from "formik";
import { informationAlert, errorAlert } from "../../helpers/AlertService";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";

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
      apiConnectionWithoutToken("/contact", values, "post")
        .then(() => {
          informationAlert("Mensaje enviado", "Gracias por contactarnos");
          console.log(values);
          resetForm();
        })
        .catch((error) => {
          errorAlert("Error", "No se pudo enviar el mensaje");
          console.log(error);
        });
    },
  });

  return (
    <div className="container m-auto">
      <div className="lg:flex p-8">
        <div className="lg:w-1/2 mb-8">
          <h1 className="text-4xl text-center font-bold mb-6">
            ¿Quieres contribuir?
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            velit dolores repudiandae cum voluptatem. Dicta animi fugit
            blanditiis aliquam rem eveniet aspernatur, totam laudantium voluptas
            vel nesciunt, modi mollitia repudiandae?
          </p>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl text-center font-bold mb-4">
            ¡Contactáte con nosotros!
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <Input
              label="Nombre"
              error={formik.errors.contactName}
              touched={formik.touched.contactName}
              type="text"
              name="contactName"
              placeholder="Tu nombre"
              value={formik.values.contactName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Input
              label="Email"
              error={formik.errors.contactEmail}
              touched={formik.touched.contactEmail}
              type="email"
              name="contactEmail"
              placeholder="Tu email"
              value={formik.values.contactEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <TextArea
              label="Mensaje"
              error={formik.errors.message}
              touched={formik.touched.message}
              name="message"
              placeholder="Escribe tu mensaje aqui..."
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
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
