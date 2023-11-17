import axios from "axios";



export const bulkUpload = async (formdata,accessToken,clientCode) => {


const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'x-client-code': clientCode,
    'Content-Type': 'multipart/form-data'
  }
};

    try {
        const response = await axios.post(`https://dev-api.intelliview.in/api/candidates/bulkUpload`,formdata,config);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      } 
}

// ?dto={"id":"q34234"}

