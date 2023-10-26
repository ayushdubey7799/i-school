
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

import searchIcon from '../../../../assets/icons/searchIcon.png'

function Row(props) {
    const { row, isSelected, onToggle } = props;

    return (
        <React.Fragment>
            <TableRow
                className={isSelected ? "selected" : ""}
                sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent row click event from firing
                            onToggle(row);
                        }}
                    >
                        {row.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {row.id}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    ...
                </TableCell>{" "}
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={row.open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="body1" gutterBottom>
                                {/* Have to change these according to api data */}
                                {/* <div style={{ fontSize: "0.7rem" }}>Title: {row.title}</div>
                <br/>
                <div style={{ fontSize: "0.7rem" }}>Description: {row.description}</div>
                <br/>
                <div style={{ fontSize: "0.7rem" }}>Skills: {row.skills}</div>
                <br/>
                <div style={{ fontSize: "0.7rem" }}>Experience: {row.experience}</div>
                <br/>
                <div style={{ fontSize: "0.7rem" }}>Location: {row.location}</div>
                <br/>
                <div style={{ fontSize: "0.7rem" }}>WorkType: {row.workType}</div>
                <br/>
                <div style={{ fontSize: "0.7rem" }}>CTC: {row.ctc}</div>
                <br/> */}
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


export default function AvailableTest() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [tableRows, setTableRows] = useState([]);
    const [open, setOpen] = useState(false);

    const [searchParams, setSearchParams] = useState('');

    useEffect(() => {
        setTableRows(tests);
    }, [tests]);

    const handleToggle = (row) => {
        const updatedRows = [...tableRows];
        const rowIndex = updatedRows.findIndex((r) => r.id === row.id);
        if (selectedRow === rowIndex) {
            setSelectedRow(null);
            updatedRows[rowIndex].open = false;
        } else {
            if (selectedRow !== null) {
                updatedRows[selectedRow].open = false;
            }
            setSelectedRow(rowIndex);
            updatedRows[rowIndex].open = true;
        }
        setTableRows(updatedRows);
    };

    const handleSearchParams = (e) => {
        setSearchParams(e.target.value);
    }

    const handleSearch = () => {

    }

    return (
        <Content>
            <SearchBarContainer>
                <select value={searchParams} onChange={handleSearchParams} className='selectInput'>
                    <option value="" disabled selected>Select filter Param</option>
                    <option value="JD_ID">JD ID</option>
                    <option value="TestType">Test Type</option>
                    <option value="Created By">Created By</option>
                </select>
                <div className='skillBox'>
                    <input
                        className='skillInput'
                        type="text"
                        placeholder="Enter keywords..."
                    />
                </div>
                <button className='btn' onClick={() => handleSearch()}><img src={searchIcon} />Search</button>
            </SearchBarContainer>
            <TableContainer component={Paper} className="tableBox">
                <h3 style={{ paddingLeft: "3rem" }}>Available Tests</h3>
                <Table aria-label="collapsible table">
                    <TableHead className="tableHead">
                        <TableRow>
                            <TableCell align="center" />
                            <TableCell align="center">JD ID</TableCell>
                            <TableCell align="center">Date of Creation</TableCell>
                            <TableCell align="center">Created By</TableCell>
                            <TableCell align="center">Test Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="tableBody">
                        {tests?.map((row, index) => (
                            <Row key={row.id} row={row} isSelected={selectedRow === index} onToggle={handleToggle} />
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



.tableBox {
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.20);
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
  background-color: lightgrey;
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
  width: 96%;
  margin: 1rem auto 3rem auto;
  height: 3.5rem;
  background-color: var(--white);
  border-radius: 0.5rem;;
  padding: 0rem 1rem;
  gap: 1rem;


  .skillBox {
    position: relative;
    width: 100%;
  }



  .skillInput {
  flex-grow: 1;
  border: none;
  height: 100%;
  width: 90%;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: var(--white);
  outline: none;
  }



  .btn {
    background-color: var(--lightOrange);
    padding: 0.5rem 1.1rem;
    border-radius: 1.1rem;
    color: var(--white);
    font-size: 1rem;
    font-weight: 600;
    border: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    margin-top: 0rem;
  }

  .btn img {
    width: 1rem;
  }

  .selectInput {
    padding: 0.5rem 0.5rem;
    border: none;
    background-color: var(--white);
    border-radius: 0.3rem;
    font-size: 0.8rem;
    width: 30%;
    outline: none;

    option {
    font-size: 0.8rem;
    font-weight: 400;
  }
  }

`
