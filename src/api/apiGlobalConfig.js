import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import setAuthHeaders from '../utils/apiHeaders.js/setAuthHeaders';


const api = axios.create({
    baseURL: process.env.INTELLIVIEW_BASE_URL
})


api.interceptors.request.use((config) => {
    const accessToken = useSelector(state => state?.auth?.userData?.accessToken);
    const clientCode = useSelector(state => state?.auth?.userData?.user?.clientCode);
    const { method, url, params, data } = config;

    const urlSegments = config.url.split('/');
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'X-Client-Code': clientCode,
    };

    if(urlSegments[1] == 'auth'){
        config = setAuthHeaders(config,urlSegments,data)
    }

   

    return config; 
  }, (error) => {
    return Promise.reject(error);
  });
  

  export default api;