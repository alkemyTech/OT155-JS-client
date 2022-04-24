import React, {useState,useEffect} from 'react'
import { apiConnectionWithoutToken } from '../../helpers/apiConnection'
import { useFormik } from 'formik'
import {useParams, useNavigate} from 'react-router-dom'
import '../CKeditorNews/index.css'

export default () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [obj,setObj] = useState(null)
    const [error, setError] = useState(false)
    const getCategory = async () => {
        try{
            const res = await apiConnectionWithoutToken('/categories/' + id)
            console.log(res)
            setObj(res.data.new)
            setError(false)
        }catch{
            setError(true)
        }
    }
    useEffect(() => {
        id && getCategory()
    },[])

    const submitData = async (data) => {
        const method = obj ? 'PUT' : 'POST'
        setError(false)
        try{
            const newData = {
                id,
                name: data.name || obj.name,
                description: data.description || obj.description,
            }
            const res = await apiConnectionWithoutToken(
                !obj ? '/categories/' : `categories/` + id, 
                newData,
                method
            )
            if(res.data) navigate('/backoffice/categories')
            setError(false)
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
                    value={formik.values.name || (obj && obj.name)}
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
                    value={formik.values.description || (obj && obj.description)}
                />
                <p className='text__error'>{formik.errors.description}</p>
            </div>
            {error && <p className='text-center mt-10 text__error'>hubo un error</p>}
            <button className="submit save"type="submit">{obj ? 'Guardar' : 'Crear'}</button>
        </form>
    </div>
  )
}