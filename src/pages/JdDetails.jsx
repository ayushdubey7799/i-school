import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { styled } from "styled-components";
import { getCandidatesScore } from "../functions/api/employers/getCandidatesScore";
import Loader from "../components/commonComponents/Loader";

const JdDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { jobSummaryHash } = useParams();
    const [data, setData] = useState([]);
    const [jobSummary, setJobSummary] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const jdDataStr = localStorage.getItem("jdData");

        if (jdDataStr) {
            let jdData = JSON.parse(jdDataStr);
            let jobSummary = jdData.find(e => e.jobSummaryHash == jobSummaryHash).jobSummary;
            setJobSummary(jobSummary);
        }
        async function getData() {

            setIsLoading(true);
            const res = await getCandidatesScore(jobSummaryHash);
            console.log("Working")
            if (!res) {
                navigate("/employers/jds");
                return;
            }

            setIsLoading(false);
            setData(res.data);
        }
        getData();
    }, [])

    console.log(data);
    return (
        <StyledJdDetails>

            {
                isLoading ? <Loader message="Fetching JD's details... please wait" /> : <>

                    <div className="jd">
                        <p>
                            {jobSummary}
                        </p>
                    </div>
                    <h3>List Of Interviewees attended this JD</h3>
                    <div id="container">
                        {
                            data?.scoreList?.length !== 0 ? data?.scoreList?.sort((a, b) => b.score - a.score).map((item) => {
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
                </>
            }


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
    transition: transform 0.3s;
    transform-origin: center bottom;
    transform: scale(1);
    cursor: pointer;
   }


   .card:hover {
    transform: scale(1.005);
    box-shadow: 0px 0px 0.4rem rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;
