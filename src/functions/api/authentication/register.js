import axios from "axios"

export const register = async (email,firstName,password) => {
  let token = localStorage.getItem("token");
  let key = localStorage.getItem("key")
  const requestData = {
    email,
    firstName,
    password
  };

  if(token)requestData.token = token;
  
  console.log(requestData);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-client-code': 'intelliview'
    }
  };

    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/signup',requestData,config);
        console.log('Data:', response.data);
        if(key == 'interview'){
          localStorage.removeItem("token");
          localStorage.removeItem("key");
        }
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}