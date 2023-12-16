import axios from "axios"


export const deleteEmployee = async (empId, accessToken, clientCode) => {

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'X-Client-Code': clientCode,
        }
    };

    try {
        const response = await axios.delete(`https://dev-api.intelliview.in/api/employers/employees/${empId}`, config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

