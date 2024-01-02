import axios from "axios"


export const addSkills = async (profileId, data, accessToken) => {

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.post(`https://dev-api.intelliview.in/api/profiles/${profileId}/skills`, data, config);
        console.log('Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

