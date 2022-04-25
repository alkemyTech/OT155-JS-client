import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    apiConnectionWithoutToken(`/activities/${id}`).then((res) => {
      const data = res.data.activity;
      setActivity(data);
    });
  }, []);

  return (
    <section className="w-screen h-screen flex flex-col">
      {activity ? (
        <>
          <section className="w-full h-full flex flex-row">
            <section className="w-5/12 h-full flex flex-row items-center justify-center">
              <div className="w-4/5 h-1/2 bg-slate-400">
                <img
                  className="w-full h-full"
                  src={activity.imageUrl}
                  alt={`${activity.name} photo`}
                />
              </div>
            </section>
            <section className="w-7/12 h-full flex flex-col items-start justify-center p-6">
              <h1 className="font-bold text-5xl mb-12">{activity.name}</h1>
              <p className="text-justify text-md font-normal">
                {activity.content}
              </p>
            </section>
          </section>
        </>
      ) : (
        <section className="w-screen h-screen flex flex-col items-center justify-center p-6">
          <h1 className="font-bold text-5xl mb-12">404.</h1>
          <p className="text-justify text-md font-normal">
            La pagina que estabas buscando no existe. :(
          </p>
        </section>
      )}

      <div className="w-full h-40 flex flex-col justify-evenly items-center">
        <button
          className="bg-gray-200 px-6 py-2 rounded-2xl text-xl font-semibold"
          onClick={() => navigate(-1)}
        >
          Volver al menú
        </button>
      </div>
    </section>
  );
}
