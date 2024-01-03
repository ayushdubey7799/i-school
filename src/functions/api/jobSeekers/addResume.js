import axios from "axios"


export const addResume = async (profileId, formdata, accessToken) => {

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        }
    };

    try {
        const response = await axios.post(`https://dev-api.intelliview.in/api/profiles/${profileId}/resumes`, formdata, config);
        console.log('Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

