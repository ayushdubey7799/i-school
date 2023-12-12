import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";
import metric1 from "../../../../assets/icons/EmpInterviewDash/metric1.png";
import metric2 from "../../../../assets/icons/EmpInterviewDash/metric2.png";
import metric3 from "../../../../assets/icons/EmpInterviewDash/metric3.png";
import metric4 from "../../../../assets/icons/EmpInterviewDash/metric4.png";
import { Link } from "react-router-dom";
import EmpScheduledInterviews from "./EmpScheduledInterviews";
import EmpScheduledCandidateList from "./EmpScheduledCandidateList";
import { getInterviewByStatus } from "../../../../functions/api/getInterviewByStatus";
import { getStatusWiseCount } from "../../../../functions/api/interview/getStatusWiseCount";
import { useSelector } from "react-redux";
import { getPreFilteredCount } from "../../../../functions/api/interview/getPreFilteredCount";
import UpcomingInterview from "./UpcomingInterview";
import ScheduledTodayInterview from "./ScheduledTodayInterview";
import CompletedLast7Days from "./CompletedLast7Days";
import InProgressInterview from "./InProgressInterview";

function Row(props) {
  const { row, index } = props;

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        className={`${index % 2 == 1 ? "colored" : ""}`}
      >
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
  const [currMetric, setCurrMetric] = useState("interviews");
  const [metrics, setMetrics] = useState([]);

  const [searchParams, setSearchParams] = useState("");
  const [sortParams, setSortParams] = useState("");
  const [started, setStarted] = useState(0);
  const [scheduled, setScheduled] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [inProgress,setInProgress] = useState(0);
  const [upcoming,setUpcoming] = useState(0);

  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const [filteredData, setFilteredData] = useState({});
  const [value, setValue] = useState("COMPLETED");

  useEffect(() => {
    setPage({index: 1, jdId: null});
    const getCount = async () => {
      const res = await Promise.allSettled([
        getPreFilteredCount(accessToken, "UPCOMING"),
        getPreFilteredCount(accessToken, "SCHEDULED_TODAY"),
        getPreFilteredCount(accessToken, "COMPLETED"),
        getPreFilteredCount(accessToken, "IN_PROGRESS"),
      ]);
      
      
      setUpcoming(res[0]?.value?.data["UPCOMING"])
      setScheduled(res[1]?.value?.data["SCHEDULED_TODAY"])
      setCompleted(res[2]?.value?.data["COMPLETED"])
      setInProgress(res[3]?.value?.data["IN_PROGRESS"])


    };
    getCount();
  }, [currMetric]);

  // useEffect(() => {
  //   if (metrics.length) {
  //     setStarted(metrics.find((item) => item.status == "STARTED")?.count);
  //     setCompleted(metrics.find((item) => item.status == "COMPLETED")?.count);
  //     setScheduled(metrics.find((item) => item.status == "SCHEDULED")?.count);
  //   }
  // }, [metrics]);

  const handleSortParams = (e) => {
    setSortParams(e.target.value);
  };

  const handleSearch = () => {
    
  };

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  };
  

  return (
    <MainContainer>
      <Container>
        <div
          className={`achievedNumberBox ${
            currMetric === "upcoming" ? "selected" : ""
          }`}
          onClick={() => setCurrMetric("upcoming")}
        >
          <div className="top">
            <img src={metric1} />
            <span className="achievedNumberDigit">{upcoming?upcoming:"0"}</span>
          </div>
          <span className="hrLine"></span>
          <span className="achievedNumberText">Upcoming</span>
        </div>
        <div
          className={`achievedNumberBox ${
            currMetric === "scheduledToday" ? "selected" : ""
          }`}
          onClick={() => setCurrMetric("scheduledToday")}
        >
          <div className="top">
            <img src={metric2} />
            <span className="achievedNumberDigit">{scheduled?scheduled:"0"}</span>
          </div>
          <span className="hrLine"></span>
          <span className="achievedNumberText">Scheduled Today</span>
        </div>
        <div
          className={`achievedNumberBox ${
            currMetric === "completed" ? "selected" : ""
          }`}
          onClick={() => setCurrMetric("completed")}
        >
          <div className="top">
            <img src={metric3} />
            <span className="achievedNumberDigit">{completed?completed:"0"}</span>
          </div>
          <span className="hrLine"></span>
          <span className="achievedNumberText">Completed (last 7 days)</span>
        </div>
        <div
          className={`achievedNumberBox ${
            currMetric === "inprogress" ? "selected" : ""
          }`}
          onClick={() => setCurrMetric("inprogress")}
        >
          <div className="top">
            <img src={metric4} />
            <span className="achievedNumberDigit">{inProgress?inProgress:"0"}</span>
          </div>
          <span className="hrLine"></span>
          <span className="achievedNumberText">In Progress</span>
        </div>
      </Container>
      {page?.index === 1 && <EmpScheduledInterviews setPage={setPage} />}
      {page?.index === 2 && <EmpScheduledCandidateList page={page} setPage={setPage} />}
      {currMetric === 'upcoming' && <UpcomingInterview/>}
      {currMetric === 'scheduledToday' && <ScheduledTodayInterview/>}
      {currMetric === 'completed' && <CompletedLast7Days/>}
      {currMetric === 'inprogress' && <InProgressInterview/>}
    </MainContainer>
  );
};

export default InterviewDashboard;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;
  width: 96%;
  padding: 0 2%;
  margin: 1rem 0% 2rem 0%;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
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
    width: 22%;
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
    font-size: 0.9rem;
    font-weight: 600;
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
