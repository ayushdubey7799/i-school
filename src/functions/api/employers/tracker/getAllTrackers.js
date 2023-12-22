import axios from "axios";

export const getAllTrackers = async (jdId,
    accessToken,
    page = 1,
    size = 1000,
    trackerStatus
) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    };


    try {
        const response = await axios.get(
            `https://dev-api.intelliview.in/api/interviews/trackers?jdId=${jdId}&page=${page}&size=${size}&trackerStatus=${trackerStatus}`,
            config
        );
        console.log("Data:", response.data);
        console.log("Status:", response.status);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
};
