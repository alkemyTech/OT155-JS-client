import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';

export const ListItem = ({
  index,
  name,
  img,
  content,
  testimonialsId,
  handleDelete,
}) => {
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {index + 1}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <img src={img} alt=""  className="img__testimonials" />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {content}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <Link to={`/edituser/${testimonialsId}`} className="block mx-auto ">
          <BiEditAlt className=" text-cyan-500 text-xl" />
        </Link>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
        <button
          className="block mx-auto"
          onClick={() => {
            handleDelete(testimonialsId);
          }}>
          <MdDeleteForever className="mx-auto text-red-600 text-xl cursor-pointer" />
        </button>
      </td>
    </tr>
  );
};
