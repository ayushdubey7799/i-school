import axios from "axios"


export const updateSkill = async (skillId, data, accessToken) => {

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.put(`https://dev-api.intelliview.in/api/profiles/${skillId}/skill`, data, config);
        console.log('Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

