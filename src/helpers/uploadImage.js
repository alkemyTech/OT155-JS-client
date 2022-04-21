import instance from '../api/config/axios';

export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('file', image.name);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  try {
    const response = await instance.post('/upload', formData, config);
    return response.data.Location;
  } catch (error) {
    console.log(error);
  }
};
