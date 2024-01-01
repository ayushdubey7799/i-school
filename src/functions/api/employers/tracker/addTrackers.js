import axios from "axios"


export const addTrackers = async (payload, accessToken, clientCode) => {

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'X-Client-Code': clientCode,
        }
    };

    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/interviews/addTrackers', payload, config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
