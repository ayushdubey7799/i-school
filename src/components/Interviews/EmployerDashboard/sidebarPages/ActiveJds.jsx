import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from 'react-redux';

import { jds } from '../../../../utils/contantData';
import editIcon from '../../../../assets/icons/edit.png'
import deleteIcon from '../../../../assets/icons/delete.png'
import searchIcon from '../../../../assets/icons/searchIcon.png'
import searchBlack from '../../../../assets/icons/searchBlack.png'
import threeDot from '../../../../assets/icons/threeDot.png'
import shareIcon from '../../../../assets/icons/share.png'
import shareWithEmp from '../../../../assets/icons/shareWithEmp.png'
import eyeIcon from '../../../../assets/icons/visible.png'
import exportIcon from '../../../../assets/icons/export.png'
import { getJdsForMatching } from '../../../../functions/api/employers/match/getJdsForMatching';
import CommonDrawer from '../../../commonComponents/CommonDrawer';
import CommonDialog from '../../../commonComponents/CommonDialog';
import JdDetails from '../../../../pages/JdDetails';
import ExportDialogContent from '../../../commonComponents/ExportDialogContent';
import { toast } from 'react-toastify';
import DeleteDialogContent from '../../../commonComponents/DeleteDialogContent';
import AgencyShareDialogContent from '../../../commonComponents/AgencyShareDialogContent';
import { deleteJd } from '../../../../functions/api/employers/deleteJd';
import ModalHOC from '../../SeekerDashboard/ModalHOC';
import JdForm from '../JdForm';
import { getActiveJds } from '../../../../slices/jdSlice';
import { useDispatch } from 'react-redux';
import JdsDetails from './JdsDetails';
import ReqModalDetails from '../ReqModalDetails';


