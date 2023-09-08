
import axios from "axios";




export const getCandidatesScore = async (jobSummary) => {
 

    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/interviews/employers/candidateScores?jobSummary=${jobSummary}`);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}



 