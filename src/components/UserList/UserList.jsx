import { useEffect, useState } from "react";
import {
  apiConnectionWithToken,
} from "../../helpers/apiConnection";
import { Loader } from "../Loader/Loader";
import { ListItem } from "./ListItem";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const queryAPI = async () => {
      try {
        const { data } = await apiConnectionWithToken("/users");
        setUsers(data.users);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (!users.length) {  
      queryAPI();
    }
  }, []);

  const handleDelete = async (userId) => {
    try {
      apiConnectionWithToken(`/users/${userId}`, {}, "DELETE");
      setUsers(users.filter((user) => user.id !== userId));
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
          <div className="flex justify-end items-center mt-10 mb-5">
            
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
                        Apellido
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Email
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
                    {users.map((item, index) => (
                      <ListItem
                        key={item.id}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        email={item.email}
                        index={index}
                        userId={item.id}
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
