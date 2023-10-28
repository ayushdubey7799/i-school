
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "styled-components";
import { data as tests } from "../../../../utils/contantData";

import searchBlack from '../../../../assets/icons/searchBlack.png'
import deleteIcon from '../../../../assets/icons/delete.png'
import editIcon from '../../../../assets/icons/edit.png'
import visibleIcon from '../../../../assets/icons/visible.png'

function Row(props) {
  const { row, index } = props;

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell component="th" scope="row" align="center">
          {row.id}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          ...
        </TableCell>{" "}
        <TableCell align="center">...</TableCell>
        <TableCell align="center">...</TableCell>
        <TableCell align="center">
          <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', alignItems: 'center' }}>
            <img src={visibleIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} />
            <img src={editIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} />
            <img src={deleteIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid #FE4C4F', padding: '0.3rem', borderRadius: '0.3rem' }} />
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function AvailableTest() {

  const [searchParams, setSearchParams] = useState('');
  const [sortParams, setSortParams] = useState('');

  const handleSortParams = (e) => {
    setSortParams(e.target.value);
  }


  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  }

  const handleSearch = () => {

  }

  return (
    <Content>
      <TableContainer component={Paper} className="tableBox">
        <span className="title">Available Tests</span>
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
              <option value="TestType">Test Type</option>
              <option value="Created By">Created By</option>
            </select>
            <select value={sortParams} onChange={handleSortParams} className='selectInput'>
              <option value="" disabled selected>Sort by</option>
              <option value="JD_ID">JD ID</option>
              <option value="TestType">Test Type</option>
              <option value="Created By">Created By</option>
            </select>
          </div>
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center">JD ID</TableCell>
              <TableCell align="center">Date of Creation</TableCell>
              <TableCell align="center">Created By</TableCell>
              <TableCell align="center">Test Type</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {tests?.map((row, index) => (
              <Row key={row.id} row={row} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Content>
  );
}


const Content = styled.div`
margin: 1rem 0% 2rem 0%;
width: 94%;
padding: 0 2.5%;
display: flex;
flex-direction: column;
align-items: center;

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


.btn {
  padding: 0.5rem 1rem;
  margin-top: 3rem;
  background-color: var(--lightOrange);
  border: none;
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  
}


.checkBox {
  cursor: pointer;
}
`

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