import axios from "axios"


export const editEmployerDetails = async (payload, accessToken, clientCode) => {

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'X-Client-Code': clientCode,
        }
    };

    try {
        const { clientCode: payloadClientCode, createdAt: payloadCreatedAt, updatedAt: payloadUpdatedAt, ...payloadData } = payload;

        const requestData = {
            clientCode: clientCode,
            data: payloadData,
        };

        const response = await axios.patch(`https://dev-api.intelliview.in/api/employers/${clientCode}`, requestData, config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

