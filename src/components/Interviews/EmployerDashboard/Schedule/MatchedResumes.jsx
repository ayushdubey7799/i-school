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
import LogoHeader from "../../../commonComponents/LogoHeader";
import styled from "styled-components";
import ModalHOC from "../../SeekerDashboard/ModalHOC";
import ScheduleModal from "./ScheduleModal";

function Row(props) {
  const { row, isSelected, onToggle,handleSelectArray } = props;
  const [selected,setSelected] = useState(false);

  const handleSelectChange = (id) => {
    if(selected){
      handleSelectArray(id,false)
    }
    else{
      handleSelectArray(id,true)
    }
    setSelected((prev) => !prev)

  }


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
        <TableCell component="th" scope="row">

        </TableCell>
        <TableCell component="th" scope="row">

        </TableCell>{" "}
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell>{row.score}</TableCell>
        <TableCell align="center">  <input
          type="checkbox"
          checked={selected}
          onChange={() => handleSelectChange(row.resumeId)}
        /></TableCell>
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
  const { jdId } = useParams();
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableRows, setTableRows] = useState([]);
  const [selectedArray,setSelectedArray] = useState([]);
  const [open,setOpen] = useState(false);

  useEffect(() => {
    async function getData() {
      const resObj = await getMatches(jdId);
      if (resObj) setTableRows(resObj.data[0].records.data);
    }
    getData()
  }, [])
  console.log(tableRows)

  const handleSelectArray = (id,action) => {
    if(action){
      setSelectedArray((prev) => [...prev,id]);
    }
    else{
      setSelectedArray((prev) => [...prev].filter((item) => item != id))
    }
  }

  const handleToggle = (row) => {
    const updatedRows = [...tableRows];
    const rowIndex = updatedRows.findIndex((r) => r.resumeId === row.resumeId);
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

  console.log(selectedArray);
  return (
    <StyledDiv>
      <LogoHeader/>

      <Content>
        <TableContainer component={Paper} className="tableBox">
        <ModalHOC openNewInterviewModal={open} setOpenNewInterviewModal={setOpen} Component={ScheduleModal} array={selectedArray} />

          <h3 style={{ paddingLeft: "3rem" }}>Matched Resumes for Jd Id: {jdId}</h3>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
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
            <TableBody className="tableBody">
              {tableRows?.map((row, index) => (
                <Row key={row.resumeId} row={row} isSelected={selectedRow === index} onToggle={handleToggle} handleSelectArray={handleSelectArray}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <button onClick={() => setOpen(true)}>Schedule</button>
      </Content>
    </StyledDiv>
  );
}


const StyledDiv = styled.div`
display: flex;
flex-direction: column;


`

const Content = styled.div`
margin: 6rem 0% 2rem 0%;
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

`
