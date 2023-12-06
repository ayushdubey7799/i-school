import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ModalHOC from "../../SeekerDashboard/ModalHOC";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

import EmployerDetails from "../EmployerDetails";
import JdDetails from "../../../../pages/JdDetails";
import JdForm from "../JdForm";
import editIcon from "../../../../assets/icons/edit.png";
import deleteIcon from "../../../../assets/icons/delete.png";
import threeDot from "../../../../assets/icons/threeDot.png";
import eyeIcon from "../../../../assets/icons/visible.png";
import searchBlack from "../../../../assets/icons/searchBlack.png";
import { getJds } from "../../../../functions/api/employers/getJds";
import { useSelector } from "react-redux";
import { deleteJd } from "../../../../functions/api/employers/deleteJd";
import { toast } from "react-toastify";
import CloneJDForm from "./CloneJDForm";
import CommonDialog from "../../../commonComponents/CommonDialog";
import DeleteDialogContent from "../../../commonComponents/DeleteDialogContent";
import ReqModalDetails from "../ReqModalDetails";
import { useDispatch } from "react-redux";
import { getAvailableJds, setJdTrigger } from "../../../../slices/jdSlice";
import CommonDrawer from "../../../commonComponents/CommonDrawer";
import JdsDetails from "./JdsDetails";
import Error from "../../../commonComponents/infoDialog/Error";
import Deleted from "../../../commonComponents/infoDialog/Deleted";
import { timeZoneConversion } from "../../../../utils/timeZoneConversation";
import { Pagination, PaginationSizeFilter } from "../../../commonComponents/Pagination";
import Saved from "../../../commonComponents/infoDialog/Saved";
import Created from "../../../commonComponents/infoDialog/Created";

