import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { data as interviews } from "../../../../utils/contantData";
import searchBlack from '../../../../assets/icons/searchBlack.png'

function Row(props) {
    const { row, index } = props;

    return (
        <React.Fragment>
            <TableRow
                sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const UpcomingInterview = () => {
    const [tableRows, setTableRows] = useState([]);

    useEffect(() => {
        setTableRows(interviews)
    }, [interviews])

    const handleSearch = () => {
        console.log("Search");
    }


    return (
        <Content>
            <TableContainer component={Paper} className="tableBox">
                <div className="titleBox">
                    <span className="title">Upcoming Interviews</span>
                </div>

                <SearchBarContainer>
                    <div className='skillBox'>
                        <img src={searchBlack} />
                        <input
                            className='skillInput'
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </SearchBarContainer>
                <Table aria-label="collapsible table">
                    <TableHead className="tableHead">
                        <TableRow>
                            <TableCell align="center">JD ID</TableCell>
                            <TableCell align="center">Candidate Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Contact</TableCell>
                            <TableCell align="center">Scheduled Date/Time</TableCell>
                            <TableCell align="center">Recruiter</TableCell>
                            <TableCell align="center">Req ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="tableBody">
                        {tableRows?.map((row, index) => (
                            <Row key={row.id} row={row} index={index} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Content>
    )
}

export default UpcomingInterview


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

const Content = styled.div`
margin: 1rem 0% 2rem 0%;
width: 98%;
padding: 0 1%;
display: flex;
flex-direction: column;
align-items: center;


.colored {
  background-color: #ececec;
}

.tableBox {
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.20);
  border-radius: 0.5rem;
  padding-top: 1rem;


  .title {
    padding-left: 1.2rem;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .titleBox {
  width: 99%; 
  padding: 0.5rem 0rem;;
  display: flex;
  align-items: center;
  justify-content: space-between;
  }


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
  background-color: #d1fff0;
  width: 100%;
}

.tableBody {
  width: 100%;
}


.btn {
  padding: 0.3rem 0.2rem;
  background-color: var(--lightOrange);
  border: none;
  color: var(--white);
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  
}

`
