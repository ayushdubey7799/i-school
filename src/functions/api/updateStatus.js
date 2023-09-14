import axios from "axios"




export const updateStatus = async (id, data, accessToken) => {

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  };

  const requestData = {
    data,
    op: "statusUpdate",
    // extra: "enforceSecLimit"
  };


  try {
    const response = await axios.patch(`https://dev-api.intelliview.in/api/interviews/${id}`, requestData, config);
    console.log('Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}

