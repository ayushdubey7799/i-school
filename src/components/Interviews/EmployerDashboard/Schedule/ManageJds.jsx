import React, { useState } from "react";
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
          {row.jd_id}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.req_id}
        </TableCell>{" "}
        <TableCell component="th" scope="row">
          {row["Date of creation"]}
        </TableCell>{" "}
        <TableCell component="th" scope="row">
          {row["Test Id"]}
        </TableCell>{" "}
        <TableCell component="th" scope="row" align="center">
          {row["No of profiles available"]}
        </TableCell>
        <TableCell>{row.score}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={row.open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body1" gutterBottom>
                {/* <strong>Your Answer:</strong> <div style={{fontSize: "0.7rem"}}>{row.answer?row.answer:"skipped"}</div>
                <br/>
                <br/>
                <strong>Expected Answer:</strong> <div style={{fontSize: "0.7rem"}}>{row.expectedAnswer?row.expectedAnswer:"Not Available"}</div> */}
                <div style={{ fontSize: "0.7rem" }}>{row["description"]}</div>
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ManageJds({ rows }) {
  const [tableRows, setTableRows] = useState(rows);

  const handleToggle = (row) => {
    const updatedRows = [...tableRows];
    const rowIndex = updatedRows.findIndex((r) => r.jd_id === row.jd_id);
    updatedRows[rowIndex].open = !updatedRows[rowIndex].open;
    setTableRows(updatedRows);
  };

  return (
    <TableContainer component={Paper}>
        <h3 style={{paddingLeft: "3rem"}}>Active Job Descriptions</h3>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Jd_id</TableCell>
            <TableCell>Req_id</TableCell>
            <TableCell>Date of Creation</TableCell>
            <TableCell>Test_id</TableCell>
            <TableCell align="center">No of Profiles available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((row) => (
            <Row key={row.jd_id} row={row} onToggle={handleToggle} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
