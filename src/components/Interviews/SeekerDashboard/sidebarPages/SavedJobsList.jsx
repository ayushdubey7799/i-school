import React, { useState, useEffect, useRef } from 'react';
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
import searchBlack from '../../../../assets/icons/searchBlack.png'
import ProfileFilter from '../seekerCommonComponents/ProfileFilter';
import { technicalSkills } from '../../../../utils/contantData';
import { locations } from '../../../../utils/contantData';
import searchIcon from '../../../../assets/icons/searchIcon.png'

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

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
          {row.postedDate}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='rowText'>
          {row.matchPercentage}%
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='rowText'>
          <Link to={`/apply/${row.jobId}`} className="btn">Apply</Link>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const SavedJobsList = () => {

  return (
    <Container1>
      <StyledBox>
        <TableContainer component={Paper} className="tableBox">
          <span className='title'>Saved Jobs</span>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center'></TableCell>
                <TableCell align='center'>Job Title</TableCell>
                <TableCell align='center'>Company</TableCell>
                <TableCell align='center'>Location</TableCell>
                <TableCell align='center'>Posted Date</TableCell>
                <TableCell align='center'>% Match with Profile</TableCell>
                <TableCell align='center'>Apply</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {jobListings?.map((row, index) => (
                <Row key={row.jobId} row={row} index={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledBox>
    </Container1>
  );
};

export default SavedJobsList;


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
    padding-top: 1rem;


    .title {
      display: block;
      padding: 0rem 0 1rem 1rem;
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
  gap: 0rem;


  .mainBox {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .profileBox {
    margin-right: 1rem;
  }
`;
