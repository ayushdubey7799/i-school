import axios from "axios"
import { toast } from "react-toastify"
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};


export const auth = async (password, email) => {
  const requestData = {
    password: password,
    username: email
  };

  try {
    const response = await axios.post('https://dev-api.intelliview.in/api/auth/login', requestData);
    console.log('Data:', response.data);
    return response.data;
  } catch (error) {
    toast.error("Bad Credentials");
    console.error('Error:', error);
  }
}