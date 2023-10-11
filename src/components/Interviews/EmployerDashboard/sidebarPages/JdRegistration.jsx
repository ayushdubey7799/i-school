import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalHOC from '../../SeekerDashboard/ModalHOC';
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

import EmployerDetails from '../EmployerDetails';
import JdDetails from '../../../../pages/JdDetails';
import JdForm from '../JdForm';
import { jds } from '../../../../utils/contantData';
import attachIcon from '../../../../assets/icons/attach.png'


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
        <TableCell component="th" scope="row" align='center'>
          {row.id}
        </TableCell>
        <TableCell component="th" scope="row" align='center'>
          ...
        </TableCell>{" "}
        <TableCell component="th" scope="row" align="center">
          ...
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          ...
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={row.open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body1" gutterBottom>
                <div style={{ fontSize: "0.7rem" }}>
                  <b>Description</b>: {row.jobDescription}
                </div>
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const JdRegistration = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    setTableRows(jds);
  }, [jds]);



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

  return (
    <Container1>
      <ModalHOC openNewInterviewModal={openBasic} setOpenNewInterviewModal={setOpenBasic} Component={JdForm} />
      <Component>
        <span>Add new Job Description</span>
        <EditButton onClick={() => setOpenBasic(true)}>Create</EditButton>
      </Component>

        <StyledBox>
          <TableContainer component={Paper} className="tableBox">
            <h3 style={{ paddingLeft: "3rem" }}>Job Descriptions</h3>
            <Table aria-label="collapsible table">
              <TableHead className="tableHead">
                <TableRow>
                  <TableCell />
                  <TableCell align='center'>JD_ID</TableCell>
                  <TableCell align='center'>Test_ID</TableCell>
                  <TableCell align='center'>Date of Creation</TableCell>
                  <TableCell align='center'>Created By</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="tableBody">
                {jds?.map((row, index) => (
                  <Row key={row.id} row={row} isSelected={selectedRow === index} onToggle={handleToggle} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledBox>
    </Container1>
  );
};

export default JdRegistration;


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
    padding: 0.4rem 0.7rem;
    border: none;
    color: var(--white);
    font-size: 1rem;
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



const Container1 = styled.div`
  width:90%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Component = styled.div`
  width: 100%; 
  border: 0.08rem solid #ccc;
  padding: 1rem 1rem;;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  font-size: 0.8rem;
  background-color: var(--white);

`;

const EditButton = styled.button`
  background-color: var(--lightOrange);
  border: 0.1rem solid var(--lightOrange);
  cursor: pointer;
  color: var(--white);
  text-decoration: none;
  font-size: 1rem;
  margin-right: 0.6rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


