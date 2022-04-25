import React, { useEffect, useState } from 'react';
import { apiConnectionWithoutToken } from '../../helpers/apiConnection';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../../components/Card/NewsCard';

const News = () => {
  const navigate = useNavigate();
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    apiConnectionWithoutToken('/entries/news', {}, 'get').then((res) => {
      const data = res.data.news;
      setLatestNews(data);
    });
  }, []);

  const handleNewsClick = (id) => {
    navigate(`${id}`);
  };

  return (
    <>
      {latestNews.length ? (
        <main className="container mx-auto mt-16 w-[95%] lg:w-full">
          <h1 className="mb-16 text-center text-4xl font-semibold animate__animated animate__backInDown">
            Últimas Novedades
          </h1>

          <section className="flex flex-col items-center mb-16 shadow-md bg-slate-50 animate__animated animate__zoomIn">
            <div className="flex justify-center items-center">
              <img
                src={latestNews[0].imageUrl}
                className="w-full h-full object-contain"
                onClick={() => handleNewsClick(element.id)}
              />
            </div>
            <div className=" p-8 h-full flex flex-col justify-center items-center">
              <h2 className="text-2xl md:text-3xl font-medium my-4">
                {latestNews[0].name}
              </h2>

              <p dangerouslySetInnerHTML={{__html:latestNews[0].content }} className="text-md sm:text-lg md:text-xl text-justify overflow-y-auto p-4 sm:p-8">
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 cursor-pointer animate__animated animate__fadeInUpBig">
            {latestNews.map((element) => (
              <NewsCard
                key={element.id}
                element={element}
                handleNewsClick={handleNewsClick}
              />
            ))}
          </section>
        </main>
      ) : (
        <div className="w-full h-96 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold">
            No hay noticias para mostrar.
          </h1>
        </div>
      )}

      <div className="w-full h-40 flex flex-col justify-evenly items-center">
        <button
          className="bg-[#8DCAFF] text-white px-6 py-2 rounded-2xl text-xl font-semibold"
          onClick={() => navigate('/')}>
          Volver al menú
        </button>
      </div>
    </>
  );
};

export default News;
