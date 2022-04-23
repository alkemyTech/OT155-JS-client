import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";
import { Loader } from "../../components/Loader/Loader";
import { errorAlert } from "../../helpers/AlertService";

const NewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const { name, content, image, category, type, createdAt } = news;
  const [loading, setLoading] = useState(false);

  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await apiConnectionWithoutToken(`/entries/news/${id}`);
        setNews(data.new);
        setLoading(false);
      } catch (error) {
        errorAlert(
          "Error al obtener la noticia",
          "Ha ocurrido un error intente nuevamente"
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
    <div className="container mx-auto h-[80vh]">
      <div className="w-full py-8 px-4">
        <h1 className="text-4xl text-center font-bold">{name}</h1>
        <div className="xl:flex xl:justify-center">
          {image && (
            <div className="xl:w-1/2 w-full xl:h-96">
              <img
                className="max-w-full max-h-full mx-auto my-4 object-cover "
                src={image}
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
          Creado el: {new Date(createdAt).toLocaleDateString("es-ES")}
        </h4>
      </div>
    </div>
  );
};

export default NewsDetails;
