import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};

export const getQuestion = async (id) => {
    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/interviews/${id}/questions`,config);
        console.log('Data:', response.data);
        console.log('Status:', response.status);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}


