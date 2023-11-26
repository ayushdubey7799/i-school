import axios from "axios"
import { toast } from "react-toastify"


export const auth = async (password, email, clientcode='intelliview') => {
  const requestData = {
    password: password,
    username: email
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-client-code': clientcode
    }
  };
  console.log(requestData,config);

  try {
    const response = await axios.post('https://dev-api.intelliview.in/api/auth/login', requestData, config);
    console.log('Data:', response.data);
    return response.data;
  } catch (error) {

    // toast.error("Bad Credentials");
    console.error('Error:', error);
    return error;
  }
}