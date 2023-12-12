import { AuthenticationConstants } from "../utils/constants";
import api from "./apiGlobalConfig";





export const auth = async (password, email, clientcode=AuthenticationConstants.jobseekerDefaultClientCode) => {
    const requestData = {
      password: password,
      username: email
    };
  
    const config = {
      headers: {
        'x-client-code': clientcode
      }
    };
    console.log(requestData,config);
  
    try {
      const response = await api.post('/auth/login', requestData, config);
      console.log('Data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return error;
    }
  }








export const activate = async (accessToken,clientCode = 'Intelliview') => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-client-code': clientCode
    }
  }

    try {
        const response = await api.get(`/auth/activate/${accessToken}`,config);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}