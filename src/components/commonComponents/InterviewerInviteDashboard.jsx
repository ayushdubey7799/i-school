import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import TableSearchBar from "../Interviews/EmployerDashboard/commonComponents/TableSearchBar";
import fillFeedbackIcon from '../../assets/icons/fillFeedbackIcon.png'
import visibleIcon from '../../assets/icons/visible.png'
import { jds as inviteLists } from "../../utils/contantData";


function Row(props) {
    const { row, index } = props;

    return (
        <React.Fragment>
            <TableRow
                sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
                <TableCell align="center" className="tableCell">...</TableCell>
                <TableCell align="center" className="tableCell">...</TableCell>
                <TableCell align="center" className="tableCell">...</TableCell>
                <TableCell component="th" scope="row" align="center" className="tableCell">
                    <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={visibleIcon} className="icon" />
                    </div>
                </TableCell>
                <TableCell align="center" className="tableCell"><img src={fillFeedbackIcon} className="icon" /></TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const InterviewerInviteDashboard = () => {
    const [tableRows, setTableRows] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setTableRows(inviteLists);
    }, [inviteLists])

    const handleSearch = () => {
        console.log("Search");
    }

    console.log(tableRows);
    return (
        <Content>
            <TableContainer component={Paper} className="tableBox">
                <div className="titleBox">
                    <span className="title">Invited Candidates List</span>
                </div>

                <SearchBarContainer>
                    <TableSearchBar value={searchValue} setValue={setSearchValue} />
                </SearchBarContainer>
                <Table aria-label="collapsible table">
                    <TableHead className="tableHead">
                        <TableRow>
                            <TableCell align="center" className="tableCell">Name</TableCell>
                            <TableCell align="center" className="tableCell">Email</TableCell>
                            <TableCell align="center" className="tableCell">Contact</TableCell>
                            <TableCell align="center" className="tableCell">Resume</TableCell>
                            <TableCell align="center" className="tableCell">Feedback</TableCell>
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

export default InterviewerInviteDashboard


const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  margin: 0.5rem auto;
  background-color: var(--white);
  border-radius: 0.5rem;;
  padding: 0rem 1rem;
  gap: 1rem;

`

const Content = styled.div`
margin: 1rem 0% 2rem 0%;
width: 98%;
padding: 0 1%;
display: flex;
flex-direction: column;
align-items: center;


.icon {
    width: 0.8rem;
    height: 0.8rem;
    cursor: pointer;
    border: 0.075rem solid grey;
    padding: 0.3rem;
    border-radius: 0.3rem;
  }

.colored {
  background-color: #ececec;
}

.tableBox {
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.20);
  border-radius: 0.5rem;
  padding-top: 1rem;


  .title {
    padding-left: 1.2rem;
    font-size: 0.9rem;
    font-weight: 600;
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

  .tableCell {
    font-size: 0.9rem;
    font-weight: 500;
    font-family: var(--font);
    color: var(--color);
  }
  
}

.tableBody {
  width: 100%;

  .tableCell {
    font-size: 0.8rem;
    font-weight: 400;
    font-family: var(--font);
    color: var(--color);
  }
}


.btn {
  background-color: var(--lightOrange);
  border: none;
  color: var(--white);
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

}

`
