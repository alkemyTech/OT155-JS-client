import React, { useState } from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { apiConnectionWithoutToken } from '../../helpers/apiConnection'
import { useFormik } from 'formik'
import { usePreviewImage } from '../../hooks/usePreviewImage'
import {FcOrganization} from 'react-icons/fc'
import './index.css'

export default ({obj = null}) => {
    const [content,setContent] = useState('')
    const [error,setError] = useState(false)
    const [image,preview,handleFile] = usePreviewImage(obj ? obj.imageUrl : '')

    const submitData = async (data) => {
        const method = obj ? 'PATCH' : 'POST'
        let imageUrl = 'sdfsafd'
        try{
            if(image) {
                imageUrl = await apiConnectionWithoutToken('/s3',image,'POST')
            }
    
            const newData =
            {
                title: data.title,
                imageUrl,
                content,
                categoryId:'1',
            }
            console.log(newData)
            const res = await apiConnectionWithoutToken(!obj ? '/entries/news/' : `entries/news/${obj.id}`,newData, method)
        }catch(e){
            console.log(e)
        }
    }
    const validate = (values) => {
        const errors = {}
        if(!obj){
            if(!values.title)
                errors.title = 'Titulo requerido'
            if(!content)
                errors.content = 'El contenido es requerido'
            if(!image)
                errors.image = 'la imagen es requerida'
        }
        return errors
    }

    const formik = useFormik({
        initialValues:{
            title: obj ? obj.title : ''
        },
        onSubmit:submitData,
        validate
    })

  return (
    <div className="flex h-full justify-center items-center" style={{height: '100vh'}}>
        <form className='form__news' onSubmit={formik.handleSubmit} >
            <div className="flex Logo">
                <div className="preview">
                    <label htmlFor='logo'>
                        {preview ? 
                            <img src={preview}/>  :  
                            <FcOrganization className='wh__svg' style={{cursor: 'pointer'}}/> 
                        }
                    </label>
                    <input 
                        id='logo'
                        name='logo'
                        type="file" 							
                        accept='image/*'
                        onChange={handleFile}
                        style={{display:'none'}}
                    />
                </div>
                <p>Imagen</p>
            </div>
            <div className='container__input'>
                <label htmlFor="title">
                    TItulo
                </label>
                <input 
                    type="text" 
                    name='title' 
                    id='title' 
                    placeholder="Ingrese un Titulo" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.title}
                />
                <p className='text__error'>{formik.errors.title}</p>
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