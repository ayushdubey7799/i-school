import React, { useEffect,useState } from "react";
import { getJDs } from "../../functions/getData";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const JobDescriptions = () => {
  const [JDsArray,setJDsArray] = useState([]);
   
  useEffect(() => {
    async function getData(){
      const res = await getJDs();
      if(!res){
        return;
      }
      setJDsArray(res);
    }

    getData();
  },[])

  return (
    <StyledJDs>
      <h3>Here are the list of JDs and no of interviewees for each of them</h3>
      {
        JDsArray.map((item) =>  <div className="card">
          <Link to={`/employers/${item.JD}`}>
        <p>
         {item.JD}
        </p>
        </Link>
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
   
   a{
    color: black;
    text-decoration: none;
   }
    
   .card{
    width: 100%;
    height: 5rem;
    padding: 1rem;
    background-color: var(--white);
    border-radius: 1rem;
    margin: 1rem;
    border: 1px solid var(--lightOrange);
   }
`
