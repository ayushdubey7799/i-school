import axios from "axios"

export const register = async (email,firstName,password,clientcode="intelliview") => {
  const requestData = {
    email,
    firstName,
    password
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-client-code': 'intelliview'
    }
  };

    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/signup',requestData,config);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}