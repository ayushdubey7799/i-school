import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { jds } from '../../../../utils/contantData';
import editIcon from '../../../../assets/icons/edit.png'
import deleteIcon from '../../../../assets/icons/delete.png'


function Row(props) {
    const { row } = props;

    return (
        <React.Fragment>
            <TableRow
                sx={{ "& > *": { borderBottom: "unset" } }}>
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
                <TableCell component="th" scope="row" align="center">
                    ...
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
                        <img src={editIcon} style={{ width: '1.1rem', height: '1.1rem', cursor: 'pointer' }} />
                        <img src={deleteIcon} style={{ width: '1.1rem', height: '1.1rem', cursor: 'pointer' }} />
                    </div>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const ManageReqs = () => {
    const [tableRows, setTableRows] = useState([]);

    useEffect(() => {
        setTableRows(jds);
    }, [jds]);


    return (
        <Container1>
            <StyledBox>
                <TableContainer component={Paper} className="tableBox">
                    <h3 style={{ paddingLeft: "3rem" }}>Manage Reqs</h3>
                    <Table aria-label="collapsible table">
                        <TableHead className="tableHead">
                            <TableRow>
                                <TableCell align='center'>JD_ID</TableCell>
                                <TableCell align='center'>Req_ID</TableCell>
                                <TableCell align='center'>Date of Creation</TableCell>
                                <TableCell align='center'>Recruiter</TableCell>
                                <TableCell align='center'>Hiring Manager</TableCell>
                                <TableCell align='center'>Edit/Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="tableBody">
                            {jds?.map((row, index) => (
                                <Row key={row.id} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </StyledBox>
        </Container1>
    );
};

export default ManageReqs;


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

