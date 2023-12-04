import axios from "axios"


export const exportJd = async (ext='.pdf', accessToken, clientCode) => {

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'X-Client-Code': clientCode,
  }
};
  const payload = {
    
    all: true,
    ext,
    jdIds: []
  };

    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/jds/exportAll',payload,config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
}

