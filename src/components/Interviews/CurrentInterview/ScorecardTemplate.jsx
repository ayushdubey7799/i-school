import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
  const { row } = props;
  let expected = "";
 if(row.summaryJson)expected = JSON.parse(row.summaryJson)["Expected answer"].expected_answer;
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
          {row.question}
        </TableCell>
        <TableCell align="right">{row.skipped?"0":(row.processingState == "NEW" || row.processingState == "PROCESSING"?"Evaluating...":row.score)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={row.open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1}}>
              <Typography variant="body1" gutterBottom>
                <strong>Your Answer:</strong> <div style={{fontSize: "0.7rem"}}>{row.answer?row.answer:"skipped"}</div>
                <br/>
                <br/>
                <strong>Expected Answer:</strong> <div style={{fontSize: "0.7rem"}}>{row.expectedAnswer?row.expectedAnswer:"Not Available"}</div>
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ScorecardTemplate({rows}) {
  const [tableRows, setTableRows] = useState(rows);

  const handleToggle = (row) => {
    const updatedRows = [...tableRows];
    const rowIndex = updatedRows.findIndex((r) => r.question === row.question);
    updatedRows[rowIndex].open = !updatedRows[rowIndex].open;
    setTableRows(updatedRows);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Question</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((row) => (
            <Row key={row.question} row={row} onToggle={handleToggle} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
