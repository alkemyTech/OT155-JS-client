import { Link } from 'react-router-dom';

import { BiEditAlt } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';


export const ListItem = ({
  index,
  firstName,
  lastName,
  email,
  userId,
  handleDelete,
}) => {
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {index + 1}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {firstName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {lastName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {email}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
        <button
          className="block mx-auto"
          onClick={() => {
            handleDelete(userId);
          }}>
          <MdDeleteForever className="mx-auto text-red-600 text-xl cursor-pointer" />
        </button>
      </td>
    </tr>
  );
};
