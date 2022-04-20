import React, {useState} from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { apiConnectionWithoutToken } from '../../helpers/apiConnection'
import { useFormik } from 'formik'
import '../CKeditorNew/index.css'

export default ({obj = null}) => {
    const [content, setContent] = useState('')
    const [error, setError] = useState(false)
    const submitData = async (data) => {
        const method = obj ? 'PATCH' : 'POST'
        setError(false)
        try{
            const newData = {
                name: data.name,
                content,
            }
            console.log(newData)
            const res = await apiConnectionWithoutToken(
                !obj ? '/activities/activities' : `activities/update-activity/`, 
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
            if(!content)
                errors.content = 'El contenido es requerido'
        }
        return errors
    }

    const formik = useFormik({
        initialValues:{
            name: obj ? obj.name : ''
        },
        onSubmit:submitData,
        validate
    })

  return (
    <div className="flex h-full justify-center items-center" style={{height: '100vh'}}>
        <form className='form__news' onSubmit={formik.handleSubmit} >
            <div className='container__input'>
                <label htmlFor="name">``
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
            <div className="content">
                <CKEditor
                    editor={ ClassicEditor }
                    data={obj ? obj.content : ''}
                    onChange={(event, editor) => 
                        setContent(editor.getData())
                    }
                    className="content"
                />
                <p className='text__error'>{formik.errors.content}</p>
            </div>
            {error && <p className='text-center mt-10 text__error'>hubo un error</p>}
            <button className="submit save"type="submit">{obj ? 'Guardar' : 'Crear'}</button>
        </form>
    </div>
  )
}