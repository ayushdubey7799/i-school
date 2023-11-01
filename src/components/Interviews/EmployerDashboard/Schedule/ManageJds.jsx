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
import { Link } from "react-router-dom";
import styled from "styled-components";
import Match from "./Match";

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
          {row.jdId}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.reqNumber}
        </TableCell>{" "}
        <TableCell component="th" scope="row" align="center" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Match jdId={row.jdId} count={row.matchCount} />
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
          <Link to={`/schedule/matches/${row.jdId}`} className="btn">Show Profiles</Link>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={row.open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body1" gutterBottom>
                <div style={{ fontSize: "0.7rem", }}><b>Title</b>: {row.title}</div>
                <br />
                <div style={{ fontSize: "0.7rem" }}>
                  <b>Description</b>: {row.description}
                </div>
                <br />
                <div style={{ fontSize: "0.7rem" }}><b>Skills</b>: {row.skills}</div>
                <br />
                <div style={{ fontSize: "0.7rem" }}>
                  <b>Experience</b>: {row.experience}
                </div>
                <br />
                <div style={{ fontSize: "0.7rem" }}>
                  <b>Location</b>: {row.location}
                </div>
                <br />
                <div style={{ fontSize: "0.7rem" }}>
                  <b>WorkType</b>: {row.workType}
                </div>
                <br />
                <div style={{ fontSize: "0.7rem" }}><b>CTC</b>: {row.ctc}</div>
                <br />
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ManageJds({ rows }) {
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    setTableRows(rows);
  }, [rows]);

  const handleToggle = (row) => {
    const updatedRows = [...tableRows];
    const rowIndex = updatedRows.findIndex((r) => r.jdId === row.jdId);

    if (selectedRow === rowIndex) {
      // Deselect the row if it's already selected
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
  // console.log(rows.data.data.tableRows);
  return (
    <StyledBox>
      <TableContainer component={Paper} className="tableBox">
        <h3 style={{ paddingLeft: "3rem" }}>Active Job Descriptions</h3>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell />
              <TableCell align="center">JD_ID</TableCell>
              <TableCell align="center">Req_ID</TableCell>
              <TableCell align="center">No of Profiles available</TableCell>
              <TableCell align="center">Date of Creation</TableCell>
              <TableCell align="center">Recruiter</TableCell>
              <TableCell align="center">Hiring Manager</TableCell>
              <TableCell align="center">Show Profiles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {tableRows?.filter(item => item.jdId).map((row, index) => (
              <Row key={row.jd_id} row={row} isSelected={selectedRow === index} onToggle={handleToggle} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledBox>
  );
}



const StyledBox = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  width: 96%;
  padding: 0 2%;

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

  .btn {
    background-color: var(--lightOrange);
    display: flex;
    justify-content: center;
    padding: 0.3rem 0.2rem;
    border: none;
    color: var(--white);
    font-size: 0.9rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
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

  
`;
