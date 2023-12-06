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

import { jobListings } from '../../../../utils/contantData';


function Row(props) {
    const { row, index } = props;

    return (
        <React.Fragment>
            <TableRow
                sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
                <TableCell component="th" scope="row" align='center' className='logo'>
                    <img src={row.companyLogo} />
                </TableCell>
                <TableCell component="th" scope="row" align='center' className='rowText'>
                    {row.jobTitle}
                </TableCell>{" "}
                <TableCell component="th" scope="row" align="center" className='rowText'>
                    {row.companyName}
                </TableCell>
                <TableCell component="th" scope="row" align="center" className='rowText'>
                    {row.location}
                </TableCell>
                <TableCell component="th" scope="row" align="center" className='rowText'>
                    {row.appliedDate}
                </TableCell>
                <TableCell component="th" scope="row" align="center" className='rowText'>
                    {row.status}
                </TableCell>
                <TableCell component="th" scope="row" align="center" className='rowText'>
                    {row.matchPercentage}%
                </TableCell>
                <TableCell component="th" scope="row" align="center" className='rowText'>
                    <Link to={`/attend/${row.jobId}`} className="btn">Attend</Link>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const AppliedJobsList = () => {
    const [appliedJobs, setAppliedJobs] = useState();

    useEffect(() => {
        const filteredJobs = jobListings.filter(job => job.applied === true);

        if (filteredJobs) {
            setAppliedJobs(filteredJobs);
        }

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
                                    <TableCell align='center'></TableCell>
                                    <TableCell align='center'>Job Title</TableCell>
                                    <TableCell align='center'>Company</TableCell>
                                    <TableCell align='center'>Location</TableCell>
                                    <TableCell align='center'>Applied Date</TableCell>
                                    <TableCell align='center'>Status</TableCell>
                                    <TableCell align='center'>% Match with Profile</TableCell>
                                    <TableCell align='center'>Interview Link</TableCell>
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
        line-height: 4rem;
        font-size: 1.2rem;
        font-weight: 700;
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
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
  }

  .tableHead {
    background-color: #d1fff0;
    width: 100%;
  }

  .tableBody {
    width: 100%;
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

