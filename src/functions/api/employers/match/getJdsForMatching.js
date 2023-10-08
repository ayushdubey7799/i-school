import axios from "axios";
export const getJdsForMatching = async (
  accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3N2I4YTc3Yy05N2YwLTRlNTMtYTMyYS1iOTQ2MDAzZmIzMzciLCJncmFudHMiOiJST0xFX0NMSUVOVF9BRE1JTiIsImNvZGUiOiJCUkFKMDEiLCJpYXQiOjE2OTY1MTUwMzUsImV4cCI6MTY5NzExOTgzNX0.Gy9WvYRvOehK2fplCCRhzZsNihFGy0jj5Rys4xGodAnTVmJf2zfkMPA6B82RcV82UJEBiIcicRa0RQh3uplFvw"
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      'x-client-code': 'BRAJ01',
      "Access-Control-Allow-Origin": '*'
    },
  };

  try {
    const response = await axios.get(
      `https://dev-api.intelliview.in/api/jds?page=1&size=10`,
      config
    );
    console.log("Data:", response.data);
    console.log("Status:", response.status);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
