import axios from "axios";



export const submitAnswerWithFile = async (formdata,id,lastQuestion,interviewId,accessToken) => {


const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'multipart/form-data'
  }
};

    try {
        let payload = '{"id":' + id + ',"lastQuestion": '+ lastQuestion + '}'

        // let payloadStr = JSON.stringify(payload);

        const response = await axios.post(`https://dev-api.intelliview.in/api/interviews/${interviewId}/answers`,formdata,config);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      } 
}

// ?dto={"id":"q34234"}

