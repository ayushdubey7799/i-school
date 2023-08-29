import axios from "axios"

const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  

export const auth = async (password,email) => {
  const requestData = {
   password: password,
   username: email
  };

    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/auth/login',requestData);
        console.log('Data:', response.data);
        return response.data.data.accessToken;
      } catch (error) {
        console.error('Error:', error);
      }
}