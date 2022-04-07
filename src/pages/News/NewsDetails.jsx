import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";
import { Loader } from "../../components/Loader/Loader";
import { errorAlert } from "../../helpers/AlertService";

const NewsDetails = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState({});
  const { name, content, image, category, type, createdAt } = news;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await apiConnectionWithoutToken(`/news/${newsId}`);
        setNews(data);
      } catch (error) {
        errorAlert(
          "Error al obtener la noticia",
          "Ha ocurrido un error intente nuevamente"
        );
      }
    };

    //Quitar cunado se implemente el endpoint
    setNews({
      name: "Celebracion del fin de la campaña",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error in autem, at deleniti eum ut vitae voluptatem. Incidunt, dolorem, laudantium aperiam, possimus numquam porro hic ratione vitae ut ipsam doloremque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quia provident obcaecati explicabo ex omnis aut ipsam dolore asperiores magni vel in mollitia, ratione itaque doloribus suscipit error numquam quis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates repellendus cupiditate labore soluta facilis similique blanditiis ab nisi dolorem. Voluptatem sunt provident ea dicta rem libero, incidunt ipsam necessitatibus!",
      image:
        "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      category: "Evento",
      type: "Noticia",
      createdAt: "2022-05-20",
    });
    // fetchData();
  }, []);

  if (Object.keys(news).length === 0) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto">
      <div className="w-full py-8 px-4">
        <h1 className="text-4xl text-center font-bold">{name}</h1>
        <div className="xl:flex xl:justify-around">
          {image && (
            <div className="w-full xl:h-96">
              <img
                className="max-w-full max-h-full mx-auto my-4 object-cover "
                src={image}
                alt={`${name} image`}
              />
            </div>
          )}
          <p className="mt-3 mb-1 text-justify xl:w-3/4">{content}</p>
        </div>
      </div>
      <div className="bg-blue-400 w-full h-1 rounded"></div>
      <div className="sm:flex align-middle justify-between mt-1">
        <h4 className="text-sm">
          Tipo: <span className="font-bold">{type}</span>
        </h4>
        <h4 className="text-sm">
          Categoria: <span className="font-bold">{category}</span>
        </h4>
        <h4 className="text-gray-400">Creado el: {createdAt}</h4>
      </div>
    </div>
  );
};

export default NewsDetails;
