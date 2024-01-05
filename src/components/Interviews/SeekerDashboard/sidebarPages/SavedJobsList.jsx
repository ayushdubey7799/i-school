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
import { getSavedJobs } from '../../../../functions/api/jobApplication/getSavedJobs';
import ConfigurableModal from '../seekerCommonComponents/ConfigurableModal';
import JobApplicationModal from '../seekerCommonComponents/JobApplicationModal';
import { useSelector } from 'react-redux';

function Row(props) {
  const { row, index } = props;
  const [openBasic, setOpenBasic] = useState(false);
  const handleClose = () => {
    setOpenBasic(false);
  }
  return (
    <React.Fragment>
      <ConfigurableModal open={openBasic} setOpen={setOpenBasic} component={<JobApplicationModal jdId={row?.jdId} empClientCode={row?.clientCode} handleClose={handleClose} />} style={{ width: '40%', height: '60%' }} />
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell component="th" scope="row" align='center' className='logo tableCell'>
          <img src={row.companyLogo} />
        </TableCell>
        <TableCell component="th" scope="row" align='center' className='tableCell'>
          {row.jdId}
        </TableCell>{" "}
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {row.companyName}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {row.location}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {row?.jdFile?.createdAt}
        </TableCell>

        <TableCell component="th" scope="row" align="center" className='tableCell'>
          <button onClick={() => setOpenBasic(true)} className="btn">Apply</button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const SavedJobsList = () => {
  const [jobListings, setJobListings] = useState([]);
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);


  useEffect(() => {
    try {
      const getData = async () => {
        const res = await getSavedJobs(accessToken, clientCode);
        if (res) setJobListings(res?.data);
      }

      getData();
    }
    catch (error) {
      const errMsg =
        error.message ||
        "An error occurred. Please try again.";
      toast.error(errMsg, 8000);
    }
  }, [])
  console.log("Saved Jobs =====>>>>> ", jobListings);


  return (
    <Container1>

      <StyledBox>
        <TableContainer component={Paper} className="tableBox">
          <span className='title'>Saved Jobs</span>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center' className='tableCell'></TableCell>
                <TableCell align='center' className='tableCell'>Job Title</TableCell>
                <TableCell align='center' className='tableCell'>Company</TableCell>
                <TableCell align='center' className='tableCell'>Location</TableCell>
                <TableCell align='center' className='tableCell'>Posted Date</TableCell>
                <TableCell align='center' className='tableCell'>Apply</TableCell>
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

