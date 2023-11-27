import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import threeDotIcon from '../../../assets/icons/threeDot.png'


function Row(props) {
  const { row, index } = props;

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell component="th" scope="row" align='center'>
          {row.reqNumber}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.createdAt?.slice(0, 10)}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.createdBy}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
            <img src={threeDotIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', padding: '0.3rem', }} />
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const ReqModalDetails = ({ reqs }) => {
  const requests = reqs ? reqs : [];

  return (
    <Container1>
      <StyledBox>
        <TableContainer component={Paper} className="tableBox">
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center'>Req Numer</TableCell>
                <TableCell align='center'>Date of Creation</TableCell>
                <TableCell align='center'>Created By</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {requests?.map((row, index) => (
                <Row key={row.id} row={row} index={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledBox>
    </Container1>
  );
};

export default ReqModalDetails;


const StyledBox = styled.div`
  display: flex;
  width: 96%;
  margin: 1.5rem auto;

  .colored {
    background-color: #ececec;
  }

  .tableBox {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.20);
    border-radius: 0.5rem;
    padding-top: 0rem;


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
    padding: 0.4rem 0.7rem;
    border: none;
    color: var(--white);
    font-size: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
  }

  .selected {
    background-color: #d9fbf9;
    color: white;
  }

  .tableHead {
    background-color: #d1fff0;
    width: 100%;
  }

  .tableBody {
    width: 100%;
  }

  
`;



const Container1 = styled.div`
  width: 98%;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;


