import React, { useEffect, useRef, useState } from "react";
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
import actionDot from '../../../../assets/icons/threeDot.png'
import moveNextRoundIcon from '../../../../assets/icons/moveNextRoundIcon.png'
import putHoldIcon from '../../../../assets/icons/putOnHoldIcon.png'
import moveOutIcon from '../../../../assets/icons/moveOutInterviewIcon.png'
import { getAllTrackers } from "../../../../functions/api/interview/getAllTrackers";
import { useSelector } from "react-redux";

function Row(props) {
  const { row, index } = props;

  const dropdownRef = useRef(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);

  const openDropdown = (index) => {
    setOpenDropdownIndex(index);
  };


  const closeAllDropdowns = () => {
    setOpenDropdownIndex(-1);
  };

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
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.contact}</TableCell>
        <TableCell align="center">{row.jdId}</TableCell>
        <TableCell align="center">{row.recruiter}</TableCell>
        <TableCell align="center">{row.hiringManager}</TableCell>
        <TableCell align="center">{row.round}</TableCell>
        <TableCell align="center">{row.interviewName}</TableCell>
        <TableCell align="center">{row.status}</TableCell>
        <TableCell component="th" scope="row" align="center">
          <BoxRow>
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
              <span className="dropdownText"><img src={moveNextRoundIcon} /> Move to next Round</span>
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
  const [tableRows,setTableRows] = useState([]);
  const [searchParams, setSearchParams] = useState('');
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);

  useEffect(() => {
    const getData = async () => {
      const res = await getAllTrackers(accessToken,clientCode);
      let array = res?.data?.data;
     if(array){ 
      const finalResult = array.reduce((acc,it) => {
        let current = it.interview;
        let jdInfoReq = {
           name: current?.userName,
           contact: current?.userContact,
           jdId: it.jdId,
           recruiter: current?.recruiter,
           hiringManager: current?.hiringManager,
           round: current?.stage,
           interviewName: current?.interviewName,
           status: current?.status
        }
  
        return [...acc,jdInfoReq];
      },[]);
    
      setTableRows(finalResult);
    }

    }

   

    getData();
  }, [])

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
          <span className="title">Manage Interview Flow</span>
        </div>

        <SearchBarContainer>
          <div className='skillBox'>
            <img src={searchBlack} />
            <input
              className='skillInput'
              type="text"
              placeholder="Search"
              value={searchParams}
              onChange={handleSearchParams}
            />
          </div>
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Contact</TableCell>
              <TableCell align="center">JD ID</TableCell>
              <TableCell align="center">Recruiter</TableCell>
              <TableCell align="center">Hiring Manager</TableCell>
              <TableCell align="center">Current Round</TableCell>
              <TableCell align="center">Interview Name</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
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

export default InterviewFlow



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

