import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { getJds } from "../functions/api/employers/getJds";
import Loader from "../components/commonComponents/Loader";
import { useSelector } from "react-redux";

const JobDescriptions = () => {
    const [JDsArray, setJDsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const accessToken = useSelector(state => state);
    console.log("token",accessToken)

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const res = await getJds();
            if (!res) {

                return;
            }

            setIsLoading(false);
            setJDsArray(res.data);
            localStorage.setItem("jdData", JSON.stringify(res.data));
        }

        getData();
    }, []);
    console.log(JDsArray);
    return (
        <StyledJDs>
            {
                isLoading ? <Loader message='Fetching JDs... please wait' /> : <>

                    <h3>Here are the list of JDs and no of interviewees for each of them</h3>
                    {JDsArray.filter((item) => item != null).map((item) => (
                        <div className="card">
                            <Link to={`/employers/${item.jobSummaryHash}`}>
                                <p>{item.jobSummary}</p>
                            </Link>
                        </div>
                    ))}
                </>
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
    transition: transform 0.3s;
    transform-origin: center bottom;
    transform: scale(1);
    // cursor: pointer;
  }

  .card:hover {
    transform: scale(1.005);
    box-shadow: 0px 0px 0.4rem rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;
