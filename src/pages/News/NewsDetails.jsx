import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiConnectionWithoutToken } from '../../helpers/apiConnection';
import { Loader } from '../../components/Loader/Loader';
import { errorAlert } from '../../helpers/AlertService';

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState({});
  const { name, content, imageUrl, category, type, createdAt } = news;
  const [loading, setLoading] = useState(false);

  const handleReturn = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await apiConnectionWithoutToken(`/entries/news/${id}`);
        setNews(data.new);
        setLoading(false);
      } catch (error) {
        errorAlert(
          'Error al obtener la noticia',
          'Ha ocurrido un error intente nuevamente'
        );
      }
    };
    if (Object.keys(news).length === 0) fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  console.log(news);

  return (
    <div className="container mx-auto">
      <div className="w-full py-8 px-4">
        <h1 className="text-4xl text-center font-bold">{name}</h1>
        <div className="xl:flex xl:justify-center">
          {imageUrl && (
            <div className="xl:w-1/2 w-full xl:h-96">
              <img
                className="w-full h-full mx-auto my-4 object-cover "
                src={imageUrl}
                alt={`${name} image`}
              />
            </div>
          )}
          <p className="mt-3 mb-1 xl:ml-2 text-justify xl:w-3/4">{content}</p>
        </div>
      </div>
      <div className="bg-blue-400 w-full h-1 rounded"></div>
      <div className="sm:flex align-middle justify-between mt-1 ml-4 sm:ml-0">
        <h4 className="text-sm">
          Tipo: <span className="font-bold">{type}</span>
        </h4>
        <h4 className="text-gray-400">
          Creado el: {new Date(createdAt).toLocaleDateString('es-ES')}
        </h4>
      </div>
      <div className="flex justify-center py-5">
        <button
          className="text-[20px] font-bold text-white bg-[#8DCAFF] w-40 py-3 px-5 rounded-2xl"
          onClick={handleReturn}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default NewsDetails;
