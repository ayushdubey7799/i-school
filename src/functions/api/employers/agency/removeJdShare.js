import axios from "axios"


export const removeJdShare = async (jdId,payload, accessToken, clientCode) => {
  const requestData = {...payload};
const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'X-Client-Code': clientCode,
  },
  data: requestData
};
console.log(requestData);
    try {
        const response = await axios.delete(`https://dev-api.intelliview.in/api/jds/${jdId}/jdShares`,config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
}

