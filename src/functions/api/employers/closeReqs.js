import axios from "axios"


export const closeReq = async (reqId, closed, reqNumber, accessToken, clientCode) => {
   
    const payload = {
        closed: closed,
        id: reqId,
        reqNumber: reqNumber
    }
console.log("========pppp===>",payload);
const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'X-Client-Code': clientCode,
  }
};

    try {
        const response = await axios.put(`https://dev-api.intelliview.in/api/jds/${reqId}/reqNumbers/${reqNumber}`,payload,config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
}

