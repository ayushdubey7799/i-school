import React, { useEffect, useState } from "react";
import { statusMatch } from "../../../../functions/api/employers/match/statusMatch";
import { triggerMatch } from "../../../../functions/api/employers/match/triggerMatch";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const Match = ({ jdId, count }) => {
  const [match, setMatch] = useState("Getting_Info");
  const [trigger, setTrigger] = useState(false);
  const accessToken = useSelector(state => state.auth.userData.accessToken);
  const clientCode = useSelector(state => state.auth.userData.user.clientCode);
 const navigate = useNavigate();

  const handleTrigger = async () => {
    const res = await triggerMatch(jdId,accessToken,clientCode);
    if (res?.data[0]) {
        console.log(res.data[0]);
      setTrigger((prev) => !prev);
    }
  };

  useEffect(() => {

   if(!accessToken || !clientCode){
    toast.error("Login First");
    navigate("/login");
   }

    const getStatus = async () => {
      const res = await statusMatch(jdId,accessToken,clientCode);
     
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
        if(res?.data?.length>0 && res?.data[0]?.status == "RUNNING"){
            console.log("Working");
            id = setTimeout(() => setTrigger(prev => !prev),5000);
        }
    
    });

    
    return () => {
        if(id)clearTimeout(id)
    };
  }, [trigger]);
  return (
    <Option match={match} handleTrigger={handleTrigger} />
  );
};

export default Match;

const Option = ({ match, handleTrigger }) => {
    console.log(match.jdId,match.status);
  

  return (
    <div>
      {match === "NTY" && (
        <button onClick={handleTrigger}>Trigger Match</button>
      )}
      {match.status === "FAILED" && match.matchedCount == 0 && (
        <button onClick={handleTrigger}>Matching failed, Trigger Again</button>
      )}
      {match.status === "FAILED" && match.matchedCount != 0 && (
        <button onClick={handleTrigger}>{match.matchedCount} Refresh Matches</button>
      )}
      {match.status === "SUCCESS" && (
        <button onClick={handleTrigger}>
          {match.matchedCount} <br /> Refresh Matches
        </button>
      )}
      {match.status === "RUNNING" && <button>Matching In Process</button>}
    </div>
  );
};
