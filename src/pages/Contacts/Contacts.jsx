import React from 'react'

const Contacts = () => {
  return (
    <div>
        <h1>Contact page</h1>
        <div className="flex flex-col px-12 mt-10">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                    <thead className="border-b bg-gray-800" >
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
                            Apellido
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
                        <tr className="border-b">
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            Mark
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            Otto
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            @mdo
                        </td>
                        </tr>
                        <tr className="bg-white border-b">
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            Jacob
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            Thornton
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            @fat
                        </td>
                        </tr>
                        <tr className="bg-white border-b">
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            Larry
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            Wild
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            @twitter
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Contacts