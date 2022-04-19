import React from 'react'
import { Formik } from 'formik'

export const EditForm = () => {

    const validateForm = (values) => {
        const errors = {};
        firstNameValidate({errors, values})
        lastNameValidate({errors,values})
        emailValidate({errors,values})
        return errors
    }

    const firstNameValidate = ({errors, values}) => {
        if(!values.firstName){
            errors.firstName = 'El nombre es necesario'
        }
        return errors;
    }

    const lastNameValidate = ({errors, values}) => {
        if(!values.lastName){
            errors.lastName = 'El apellido es necesario'
        }
        return errors;
    }
 

    const emailValidate = ({errors, values}) => {
        if(!values.email){
            errors.email = 'El email es necesario'
        }
        return errors;
    }


    const handleSubmit = (values) => {
        console.log(values)
    }

  return (
    <section className="flex justify-center items-center h-screen mb-12 pb-12">
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <Formik 
      initialValues={{firstName:'', lastName:'', email:''}}
      validate = {validateForm}
      onSubmit = {handleSubmit}
      >
           {({ errors, handleSubmit, handleChange, isSubmitting }) => (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-6">
        <label for="inputFirstName" className="form-label inline-block mb-2 text-gray-700">Nombre</label>
        <h1 className="text-red-500 text-sm mb-2">
        {errors.firstName}
      </h1>
        <input
          type="firstName"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="inputFirstName"
          aria-describedby="nameInput"
          placeholder="Enter first name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-6">
        <label for="inputLastName" className="form-label inline-block mb-2 text-gray-700">Apellido</label>
        <h1 className="text-red-500 text-sm mb-2">
        {errors.lastName}
      </h1>
        <input
          type="lastName"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="inputLastName"
          aria-describedby="nameInput"
          placeholder="Enter last name"
          onChange={handleChange}

        />
      </div>
      <div className="form-group mb-6">
        <label for="inputEmail" className="form-label inline-block mb-2 text-gray-700">E-mail</label>
        <h1 className="text-red-500 text-sm mb-2">
        {errors.email}
      </h1>
        <input
          type="email"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="inputEmail"
          aria-describedby="nameInput"
          placeholder="Enter e-mail"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-6">
        <label for="inputEmail" className="form-label inline-block mb-2 text-gray-700">Cambiar Rol</label>
        <select
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="roleId"
          onChange={handleChange}
        >
            <option >User</option>
            <option>Admin</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>)}
    </Formik>
  </div>
</section>
  )
}