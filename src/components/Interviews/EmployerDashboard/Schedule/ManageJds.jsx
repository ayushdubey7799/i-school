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
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Match from "./Match";
import searchBlack from '../../../../assets/icons/searchBlack.png'
import { Pagination, PaginationSizeFilter } from "../../../commonComponents/Pagination";

function Row(props) {
  const { row, isSelected, onToggle, index } = props;

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        className={`${index % 2 == 1 ? 'colored' : ''} ${isSelected ? "selected" : ''}`}>
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
          {row.createdAt?.slice(0, 10)}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.recruiter}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.hiringManager}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          <Link to={`/schedule/matches/${row.jdId}`} className="btn">View Profile</Link>
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

  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);

  const handleSizeChange = (event) => {
    setSize(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handlePageChange = (change) => {
    if (change) {
      setPage((prev) => prev + 1);
    } else {
      setPage((prev) => prev - 1);
    }
  };


  const handleSearch = () => {
    console.log("Search");
  }

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
        <span className='mainTitle'>
          <span>Active Job Descriptions</span>
          <Button onClick={() => navigate('/dashboard/employer')}>Back to Dashboard</Button>
        </span>
          <SearchBarContainer>
            <div className="skillBox">
              <img src={searchBlack} />
              <input
                className="skillInput"
                type="text"
                placeholder="Search"
              />
            </div>
          </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell />
              <TableCell align="center">JD ID</TableCell>
              <TableCell align="center">Req ID</TableCell>
              <TableCell align="center">No of Profiles available</TableCell>
              <TableCell align="center">Date of Creation</TableCell>
              <TableCell align="center">Recruiter</TableCell>
              <TableCell align="center">Hiring Manager</TableCell>
              <TableCell align="center">View Profiles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {tableRows?.filter(item => item.jdId).map((row, index) => (
              <Row key={row.jd_id} row={row} isSelected={selectedRow === index} onToggle={handleToggle} index={index} />
            ))}
          </TableBody>
        </Table>

        <div className="paginationBox">
          <PaginationSizeFilter size={size} handleSizeChange={handleSizeChange} />
          <Pagination total={total} size={size} page={page} handlePageChange={handlePageChange} />
        </div>

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

  .colored {
    background-color: #ececec;
  }

  .paginationBox {
    display: flex;
    justify-content: end;
    gap: 2rem;
    margin: 1rem 3rem 1.5rem 0;
  }
  

  .mainTitle {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1rem 0 1rem 3rem;
    width: calc(98% - 3rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
}


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
    background-color: #d1fff0;
    width: 100%;
  }

  .tableBody {
    width: 100%;
  }

  
`;


const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--lightOrange);
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  align-self: center;
  font-size: 0.9rem;
  font-weight: 500;
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

`
