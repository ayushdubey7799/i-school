import React from 'react';
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
import save from '../../../../assets/icons/save2.png'
import share from '../../../../assets/icons/share.png'
import view from '../../../../assets/icons/visible.png'
import CommonDrawer from '../../../commonComponents/CommonDrawer';

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
          {row.companyName}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {row.location}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {row.postedDate}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {row.matchPercentage}%
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <CommonDrawer toggleDrawer={toggleDrawer} state={state} />
            <img src={view} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} onClick={toggleDrawer('right', true)} />
            <img src={save} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} />
            <img src={share} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} />
          </div>
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          <Link to={`/apply/${row.jobId}`} className="btn">Apply</Link>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const RecommendedJobsList = () => {
  return (
    <Container1>
      <StyledBox>
        <TableContainer component={Paper} className="tableBox">
          <span className='title'>Recommended Jobs</span>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center' className='tableCell'></TableCell>
                <TableCell align='center' className='tableCell'>Job Title</TableCell>
                <TableCell align='center' className='tableCell'>Company</TableCell>
                <TableCell align='center' className='tableCell'>Location</TableCell>
                <TableCell align='center' className='tableCell'>Posted Date</TableCell>
                <TableCell align='center' className='tableCell'>% Match with Profile</TableCell>
                <TableCell align='center' className='tableCell'>Save/Share</TableCell>
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

export default RecommendedJobsList;


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
  gap: 0rem;

`;

