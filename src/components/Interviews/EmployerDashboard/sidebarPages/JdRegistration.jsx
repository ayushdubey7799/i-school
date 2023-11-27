import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ModalHOC from '../../SeekerDashboard/ModalHOC';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

import EmployerDetails from '../EmployerDetails';
import JdDetails from '../../../../pages/JdDetails';
import JdForm from '../JdForm';
import editIcon from '../../../../assets/icons/edit.png'
import deleteIcon from '../../../../assets/icons/delete.png'
import threeDot from '../../../../assets/icons/threeDot.png'
import eyeIcon from '../../../../assets/icons/visible.png'
import searchBlack from '../../../../assets/icons/searchBlack.png'
import { getJds } from '../../../../functions/api/employers/getJds';
import { useSelector } from 'react-redux';
import { deleteJd } from '../../../../functions/api/employers/deleteJd';
import { toast } from 'react-toastify';
import CloneJDForm from './CloneJDForm';
import CommonDialog from '../../../commonComponents/CommonDialog';
import DeleteDialogContent from '../../../commonComponents/DeleteDialogContent';
import ReqModalDetails from '../ReqModalDetails';
import { useDispatch } from 'react-redux';
import { getAvailableJds } from '../../../../slices/jdSlice';
import CommonDrawer from '../../../commonComponents/CommonDrawer';
import JdsDetails from './JdsDetails';


function Row(props) {
  const { row, index } = props;
  const [jdData, setJdData] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const accessToken = useSelector(state => state.auth.userData.accessToken);
  const clientCode = useSelector(state => state.auth.userData.user.clientCode);

  const dropdownRef = useRef(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);


  // state to open and close Drawer
  const [state, setState] = React.useState({
    right: false,
  });

  // state to open and close Drawer
  const [reqState, setReqState] = React.useState({
    right: false,
  });

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


  const handleEdit = (row) => {
    setEditOpen(true);
    setJdData(row);
  }

  const handleDelete = async (id) => {
    const res = await deleteJd(id, accessToken, clientCode);
    if (res) {
      toast.success("Successfully Deleted");
    }
    else {
      toast.error("Error Occured")
    }
    handleClose();
  }

  // State, function to Open and close Dialog Box
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  //function to open and close Drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  //function to open and close Drawer
  const toggleReqDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setReqState({ ...reqState, [anchor]: open });
  };

  const openDropdown = (index) => {
    setOpenDropdownIndex(index);
  };

  const closeAllDropdowns = () => {
    setOpenDropdownIndex(-1);
  };

  console.log(row.jdId, row.reqNumbers);
  return (
    <React.Fragment>
      <ModalHOC setOpenNewInterviewModal={setEditOpen} openNewInterviewModal={editOpen} Component={JdForm} array={[jdData, "edit"]} />

      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell component="th" scope="row" align='center'>
          {row.jdId}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.createdAt?.slice(0, 10)}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.createdBy}
        </TableCell>

        <TableCell component="th" scope="row" align="center">
          <BoxRow>
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
              <CommonDrawer toggleDrawer={toggleDrawer} state={state} component={<JdsDetails Jds={row} />} />
              <CommonDrawer toggleDrawer={toggleReqDrawer} state={reqState} component={<ReqModalDetails reqs={row.reqNumbers} />} />
              <CommonDialog open={open} handleClose={handleClose} component={<DeleteDialogContent handleClose={handleClose} text='JD' handleDelete={handleDelete} deleteId={row.id} />} />
              <span onClick={() => handleEdit(row)}>Edit <img src={editIcon} className='threeDotIcon' /></span>
              <span onClick={handleClickOpen}>Delete <img src={deleteIcon} className='threeDotIcon' /></span>
              <span onClick={toggleDrawer('right', true)}>View Details <img src={eyeIcon} className='threeDotIcon' /></span>
              <span onClick={toggleReqDrawer('right', true)}>View Reqs <img src={eyeIcon} className='threeDotIcon' /></span>
            </div>
          </BoxRow>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const JdRegistration = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const [openBasic2, setOpenBasic2] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableRows, setTableRows] = useState([]);
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state?.auth?.userData?.accessToken);
  const clientCode = useSelector(state => state?.auth?.userData?.user?.clientCode);
  const testingData = useSelector(state => state?.jd?.availableJds);
  const [searchParams, setSearchParams] = useState('');
  const [sortParams, setSortParams] = useState('');


  useEffect(() => {
    async function getData() {
      dispatch(getAvailableJds({ accessToken, clientCode }));
      const res = await getJds(accessToken, clientCode);
      if (res) setTableRows(res?.data?.data);
    }
    getData();
  }, []);

  // useEffect(()=> {
  //   if(testingData.length){
  //     setTableRows([...testingData]);
  //   }
  // },[testingData])

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  }

  const handleSortParams = (e) => {
    setSortParams(e.target.value);
  }

  const handleSearch = () => {

  }


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
      <ModalHOC openNewInterviewModal={openBasic} setOpenNewInterviewModal={setOpenBasic} Component={JdForm} array={[null, "create"]} />
      <ModalHOC openNewInterviewModal={openBasic2} setOpenNewInterviewModal={setOpenBasic2} Component={CloneJDForm} />

      <StyledBox>
        <TableContainer component={Paper} className="tableBox">
          <Component>
            <span className='title'>Job Descriptions</span>

            <div className='btnBox'>
              <EditButton onClick={() => setOpenBasic2(true)}>Clone Existing JD</EditButton>
              <EditButton onClick={() => setOpenBasic(true)}>Create JD</EditButton>
            </div>
          </Component>

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
                <option value="JD_ID">JD ID</option>
                <option value="Test_ID">Test ID</option>
                <option value="Created By">Created By</option>
                <option value="NoticePeriod">Notice Period</option>
                <option value="CandidateAvl">Candidate  Availability</option>
              </select>
              <select value={sortParams} onChange={handleSortParams} className='selectInput'>
                <option value="" disabled selected>Sort by</option>
                <option value="JD_ID">JD ID</option>
                <option value="Test_ID">Test ID</option>
                <option value="Created By">Created By</option>
                <option value="NoticePeriod">Notice Period</option>
                <option value="CandidateAvl">Candidate  Availability</option>
              </select>
            </div>
          </SearchBarContainer>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center'>JD ID</TableCell>
                <TableCell align='center'>Date of Creation</TableCell>
                <TableCell align='center'>Created By</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {tableRows?.map((row, index) => (
                <Row key={row.id} row={row} isSelected={selectedRow === index} onToggle={handleToggle} index={index} />
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
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  width: 96%;
  padding: 0 2%;

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
  }

  .tableBody {
    width: 100%;
  }

  
`;



const Container1 = styled.div`
  width: 98%;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Component = styled.div`
  width: 99%; 
  padding: 0.5rem 0rem;;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

