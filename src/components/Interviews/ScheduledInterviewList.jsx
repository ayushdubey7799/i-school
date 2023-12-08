import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { useSelector } from 'react-redux';
import { jobListings } from '../../utils/contantData';
import searchBlack from '../../assets/icons/searchBlack.png'
import { getInterviewByStatus } from '../../functions/api/getInterviewByStatus';
import { updateStatus } from '../../functions/api/interview/updateStatus';
import Loader from '../commonComponents/Loader';
import view from '../../assets/icons/visible.png'
import CommonDrawer from '../commonComponents/CommonDrawer';
import SeekerInterviewDetails from './SeekerDashboard/sidebarPages/SeekerInterviewDetails';
import { timeZoneConversion } from '../../utils/timeZoneConversation';
import SeekerTableSearchBar from './SeekerDashboard/seekerCommonComponents/SeekerTableSearchBar';


function Row(props) {

  const { row, index, setIsLoading, setLoaderMessage } = props;
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const navigate = useNavigate();

  const startInterview = async () => {
    localStorage.setItem("currentInterview", "profile");
    navigate(`/create-interview/${row.id}`);
  }

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell component="th" scope="row" align='center' className='logo tableCell'>
          <img src={row.companyLogo} />
        </TableCell>
        <TableCell component="th" scope="row" align='center' className='tableCell'>
          {row.title}
        </TableCell>{" "}
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {row.companyName}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {row.appliedDate}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {timeZoneConversion(row.scheduledAt)}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {row.status}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {row.matchPercentage}%
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          <button onClick={startInterview} className="btn">Attend</button>
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <CommonDrawer toggleDrawer={toggleDrawer} state={state} component={<SeekerInterviewDetails />} />
            <img src={view} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} onClick={toggleDrawer('right', true)} />
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const ScheduledInterviewList = () => {
  const [appliedJobs, setAppliedJobs] = useState();
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const accessToken = useSelector(state => state.auth.userData?.accessToken);

  const [searchValue, setSearchValue] = useState('');


  useEffect(() => {

    const getScheduledData = async () => {
      const res = await getInterviewByStatus("SCHEDULED", accessToken);
      if (res) {
        setFilteredJobs(res?.data?.data);
      }
    }

    getScheduledData();
    const filteredJobs = jobListings.filter(job => job.applied === true);

    if (filteredJobs) {
      setAppliedJobs(filteredJobs);
    }

  }, [])



  return (
    <Container1>
      <StyledBox>
        {isLoading && <Loader message={loaderMessage} />}
        {!isLoading && <TableContainer component={Paper} className="tableBox">
          <span className='title'>Scheduled Interviews</span>
          <SearchBarContainer>
            <SeekerTableSearchBar value={searchValue} setValue={setSearchValue}/>
          </SearchBarContainer>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center' className='tableCell'></TableCell>
                <TableCell align='center' className='tableCell'>Job Title</TableCell>
                <TableCell align='center' className='tableCell'>Company</TableCell>
                <TableCell align='center' className='tableCell'>Applied Date</TableCell>
                <TableCell align='center' className='tableCell'>Scheduled Date/Time</TableCell>
                <TableCell align='center' className='tableCell'>Status</TableCell>
                <TableCell align='center' className='tableCell'>% Match with Profile</TableCell>
                <TableCell align='center' className='tableCell'>Interview Link</TableCell>
                <TableCell align='center' className='tableCell'>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {filteredJobs?.map((row, index) => (
                <Row key={row.jobId} row={row} index={index} isLoading={isLoading} setIsLoading={setIsLoading} loaderMessage={loaderMessage} setLoaderMessage={setLoaderMessage} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>}
      </StyledBox>

    </Container1>
  );
};

export default ScheduledInterviewList;


const StyledBox = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  width: 100%;
  padding: 0;


  .colored {
    background-color: #ececec;
  }

  .tableBox {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.20);
    border-radius: 0.5rem;
    padding-top: 1rem;


    .title {
      padding-left: 1.2rem;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }

  .MuiTableCell-root {
    border: none;
  }

  .MuiTableRow-root {
    border-bottom: none;
  }

  .btn {
    background-color: var(--lightOrange);
    padding: 0.3rem 0.5rem;
    border: none;
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    font-family: var(--font);
  }

  .tableHead {
    background-color: #d1fff0;
    width: 100%;
  
    .tableCell {
      font-size: 0.9rem;
      font-weight: 500;
      font-family: var(--font);
      color: var(--color);
    }
    
  }
  
  .tableBody {
    width: 100%;
  
    .tableCell {
      font-size: 0.8rem;
      font-weight: 400;
      font-family: var(--font);
      color: var(--color);
    }
  }

  .rowText {
    font-size: 0.75rem;
  }

  .logo {
    width: 2rem;
    height: 2rem;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10%;
    }
  }
  
`;



const Container1 = styled.div`
  width:95%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;


const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  margin: 1rem auto 0.5rem auto;
  height: 3rem;
  background-color: var(--white);
  border-radius: 0.5rem;;
  padding: 0rem 1rem;
  gap: 1rem;
`
