import axios from "axios";

const API_URL = "http://localhost:8000";

export const getSignedUrl = async () => {
  try {
    const response = await axios.get(`${API_URL}/image-url`);
    return response.data;
  } catch (error) {
    console.log("Error while calling the api", error.message);
    return error.response.data;
  }
};
