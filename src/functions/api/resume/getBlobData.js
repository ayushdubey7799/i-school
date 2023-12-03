import axios from "axios";
import { createBlobUrl } from "../../../components/commonComponents/Resume";

export const getBlobData = async (
  url,
  accessToken,
  clientCode
) => {
  const config = {
    responseType: 'blob',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/octet-stream",
      "X-Client-Code": clientCode,
    }
  };
  console.log('=======>',url)
  try {
    const response =
      await axios.get(`https://dev-api.intelliview.in/${url}`,config);
    
    console.log("Data:", response);

    return createBlobUrl(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