function Row(props) {
  const { row, index } = props;
  const [jdData, setJdData] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const accessToken = useSelector((state) => state.auth.userData.accessToken);
  const clientCode = useSelector(
    (state) => state.auth.userData.user.clientCode
  );
  const dispatch = useDispatch();
  const jdTrigger = useSelector((state) => state.jd.JdTrigger); 

  const dropdownRef = useRef(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);

  const [errorMsg, setErrorMsg] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);
  const [deleteErrorPopup, setDeleteErrorPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [savedPopup, setSavedPopup] = useState(false);
  const [createdPopup, setCreatedPopup] = useState(false);


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

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

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
        dispatch(setJdTrigger(!jdTrigger));
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

  const handleErrorPopUpClose = () => {
    setErrorPopup(false);
  };

  const handleDeleteErrorPopUpClose = () => {
    setDeleteErrorPopup(false);
  };

  const handleDeletePopUpClose = () => {
    setDeletePopup(false);
  };

  const handleSavedPopUpClose = () => {
    setSavedPopup(false);
  };

  const handleCreatedPopUpClose = () => {
    setCreatedPopup(false);
  };

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

  const openDropdown = (index) => {
    setOpenDropdownIndex(index);
  };

  const closeAllDropdowns = () => {
    setOpenDropdownIndex(-1);
  };



  console.log(row.jdId, row.reqNumbers);
  return (
    <React.Fragment>
      <ModalHOC
        setOpenNewInterviewModal={setEditOpen}
        openNewInterviewModal={editOpen}
        component={<JdForm array={[jdData, 'edit']} handleClose={() => setEditOpen(false)} errorMsg={errorMsg} setErrorPopup={setErrorPopup} setCreatedPopup={setCreatedPopup} setSavedPopup={setSavedPopup} />}
      />
      {deleteErrorPopup && (
        <Error
          handleClose={handleDeleteErrorPopUpClose}
          open={deleteErrorPopup}
          msg={errorMsg}
          handleRetryFunc={() => handleDelete(row.id)}
        />
      )}
      {deletePopup && (
        <Deleted
          handleClose={handleDeletePopUpClose}
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
      {errorPopup && (
        <Error
          handleClose={handleErrorPopUpClose}
          open={errorPopup}
          msg={errorMsg}
          handleRetryFunc={handleErrorPopUpClose}
        />
      )}
      {createdPopup && (
        <Created
          handleClose={handleCreatedPopUpClose}
          open={createdPopup}
          msg="JD successfully created"
        />
      )}
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        className={`${index % 2 == 1 ? "colored" : ""}`}
      >
        <TableCell component="th" scope="row" align="center">
          {row.jdId}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.title}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.location}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {timeZoneConversion(row.createdAt)}
        </TableCell>


        <TableCell component="th" scope="row" align="center">
          <BoxRow>
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
                toggleDrawer={toggleDrawer}
                state={state}
                component={<JdsDetails Jds={row} />}
              />
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
  const [openBasic3, setOpenBasic3] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);
  const [savedPopup, setSavedPopup] = useState(false);
  const [createdPopup, setCreatedPopup] = useState(false);

  const [selectedRow, setSelectedRow] = useState(null);
  const [tableRows, setTableRows] = useState([]);
  const [cloneData, setCloneData] = useState(null);
  const dispatch = useDispatch();
  const accessToken = useSelector(
    (state) => state?.auth?.userData?.accessToken
  );
  const clientCode = useSelector(
    (state) => state?.auth?.userData?.user?.clientCode
  );
  const testingData = useSelector((state) => state?.jd?.availableJds);
  const jdTrigger = useSelector((state) => state.jd.JdTrigger);  


  console.log('Shoot', jdTrigger)

  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);

  const handleSizeChange = (event) => {
    setSize(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handlePageChange = (change) => {
    if (change && (page < Math.ceil(+total / +size))) {
      setPage((prev) => prev + 1);
    } else if (!change && page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    async function getData() {
      dispatch(getAvailableJds({ accessToken, clientCode }));
      const res = await getJds(accessToken, clientCode, page, size);
      if (res) {
        setTableRows(res?.data?.data);
        setTotal(res?.data?.total);
      }
    }
    getData();
  }, [page, size, jdTrigger, dispatch]);

  console.log('Shot', jdTrigger)

  const handleSearch = () => { };

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

  const handleErrorPopUpClose = () => {
    setErrorPopup(false);
  };

  const handleSavedPopUpClose = () => {
    setSavedPopup(false);
  };

  const handleCreatedPopUpClose = () => {
    setCreatedPopup(false);
  };

  console.log('========>>>>>>.', cloneData);

  return (
    <Container1>
      {savedPopup && (
        <Saved
          handleClose={handleSavedPopUpClose}
          open={savedPopup}
          msg={`JD successfully updated`}
        />
      )}
      {errorPopup && (
        <Error
          handleClose={handleErrorPopUpClose}
          open={errorPopup}
          msg={errorMsg}
          handleRetryFunc={handleErrorPopUpClose}
        />
      )}
      {createdPopup && (
        <Created
          handleClose={handleCreatedPopUpClose}
          open={createdPopup}
          msg="JD successfully created"
        />
      )}
      <ModalHOC
        setOpenNewInterviewModal={setOpenBasic}
        openNewInterviewModal={openBasic}
        component={<JdForm array={[null, 'create']} handleClose={() => setOpenBasic(false)} errorMsg={errorMsg} setErrorPopup={setErrorPopup} setCreatedPopup={setCreatedPopup} setSavedPopup={setSavedPopup} />}
      />

      <ModalHOC
        setOpenNewInterviewModal={setOpenBasic2}
        openNewInterviewModal={openBasic2}
        component={<CloneJDForm array={[setOpenBasic3, setOpenBasic2, setCloneData]} />}
      />

      <ModalHOC
        setOpenNewInterviewModal={setOpenBasic3}
        openNewInterviewModal={openBasic3}
        component={<JdForm array={[cloneData, 'clone']} handleClose={() => setOpenBasic3(false)} errorMsg={errorMsg} setErrorPopup={setErrorPopup} setCreatedPopup={setCreatedPopup} setSavedPopup={setSavedPopup} />}
      />

      <StyledBox>
        <TableContainer component={Paper} className="tableBox">
          <Component>
            <span className="title">Job Descriptions</span>

            <div className="btnBox">
              <EditButton onClick={() => setOpenBasic2(true)}>
                Clone Existing JD
              </EditButton>
              <EditButton onClick={() => setOpenBasic(true)}>
                Create JD
              </EditButton>
            </div>
          </Component>
          <div style={{ display: "flex" }}>
            <SearchBarContainer>
              <div className="skillBox">
                <img src={searchBlack} />
                <input
                  className="skillInput"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </SearchBarContainer>
            
          </div>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align="center">JD ID</TableCell>
                <TableCell align="center">Title</TableCell>

                <TableCell align='center'>Location </TableCell>
                <TableCell align="center">Date of Creation</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {tableRows?.map((row, index) => (
                <Row
                  key={row.id}
                  row={row}
                  isSelected={selectedRow === index}
                  onToggle={handleToggle}
                  index={index}
                />
              ))}
            </TableBody>
          </Table>

          <div className="paginationBox">
          <PaginationSizeFilter size={size} handleSizeChange={handleSizeChange} />
          <Pagination total={total} size={size} page={page} handlePageChange={handlePageChange} setPage={setPage} />
          </div>
    
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
  padding: 0.5rem 0rem;
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
  border-radius: 0.5rem;
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

const SelectWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Select = styled.select`
  width: 50%;
  height: 2rem;
  padding-left: 0.5rem;
  margin-left: 0.5rem;

  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: #f0f0f0;
  }
`;


const PaginationNumber = styled.p`
&:hover {
  background-color: #f0f0f0;
}
`