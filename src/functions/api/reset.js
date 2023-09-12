import axios from "axios"
import {toast} from "react-toastify"


export const reset = async (confirm,password,email,token) => {

    const requestData = {
    cnfpwd: confirm,
    email,
    pwd:password,
    token
    };

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

 console.log(requestData)
    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/auth/resetpwd',requestData,config);
        console.log('Data:', response.data);
        toast.success(response.message);
        return response.data;
      } catch (error) {
        toast.error(error.message);
        console.error('Error:', error);
      }
}