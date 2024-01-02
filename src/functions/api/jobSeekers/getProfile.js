import axios from "axios";


export const getProfile = async (profileId, accessToken) => {

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/profiles/${profileId}`, config);
        console.log('Data:', response.data);
        return response.data;
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}

