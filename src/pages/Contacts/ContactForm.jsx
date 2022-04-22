import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { informationAlert, errorAlert } from "../../helpers/AlertService";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";
import SubmitButton from "../../components/Form/SubmitButton";
import MemberCard from "../../components/Card/MemberCard";

const ContactForm = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    apiConnectionWithoutToken("/members")
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        errorAlert("Error", "Ha ocurrido un error al cargar los miembros");
      });
  }, []);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Debes ingresar un nombre";
    } else if (values.name.length <= 4) {
      errors.name = "El nombre debe tener al menos 5 caracteres";
    }
    if (!values.email) {
      errors.email = "Debes ingresar tu mail";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Por favor ingresa un mail valido";
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
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      apiConnectionWithoutToken("/contacts", values, "post")
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
    <div className="container m-auto my-14">
      <div>
        <h1 className="text-4xl text-center font-bold mb-6">
          Nuestro equipo de trabajo
        </h1>
        <div className="flex flex-wrap justify-center">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              imgUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className="lg:flex p-8">
        <div className="lg:w-1/2 p-5 mb-8">
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
        <div className="lg:w-1/2 p-5">
          <h2 className="text-3xl text-center font-bold mb-4">
            ¡Contactáte con nosotros!
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <Input
              label="Nombre"
              error={formik.errors.name}
              touched={formik.touched.name}
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Input
              label="Email"
              error={formik.errors.email}
              touched={formik.touched.email}
              type="email"
              name="email"
              placeholder="Tu email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Input
              label="Telefono"
              error={formik.errors.phone}
              touched={formik.touched.phone}
              type="text"
              name="phone"
              placeholder="Tu telefono"
              value={formik.values.phone}
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

            <div className="w-full h-16 my-4 flex flex-col items-end justify-center">
              <SubmitButton isSubmitting={formik.isSubmitting}>
                Enviar mensaje
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
