import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export const HomeEdit = () => {
    const navigate = useNavigate();

  const [welcomeValues, handleWelcomeForm] = useForm({
    welcomeText: '',
  });

  const [imageSlides1, handleImageSlides1] = useForm({
      id1: '',
      imageUrl1: '',
      text1: '',
  });
  const [imageSlides2, handleImageSlides2] = useForm({
      id2: '',
      imageUrl2: '',
      text2: '',
  });
  const [imageSlides3, handleImageSlides3] = useForm({
      id3: '',
      imageUrl3: '',
      text3: '',
  });

  const { welcomeText } = welcomeValues;
  const { id1, imageUrl1, text1 } = imageSlides1;
  const { id2, imageUrl2, text2 } = imageSlides2;
  const { id3, imageUrl3, text3 } = imageSlides3;
  

  const handleSubmit1 = (e) => {
      e.preventDefault();
      if(welcomeText.length < 20){
            alert('El texto debe tener al menos 20 caracteres');
            return;
        }
        console.log('envío 1');
    }
  
  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log('envío 2');
  };

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container mx-auto h-full lg:flex gap-4 mt-20">
        <div className="block p-6 rounded-lg shadow-lg bg-gray-200  container mx-auto">
          <form onSubmit={handleSubmit1}>
            <h2 className="text-2xl text-center">
              Modificar texto de Bienvenida
            </h2>
            <div className="flex-col mt-6">
              <textarea
                className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Tu mensaje"
                name="welcomeText"
                value={welcomeText}
                onChange={handleWelcomeForm}
                min={20}
                required={true}
              />
            </div>

            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="
                    mx-auto
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">
                Guardar
              </button>
            </div>
          </form>
        </div>

        <div className="block p-6 rounded-lg shadow-lg bg-gray-200 container mx-auto">
          <form onSubmit={handleSubmit2}>
            <h2 className="text-2xl text-center">
              Modificar texto y imágenes de Sliders
            </h2>
            <div className="flex justify-center my-4">
              <div className="mb-3 w-full">
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700">
                  Texto 1
                </label>
                <input
                  type="text"
                  className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4"
                    name='text1'
                    value={text1}
                    onChange={handleImageSlides1}
                />
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700">
                  Imagen 1
                </label>
                <input
                  className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="formFile"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>
            <div className="flex justify-center my-4">
              <div className="mb-3 w-full">
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700">
                  Texto 2
                </label>
                <input
                  type="text"
                  className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4"
                    name='text2'
                    value={text2}
                    onChange={handleImageSlides2}
                />
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700">
                  Imagen 2
                </label>
                <input
                  className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="formFile"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>
            <div className="flex justify-center my-4">
              <div className="mb-3 w-full">
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700">
                  Texto 3
                </label>
                <input
                  type="text"
                  className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4"
                    name='text3'
                    value={text3}
                    onChange={handleImageSlides3}
                />
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700">
                  Imagen 3
                </label>
                <input
                  className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="formFile"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>
            <div className="flex mt-4">
              <button
                type="submit"
                className="
                    mx-auto
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-5 mb-20 flex justify-center">
        <button onClick={handleReturn}
          type="text"
          className="
                    px-6
                    py-2.5
                    bg-red-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-red-700 hover:shadow-lg
                    focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-red-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">
          Volver sin guardar
        </button>
      </div>
    </>
  );
};
