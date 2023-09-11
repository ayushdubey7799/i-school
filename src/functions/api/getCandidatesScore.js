
import axios from "axios";




export const getCandidatesScore = async (jobSummary) => {
 

    try {
        const response = await axios.post(`https://dev-api.intelliview.in/api/interviews/employers/candidateScores`,{jobSummaryHash:jobSummary});
        //const response = await axios.post(`http://localhost:7000/api/interviews/employers/candidateScores`,{jobSummaryHash:jobSummary});
       
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}



 