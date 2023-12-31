import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

import editIcon from "../../../../assets/icons/edit.png";
import deleteIcon from "../../../../assets/icons/delete.png";
import threeDot from "../../../../assets/icons/threeDot.png";
import shareIcon from "../../../../assets/icons/share.png";
import shareWithEmp from "../../../../assets/icons/shareWithEmp.png";
import eyeIcon from "../../../../assets/icons/visible.png";
import exportIcon from "../../../../assets/icons/export.png";
import { getJdsForMatching } from "../../../../functions/api/employers/match/getJdsForMatching";
import CommonDrawer from "../../../commonComponents/CommonDrawer";
import CommonDialog from "../../../commonComponents/CommonDialog";
import JdDetails from "../../../../pages/JdDetails";
import ExportDialogContent from "../../../commonComponents/ExportDialogContent";
import { toast } from "react-toastify";
import DeleteDialogContent from "../../../commonComponents/DeleteDialogContent";
import AgencyShareDialogContent from "../../../commonComponents/AgencyShareDialogContent";
import { deleteJd } from "../../../../functions/api/employers/deleteJd";
import ModalHOC from "../../SeekerDashboard/ModalHOC";
import JdForm from "../JdForm";
import { getActiveJds, setJdTrigger } from "../../../../slices/jdSlice";
import { useDispatch } from "react-redux";
import JdsDetails from "./JdsDetails";
import ReqModalDetails from "../ReqModalDetails";
import Deleted from "../../../commonComponents/infoDialog/Deleted";
import Error from "../../../commonComponents/infoDialog/Error";
import { exportJd } from "../../../../functions/api/employers/exportJd";
import {
  Pagination,
  PaginationSizeFilter,
} from "../../../commonComponents/Pagination";
import Saved from "../../../commonComponents/infoDialog/Saved";
import TableSearchBar from "../commonComponents/TableSearchBar";
import { dateConversion } from "../../../../utils/timeZoneConversation";
import uploadIcon from '../../../../assets/icons/upload.png'

import { useJwt } from 'react-jwt';
import AgencyList from "../commonComponents/AgencyList";



function Row(props) {
  const { row, rowsLength, index } = props;

  const dispatch = useDispatch();
  const jdTrigger = useSelector((state) => state.jd.JdTrigger);
  const dropdownRef = useRef(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);

  const [jdData, setJdData] = useState(null);
  const [editOpen, setEditOpen] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [savedPopup, setSavedPopup] = useState(false);

  const accessToken = useSelector((state) => state.auth.userData.accessToken);
  const clientCode = useSelector(
    (state) => state.auth.userData.user.clientCode
  );


  const [userRole, setUserRole] = useState('');
  const decodedToken = useJwt(accessToken);

  const [state, setState] = React.useState({
    right: false,
  });

  const [reqState, setReqState] = React.useState({
    right: false,
  });

  const [agencyState, setAgencyState] = React.useState({
    right: false,
  });



  const handleEdit = (row) => {
    setEditOpen(true);
    setJdData(row);
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteJd(id, accessToken, clientCode);

      // Check if the request was successful
      if (res) {
        setDeletePopup(true);
      }
    } catch (error) {
      // Handle network errors or unexpected issues
      const errMsg =
        error.response.data.notify.message ||
        "An error occurred. Please try again.";
      setErrorMsg(errMsg);
      setErrorPopup(true);
    } finally {
      // Close the modal or perform other cleanup tasks
      handleClose();
    }
  };

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

  const handleErrorPopUpClose = () => {
    setErrorPopup(false);
  };

  const handleDeletePopUpClose = () => {
    setDeletePopup(false);
  };

  const handleSavedPopUpClose = () => {
    setSavedPopup(false);
  };

  // function to open and close Drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  //function to open and close Drawer
  const toggleReqDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setReqState({ ...reqState, [anchor]: open });
  };

  //function to open and close Drawer
  const toggleAgencyDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAgencyState({ ...agencyState, [anchor]: open });
  };

