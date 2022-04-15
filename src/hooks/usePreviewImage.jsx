import { useState } from "react"
export const usePreviewImage = (prev) => {
    const [image,setImage] = useState(null)
	const [preview,setPreview] = useState(prev || '')

	const handleFile = file => {
		const dataFile = file.currentTarget.files[0]
		const files = new FileReader()
		files.readAsDataURL(dataFile)
		files.onload = () => {
			setPreview(files.result)
		}
		setImage(dataFile)
	}
    return  [image,preview,handleFile]
}