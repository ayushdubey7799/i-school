import React,{useState} from 'react'
import { styled } from 'styled-components'
import { createInterview } from '../../../functions/api/createInterview';
import { updateStatus } from '../../../functions/api/updateStatus';
import { useNavigate } from 'react-router';
import Loader from "../../commonComponents/Loader";


const SkillInterview = () => {
    const [interviewDetails, setInterviewDetails] = useState({
        skills: "",
        experience: "",
        difficulty: "",
        interviewType: ""
      });

      const [ isLoading,setIsLoading] = useState(false);
      const [loaderMessage, setLoaderMessage] = useState("");

   const navigate = useNavigate();

    const handleInputChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        console.log(name, val);
        switch (name) {
          case 'skill':
            setInterviewDetails({ ...interviewDetails, skills: val })
            break;
          case 'experience':
            setInterviewDetails({ ...interviewDetails, experience: val })
            break;
          case 'difficulty':
            setInterviewDetails({ ...interviewDetails, difficulty: val })
            break;
          case 'interviewType':
                setInterviewDetails({ ...interviewDetails, interviewType: val })
                break;
          default:
            console.log('Hello there!');
        }
        console.log(interviewDetails)
      }

      const handleCreateInterview = async (e) => {
        e.preventDefault();
        setLoaderMessage("Creating Interview");
        setIsLoading(true);
        const ongoing = await createInterview(interviewDetails.skills, `Experience:- ${interviewDetails.experience}`)
        console.log(ongoing);
        if (ongoing?.data?.id) {
          console.log("data");
          const statusResponse = await updateStatus(ongoing.data.id, "started");
          console.log(statusResponse);
          setIsLoading(false);
          if (statusResponse?.status == "SUCCESS") navigate(`/ongoing-interview/${ongoing.data.id}`);
        }
      }
    

  return (
    <div>
         {isLoading ? (
        <Loader message={loaderMessage} />
      ) : (
        <StyledSkillForm>
        <div>
            <label htmlFor="skill">Skills:</label>
            <br/>
            <input type="text" id="skill" name="skill" onChange={handleInputChange} required />
        </div>

        <div>
            <label htmlFor="experience">Experience (in years):</label>
            <br/>
            <input type="text" id="experience" name="experience" onChange={handleInputChange} required />
        </div>

        <div>
            <label htmlFor="difficulty">Difficulty Level:</label>
            <br/>
            <select id="difficulty" name="difficulty" onChange={handleInputChange}>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
            </select>
        </div>

        <div>
            <label htmlFor="interviewType">Type of Interview:</label>
            <br/>
            <select id="interviewType" name="interviewType" onChange={handleInputChange}>
                <option value="mcq">MCQ</option>
                <option value="questionnaire">Questionnaire</option>
                <option value="descriptive">Descriptive</option>
            </select>
        </div>

        <button onClick={handleCreateInterview}>Start Interview</button>
    </StyledSkillForm>
      )
}
    </div>
       
  )
}

export default SkillInterview


const StyledSkillForm = styled.form`display: flex;
flex-direction: column;
gap: 3.5rem;
margin-top: 3rem;

label{
  font-size: 1.5rem;
  font-weight: bold;
}

input, select{
  width: 30%;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem 0.5rem;
  font-size: 1.3rem;
  height: 3rem;
  padding: 0.5rem 0.5rem;
  option{
    height: 100rem;
  }
}

input{
    width: 98.5%;
    font-size: 1.5rem;
}


button{
  background-color: #ADD8E6;
  color: rgb(128,128,128);
  height: 4rem;
  border-radius: 0.4rem;
  width: 100%;
  font-size: 1.5rem;
}`
  

   