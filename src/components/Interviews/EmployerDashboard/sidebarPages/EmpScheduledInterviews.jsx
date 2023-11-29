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
import { data as interviews } from "../../../../utils/contantData";
import searchBlack from '../../../../assets/icons/searchBlack.png'
import { useSelector } from "react-redux";

function Row(props) {
  const { row, index, setPage } = props;

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell align="center">{row.jdId}</TableCell>
        <TableCell align="center">{row.totalCandidates}</TableCell>
        <TableCell align="center">{row.closed}</TableCell>
        <TableCell align="center">{row.inProgress}</TableCell>
        <TableCell align="center">{row.firstStage?row.firstStage:'0'}</TableCell>
        <TableCell align="center">{row.secondStage?row.secondStage:'0'}</TableCell>
        <TableCell align="center">{row.thirdStage?row.thirdStage:'0'}</TableCell>
        <TableCell align="center">...</TableCell>
        <TableCell component="th" scope="row" align="center">
          <button className="btn" onClick={() => setPage({index: 2,jdId: row.jdId})}>View Details</button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const EmpScheduledInterviews = ({ setPage }) => {
  const [searchParams, setSearchParams] = useState('');
  const [sortParams, setSortParams] = useState('');
  const [tableRows,setTableRows] = useState([]);
  const jdData = useSelector(state => state?.jd?.activeJds);

  useEffect(() => {
    if(jdData?.length){
      const finalResult = jdData.reduce((acc,it) => {
            let jdInfoReq = {
               jdId: it.jdId,
               totalCandidates: it.metrics?.find((item) => item.type == 'TOTAL')?.count,
               closed: it.metrics?.find((item) => item.type == 'CLOSED')?.count,
               inProgress: it.metrics?.find((item) => item.type == 'PROGRESS')?.count,
               firstStage: it.metrics?.find((item) => item.stage == 1)?.count,
               secondStage: it.metrics?.find((item) => item.stage == 2)?.count,
               thirdStage: it.metrics?.find((item) => item.stage == 3)?.count,
            }

            return [...acc,jdInfoReq];
      },[])

      setTableRows(finalResult);
    }
  },[jdData])


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
          <span className="title">Scheduled Interviews</span>
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
              <option value="JDID">JD ID</option>
            </select>
            <select value={sortParams} onChange={handleSortParams} className='selectInput'>
              <option value="" disabled selected>Sort by</option>
              <option value="JDID">JD ID</option>
              <option value="TotalInterviews">Total Candidates</option>
              <option value="Completed">Closed</option>
              <option value="InProgress">In Progress</option>
              <option value="FirstRound">First Round</option>
              <option value="SecondRound">Second Round</option>
              <option value="ThirdRound">Third Round</option>
              <option value="HRRound">HR Round</option>
            </select>
          </div>
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center">JD ID</TableCell>
              <TableCell align="center">Total Candidates</TableCell>
              <TableCell align="center">Closed</TableCell>
              <TableCell align="center">In Progress</TableCell>
              <TableCell align="center">First Round</TableCell>
              <TableCell align="center">Second Round</TableCell>
              <TableCell align="center">Third Round</TableCell>
              <TableCell align="center">HR Round</TableCell>
              <TableCell align="center">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {tableRows?.map((row, index) => (
              <Row key={row.id} row={row} index={index} setPage={setPage} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Content>
  )
}

export default EmpScheduledInterviews



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
