import React, { useState } from 'react'
import styled from 'styled-components'
import LogoHeader from '../../../commonComponents/LogoHeader'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import eyeIcon from '../../../../assets/icons/visible.png'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function Row(props) {
  const { row, index } = props;

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        className={`${index % 2 == 1 ? 'colored' : ''}`}
      >
        <TableCell component="th" scope="row" align="center" className="tableCell">{row.name?row.name:"..."}</TableCell>
        <TableCell component="th" scope="row" align="center" className="tableCell">{row.email}</TableCell>
        <TableCell align="center" className="tableCell">{row.contact?row.contact:"..."}</TableCell>
        <TableCell align="center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }} className="tableCell">
          <img src={eyeIcon} />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const InviteSuccess = () => {
  const navigate = useNavigate();
  const invites = useSelector((state) => state.invite.selectedResumes).slice(0,-1);

  return (
    <MainContainer>
      <LogoHeader />

      <Container>
        <span className='mainTitle'>
          <span className='title'>Invitation Sent Successfully</span>
          <Button onClick={() => navigate('/dashboard/employer')}>Back to Dashboard</Button>
        </span>

        <TableContainer component={Paper} className="tableBox">
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align="center" className="tableCell">Name</TableCell>
                <TableCell align="center" className="tableCell">Email</TableCell>
                <TableCell align="center" className="tableCell">Contact</TableCell>
                <TableCell align="center" className="tableCell">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {invites?.map((row, index) => (
                <Row
                  key={row.resumeId}
                  row={row}
                  index={index}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </MainContainer>
  )
}

export default InviteSuccess



const MainContainer = styled.div`
display: flex;
flex-direction: column;




`


const Container = styled.div`
display: flex;
flex-direction: column;
padding: 5rem 2% 2rem 2%;
  width: 96%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .colored {
    background-color: #ececec;
  }

  .tableBox {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
  }

  .MuiTableCell-root {
    border: none;
  }

  .MuiTableRow-root {
    border-bottom: none;
  }

  .selected {
    background-color: #d9fbf9;
    color: white;
  }

  .tableHead {
    background-color: #d1fff0;
    width: 100%;
  
    .tableCell {
      font-size: 0.9rem;
      font-weight: 500;
      font-family: Quicksand, sans-serif;
      color: var(--color);
    }
    
  }
  
  .tableBody {
    width: 100%;
  
    .tableCell {
      font-size: 0.8rem;
      font-weight: 400;
      font-family: Quicksand, sans-serif;
      color: var(--color);
    }
  }

  .checkBox {
    cursor: pointer;
    width: 1rem;
    height: 1rem;
  }

  img {
    width: 1.2rem;
    cursor: pointer;
  }


.mainTitle {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 1rem 0 1.5rem 0;
    width: 98%;
    display: flex;
    justify-content: space-between;
    gap: 27%;

    .title {
      font-size: 0.9rem;
      font-weight: 600;
    }
}


`

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--lightOrange);
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  align-self: center;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: Quicksand, sans-serif;
`;


