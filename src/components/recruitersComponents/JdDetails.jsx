import React from "react";
import { styled } from "styled-components";

const JdDetails = () => {
  let data = [
    { name: "John Doe", score: 85, maxScore: 100 },
    { name: "Alice Smith", score: 92, maxScore: 100 },
    { name: "Bob Johnson", score: 78, maxScore: 100 },
    { name: "Eva Brown", score: 94, maxScore: 100 },
    { name: "Michael Clark", score: 89, maxScore: 100 },
    { name: "Sarah White", score: 75, maxScore: 100 },
  ];

  return (
    <StyledJdDetails>
      <div className="jd">
        <p>
          Software Engineer with experience in web development. Strong knowledge
          of JavaScript, HTML, CSS, and React. Responsible for designing and
          implementing new features and optimizing existing code.
        </p>
        <p>No of interviewees :- 6</p>
      </div>
      <h3>List Of Interviewees attended this JD</h3>
      <div id="container">
        {
            data.map((item) => {
                return (
                    <div className="card">
                    <p>{item.name}</p>
                    <p>Score: {item.score}/{item.maxScore}</p>
                  </div>
                )
            })
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
  font-weight: bold;
  align-items: center;
  #container{
    width: 100%;
  }
  .jd{
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

   .card{
    width: 40%;
    display: flex;
    margin: 1rem auto;
    // height: 1.5rem;
    justify-content: space-between;
    border-radius: 0.5rem;
    padding: 0 0.7rem;
    background-color: var(--lightOrange);
    color: white;
   }
`;
