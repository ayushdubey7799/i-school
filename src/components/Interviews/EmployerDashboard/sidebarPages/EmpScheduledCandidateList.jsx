import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import ModalHOC from "../../SeekerDashboard/ModalHOC";
import { data as candidateLists } from "../../../../utils/contantData";
import deleteIcon from '../../../../assets/icons/delete.png'
import searchBlack from '../../../../assets/icons/searchBlack.png'
import visibleIcon from '../../../../assets/icons/visible.png'
import shareIcon from '../../../../assets/icons/share.png'
import CommonDrawer from "../../../commonComponents/CommonDrawer";
import SeekerInterviewDetails from "../../SeekerDashboard/sidebarPages/SeekerInterviewDetails";

function Row(props) {
  const { row, index } = props;

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell align="center">...</TableCell>
        <TableCell align="center">...</TableCell>
        <TableCell align="center">...</TableCell>
        <TableCell align="center">...</TableCell>
        <TableCell component="th" scope="row" align="center">
          <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', alignItems: 'center' }}>
            <CommonDrawer toggleDrawer={toggleDrawer} state={state} component={<SeekerInterviewDetails />} />
            <img src={visibleIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} onClick={toggleDrawer('right', true)} />
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const EmpScheduledCandidateList = ({ setPage }) => {
  const [searchParams, setSearchParams] = useState('');
  const [sortParams, setSortParams] = useState('');

  const handleSortParams = (e) => {
    setSortParams(e.target.value);
  }

  const handleSearch = () => {
    console.log("Search");
  }

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  }


  return (
    <Content>
      <TableContainer component={Paper} className="tableBox">
        <div className="titleBox">
          <span className="title">Candidate Lists for JD ID:- ...</span>
          <button className="btn1" onClick={() => setPage(1)}>Back to Scheduled Interviews</button>
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

          <div className='selectBox'>
            <select value={searchParams} onChange={handleSearchParams} className='selectInput'>
              <option value="" disabled selected>Filter by</option>
              <option value="CandidateName">Candidate Name</option>
              <option value="Email">Email</option>
              <option value="Contact">Contact</option>
              <option value="Status">Status</option>
            </select>
            <select value={sortParams} onChange={handleSortParams} className='selectInput'>
              <option value="" disabled selected>Sort by</option>
              <option value="CandidateName">Candidate Name</option>
              <option value="Email">Email</option>
              <option value="Contact">Contact</option>
              <option value="Status">Status</option>
            </select>
          </div>
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center">Candidate Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Contact</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {candidateLists?.map((row, index) => (
              <Row key={row.id} row={row} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Content>
  )
}

export default EmpScheduledCandidateList



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


  .selectBox {
    width: 30%;
    display: flex;
    gap: 1rem;
  }

  .selectInput {
    padding: 0.7rem 0.5rem;
    border: none;
    background-color: #ececec;
    border-radius: 0.3rem;
    font-size: 0.9rem;
    width: 50%;
    outline: none;
    color: #757B80;

    option {
    font-size: 0.8rem;
    font-weight: 400;
  }
  }

`

const Content = styled.div`
margin: 1rem 0% 2rem 0%;
width: 100%;
padding: 0 1.5%;
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

.btn1 {
    padding: 0.5rem 1rem;
    background-color: var(--lightOrange);
    border: none;
    color: var(--white);
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    
  }

`


