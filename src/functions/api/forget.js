import axios from "axios";
import { toast } from "react-toastify";



export const forgetPassword = async (email) => {

  

    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/auth/forgetpwd?email=${email}`);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        toast.error("a");
        console.error('Error:', error);
      }
}


