import React, {useState} from 'react'
import { apiConnectionWithoutToken } from '../../helpers/apiConnection'
import { useFormik } from 'formik'
import '../CKeditorNews/index.css'

export default ({obj = null}) => {
    const [error, setError] = useState(false)
    const submitData = async (data) => {
        const method = obj ? 'PATCH' : 'POST'
        setError(false)
        try{
            const newData = {
                name: data.name,
                description: data.description,
            }
            console.log(newData)
            const res = await apiConnectionWithoutToken(
                !obj ? '/categories/create' : `categories/update/`, 
                !obj ? newData : {id:obj.id, ...newData}, 
                method
            )
        }catch(e){
            console.log(e)
            setError(true)
        }
    }
    const validate = (values) => {
        const errors = {}
        if(!obj){
            if(!values.name)
                errors.name = 'El nombre es requerido'
            if(!values.description)
                errors.description = 'La descripcion es requerida'
        }
        return errors
    }

    const formik = useFormik({
        initialValues:{
            name: obj ? obj.name : '',
            description: obj ? obj.description : '',
        },
        onSubmit:submitData,
        validate
    })

  return (
    <div className="flex h-full justify-center items-center" style={{height: '100vh'}}>
        <form className='form__news' onSubmit={formik.handleSubmit} >
        <div className='container__input'>
                <label htmlFor="name">
                    Nombre
                </label>
                <input 
                    type="text" 
                    name='name' 
                    id='name' 
                    placeholder="Ingrese un Nombre" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.name}
                />
                <p className='text__error'>{formik.errors.name}</p>
            </div>
            <div className='container__input'>
                <label htmlFor="description">
                Descripcion
                </label>
                <input 
                    type="text" 
                    name='description' 
                    id='description' 
                    placeholder="Ingrese una Descripcion" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.description}
                />
                <p className='text__error'>{formik.errors.description}</p>
            </div>
            {error && <p className='text-center mt-10 text__error'>hubo un error</p>}
            <button className="submit save"type="submit">{obj ? 'Guardar' : 'Crear'}</button>
        </form>
    </div>
  )
}