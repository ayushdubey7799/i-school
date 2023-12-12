import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import threeDot from '../../../assets/icons/threeDot.png'
import { closeReq } from '../../../functions/api/employers/closeReqs';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import Success from '../../commonComponents/infoDialog/Success';
import { setJdTrigger } from "../../../slices/jdSlice";

function Row(props) {
  const { row, rowsLength, index, id } = props;
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);
  const jdTrigger = useSelector((state) => state.jd.JdTrigger);
  const dropdownRef = useRef(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);

  const [errorMsg, setErrorMsg] = useState('');
  const [errorPopup, setErrorPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleErrorPopUpClose = () => {
    setErrorPopup(false);
  }

  const handleSuccessPopUpClose = () => {
    setSuccessPopup(false);
  }

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

  const handleReqStatus = async (change) => {
    try {
      const res = await closeReq(id, change, row.reqNumber, accessToken, clientCode);
      if (res) {
        setSuccessPopup(true);
        dispatch(setJdTrigger(!jdTrigger));
      }

    } catch (error) {
      const errMsg = error.response.data.notify.message || "An error occurred. Please try again."
      setErrorMsg(errMsg);
      setErrorPopup(true);
    }
  };



  return (
    <React.Fragment>
      {errorPopup && <Error handleClose={handleErrorPopUpClose} open={errorPopup} msg={errorMsg} handleRetryFunc={() => handleReqStatus(true)} />}
      {successPopup &&
        <Success
          handleClose={handleSuccessPopUpClose}
          open={successPopup}
          msg={`Req number ${row.reqNumber} successfully closed`} />
      }
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell component="th" scope="row" align='center' className='tableCell'>
          {row.reqNumber.toUpperCase()}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {row.createdAt?.slice(0, 10)}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          {row.closed ? "CLOSED" : "OPEN"}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          <BoxRow isLast={index >= rowsLength - 1}>
            <img src={threeDot} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer' }} className={`three-dots ${openDropdownIndex === index ? "active" : ""}`}
              onClick={() => {
                if (openDropdownIndex === index) {
                  closeAllDropdowns();
                } else {
                  openDropdown(index);
                }
              }} />
            <div
              className={`dropdown-content ${openDropdownIndex === index ? "open" : ""}`} ref={dropdownRef}
            >
              {
                row.closed ?
                  <span> Already Closed</span>
                  :
                  <span onClick={() => handleReqStatus(true)}><img className='threeDotIcon' /> Close</span>
              }
            </div>
          </BoxRow>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const ReqModalDetails = ({ reqs, jdId, id }) => {
  const requests = reqs ? reqs : [];


  return (
    <Container1>
      <span className='title'>JD ID: {jdId}</span>
      <StyledBox>
        <TableContainer component={Paper} className="tableBox">
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center' className='tableCell'>Req Numer</TableCell>
                <TableCell align='center' className='tableCell'>Date of Creation</TableCell>
                <TableCell align='center' className='tableCell'>Status</TableCell>
                <TableCell align='center' className='tableCell'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {requests?.map((row, index) => (
                <Row key={row.id} row={row} rowsLength={requests.length} index={index} id={id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledBox>
    </Container1>
  );
};

export default ReqModalDetails;


const StyledBox = styled.div`
  display: flex;
  width: 96%;
  margin: 1.5rem auto;

  .colored {
    background-color: #ececec;
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

  
`;



const Container1 = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  .title {
    padding-left: 1.2rem;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;


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
  min-width: 10rem;
  justify-content: start;
  padding: 0.5rem 0.5rem;

  ${(props) =>
    props.isLast &&
    css`
      bottom: 1.4rem;
      right: 10%;
    `}
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
`

