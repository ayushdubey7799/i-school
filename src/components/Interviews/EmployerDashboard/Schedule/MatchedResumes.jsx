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
import { getMatches } from "../../../../functions/api/employers/match/getResumes";
import { useParams } from "react-router";

function Row(props) {
  const { row } = props;
  
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => props.onToggle(row)}
          >
            {row.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          
        </TableCell>
        <TableCell component="th" scope="row">
         
        </TableCell>{" "}
        {/* <TableCell component="th" scope="row">
          {row["Date of creation"]}
        </TableCell>{" "}
        <TableCell component="th" scope="row">
          {row["Test Id"]}
        </TableCell>{" "} 
        <TableCell component="th" scope="row" align="center">
          {row["No of profiles available"]}
        </TableCell>*/}
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell>{row.score}</TableCell>
        <TableCell align="center">{row.resumeId}</TableCell>
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

export default function MatchedResumes() {
    const {jdId} = useParams();
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    async function getData(){
     const resObj = await getMatches(jdId);
     if(resObj)setTableRows(resObj.data[0].records.data);
    }
    getData()
 },[])
console.log(tableRows)
  const handleToggle = (row) => {
    const updatedRows = [...tableRows];
    const rowIndex = updatedRows.findIndex((r) => r.resumeId === row.resumeId);
    updatedRows[rowIndex].open = !updatedRows[rowIndex].open;
    setTableRows(updatedRows);
  };
  // console.log(rows.data.data.tableRows);
  return (
    <TableContainer component={Paper}>
        <h3 style={{paddingLeft: "3rem"}}>Matched Resumes for Jd Id: {jdId}</h3>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Match Percentage</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Score</TableCell>

            <TableCell align="center">Resume ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows?.map((row) => (
            <Row key={row.jd_id} row={row} onToggle={handleToggle} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
