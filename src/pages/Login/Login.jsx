import React from 'react'
import { Formik } from 'formik';

export const Login = () => {
  return (
    <div className="w-screen h-screen bg-slate-200 flex flex-col items-center justify-center">
      <div className="w-2/3  h-5/6  bg-blue-400 rounded-md shadow-md flex flex-col items-center justify-center">   
        <div className= "text-gray-100 mb-6 text-2xl">Acceso de usuarios</div> 
          <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Debes ingresar tu mail';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Por favor ingresa un mail valido';
            };
            if (!values.password) {
              errors.password = 'Debes ingresar una contraseña';
            } 
            if (values.password.length <=5){
              errors.password = "La contraseña debe tener al menos 6 caracteres"
            };
            
            return errors;
          }}
          onSubmit={(values) => {
            const formValues = values
            console.log(formValues);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form  className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
              <div className=" px-3 mb-6 py-1">
              <input
                className= "w-2/3 text-xl block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                type="email"
                name="email"
                placeholder='Ingresa tu email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className="text-red-700 text-center">{errors.email && touched.email && errors.email}</div>
              </div>
              <div className=" px-3 mb-6 py-1">
              <input
              className= "w-2/3 text-xl block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                type="password"
                name="password"
                placeholder='Ingresa tu password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div className="text-red-700 text-center">{errors.password && touched.password && errors.password}</div>
              </div>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-700 transition duration-300 mt-6" type="submit" disabled={isSubmitting}>
                Ingresar
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
