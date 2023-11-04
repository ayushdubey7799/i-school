import React, { useState } from "react";
import InterviewCard from "./InterviewCard";
import { styled } from "styled-components";
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
import Loader from "../commonComponents/Loader";
import { useNavigate } from "react-router";
import ScoreChart from "../commonComponents/ScoreChart";


const Row = (props) => {
  const { row, isSelected, onToggle } = props;

  const navigate = useNavigate();

  const score = 65;
  const maxScore = 100;

  return (
    <React.Fragment>
      <TableRow
        className={isSelected ? "selected" : ""}
        sx={{ "& > *": { borderBottom: "unset" } }}
        onClick={() => onToggle(row)}
      >
        <TableCell>
          {row.status == 'COMPLETED' &&
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
          }
        </TableCell>
        <TableCell component="th" scope="row">
          1
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id.slice(0, 8)}
        </TableCell>{" "}
        <TableCell component="th" scope="row">
          {row.createdAt.split('T')[0]}
        </TableCell>{" "}
        {row.status == 'COMPLETED' &&
          <TableCell component="th" scope="row" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <ScoreChart data={[
              ["Score", "Percentage"],
              ["YourScore", score],
              ["", (maxScore - score)]
            ]} />
            <span>65/100</span>
          </TableCell>
        }
        {row.status == 'COMPLETED' &&
          <TableCell component="th" scope="row" align="center">
            <button onClick={() => navigate(`/score/${row.id}`)} className="btn">Get Details</button>
          </TableCell>
        }
      </TableRow>
      {row.status === 'COMPLETED' &&
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
            <Collapse in={row.open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="body1" gutterBottom style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', }}>
                  <div style={{ fontSize: "0.8rem" }}><span style={{ fontSize: "0.8rem", fontWeight: '600' }}>Job Summary:- </span> {row.jobSummary}</div>
                  <div style={{ fontSize: "0.8rem" }}><span style={{ fontSize: "0.8rem", fontWeight: '600' }}>Resume Text:- </span> {row.resumeText}</div>
                  {/* <div style={{ fontSize: "0.8rem" }}><span style={{ fontSize: "0.8rem", fontWeight: '600' }}>Job Summary:- </span> {row.jobSummary.length > 250 ? row.jobSummary.slice(0, 250) + "..." : row.jobSummary}</div>
                  <div style={{ fontSize: "0.8rem" }}><span style={{ fontSize: "0.8rem", fontWeight: '600' }}>Resume Text:- </span> {row.resumeText.length > 250 ? row.resumeText.slice(0, 250) + "..." : row.resumeText}</div> */}
                </Typography>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      }
    </React.Fragment>
  );
}

const InterviewList = ({ filteredData }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableRows, setTableRows] = useState(filteredData.data.data);

  const handleToggle = (row) => {
    const updatedRows = [...tableRows];
    const rowIndex = updatedRows.findIndex((r) => r.id === row.id);

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



  console.log(filteredData);

  if (!filteredData?.data?.data?.length) {
    console.log("working");
    return <h6 style={{ fontSize: '1.2rem' }}>No interview Here</h6>
  }

  return (
    <StyledInterviews>
      <TableContainer component={Paper} className="tableBox">
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Jd_id</TableCell>
              <TableCell>Test_id</TableCell>
              <TableCell>Date of Creation</TableCell>
              <TableCell>Score</TableCell>
              <TableCell align="center">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData?.data?.data?.map((row, index) => (
              row.status === 'COMPLETED' ? (
                <Row key={index} row={row} isSelected={selectedRow === index} onToggle={handleToggle} />
              ) : (
                <Row key={index} row={row} isSelected={selectedRow === index} />
              )
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledInterviews>
  );
};

export default InterviewList;

const StyledInterviews = styled.div`
  display: flex;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

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
    padding: 0.4rem 0.7rem;
    border: none;
    color: var(--white);
    font-size: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .selected {
    background-color: #d9fbf9;
    color: white;
  }
`;
