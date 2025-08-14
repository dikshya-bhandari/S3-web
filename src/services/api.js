import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getSignedUrl = async ({ fileName, fileType, folder }) => {
  try {
    const response = await axios.post(`${API_URL}/api/upload-url`, {
      fileName,
      fileType,
      folder,
    });
    return response.data;
  } catch (error) {
    console.log('Error while calling the api', error.message);
    return error.response.data;
  }
};
