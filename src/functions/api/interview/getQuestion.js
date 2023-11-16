import axios from "axios";



export const getQuestion = async (id,accessToken) => {

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
};

    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/interviews/${id}/questions`,config);
        console.log('Data:', response.data);
        console.log('Status:', response.status);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}


