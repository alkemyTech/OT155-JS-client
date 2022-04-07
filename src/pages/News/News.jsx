import React, { useEffect, useState } from "react";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    apiConnectionWithoutToken("/entries/news", {}, "get").then((res) => {
      const data = res.data.news;
      setLatestNews(data);
    });
  }, []);

  const handleNewsClick = (id) => {
    navigate(`${id}`);
  };

  return (
    <>
      <header className="w-screen h-16 border-b border-gray-300 shadow shadow-md"></header>
      {latestNews.length ? (
        <section className="w-full min-h-screen">
          <div className="w-full h-44 flex justify-center items-center">
            <h1 className="text-4xl font-semibold">Últimas Novedades</h1>
          </div>
          <section className="w-full h-96  flex flex-row items-center mb-16">
            <div className="w-6/12 h-full  flex justify-center items-center">
              <img
                src={latestNews[0].imageUrl}
                className="w-full h-full"
                onClick={() => handleNewsClick(element.id)}
              />
            </div>
            <div className="w-6/12 h-full flex flex-col justify-center items-center p-8">
              <h2 className="text-3xl font-medium my-4">
                {latestNews[0].name}
              </h2>

              <p className="text-sm text-justify overflow-y-auto">
                {latestNews[0].content}
              </p>
            </div>
          </section>

          <section className="w-full h-5/6 flex flex-col justify-center items-center">
            <div className="w-3/4 h-5/6 grid grid-cols-4 hover:cursor-pointer">
              {latestNews.map((element) => (
                <div
                  className="w-64 h-52 flex flex-col m-4 border border-gray-200"
                  key={element.id}
                >
                  <img
                    src={element.imageUrl}
                    className="w-full h-1/2"
                    onClick={() => handleNewsClick(element.id)}
                  />
                  <div className="w-full h-1/2 flex justify-center items-start p-4 overflow-hidden">
                    <p
                      className="text-sm text-justify py-2"
                      onClick={() => handleNewsClick(element.id)}
                    >
                      {element.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      ) : (
        <div className="w-full h-96 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold">
            No hay noticias para mostrar.
          </h1>
        </div>
      )}

      <div className="w-full h-40 flex flex-col justify-evenly items-center">
        <button
          className="bg-gray-200 px-6 py-2 rounded-2xl text-xl font-semibold"
          onClick={() => navigate("/")}
        >
          Volver al menú
        </button>
      </div>
    </>
  );
};

export default News;
