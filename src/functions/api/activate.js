import axios from "axios";


export const activate = async (id) => {

    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/auth/activate/${id}`);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}

// https://dev-api.intelliview.in/api/auth/activate/237274f9-ce42-4429-bbba-26672effb5f1
