import React, { useEffect, useState } from "react";
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
import SeekerTableSearchBar from "../seekerCommonComponents/SeekerTableSearchBar";
import { Pagination, PaginationSizeFilter } from "../../../commonComponents/Pagination";


const Row = (props) => {
  const { row, index } = props;
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <TableRow
        className={`${index % 2 == 1 ? 'colored' : ''}`}
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell component="th" scope="row" align='center' className='tableCell'>
          {row.id.slice(0, 8).toUpperCase()}
        </TableCell>{" "}
        <TableCell component="th" scope="row" align='center' className='tableCell'>
          {row.createdAt.split('T')[0]}
        </TableCell>
        {/* {row.status == 'COMPLETED' && */}
        <TableCell component="th" scope="row" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', alignItems: 'center', justifyContent: 'center' }} align="center" className='tableCell'>
          <ProgressBar progress={row.score} maxScore={row.maxScore} />
          <span style={{ fontSize: '0.7rem' }}>{row.score}/{row.maxScore}</span>
        </TableCell>
        {/* } */}

        {/* {row.status == 'COMPLETED' && */}
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          <button onClick={() => navigate(`/score/${row.id}`)} className="btn">Get Details</button>
        </TableCell>
        {/* } */}
      </TableRow>
    </React.Fragment>
  );
}

const MockInterviews = ({ filteredData, page, setPage, size, setSize, total, handlePageChange, handleSizeChange }) => {
  const [searchValue, setSearchValue] = useState();


  if (!filteredData?.data?.data?.length) {
    return <h6 style={{ fontSize: '1.2rem' }}>No interview Here</h6>
  }

  // useEffect(() => {
  //   setPage(1);
  //   setSize(5);
  // }, [])

  return (
    <StyledInterviews>
      <TableContainer component={Paper} className="tableBox">
        <span className='title'>Mock Interviews</span>
        <SearchBarContainer>
          <SeekerTableSearchBar value={searchValue} setValue={setSearchValue} />
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align='center' className='tableCell'>Test ID</TableCell>
              <TableCell align='center' className='tableCell'>Date of Interview</TableCell>
              <TableCell align='center' className='tableCell'>Score</TableCell>
              <TableCell align="center" className='tableCell'>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {filteredData?.data?.data?.filter?.((item) => item.jdId ? false : true)?.map((row, index) => (
              <Row key={index} row={row} index={index} />
            ))}
          </TableBody>
        </Table>
        <div className="paginationBox">
          <PaginationSizeFilter
            size={size}
            handleSizeChange={handleSizeChange}
          />
          <Pagination
            total={total}
            size={size}
            page={page}
            handlePageChange={handlePageChange}
            setPage={setPage}
          />
        </div>
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

  .paginationBox {
    display: flex;
    justify-content: end;
    gap: 2rem;
    margin: 1rem 3rem 1.5rem 0;
  }

  .tableBox {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.20);
    border-radius: 0.5rem;
    padding-top: 1rem;


    .title {
      padding-left: 1.2rem;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  
  .tableBox {
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
    padding: 0.5rem 0.8rem;
    border: none;
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
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

`
