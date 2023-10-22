import React, { useEffect, useState } from "react";
import { statusMatch } from "../../../../functions/api/employers/match/statusMatch";
import { triggerMatch } from "../../../../functions/api/employers/match/triggerMatch";

const Match = ({ jdId, count }) => {
  const [matches, setMatches] = useState("Getting_Info");
  const [trigger, setTrigger] = useState(false);
  const handleTrigger = async () => {
    const res = await triggerMatch(jdId);
    if (res?.data[0]) {
      setTrigger((prev) => !prev);
    }
  };

  useEffect(() => {
    const getStatus = async () => {
      const res = await statusMatch(jdId);
      if (res) {
        if (res?.data.length == 1) {
          setMatches(res.data[0].status);
        } else {
          setMatches("NTY");
        }
      } else {
        setMatches(" ");
      }
    };

    getStatus();
  }, [trigger]);

  return (
    <Option status={matches} count={count} handleTrigger={handleTrigger} />
  );
};

export default Match;

const Option = ({ status, count, handleTrigger }) => {
  return (
    <div>
      {status === "NTY" && (
        <button onClick={handleTrigger}>Trigger Match</button>
      )}
      {status === "FAILED" && count == 0 && (
        <button onClick={handleTrigger}>Trigger Again</button>
      )}
      {status === "FAILED" && count != 0 && (
        <button onClick={handleTrigger}>{count} Refresh Matches</button>
      )}
      {status === "SUCCESS" && (
        <button onClick={handleTrigger}>
          {count} <br /> Refresh Matches
        </button>
      )}
      {status === "RUNNING" && <button>In Process</button>}
    </div>
  );
};
