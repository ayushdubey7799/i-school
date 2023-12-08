import React from "react";
import styled from "styled-components";

function Timer({minutes,seconds}) {
  
  return (
      <Box>
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
      </Box>
  );
}

export default Timer;

const Box = styled.div`
border: 0.075rem solid var(--color);
font-size: 0.9rem;
font-weight: 600;
padding: 0.4rem 0.8rem;
border-radius: 0.3rem;

`
