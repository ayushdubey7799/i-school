import axios from "axios"


export const updateCertification = async (certificationId, formdata, accessToken) => {

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.put(`https://dev-api.intelliview.in/api/profiles/${certificationId}/certification`, formdata, config);
        console.log('Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

