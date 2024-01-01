import axios from "axios"


export const addEmployments = async (profileId, data, accessToken) => {

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.post(`https://dev-api.intelliview.in/api/profiles/${profileId}/employments`, data, config);
        console.log('Data:', response.data);
        return response.data;
    } catch (error) {
        toast.error(error.message);
        console.error('Error:', error);
    }
}

