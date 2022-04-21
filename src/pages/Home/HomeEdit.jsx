import { useNavigate } from "react-router-dom";
import { errorAlert } from "../../helpers/AlertService";
import { uploadImage } from "../../helpers/uploadImage";
import { useEffect, useState } from "react";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";

export const HomeEdit = () => {
  const navigate = useNavigate();

  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");

  const [welcomeValues, handleWelcomeForm] = useState({
    welcomeText: "",
  });

  const [imageSlides1, handleImageSlides1] = useState({
    imageUrl1: "",
    text1: "",
  });
  const [imageSlides2, handleImageSlides2] = useState({
    imageUrl2: "",
    text2: "",
  });
  const [imageSlides3, handleImageSlides3] = useState({
    imageUrl3: "",
    text3: "",
  });

  useEffect(() => {
    handleImageSlides1({ ...imageSlides1, imageUrl1 });
    handleImageSlides2({ ...imageSlides2, imageUrl2 });
    handleImageSlides3({ ...imageSlides3, imageUrl3 });
  }, [imageUrl1, imageUrl2, imageUrl3]);

  const { welcomeText } = welcomeValues;
  const { text1 } = imageSlides1;
  const { text2 } = imageSlides2;
  const { text3 } = imageSlides3;

  const handleChange1 = (e) => {
    setImage1(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setImage2(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setImage3(e.target.files[0]);
  };
  const handleWelcomeChange = (e) => {
    handleWelcomeForm({ ...welcomeValues, welcomeText: e.target.value });
  };
  const handleInputChange1 = (e) => {
    handleImageSlides1({ ...imageSlides1, text1: e.target.value });
  };
  const handleInputChange2 = (e) => {
    handleImageSlides2({ ...imageSlides2, text2: e.target.value });
  };
  const handleInputChange3 = (e) => {
    handleImageSlides3({ ...imageSlides3, text3: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (welcomeText.length < 20) {
      errorAlert("Error", "El texto debe tener al menos 20 caracteres");
      return;
    }
    try {
      await apiConnectionWithoutToken(
        "/organizations",
        {
          id: 1,
          welcomeText,
        },
        "PUT"
      );
    } catch (error) {
      errorAlert("Error", error.message);
    }
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setImageUrl1(await uploadImage(image1));
    setImageUrl2(await uploadImage(image2));
    setImageUrl3(await uploadImage(image3));

    try {
      await apiConnectionWithoutToken(
        "/slide",
        {
          id: 1,
          organizationId: 1,
          imageUrl: imageSlides1.imageUrl1,
          text: imageSlides1.text1,
        },
        "PUT"
      );
      await apiConnectionWithoutToken(
        "/slide",
        {
          id: 2,
          organizationId: 1,
          imageUrl: imageSlides2.imageUrl2,
          text: imageSlides2.text2,
        },
        "PUT"
      );
      await apiConnectionWithoutToken(
        "/slide",
        {
          id: 3,
          organizationId: 1,
          imageUrl: imageSlides3.imageUrl3,
          text: imageSlides3.text3,
        },
        "PUT"
      );
    } catch (error) {
      errorAlert("Error", error.message);
    }
  };

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <>
      <h1 className="text-2xl sm:text-4xl m-10 text-center">
        Editar Datos de Home
      </h1>
      <div className="container mx-auto h-full lg:flex gap-4 mt-10">
        <div className="block p-6 rounded-lg shadow-lg bg-gray-200  container mx-auto mb-10 lg:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl sm:text-2xl text-center">
              Modificar texto de Bienvenida
            </h2>
            <div className="flex-col mt-6">
              <textarea
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Tu mensaje"
                name="welcomeText"
                value={welcomeText}
                onChange={handleWelcomeChange}
                min={20}
                required={true}
              />
            </div>

            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="mx-auto px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-gray-200 container mx-auto">
          <form onSubmit={handleSubmit1}>
            <h2 className="text-xl sm:text-2xl text-center">
              Modificar texto y imágenes de Sliders
            </h2>
            <div className="flex justify-center my-4">
              <div className="mb-3 w-full">
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Texto 1
                </label>
                <input
                  type="text"
                  required={true}
                  className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4"
                  name="text1"
                  value={text1}
                  onChange={handleInputChange1}
                />
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Imagen 1
                </label>
                <input
                  className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  required={true}
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleChange1}
                />
              </div>
            </div>
            <div className="flex justify-center my-4">
              <div className="mb-3 w-full">
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Texto 2
                </label>
                <input
                  type="text"
                  className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4"
                  name="text2"
                  value={text2}
                  onChange={handleInputChange2}
                  required={true}
                />
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Imagen 2
                </label>
                <input
                  className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="formFile"
                  accept="image/png, image/jpeg"
                  required={true}
                  onChange={handleChange2}
                />
              </div>
            </div>
            <div className="flex justify-center my-4">
              <div className="mb-3 w-full">
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Texto 3
                </label>
                <input
                  type="text"
                  className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4"
                  name="text3"
                  value={text3}
                  required={true}
                  onChange={handleInputChange3}
                />
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Imagen 3
                </label>
                <input
                  className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="formFile"
                  accept="image/png, image/jpeg"
                  required={true}
                  onChange={handleChange3}
                />
              </div>
            </div>
            <div className="flex mt-4">
              <button
                type="submit"
                className="mx-auto px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-5 mb-20 flex justify-center">
        <button
          onClick={handleReturn}
          type="text"
          className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Volver sin guardar
        </button>
      </div>
    </>
  );
};
