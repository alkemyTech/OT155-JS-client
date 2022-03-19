import { Formik } from "formik";
const Register = () => {

  return (
    <div className="w-screen h-screen bg-slate-200 flex flex-col items-center justify-center">
      <div className="w-screen h-screen lg:w-1/2 lg:h-5/6 xl:w-1/3 xl:h-5/6 bg-white rounded-md shadow-md flex flex-col items-center justify-center ">
        <div className="text-2xl text-indigo-600">Crear nuevo usuario</div>
        <Formik
          initialValues={{ name: "", surname: "", email: "", password: "" }}
          validate={(values) => {
          
            const errors = {};
            if (!values.name) {
              errors.name = "Es necesario ingresar tu nombre ";
            }else if(!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(values.name)){
                errors.name = ("Debe empezar con mayusculas y solo contener letras")
            }
            if (!values.surname) {
              errors.surname = "Es necesario ingresar tu apellido ";
            }else if(!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(values.surname)){
                errors.surname = ("Debe empezar con mayusculas y solo contener letras")
            }
            if (!values.email) {
              errors.email = "Es necesario ingresar tu email ";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Ingrese un email válido ";
            }
            if (!values.password) {
              errors.password = "Es necesaria una contraseña ";
            } else if (values.password.length < 6) {
              errors.password = "Ingresa al menos 6 carácteres ";
            }

            return errors;
          }}
          onSubmit={(values) => {
            const user = values;
            //Send data to API register endpoint
            console.log("Usuario: ", user);
          }}
        >
          {({ errors, touched, handleSubmit, handleChange, isSubmitting }) => (
            <form
              className=" w-3/4 h-5/6 flex flex-col items-start justify-start p-2 "
              onSubmit={handleSubmit}
            >
              <div className="w-full h-20 my-4 flex flex-col items-start justify-evenly">
                <div className="w-full h-6 flex flex-row items-center justify-between">
                  <label className="mb-2">Nombre:</label>
                  <small className="text-red-500 text-sm mb-2">
                    {errors.name && touched.name && errors.name}
                  </small>
                </div>

                <input
                  name="name"
                  className="w-full h-10 border border-solid border-gray-200 rounded-md px-2 focus:border-indigo-500 focus:border-2 outline-none"
                  type="text"
                  placeholder="Ingresa tu nombre..."
                  onChange={handleChange}
                ></input>
              </div>

              <div className="w-full h-20 my-4 flex flex-col items-start justify-evenly">
                <div className="w-full h-6 flex flex-row items-center justify-between">
                  <label className="mb-2">Apellido: </label>
                  <small className="text-red-500 text-sm mb-2">
                    {errors.surname && touched.surname && errors.surname}
                  </small>
                </div>

                <input
                  name="surname"
                  className="w-full h-10 border border-solid border-gray-200 rounded-md px-2 focus:border-indigo-500 focus:border-2 outline-none"
                  type="text"
                  placeholder="Ingresa tu apellido..."
                  onChange={handleChange}
                ></input>
              </div>

              <div className="w-full h-20 mb-4 flex flex-col items-start justify-evenly">
                <div className="w-full h-6 flex flex-row items-center justify-between">
                  <label className="mb-2">Email: </label>
                  <small className="text-red-500 text-sm mb-2">
                    {errors.email && touched.email && errors.email}
                  </small>
                </div>

                <input
                  name="email"
                  className="w-full h-10 border border-solid border-gray-200 rounded-md px-2 focus:border-indigo-500 focus:border-2 outline-none"
                  type="email"
                  placeholder="example@example.com"
                  onChange={handleChange}
                ></input>
              </div>

              <div className="w-full h-20 my-4 flex flex-col items-start justify-evenly">
                <div className="w-full h-6 flex flex-row items-center justify-between">
                  <label className="mb-2">Contraseña:</label>
                  <small className="text-red-500 text-sm mb-2">
                    {errors.password && touched.password && errors.password}
                  </small>
                </div>

                <input
                  name="password"
                  className="w-full h-10 border border-solid border-gray-200 rounded-md px-2 focus:border-indigo-500 focus:border-2 outline-none"
                  type="password"
                  placeholder=""
                  onChange={handleChange}
                ></input>
              </div>

              <div className="w-full h-16 my-4 flex flex-col items-center justify-center">
                <button
                  disabled={isSubmitting}
                  className="bg-indigo-600 text-white text-lg font-semibold px-16 py-2 rounded-md hover:bg-indigo-500 mb-4 hover:cursor-pointer"
                >
                  Crear usuario
                </button>
                
              </div>
              <div className="w-full flex flex-row items-center justify-center">
              <a className="text-sm text-indigo-500 hover:underline" href="#">
                  Ya tengo una cuenta 
                </a> 
                <span className="mx-6 font-bold text-xl text-indigo-600 ">&#183;</span>
                <a className="text-sm text-indigo-500 hover:underline" href="#">
                  Acerca de ONG somos más
                </a>
              
              </div>
             
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
