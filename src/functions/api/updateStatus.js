import axios from "axios"

const token = JSON.parse(localStorage.getItem("token"));


const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};


export const updateStatus = async (id,data) => {
    const requestData = {
        data,
        op: "statusUpdate",
        extra: "enforceSecLimit"
      };
 console.log(token);
    try {
        const response = await axios.patch(`https://dev-api.intelliview.in/api/interviews/${id}`,requestData,config);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}
