import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import view from '../../../../assets/icons/visible.png';
import { jobListings } from '../../../../utils/contantData';
import CommonDrawer from '../../../commonComponents/CommonDrawer';
import { getJobApplications } from '../../../../functions/api/jobApplication/getJobApplications';
import { timeZoneConversion } from '../../../../utils/timeZoneConversation';
import { useSelector } from 'react-redux';


function Row(props) {
    const { row, index } = props;
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
                    {row.jobTitle}
                </TableCell>{" "}
                <TableCell component="th" scope="row" align="center" className='tableCell'>
                    {row.clientCode}
                </TableCell>
                <TableCell component="th" scope="row" align="center" className='tableCell'>
                    {row.location}
                </TableCell>
                <TableCell component="th" scope="row" align="center" className='tableCell'>
                    {timeZoneConversion(row.appliedAt)}
                </TableCell>
                <TableCell component="th" scope="row" align="center" className='tableCell'>
                    {row.status}
                </TableCell>
               
                <TableCell component="th" scope="row" align="center" className='tableCell'>
                <CommonDrawer toggleDrawer={toggleDrawer} state={state} />
                <img src={view} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} onClick={toggleDrawer('right', true)} />
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const AppliedJobsList = () => {
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);
    const [appliedJobs, setAppliedJobs] = useState();

    useEffect(() => {
      const getData = async () => {
        const res = await getJobApplications(accessToken, clientCode);
        if(res)setAppliedJobs(res?.data);
      }
  
      getData();

    }, [])

    return (
        <Container1>
            {appliedJobs &&
                <StyledBox>
                    <TableContainer component={Paper} className="tableBox">
                        <span className='title'>Applied Jobs</span>
                        <Table aria-label="collapsible table">
                            <TableHead className="tableHead">
                                <TableRow>
                                    <TableCell align='center' className='tableCell'></TableCell>
                                    <TableCell align='center' className='tableCell'>Job Title</TableCell>
                                    <TableCell align='center' className='tableCell'>Company</TableCell>
                                    <TableCell align='center' className='tableCell'>Location</TableCell>
                                    <TableCell align='center' className='tableCell'>Applied Date</TableCell>
                                    <TableCell align='center' className='tableCell'>Status</TableCell>
                                    <TableCell align='center' className='tableCell'>View JD</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="tableBody">
                                {appliedJobs?.map((row, index) => (
                                    <Row key={row.jobId} row={row} index={index} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </StyledBox>
            }
        </Container1>
    )
}

export default AppliedJobsList



const StyledBox = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  width: 100%;
  padding: 0;


  .colored {
    background-color: #ececec;
  }

  .tableBox {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.20);
    border-radius: 0.5rem;

    .title {
        padding-left: 1.2rem;
        line-height: 3rem;
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
    padding: 0.5rem 0.8rem;
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

