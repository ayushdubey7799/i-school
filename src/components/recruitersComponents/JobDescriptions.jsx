import React from "react";
import { getJDs } from "../../functions/getData";
import { styled } from "styled-components";

const JobDescriptions = () => {
  let JDsArray = getJDs();

  return (
    <StyledJDs>
      <h3>Here are the list of JDs and no of interviewees for each of them</h3>
      {
        JDsArray.map((item) =>  <div className="card">
        <p>
         {item.JD}
        </p>
        <p>No of interviewees :- {item.no_of_interviewees}</p>
        </div>)
      }
     
    </StyledJDs>
  );
};

export default JobDescriptions;

const StyledJDs = styled.div`
   width: 80%;
   display: flex;
   flex-direction: column;
   margin: 2rem auto;
  
   .card{
    width: 100%;
    height: 5rem;
    padding: 1rem;
    background-color: var(--lightOrange);
    color: white;
    border-radius: 1rem;
    font-weight: bold;
    margin: 1rem;
    p{
        margin: 0.5rem;
    }
   }
`
