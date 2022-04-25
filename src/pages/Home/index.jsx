import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NewsCard from '../../components/Card/NewsCard';
import { Loader } from '../../components/Loader/Loader';
import { Slider } from '../../components/Slider/Slider';
import { apiConnectionWithoutToken } from '../../helpers/apiConnection';
import 'animate.css';

const Home = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [organizationData, setOrganizationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryAPI = async () => {
      try {
        const { data } = await apiConnectionWithoutToken('/entries/news');
        setNews(data.news);
      } catch (error) {
        console.log(error);
      }
    };
    if (!news.length) {
      queryAPI();
    }
  }, []);

  useEffect(() => {
    const queryAPI = async () => {
      try {
        const { data } = await apiConnectionWithoutToken(
          '/organizations/1/public'
        );
        setOrganizationData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (organizationData) {
      queryAPI();
    }
  }, []);

  const handleNewsClick = (id) => {
    navigate(`news/${id}`);
  };

  const { welcomeText } = organizationData;

  return (
    <main className="mt-4 container mx-auto">
      <div className="flex justify-center flex-col lg:flex-row sm:flex-col gap-4 animate__animated animate__zoomIn">
        <div className="flex justify-between flex-col px-6 lg:px-12 w-full lg:w-1/2 rounded-lg shadow-md bg-slate-50">
          <h1 className="text-4xl lg:text-6xl font-bold text-center p-5">
            Somos Más
          </h1>
          {loading ? (
            <Loader />
          ) : (
            <p className="text-sm sm:text-lg tracking-widest text-center">
              {welcomeText}
            </p>
          )}
          <div className="flex justify-center py-5">
            <Link
              to="/contact"
              className="text-[20px] font-bold text-white bg-[#8DCAFF] w-40 py-3 px-5 rounded-2xl">
              Contáctenos
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex rounded-lg shadow-md">
          <Slider />
        </div>
      </div>
      <div className="flex flex-col center-center mb-5 p-5 animate__animated animate__fadeInUpBig">
        <h2 className=" text-2xl sm:text-3xl lg:text-4xl my-8 font-bold text-center ">
        Últimas Novedades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 cursor-pointer">
          {news.map((news) => (
            <NewsCard
              key={news.id}
              element={news}
              handleNewsClick={handleNewsClick}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
