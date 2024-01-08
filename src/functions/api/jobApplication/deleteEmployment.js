import axios from "axios"


export const deleteEmployment = async (profileId, id, accessToken) => {

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        }
    };

    try {
        const response = await axios.delete(`https://dev-api.intelliview.in/api/profiles/${profileId}/employments/${id}`, config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

