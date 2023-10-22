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
import save from '../../../../assets/icons/save.png'
import share from '../../../../assets/icons/share.png'


function Row(props) {
  const { row } = props;

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}>
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


const JobApplication = () => {
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
            <h3 style={{ paddingLeft: "3rem" }}>Applied Jobs</h3>
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
                {appliedJobs?.map((row) => (
                  <Row key={row.jobId} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledBox>
      }
    </Container1>
  );
};

export default JobApplication;


const StyledBox = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  width: 100%;
  padding: 0;

  .tableBox {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.20);
    border-radius: 0.5rem;
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
    background-color: lightgrey;
    width: 100%;
  }

  .tableBody {
    width: 100%;
  }

  .rowText {
    font-size: 0.75rem;
  }

  .logo {
    width: 4rem;
    height: 4rem;

    img {
        width: 80%;
        height: 80%;
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

const Component = styled.div`
  width: 100%; 
  border: 0.08rem solid #ccc;
  padding: 1rem 1rem;;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  font-size: 0.8rem;
  background-color: var(--white);

`;

const EditButton = styled.button`
  background-color: var(--lightOrange);
  border: 0.1rem solid var(--lightOrange);
  cursor: pointer;
  color: var(--white);
  text-decoration: none;
  font-size: 1rem;
  margin-right: 0.6rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

