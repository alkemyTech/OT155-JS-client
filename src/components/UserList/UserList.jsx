import { useEffect } from 'react';
import { informationAlert } from '../../helpers/AlertService';
import { apiConnectionWithoutToken } from '../../helpers/apiConnection';
import { ListItem } from './ListItem';

const data = [
  {
    id: 1,
    firstName: 'Juan',
    lastName: 'Quinero',
    email: 'mail@mail.com',
  },
  {
    id: 2,
    firstName: 'Ana',
    lastName: 'Perez',
    email: 'mail2@mail.com',
  },
  {
    id: 3,
    firstName: 'Ignacio',
    lastName: 'Fernandez',
    email: 'mail3@mail.com',
  },
];

export const UserList = () => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (loading) {
  //     const queryAPI = async () => {
  //       try {
  //         const { data } = await apiConnectionWithoutToken('/users');

  //         setUsers(data.users);
  //         setLoading(false);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     queryAPI();
  //   }
  // }, []);

  return (
    <div className="flex flex-col container mx-auto">
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
                    Apellido
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Email
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
                {data &&
                  data.map((item, index) => (
                    <ListItem
                      key={item.id}
                      firstName={item.firstName}
                      lastName={item.lastName}
                      email={item.email}
                      index={index}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
