import axios from "axios"


export const editJd = async (formData, accessToken, clientCode) => {

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'X-Client-Code': clientCode,
  }
};
  const requestData = {...formData};

    try {
        const response = await axios.put(`https://dev-api.intelliview.in/api/jds/${requestData.id}`,requestData,config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}

