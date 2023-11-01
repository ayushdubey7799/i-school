import React, { useEffect, useState } from "react";
import { statusMatch } from "../../../../functions/api/employers/match/statusMatch";
import { triggerMatch } from "../../../../functions/api/employers/match/triggerMatch";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import refresh from '../../../../assets/icons/refresh.png'
import retry from '../../../../assets/icons/retry.png'
import warning from '../../../../assets/icons/warning.png'
import styled from "styled-components";


const Match = ({ jdId, count }) => {
  const [match, setMatch] = useState("Getting_Info");
  const [trigger, setTrigger] = useState(false);
  const accessToken = useSelector(state => state.auth.userData.accessToken);
  const clientCode = useSelector(state => state.auth.userData.user.clientCode);
  const navigate = useNavigate();

  const handleTrigger = async () => {
    const res = await triggerMatch(jdId, accessToken, clientCode);
    if (res?.data[0]) {
      console.log(res.data[0]);
      setTrigger((prev) => !prev);
    }
  };

  useEffect(() => {

    if (!accessToken || !clientCode) {
      toast.error("Login First");
      navigate("/login");
    }

    const getStatus = async () => {
      const res = await statusMatch(jdId, accessToken, clientCode);

      if (res) {
        if (res?.data.length == 1) {
          setMatch(res.data[0]);
        } else {
          setMatch("NTY");
        }
      } else {
        setMatch(" ");
      }

      return res;
    };

    let id;
    getStatus().then(res => {
      console.log(res?.data);
      if (res?.data?.length > 0 && res?.data[0]?.status == "RUNNING") {
        console.log("Working");
        id = setTimeout(() => setTrigger(prev => !prev), 5000);
      }

    });


    return () => {
      if (id) clearTimeout(id)
    };
  }, [trigger]);
  return (
    <Option match={match} handleTrigger={handleTrigger} />
  );
};

export default Match;

const Option = ({ match, handleTrigger }) => {
  console.log(match.jdId, match.status);


  return (
    <div>
      {match === "NTY" && (
        <Button onClick={handleTrigger}><img src={refresh} /></Button>
      )}
      {match.status === "FAILED" && match.matchedCount == 0 && (
        <Button onClick={handleTrigger}><img src={warning} /> <img src={retry} /></Button>
      )}
      {match.status === "FAILED" && match.matchedCount != 0 && (
        <Button onClick={handleTrigger}>{match.matchedCount} <img src={refresh} /></Button>
      )}
      {match.status === "SUCCESS" && (
        <Button onClick={handleTrigger}>
          {match.matchedCount} <img src={refresh} />
        </Button>
      )}
      {match.status === "RUNNING" && <Button><span class="loader"></span></Button>}
    </div>
  );
};


const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
align-self: center;
gap: 1rem;
font-size: 1rem;


img {
  width: 1.2rem;
  cursor: pointer;
}

.loader {
  width: 1.3rem;
  height: 1.3rem;
  border: 2px solid #000;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
`

