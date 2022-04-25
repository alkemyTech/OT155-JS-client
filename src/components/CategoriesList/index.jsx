import { useEffect, useState } from 'react';
import {
  apiConnectionWithoutToken,
  apiConnectionWithToken,
} from '../../helpers/apiConnection';
import { Loader } from '../Loader/Loader';
import { ListItem } from './ListItem';
import {Link} from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";


export const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryAPI = async () => {
      try {
        const { data } = await apiConnectionWithoutToken('/categories');
        setCategories(data.categories);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (categories) {
      queryAPI();
    }
  }, []);

  const handleDelete = async (categoriesId) => {
    try {
      await apiConnectionWithToken(`/categories/delete/${categoriesId}`, {}, 'DELETE');
      setCategories(categories.filter((user) => user.id !== categoriesId));
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
          <div className="flex justify-between items-center mt-10 mb-5">
            <Link
              to="create"
              className="bg-ong-blue-700 text-white font-bold px-5 py-2 rounded-md flex items-center"
            >
              Crear
            </Link>
            <Link
              to="/backoffice"
              className="bg-gray-600 hover:bg-gray-400 text-white font-medium px-5 py-2 rounded-md flex items-center"
            >
              <IoMdArrowRoundBack className="mr-2 inline" />
              Volver
            </Link>
          </div>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b bg-zinc-100">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Descripcion
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                        Editar
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                        Eliminar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((item, index) => (
                      <ListItem
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        index={index}
                        categoriesId={item.id}
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
