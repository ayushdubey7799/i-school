import axios from "axios"

export const register = async (email,firstName,password) => {
  const requestData = {
    email,
    firstName,
    password
  };

    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/signup',requestData);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}