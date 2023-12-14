import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import searchBlack from '../../../../assets/icons/searchBlack.png'
import fillFeedbackIcon from '../../../../assets/icons/fillFeedbackIcon.png'
import visibleIcon from '../../../../assets/icons/visible.png'
import CommonDrawer from "../../../commonComponents/CommonDrawer";
import SeekerInterviewDetails from "../../SeekerDashboard/sidebarPages/SeekerInterviewDetails";
import { getAllTrackers } from "../../../../functions/api/interview/getAllTrackers";
import { useSelector } from "react-redux";
import TableSearchBar from "../commonComponents/TableSearchBar";

function Row(props) {
  const { row, jdId, index } = props;



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
        <TableCell align="center" className="tableCell">{row?.interview?.userName}</TableCell>
        <TableCell align="center" className="tableCell">{row?.interview?.userContact}</TableCell>
        <TableCell align="center" className="tableCell">...</TableCell>
        <TableCell align="center" className="tableCell">...</TableCell>
        <TableCell align="center" className="tableCell">{row?.interview?.stage}</TableCell>
        <TableCell align="center" className="tableCell">...</TableCell>
        <TableCell component="th" scope="row" align="center" className="tableCell">
          <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', alignItems: 'center' }}>
            <CommonDrawer toggleDrawer={toggleDrawer} state={state} component={<SeekerInterviewDetails jdId={jdId}/>} />
            <img src={visibleIcon} className="icon" onClick={toggleDrawer('right', true)} />
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const EmpScheduledCandidateList = ({ page, setPage }) => {
  const [tableRows, setTableRows] = useState([]);
  const [total, setTotal] = useState(0);
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const getData = async () => {
      const res = await getAllTrackers(accessToken, clientCode, page.jdId);
      setTotal(res?.data?.total);
      setTableRows(res?.data?.data);
    }

    getData();
  }, []);


  const handleSearch = () => {
    
  }


  return (
    <Content>
      <TableContainer component={Paper} className="tableBox">
        <div className="titleBox">
          <span className="title">Candidate Lists for JD ID:- {page.jdId.toUpperCase()}</span>
          <button className="btn1" onClick={() => setPage({ index: 1, jdId: null })}>Back to Scheduled Interviews</button>
        </div>

        <SearchBarContainer>
          <TableSearchBar value={searchValue} setValue={setSearchValue} />
          <span className="headerText">Total Candidates: {total}</span>
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center" className="tableCell">Candidate Name</TableCell>
              <TableCell align="center" className="tableCell">Contact</TableCell>
              <TableCell align="center" className="tableCell">Role</TableCell>
              <TableCell align="center" className="tableCell">Interview Link</TableCell>
              <TableCell align="center" className="tableCell">Current Round</TableCell>
              <TableCell align="center" className="tableCell">Comment</TableCell>
              <TableCell align="center" className="tableCell">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {tableRows?.map((row, index) => (
              <Row key={row.id} row={row} jdId={page.jdId} index={index} />
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
  margin: 0.5rem auto;
  background-color: var(--white);
  border-radius: 0.5rem;;
  padding: 0rem 1rem;
  gap: 1rem;

  .headerText {
    font-size: 0.9rem;
    font-weight: 600;
  }


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
font-family: var(--font);
color: var(--color);

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



.btn1 {
    padding: 0.5rem 1rem;
    background-color: var(--lightOrange);
    border: none;
    color: var(--white);
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    font-family: var(--font);
  }

`


