import axios from "axios"

export const employerRegister = async (requestData) => {

    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/onboards/register',requestData);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}