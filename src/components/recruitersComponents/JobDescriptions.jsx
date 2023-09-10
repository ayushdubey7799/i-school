import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { getJds } from "../../functions/api/getJds";

const JobDescriptions = () => {
  const [JDsArray, setJDsArray] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await getJds();
      if (!res) {
       
        return;
      }

      setJDsArray(res.data);
      localStorage.setItem("jdData",JSON.stringify(res.data));
    }

    getData();
  }, []);
  console.log(JDsArray);
  return (
    <StyledJDs>
      <h3>Here are the list of JDs and no of interviewees for each of them</h3>
      {JDsArray.filter((item) => item != null).map((item) => (
        <div className="card">
          <Link to={`/employers/${item.jobSummaryHash}`}>
            <p>{item.jobSummary}</p>
          </Link>
        </div>
      ))}
    </StyledJDs>
  );
};

export default JobDescriptions;

const StyledJDs = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  font-size: 1rem;

  a {
    color: black;
    text-decoration: none;
  }

  .card {
    width: 100%;
    padding: 1rem;
    background-color: var(--white);
    border-radius: 1rem;
    margin: 1rem;
    border: 1px solid var(--lightOrange);
    // font-size: 1rem;
  }
`;
