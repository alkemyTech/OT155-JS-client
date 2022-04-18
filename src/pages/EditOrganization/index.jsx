import React, { useState } from 'react'
import { useFormik } from 'formik'
import { apiConnectionWithoutToken } from '../../helpers/apiConnection'
import { useNavigate } from 'react-router-dom'
import {FcOrganization} from 'react-icons/fc'
import './index.css'


const EditOrganization = ({id}) => {
	const [image,setImage] = useState(null)
	const [preview,setPreview] = useState(null)
	const navigate = useNavigate()

	const hangleFile = file => {
		const dataFile = file.currentTarget.files[0]
		const files = new FileReader()
		files.readAsDataURL(dataFile)
		files.onload = () => {
			setPreview(files.result)
		}
		setImage(dataFile)
	}

	const validateInput = (values) => {
		let errors = {}
		if(!values.name && !image){
			errors.name = 'Ingrese un nombre o una imagen'
		}
		return errors
	}

	const submitEdit = async values => {
		let imageUrl = ''
		if(image){
			const data = apiConnectionWithoutToken('/s3',image)
			imageUrl = data.imageUrl
		}
		const data = await apiConnectionWithoutToken(`/organization/${id}`, {
			name:values.name,
			image:imageUrl
		},'PUT')

		if(data) 
			navigate('/organization')
	}
	const formik = useFormik({
		initialValues:{
			name:'',
		},
		onSubmit:submitEdit,
		validate:validateInput,
	}
	)
	

	return (
		<div className="container__form flex justify-center">
			<form  onSubmit={formik.handleSubmit} className='form flex flex-col'>
				<div className="flex Logo">
					<div className='preview'>
						<label htmlFor='logo'>
							{preview ? <img src={preview}/> : <FcOrganization className='wh__svg'/>}
						</label>
						<input 
							id='logo' 
							name='logo' 
							placeholder='Logo' 
							type="file"
							accept='image/*'
							onChange={hangleFile}
							style={{display:'none'}}
						/>
					</div>
					<p>Cambiar Logo</p>
				</div>
				<div className="container__input flex flex-col">
					<label htmlFor="Name">Nombre</label>
					<input 
						id='name' 
						name='name' 
						placeholder='Name' 
						type="text"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
				</div>
				<div>
					<button type="submit" className='buttonSave save'>Guardar</button>
					<button type="submit" className='buttonSave cancel' onClick={() => navigate('/')}>Cancelar</button>
				</div>
			</form>
		</div>
  )
}

export default EditOrganization