import axios from "axios";



export const getQuestion = async (id) => {
  const token = JSON.parse(localStorage.getItem("token"));

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
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