function Row(props) {
  const { row, index } = props;

  const dropdownRef = useRef(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);

  const [jdData, setJdData] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const accessToken = useSelector(state => state.auth.userData.accessToken);
  const clientCode = useSelector(state => state.auth.userData.user.clientCode);

  // state to open and close Drawer
  const [state, setState] = React.useState({
    right: false,
  });

  // state to open and close Drawer
  const [reqState, setReqState] = React.useState({
    right: false,
  });

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

  // State, function to Open and close Dialog Box
  const [openShareAgency, setOpenShareAgency] = React.useState(false);

  const handleClickOpenShareAgency = () => {
    setOpenShareAgency(true);
  };

  const handleCloseShareAgency = () => {
    setOpenShareAgency(false);
  };


  // function to open and close Drawer
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


  const handleShareSocial = () => {
    console.log('Share Social')
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

  console.log(row);


  return (
    <React.Fragment>
      <ModalHOC setOpenNewInterviewModal={setEditOpen} openNewInterviewModal={editOpen} Component={JdForm} array={[jdData, "edit"]} />
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell component="th" scope="row" align='center'>
          {row.jdId}
        </TableCell>
        <TableCell component="th" scope="row" align='center'>
          ...
        </TableCell>{" "}
        <TableCell component="th" scope="row" align="center">
          {row.createdAt?.slice(0, 10)}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.recruiter}

        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.hiringManager}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          ...
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
              <CommonDrawer toggleDrawer={toggleReqDrawer} state={reqState} component={<ReqModalDetails reqs={row.reqNumbers} />} />
              <CommonDrawer toggleDrawer={toggleDrawer} state={state} component={<JdsDetails Jds={row} />} />
              <CommonDialog open={open} handleClose={handleClose} component={<DeleteDialogContent handleClose={handleClose} text='JD' handleDelete={handleDelete} deleteId={row.id} />} />
              <CommonDialog open={openShareAgency} handleClose={handleCloseShareAgency} component={<AgencyShareDialogContent handleClose={handleCloseShareAgency} />} />
              <span onClick={() => handleEdit(row)}><img src={editIcon} className='threeDotIcon' /> Edit</span>
              <span onClick={handleClickOpen}><img src={deleteIcon} className='threeDotIcon' /> Delete</span>
              <span onClick={toggleDrawer('right', true)}><img src={eyeIcon} className='threeDotIcon' /> View Details</span>
              <span onClick={toggleReqDrawer('right', true)}><img src={eyeIcon} className='threeDotIcon' /> View Reqs</span>
              <span onClick={handleShareSocial}><img src={shareIcon} className='threeDotIcon' /> Share on Social</span>
              <span onClick={handleClickOpenShareAgency}><img src={shareWithEmp} className='threeDotIcon' /> Share with Agency</span>
            </div>
          </BoxRow>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const ActiveJds = () => {
  const [tableRows, setTableRows] = useState([]);
  const [searchParams, setSearchParams] = useState('');
  const [sortParams, setSortParams] = useState('');
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state?.auth?.userData?.accessToken);
  const clientCode = useSelector(state => state?.auth?.userData?.user?.clientCode);
  useEffect(() => {
    async function getData() {
      dispatch(getActiveJds({ accessToken, clientCode }));
      const res = await getJdsForMatching(accessToken, clientCode);
      setTableRows(res?.data?.data);
    }
    getData();
  }, []);

  // State, function to Open and close Export Dialog Box
  const [openExport, setOpenExport] = React.useState(false);

  const handleExportClickOpen = () => {
    setOpenExport(true);
  };

  const handleExportClose = () => {
    setOpenExport(false);
  };

  // function to handle delete operation, which need to be passed to confirm delete dialog Comp as props
  const handleExport = () => {
    console.log('Exported');
    handleExportClose();
    toast.success('Exported Successfully');
  }

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  }

  const handleSortParams = (e) => {
    setSortParams(e.target.value);
  }

  const handleSearch = () => {

  }


  return (
    <Container1>

      <StyledBox>
        <TableContainer component={Paper} className="tableBox">
          <CommonDialog open={openExport} handleClose={handleExportClose} component={<ExportDialogContent handleClose={handleExportClose} handleExport={handleExport} />} />
          <span className='titleBox'>
            <span className='title'>Active JDs</span>
            <span className='btn' onClick={handleExportClickOpen}><img src={exportIcon} className='icon' />Export</span>
          </span>
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
                <option value="Req_ID">Req ID</option>
                <option value="Recruiter">Recruiter</option>
                <option value="HiringManager">Hiring Manager</option>
                <option value="NoticePeriod">Notice Period</option>
                <option value="CandidateAvl">Candidate  Availability</option>
              </select>
              <select value={sortParams} onChange={handleSortParams} className='selectInput'>
                <option value="" disabled selected>Sort by</option>
                <option value="JD_ID">JD ID</option>
                <option value="Req_ID">Req ID</option>
                <option value="Recruiter">Recruiter</option>
                <option value="HiringManager">Hiring Manager</option>
                <option value="NoticePeriod">Notice Period</option>
                <option value="CandidateAvl">Candidate  Availability</option>
              </select>
            </div>
          </SearchBarContainer>

          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center'>JD ID</TableCell>
                <TableCell align='center'>Test ID</TableCell>
                <TableCell align='center'>Active Since</TableCell>
                <TableCell align='center'>Recruiter</TableCell>
                <TableCell align='center'>Hiring Manager</TableCell>
                <TableCell align='center'>Comments</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {tableRows?.map((row, index) => (
                <Row key={row.id} row={row} index={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledBox>
    </Container1>
  );
};

export default ActiveJds;


const StyledBox = styled.div`
  display: flex;
  margin-top: 0rem;
  margin-bottom: 2.5rem;
  width: 100%;
  padding: 0 0;

  .colored {
    background-color: #ececec;
  }

  

  .tableBox {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.20);
    border-radius: 0.5rem;
    padding-top: 1rem;


    .titleBox {
      display: flex;
      padding: 0 1rem;
      justify-content: space-between;
      

      .title {
        font-size: 1.2rem;
        font-weight: 700;
      }

      .btn {
        font-size: 0.9rem;
        font-weight: 600;
        background-color: var(--lightOrange);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .icon {
        width: 1rem;
      }
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
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
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

