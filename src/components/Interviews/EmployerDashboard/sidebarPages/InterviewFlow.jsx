import React, { useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled, { css } from 'styled-components';
import actionDot from '../../../../assets/icons/threeDot.png'
import moveNextRoundIcon from '../../../../assets/icons/moveNextRoundIcon.png'
import putHoldIcon from '../../../../assets/icons/putOnHoldIcon.png'
import moveOutIcon from '../../../../assets/icons/moveOutInterviewIcon.png'
import { getAllTrackers } from "../../../../functions/api/interview/getAllTrackers";
import { useSelector } from "react-redux";
import { addResumes } from "../../../../slices/invitationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import TableSearchBar from "../commonComponents/TableSearchBar";
function Row(props) {
  const { row, rowsLength, index } = props;

  const dropdownRef = useRef(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openDropdown = (index) => {
    setOpenDropdownIndex(index);
  };


  const closeAllDropdowns = () => {
    setOpenDropdownIndex(-1);
  };

  const handleMove = () => {
    dispatch(addResumes([row.resumeId, row.jdId]));
    navigate(`/schedule/invite/${row.jdId}`);
  }

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell align="center" className="tableCell">{row.name}</TableCell>
        <TableCell align="center" className="tableCell">{row.contact}</TableCell>
        <TableCell align="center" className="tableCell">{row.jdId.toUpperCase()}</TableCell>
        <TableCell align="center" className="tableCell">{row.recruiter}</TableCell>
        <TableCell align="center" className="tableCell">{row.hiringManager}</TableCell>
        <TableCell align="center" className="tableCell">{row.round}</TableCell>
        <TableCell align="center" className="tableCell">{row.interviewName}</TableCell>
        <TableCell align="center" className="tableCell">{row.status}</TableCell>
        <TableCell component="th" scope="row" align="center" className="tableCell">
          <BoxRow isLast={index >= rowsLength - 2}>
            <img src={actionDot} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer' }} className={`three-dots ${openDropdownIndex === index ? "active" : ""}`}
              onClick={() => {
                if (openDropdownIndex === index) {
                  closeAllDropdowns();
                } else if (openDropdownIndex !== index) {
                  closeAllDropdowns();
                  openDropdown(index);
                }
              }}
            />
            <div
              className={`dropdown-content ${openDropdownIndex === index ? "open" : ""}`} ref={dropdownRef}
            >
              <span className="dropdownText" onClick={handleMove}><img src={moveNextRoundIcon} /> Move to next Round</span>
              <span className="dropdownText"><img src={putHoldIcon} /> Put on Hold</span>
              <span className="dropdownText"><img src={moveOutIcon} /> Move out from Interview</span>
            </div>
          </BoxRow>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const InterviewFlow = ({ setPage }) => {
  const [tableRows, setTableRows] = useState([]);
  const [searchParams, setSearchParams] = useState('');
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const getData = async () => {
      const res = await getAllTrackers(accessToken, clientCode);
      let array = res?.data?.data;
      if (array) {
        const finalResult = array.reduce((acc, it) => {
          let current = it.interview;
          let jdInfoReq = {
            name: current?.userName,
            contact: current?.userContact,
            jdId: it.jdId,
            recruiter: current?.recruiter,
            hiringManager: current?.hiringManager,
            round: it?.stage,
            interviewName: current?.interviewName,
            status: current?.status,
            resumeId: current.resumeId
          }

          return [...acc, jdInfoReq];
        }, []);

        setTableRows(finalResult);
      }

    }



    getData();
  }, [])

  const handleSearch = () => {
    
  }

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  }


  return (
    <Content>
      <TableContainer component={Paper} className="tableBox">
        <div className="titleBox">
          <span className="title">Manage Interview Flow</span>
        </div>

        <SearchBarContainer>
          <TableSearchBar value={searchValue} setValue={setSearchValue} />
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center" className="tableCell">Name</TableCell>
              <TableCell align="center" className="tableCell">Contact</TableCell>
              <TableCell align="center" className="tableCell">JD ID</TableCell>
              <TableCell align="center" className="tableCell">Recruiter</TableCell>
              <TableCell align="center" className="tableCell">Hiring Manager</TableCell>
              <TableCell align="center" className="tableCell">Current Round</TableCell>
              <TableCell align="center" className="tableCell">Interview Name</TableCell>
              <TableCell align="center" className="tableCell">Status</TableCell>
              <TableCell align="center" className="tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {tableRows?.map((row, index) => (
              <Row key={row.id} rowsLength={tableRows.length} row={row} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Content>
  )
}

export default InterviewFlow



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
width: 94%;
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

  &::-webkit-scrollbar {
    width: 0rem;
}


  &::-webkit-scrollbar-thumb {
    width: 0rem;
}

& {
  scrollbar-width: none;
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


`


const BoxRow = styled.div`
  position: relative;
  display: inline-block;

.three-dots {
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--white);
  box-shadow: 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 10%;
  border-radius: 0.5rem;
  font-size: 0.7rem;
  min-width: 13rem;
  justify-content: start;
  padding: 0.5rem 0.5rem;

  ${(props) =>
    props.isLast &&
    css`
      bottom: 1.4rem;
      right: 10%;
    `}s
}


.dropdown-content span {
  padding: 0.3rem 0.8rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color);
  cursor: pointer;
}


.dropdown:hover .dropdown-content, .dropdown-content.open {
  display: block;
}

.threeDotIcon {
  width: 0.6rem;
  height: 0.6rem;
  cursor: pointer;
  border: 0.08rem solid grey;
  padding: 0.15rem;
  border-radius: 0.2rem;
}


.dropdownText {
  

  img {
  width: 0.6rem;
  height: 0.6rem;
  cursor: pointer;
  border: 0.08rem solid grey;
  padding: 0.15rem;
  border-radius: 0.2rem;
  }
}
`

