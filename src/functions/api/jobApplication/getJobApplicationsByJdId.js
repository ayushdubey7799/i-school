import axios from "axios"


export const getJobApplicationsByJdId = async (jdId, accessToken, clientCode, page = 1, size = 1000) => {

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        }
    };

    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/jds/${jdId}/jobApplications?clientCode=${clientCode}&page=${page}&size=${size}`, config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}



