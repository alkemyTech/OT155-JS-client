import React from 'react'
import dataContacts from './dataContacts'

const Contacts = () => {
    return (
        <div>
            <h1 className="text-2xl ml-12 mt-6">Contactos</h1>
            <div className="flex flex-col px-12 mt-10">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                        <thead className="border-b bg-[#9AC9FB]" >
                            <tr>
                            <th
                                scope="col"
                                className="text-sm font-medium text-white px-6 py-4 text-center "
                            >
                                Nombre
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-white px-6 py-4 text-center"
                            >
                                Email
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                        {dataContacts.map (item=>(
                            <tr  key={item.id} className="border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                {item.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                {item.mail}
                            </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                        <div className=" mt-6 flex space-x-2 justify-center">
                            <div>
                                <button type="button" className="inline-block px-6 py-2 border-2 mr-8 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:border-blue-500 hover:text-blue-500 hover:bg-opacity-2 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Prev</button>
                                <button type="button" className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:border-blue-500 hover:text-blue-500 hover:bg-opacity-2 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Next</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Contacts