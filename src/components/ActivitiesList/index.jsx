import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  apiConnectionWithoutToken,
  apiConnectionWithToken,
} from "../../helpers/apiConnection";
import { Loader } from "../Loader/Loader";
import { ListItem } from "./ListItem";
import "./index.css";

export const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const queryAPI = async () => {
      try {
        const { data } = await apiConnectionWithoutToken("/activities");
        setActivities(data.activities);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (activities) {
      queryAPI();
    }
  }, []);

  const handleDelete = async (activitieId) => {
    try {
      await apiConnectionWithToken(`/activities/${activitieId}`, {}, "DELETE");
      setActivities(
        activities.filter((activitie) => activitie.id !== activitieId)
      );
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col container mx-auto">
          <Link
            to="create"
            className="bg-ong-blue-700 text-white font-bold px-5 mt-10 mb-5 create"
          >
            Crear
          </Link>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b bg-zinc-100">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Descripcion
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Editar
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Eliminar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activities.map((item, index) => (
                      <ListItem
                        key={item.id}
                        name={item.name}
                        description={item.content}
                        index={index}
                        activiteId={item.id}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
