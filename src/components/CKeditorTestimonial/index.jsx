import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { usePreviewImage } from "../../hooks/usePreviewImage";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";
import { confirmationAlert, errorAlert } from "../../helpers/AlertService";
import {useNavigate,useParams} from 'react-router-dom'

export default function CkeditorTestimonialForm() {
  const {id} = useParams()
  const [obj,setObj] = useState(null)

  const getTestimonial = async () => {
    try {
      const res = await apiConnectionWithoutToken(
        "/testimonials/" + id,
        {},
        "GET"
      );
      setObj(res.data.new);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    id && getTestimonial()
  }, [])
  const navigate = useNavigate()
  const [content, setContent] = useState(obj ? obj.content : "");
  const [image, preview, handleFile] = usePreviewImage(obj ? obj.imageUrl : "");
  const [name, setName] = useState(obj ? obj.name : "")

  
  const handleSubmit = (values) => {
    const method = obj ? "PUT" : "POST";

    const testimonial = {
      name: name,
      imageUrl: image,
      content: content,
    };
    apiConnectionWithoutToken(
      obj ? `/testimonials/${obj.id}` : "/testimonials",
      testimonial,
      method
    )
      .then((res) => {
        if (res.data) {
          confirmationAlert(
            obj
              ? "Testimonio guardado correctamente"
              : "Testimonio creado correctamente",
            ""
          );
          navigate('/backoffice/testimonials');
        }
      })
      .catch((err) => {
        if (err) {
          errorAlert(
            obj
              ? "No se ha podido guardar el testimonio"
              : "No se ha podido crear el testimonio",
            ""
          );
        }
      });
  };
  const validate = (values) => {
    const errors = {};
    if (!obj) {
      !values.name && (errors.name = "Debes ingresar un nombre");
      // !image && (errors.image = "Debes adjuntar una imagen");
      !content && (errors.content = "El testimonio debe tener un contenido");
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: obj ? name : "",
      concept: obj ? content : ""
    },
    onSubmit: handleSubmit,
    validate,
  });

  return (
    <section className="w-screen min-h-screen  flex flex-col items-center justify-start mt-10">
      <form
        className="w-3/5 h-5/6 rounded bg-slate-100 flex flex-col justify-start items-start p-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full h-12 flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl text-blue-600">
            {obj ? "Editar Testimonio" : "Crear Testimonio"}
          </h2>
        </div>

        <div className="w-full h-24 flex flex-col justify-evenly">
          <label className="text-md font-semibold">Nombre: </label>
          <small className="text-red-500">{formik.errors.name}</small>
          <input
            id="name"
            type="text"
            placeholder="Tu nombre..."
            className="w-full h-10 rounded px-2 focus:outline-none"
            value={formik.values.name}
            onChange={formik.handleChange}
          ></input>
        </div>
        {/* <div className="w-full h-24 flex flex-col justify-evenly">
          {obj ? (
            <>
              <label className="text-md font-semibold">Editar imagen: </label>
              <small className="text-red-500">{formik.errors.image}</small>

              {image && <img src={preview} />}
            </>
          ) : (
            <>
              <label className="text-md font-semibold">
                Selecciona una imagen:{" "}
              </label>
              <small className="text-red-500">{formik.errors.image}</small>
              <input
                id="image"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFile}
              />
              {image && <img src={image} />}
            </>
          )}
        </div> */}
        <div className="w-full h-auto">
          <label className="text-md font-semibold">Contenido: </label>
          <small className="text-red-500">{formik.errors.content}</small>
          <CKEditor
            editor={ClassicEditor}
            data={obj ? obj.content : ""}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContent(data);
            }}
          />
        </div>
        <div className="w-full h-24 flex flex-row items-center justify-center">
            <button
              type="submit"
              className="submit save"
            >
              {id ? 'Guardar' : 'Crear'} 
            </button>
            <button className="submit back " onClick={() => navigate(-1)}>Volver</button>

        </div>
      </form>
    </section>
  );
}
