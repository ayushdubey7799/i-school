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
import { data as billing } from "../../../../utils/contantData";


function Row(props) {
    const { row, isSelected, onToggle } = props;

    return (
        <React.Fragment>
            <TableRow
                className={isSelected ? "selected" : ""}
                sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {row.id}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    ...
                </TableCell>{" "}
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">  <input
                    type="checkbox"
                    className="checkBox"
                /></TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function Billing() {

    return (
        <StyledDiv>
                <TableContainer component={Paper} className="tableBox">
                    <h3 style={{ paddingLeft: "3rem" }}>Billings</h3>
                    <Table aria-label="collapsible table">
                        <TableHead className="tableHead">
                            <TableRow>
                                <TableCell align="center" />
                                <TableCell align="center">Serial No.</TableCell>
                                <TableCell align="center">Invoice No.</TableCell>
                                <TableCell align="center">Invoice Date</TableCell>
                                <TableCell align="center">Billing Period</TableCell>
                                <TableCell align="center">Preview</TableCell>
                                <TableCell align="center">Download</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Select</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="tableBody">
                            {billing?.map((row, index) => (
                                <Row key={row.id} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </StyledDiv>
    );
}


const StyledDiv = styled.div`
margin: 3rem 0% 2rem 0%;
width: 90%;
padding: 0 4%;
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
