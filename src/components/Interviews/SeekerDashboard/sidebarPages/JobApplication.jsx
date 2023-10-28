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
import searchBlack from '../../../../assets/icons/searchBlack.png'


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


const JobApplication = () => {
  const [appliedJobs, setAppliedJobs] = useState();
  const [searchParams, setSearchParams] = useState('');
  const [sortParams, setSortParams] = useState('');

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  }

  const handleSortParams = (e) => {
    setSortParams(e.target.value);
  }


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
            <SearchBarContainer>
              <div className='skillBox'>
                <img src={searchBlack} />
                <input
                  className='skillInput'
                  type="text"
                  placeholder="Search"
                />
              </div>

              <div className='selectBox'>
                <select value={searchParams} onChange={handleSearchParams} className='selectInput'>
                  <option value="" disabled selected>Filtr by</option>
                  <option value="JobTitle">Job Title</option>
                  <option value="Company">Company</option>
                  <option value="Location">Location</option>
                  <option value="Status">Status</option>
                </select>
                <select value={sortParams} onChange={handleSortParams} className='selectInput'>
                  <option value="" disabled selected>Sort by</option>
                  <option value="JobTitle">Job Title</option>
                  <option value="Company">Company</option>
                  <option value="Location">Location</option>
                  <option value="Status">Status</option>
                </select>
              </div>
            </SearchBarContainer>
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
                  <Row key={row.jobId} row={row} index={index}/>
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


  .colored {
    background-color: #ececec;
  }

  .tableBox {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.20);
    border-radius: 0.5rem;
    padding-top: 1rem;


    .title {
      padding-left: 1.2rem;
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


  .skillBox {
    position: relative;
    width: 35%;
    display: flex;
    align-items: center;
    background-color: #ececec;
    padding: 0.3rem 0.5rem;
    border-radius: 0.5rem;

    img {
      width: 1.2rem;
    }
  }



  .skillInput {
  flex-grow: 1;
  border: none;
  height: 1rem;
  width: 50%;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: transparent;
  outline: none;
  }


  .selectBox {
    width: 30%;
    display: flex;
    gap: 1rem;
  }

  .selectInput {
    padding: 0.7rem 0.5rem;
    border: none;
    background-color: #ececec;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    width: 50%;
    outline: none;

    option {
    font-size: 0.8rem;
    font-weight: 400;
  }
  }

`
