import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";
import metric1 from '../../../../assets/icons/EmpInterviewDash/metric1.png'
import metric2 from '../../../../assets/icons/EmpInterviewDash/metric2.png'
import metric3 from '../../../../assets/icons/EmpInterviewDash/metric3.png'
import metric4 from '../../../../assets/icons/EmpInterviewDash/metric4.png'
import { Link } from "react-router-dom";
import EmpScheduledInterviews from "./EmpScheduledInterviews";
import EmpScheduledCandidateList from "./EmpScheduledCandidateList";



function Row(props) {
  const { row, index } = props;

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell align="center">...</TableCell>
        <TableCell align="center">...</TableCell>
        <TableCell align="center">...</TableCell>
        <TableCell align="center">...</TableCell>
        <TableCell align="center">...</TableCell>
        <TableCell align="center">...</TableCell>
        <TableCell align="center">...</TableCell>
        <TableCell align="center">...</TableCell>
        <TableCell component="th" scope="row" align="center">
          <button className="btn">View Details</button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const InterviewDashboard = ({ page, setPage }) => {
  const [currMetric, setCurrMetric] = useState('interviews');
  const [searchParams, setSearchParams] = useState('');
  const [sortParams, setSortParams] = useState('');


  useEffect(() => {
    setPage(1);
  }, []);

  const handleSortParams = (e) => {
    setSortParams(e.target.value);
  }

  const handleSearch = () => {
    console.log("Search");
  }

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  }

  return (
    <MainContainer>
      <Container>
        <div className={`achievedNumberBox ${currMetric === 'upcoming' ? 'selected' : ''}`} onClick={() => setCurrMetric('upcoming')} >
          <div className='top'>
            <img src={metric1} />
            <span className='achievedNumberDigit'>10</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>Upcoming</span>
        </div>
        <div className={`achievedNumberBox ${currMetric === 'scheduledToday' ? 'selected' : ''}`} onClick={() => setCurrMetric('scheduledToday')}>
          <div className='top'>
            <img src={metric2} />
            <span className='achievedNumberDigit'>20</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>Scheduled Today</span>
        </div>
        <div className={`achievedNumberBox ${currMetric === 'completed' ? 'selected' : ''}`} onClick={() => setCurrMetric('completed')}>
          <div className='top'>
            <img src={metric3} />
            <span className='achievedNumberDigit'>17</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>Completed (last 7 days)</span>
        </div>
        <div className={`achievedNumberBox ${currMetric === 'inprogress' ? 'selected' : ''}`} onClick={() => setCurrMetric('inprogress')}>
          <div className='top'>
            <img src={metric4} />
            <span className='achievedNumberDigit'>12</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>In Progress</span>
        </div>
      </Container>
      {page === 1 && <EmpScheduledInterviews setPage={setPage} />}
      {page === 2 && <EmpScheduledCandidateList setPage={setPage} />}
    </MainContainer>
  );
};

export default InterviewDashboard;


const MainContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0rem;
width: 94%;
padding: 0 2.5%;
margin: 1rem 0% 2rem 0%;
align-items: center;

`

const Container = styled.div`

display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 1rem 0% 2rem 0%;
gap: 2%;



.achievedNumberBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.7rem;
  background-color: var(--white);
  padding: 1rem 0 1.5rem 0;
  width: 23%;
  height: 6rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);

  .top {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 3rem;
      height: 3rem;
    }
  }
}

.achievedNumberBox:hover {
  cursor: pointer;
}

.achievedNumberDigit {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color);
}

.achievedNumberText {
  font-size: 1rem;
    font-weight: 500;
    color: var(--color);
    text-align: center;
}

.hrLine {
  width: 100%;
  border-top: 0.1rem groove lightgrey;
  margin: -0.2rem 0 -0.9rem 0;
  box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.25);
}




`;

