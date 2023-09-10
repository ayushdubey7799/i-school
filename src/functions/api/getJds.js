import axios from "axios";




export const getJds = async () => {
 

    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/interviews/employers/jds`);
       // const response = await axios.get(`http://localhost:7000/api/interviews/employers/jds`);
       
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}



 