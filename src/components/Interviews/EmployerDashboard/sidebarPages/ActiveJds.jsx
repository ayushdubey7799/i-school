import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { jds } from '../../../../utils/contantData';
import editIcon from '../../../../assets/icons/edit.png'
import deleteIcon from '../../../../assets/icons/delete.png'
import searchIcon from '../../../../assets/icons/searchIcon.png'
import searchBlack from '../../../../assets/icons/searchBlack.png'


function Row(props) {
  const { row, index } = props;

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell component="th" scope="row" align='center'>
          {row.id}
        </TableCell>
        <TableCell component="th" scope="row" align='center'>
          ...
        </TableCell>{" "}
        <TableCell component="th" scope="row" align="center">
          ...
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          ...
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          ...
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          ...
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
            <img src={editIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} />
            <img src={deleteIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid #FE4C4F', padding: '0.3rem', borderRadius: '0.3rem' }} />
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const ActiveJds = () => {
  const [tableRows, setTableRows] = useState([]);
  const [searchParams, setSearchParams] = useState('');
  const [sortParams, setSortParams] = useState('');

  useEffect(() => {
    setTableRows(jds);
  }, [jds]);

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  }

  const handleSortParams = (e) => {
    setSortParams(e.target.value);
  }

  const handleSearch = () => {

  }

  return (
    <Container1>

      <StyledBox>
        <TableContainer component={Paper} className="tableBox">
          <span className='title'>Active JDs</span>
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
                <option value="JD_ID">JD ID</option>
                <option value="Req_ID">Req ID</option>
                <option value="Recruiter">Recruiter</option>
                <option value="HiringManager">Hiring Manager</option>
              </select>
              <select value={sortParams} onChange={handleSortParams} className='selectInput'>
                <option value="" disabled selected>Sort by</option>
                <option value="JD_ID">JD ID</option>
                <option value="Req_ID">Req ID</option>
                <option value="Recruiter">Recruiter</option>
                <option value="HiringManager">Hiring Manager</option>
              </select>
            </div>
          </SearchBarContainer>

          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center'>JD ID</TableCell>
                <TableCell align='center'>Test ID</TableCell>
                <TableCell align='center'>Date of Creation</TableCell>
                <TableCell align='center'>Recruiter</TableCell>
                <TableCell align='center'>Hiring Manager</TableCell>
                <TableCell align='center'>Comments</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {jds?.map((row, index) => (
                <Row key={row.id} row={row} index={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledBox>
    </Container1>
  );
};

export default ActiveJds;


const StyledBox = styled.div`
  display: flex;
  margin-top: 0rem;
  margin-bottom: 2.5rem;
  width: 104%;
  padding: 0 2%;


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
  width:90%;
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
