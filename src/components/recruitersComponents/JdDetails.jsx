import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import { styled } from "styled-components";
import { getCandidatesScore } from "../../functions/api/getCandidatesScore";

const JdDetails = () => {
  const { jobSummary } = useParams();

 const [data,setData] = useState([]);

 useEffect(() => {
  async function getData(){
    const res = await getCandidatesScore(jobSummary);
    if(!res){
      return;
    }
    setData(res.data);
  }

  getData();
},[])
console.log(data);
  return (
    <StyledJdDetails>
      <div className="jd">
        <p>
          {jobSummary}
        </p>
      </div>
      <h3>List Of Interviewees attended this JD</h3>
      <div id="container">
        {
            data?.scoreList?.length !== 0 ? data?.scoreList?.map((item) => {
                return (
                    <div className="card">
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>Score: {item.score}/{item.maxScore}</p>
                  </div>
                )
            })
            :
            (
              <p>No Candidates yet</p>
            )
        }
      </div>
     
    </StyledJdDetails>
  );
};

export default JdDetails;

const StyledJdDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 2rem auto;
  align-items: center;
  #container{
    width: 100%;
  }
  .jd{
    width: 100%;
    // height: 5rem;
    padding: 1rem;
    background-color: var(--white);
    color: black;
    border-radius: 1rem;
    margin: 1rem;
    border: 1px solid var(--lightOrange);
   }

   .card{
    width: 60%;
    display: flex;
    margin: 1rem auto;
    justify-content: space-between;
    border-radius: 0.5rem;
    padding: 0 0.7rem;
    background-color: var(--white);
    color: black;
    border: 1px solid var(--lightOrange);
   }
`;
