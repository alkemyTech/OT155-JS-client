import React, {useState} from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { apiConnectionWithoutToken, apiConnectionWithToken } from '../../helpers/apiConnection'
import { useFormik } from 'formik'
import '../CKeditorNews/index.css'
import { useNavigate,useParams } from 'react-router-dom'

export default () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [obj,setObj] = useState(null)
    const [content, setContent] = useState('')
    const [error, setError] = useState(false)
    const getActivities = async () => {
        try{
            const res = await apiConnectionWithToken('/activities/' + id)
            setObj(res.data.activity)
        }catch{

        }
    }
    React.useEffect(() => {
        id && getActivities()
    },[])
    const submitData = async (data) => {
        const method = obj ? 'PUT' : 'POST'
        setError(false)
        try{
            const newData = {
                name: data.name || obj.name ,
                image:'url',
                content,
            }
            const res = await apiConnectionWithToken(
                !obj ? '/activities/' : `activities/`, 
                !obj ? newData : {id:`${obj.id}`, ...newData}, 
                method
            )
            if(res.statusText == 'OK') navigate('/backoffice/activities')
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
                    value={formik.values.name || (obj &&obj.name )}
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