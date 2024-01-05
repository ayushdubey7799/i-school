import axios from "axios";

export const removeMapping = async (
    mappingId,
  accessToken,
  clientCode
  ) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      'x-client-code': clientCode
    },
  };

  try {
    const response = await axios.delete(
      `https://dev-api.intelliview.in/api/employers/agencyMappings/${mappingId}`,
      config
    );
    console.log("Data3:", response.data);
    console.log("Status3:", response.status);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
