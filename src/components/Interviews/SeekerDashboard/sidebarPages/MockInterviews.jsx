import React, { useState } from "react";
import { styled } from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";
import searchBlack from '../../../../assets/icons/searchBlack.png'
import ProgressBar from "../../../commonComponents/ProgressBar";


const Row = (props) => {
  const { row, index } = props;

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <TableRow
        className={`${index % 2 == 1 ? 'colored' : ''}`}
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell component="th" scope="row" align='center'>
          {row.id.slice(0, 8)}
        </TableCell>{" "}
        <TableCell component="th" scope="row" align='center'>
          {row.createdAt.split('T')[0]}
        </TableCell>
        {/* {row.status == 'COMPLETED' && */}
        <TableCell component="th" scope="row" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', alignItems: 'center', justifyContent: 'center' }} align="center">
          <ProgressBar progress={row.score} maxScore={row.maxScore} />
          <span style={{ fontSize: '0.7rem' }}>{row.score}/{row.maxScore}</span>
        </TableCell>
        {/* } */}

        {/* {row.status == 'COMPLETED' && */}
        <TableCell component="th" scope="row" align="center">
          <button onClick={() => navigate(`/score/${row.id}`)} className="btn">Get Details</button>
        </TableCell>
        {/* } */}
      </TableRow>
    </React.Fragment>
  );
}

const MockInterviews = ({ filteredData }) => {
  const [searchParams, setSearchParams] = useState('');

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  }


  if (!filteredData?.data?.data?.length) {
    console.log("working");
    return <h6 style={{ fontSize: '1.2rem' }}>No interview Here</h6>
  }

  return (
    <StyledInterviews>
      <TableContainer component={Paper} className="tableBox">
        <span className='title'>Mock Interviews</span>
        <SearchBarContainer>
          <div className='skillBox'>
            <img src={searchBlack} />
            <input
              className='skillInput'
              type="text"
              placeholder="Search"
            />
          </div>
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align='center'>Test ID</TableCell>
              <TableCell align='center'>Date of Interview</TableCell>
              <TableCell align='center'>Score</TableCell>
              <TableCell align="center">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {filteredData?.data?.data?.map((row, index) => (
              <Row key={index} row={row} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledInterviews>
  );
};

export default MockInterviews;

const StyledInterviews = styled.div`
  display: flex;
  width: 95%;
  margin: 2.5rem auto;

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
  }.tableBox {
    box-shadow: 0 0 0.7rem 0 rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
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
  }

  .tableHead {
    background-color: #d1fff0;
    width: 100%;
  }

  .tableBody {
    width: 100%;
  }

  .selected {
    background-color: #d9fbf9;
    color: white;
  }
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


`