console.log(decodedToken);

  const openDropdown = (index) => {
    setOpenDropdownIndex(index);
  };

  const closeAllDropdowns = () => {
    setOpenDropdownIndex(-1);
  };

  const handleShareSocial = () => {

  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  // Access Roles by access Token  
  useEffect(() => {
    const getUserRoles = () => {
      const userRoles = decodedToken?.decodedToken?.grants || '';
      setUserRole(userRoles);
    }
    getUserRoles();
  }, [accessToken, decodedToken]);

  return (
    <React.Fragment>
      <ModalHOC
        setOpenNewInterviewModal={setEditOpen}
        openNewInterviewModal={editOpen}
        component={
          <JdForm
            array={[jdData, "edit"]}
            handleClose={() => setEditOpen(false)}
            setErrorMsg={setErrorMsg}
            setErrorPopup={setErrorPopup}
            setSavedPopup={setSavedPopup}
          />
        }
      />

      <CommonDrawer
        toggleDrawer={toggleAgencyDrawer}
        state={agencyState}
        component={<div><AgencyList jdId={row?.jdId}/></div>}
      />
      {errorPopup && (
        <Error
          handleClose={handleErrorPopUpClose}
          open={errorPopup}
          msg={errorMsg}
          handleRetryFunc={() => handleDelete(row.id)}
        />
      )}
      {deletePopup && (
        <Deleted
          handleClose={() => {
            handleDeletePopUpClose();
            dispatch(setJdTrigger(!jdTrigger));
          }}
          open={deletePopup}
          msg={`JD ID ${row.jdId} successfully deleted`}
        />
      )}
      {savedPopup && (
        <Saved
          handleClose={handleSavedPopUpClose}
          open={savedPopup}
          msg={`JD ID ${row.jdId} successfully updated`}
        />
      )}
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        className={`${index % 2 == 1 ? "colored" : ""}`}
      >
        <TableCell
          component="th"
          scope="row"
          align="center"
          className="tableCell"
        >
          {row.jdId?.toUpperCase()}
        </TableCell>
        {userRole === 'ROLE_AGENCY' && <TableCell
          component="th"
          scope="row"
          align="center"
          className="tableCell"
        >
          ...
        </TableCell>}
        <TableCell
          component="th"
          scope="row"
          align="center"
          className="tableCell"
        >
          ...
        </TableCell>{" "}
        <TableCell
          component="th"
          scope="row"
          align="center"
          className="tableCell"
        >
          {dateConversion(row.createdAt)}
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          align="center"
          className="tableCell"
        >
          {row.recruiter}
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          align="center"
          className="tableCell"
        >
          {row.hiringManager}
        </TableCell>

        {userRole === 'ROLE_AGENCY' && <TableCell
          component="th"
          scope="row"
          align="center"
          className="tableCell"
        >
          ...
        </TableCell>}
        {userRole === 'ROLE_AGENCY' && <TableCell component="th" scope="row" align="center" className="tableCell" style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="btn1"><img src={uploadIcon} className="icon" /></button>
        </TableCell>}
        <TableCell component="th" scope="row" align="center" onClick={toggleAgencyDrawer("right", true)}>
          <img src={eyeIcon} className="threeDotIcon" />
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          align="center"
          className="tableCell"
        >
          <BoxRow isLast={index >= rowsLength - 2}>
            <img
              src={threeDot}
              style={{ width: "0.8rem", height: "0.8rem", cursor: "pointer" }}
              className={`three-dots ${openDropdownIndex === index ? "active" : ""
                }`}
              onClick={() => {
                if (openDropdownIndex === index) {
                  closeAllDropdowns();
                } else {
                  openDropdown(index);
                }
              }}
            />
            <div
              className={`dropdown-content ${openDropdownIndex === index ? "open" : ""
                }`}
              ref={dropdownRef}
            >
              <CommonDrawer
                toggleDrawer={toggleReqDrawer}
                state={reqState}
                component={
                  <ReqModalDetails
                    reqs={row.reqNumbers}
                    jdId={row.jdId}
                    id={row?.id}
                  />
                }
              />
              <CommonDrawer
                toggleDrawer={toggleDrawer}
                state={state}
                component={<JdsDetails Jds={row} />}
              />
              <CommonDialog
                open={open}
                handleClose={handleClose}
                component={
                  <DeleteDialogContent
                    handleClose={handleClose}
                    text="JD"
                    handleDelete={handleDelete}
                    deleteId={row.id}
                  />
                }
              />
              <CommonDialog
                open={openShareAgency}
                handleClose={handleCloseShareAgency}
                component={
                  <AgencyShareDialogContent
                    handleClose={handleCloseShareAgency}
                    jdId={row?.jdId}
                  />
                }
              />
              <span onClick={() => handleEdit(row)}>
                <img src={editIcon} className="threeDotIcon" /> Edit
              </span>
              <span onClick={handleClickOpen}>
                <img src={deleteIcon} className="threeDotIcon" /> Delete
              </span>
              <span onClick={toggleDrawer("right", true)}>
                <img src={eyeIcon} className="threeDotIcon" /> View Details
              </span>
              <span onClick={toggleReqDrawer("right", true)}>
                <img src={eyeIcon} className="threeDotIcon" /> View Reqs
              </span>
              <span onClick={handleShareSocial}>
                <img src={shareIcon} className="threeDotIcon" /> Share on Social
              </span>
              <span onClick={handleClickOpenShareAgency}>
                <img src={shareWithEmp} className="threeDotIcon" /> Share with
                Agency
              </span>
            </div>
          </BoxRow>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const ActiveJds = () => {
  const [tableRows, setTableRows] = useState([]);
  const dispatch = useDispatch();
  const accessToken = useSelector(
    (state) => state?.auth?.userData?.accessToken
  );
  const clientCode = useSelector(
    (state) => state?.auth?.userData?.user?.clientCode
  );
  const jdData = useSelector((state) => state?.jd?.activeJds);
  const jdTrigger = useSelector((state) => state.jd.JdTrigger);

  const [userRole, setUserRole] = useState('');
  const decodedToken = useJwt(accessToken);

  const [total, setTotal] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState(null);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);

  const handleSizeChange = (event) => {
    setSize(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handlePageChange = (change) => {
    if (change && page < Math.ceil(+total / +size)) {
      setPage((prev) => prev + 1);
    } else if (!change && page > 1) {
      setPage((prev) => prev - 1);
    }
  };


  useEffect(() => {
    dispatch(getActiveJds(accessToken, clientCode));
  }, []);

  useEffect(() => {
    async function getData() {
      const res = await getJdsForMatching(accessToken, clientCode, page, size);
      setTableRows(res?.data?.data);
      setTotal(res?.data?.total);
    }
    getData();
  }, [page, size, jdTrigger, dispatch]);

  useEffect(() => {
    if (searchValue?.trim()) {
      setSearch(true);
      setFilteredData(() =>
        jdData?.filter(
          (item) =>
            item.jdId.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setSearch(false);
    }
  }, [searchValue]);

  // State, function to Open and close Export Dialog Box
  const [openExport, setOpenExport] = React.useState(false);

  const handleExportClickOpen = () => {
    setOpenExport(true);
  };

  const handleExportClose = () => {
    setOpenExport(false);
  };

  // function to handle delete operation, which need to be passed to confirm delete dialog Comp as props
  const handleExport = async (exportType) => {
    const res = await exportJd(exportType, accessToken, clientCode);

    handleExportClose();
    toast.success("Exported Successfully");
  };


  // Access Roles by access Token  
  useEffect(() => {
    const getUserRoles = () => {
      const userRoles = decodedToken?.decodedToken?.grants || '';
      setUserRole(userRoles);
    }
    getUserRoles();
  }, [accessToken, decodedToken]);


  return (
    <Container1>
      <StyledBox>
        <TableContainer component={Paper} className="tableBox">
          <CommonDialog
            open={openExport}
            handleClose={handleExportClose}
            component={
              <ExportDialogContent
                handleClose={handleExportClose}
                handleExport={handleExport}
              />
            }
          />
          <span className="titleBox">
            <span className="title">Active JDs</span>
            <span className="btn" onClick={handleExportClickOpen}>
              <img src={exportIcon} className="icon" />
              Export
            </span>
          </span>
          <div style={{ display: "flex" }}>
            <SearchBarContainer>
              <TableSearchBar value={searchValue} setValue={setSearchValue} />
            </SearchBarContainer>
          </div>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align="center" className="tableCell">
                  JD ID
                </TableCell>
                {userRole === 'ROLE_AGENCY' && <TableCell align="center" className="tableCell">
                  Employer
                </TableCell>}
                <TableCell align="center" className="tableCell">
                  Test ID
                </TableCell>
                <TableCell align="center" className="tableCell">
                  Active Since
                </TableCell>
                <TableCell align="center" className="tableCell">
                  Recruiter
                </TableCell>
                <TableCell align="center" className="tableCell">
                  Hiring Manager
                </TableCell>
                <TableCell align="center" className="tableCell">
                  Agencies
                </TableCell>
                {userRole === 'ROLE_AGENCY' && <TableCell align="center" className="tableCell">
                  JD Source
                </TableCell>}
                {userRole === 'ROLE_AGENCY' && <TableCell align="center" className="tableCell">
                  Upload Candidates
                </TableCell>}
                {/* <TableCell align='center' className="tableCell">Comments</TableCell> */}
                <TableCell align="center" className="tableCell">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {search
                ? filteredData?.map((row, index) => {
                  return (
                    <Row
                      key={row.id}
                      row={row}
                      rowsLength={filteredData.length}
                      index={index}
                    />
                  );
                })
                : tableRows?.map((row, index) => (
                  <Row
                    key={row.id}
                    row={row}
                    rowsLength={tableRows.length}
                    index={index}
                  />
                ))}
            </TableBody>
          </Table>

          {!search && <div className="paginationBox">
            <PaginationSizeFilter
              size={size}
              handleSizeChange={handleSizeChange}
            />
            <Pagination
              total={total}
              size={size}
              page={page}
              handlePageChange={handlePageChange}
              setPage={setPage}
            />
          </div>}
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

  .paginationBox {
    display: flex;
    justify-content: end;
    gap: 2rem;
    margin: 1rem 3rem 1.5rem 0;
  }

  .tableBox {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    padding-top: 1rem;

    .titleBox {
      display: flex;
      padding: 0 1rem;
      justify-content: space-between;

      .title {
        padding-left: 0.5rem;
        font-size: 0.9rem;
        font-weight: 600;
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
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    font-family: var(--font);
  }

  .btn1 {
    background-color: var(--lightOrange);
    border: none;
    color: var(--white);
    border-radius: 0.3rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
  
  
    .icon {
      width: 1.5rem;
      height: 1.5rem;
      padding: 0.2rem;
  }
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
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .threeDotIcon {
    width: 0.6rem;
    height: 0.6rem;
    cursor: pointer;
    border: 0.08rem solid grey;
    padding: 0.15rem;
    border-radius: 0.2rem;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  margin: 0.5rem auto;
  background-color: var(--white);
  border-radius: 0.5rem;
  padding: 0rem 1rem;
  gap: 1rem;
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

  .dropdown:hover .dropdown-content,
  .dropdown-content.open {
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
`;
