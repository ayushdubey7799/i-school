import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import deleteIcon from "../../../../assets/icons/delete.png";
import searchBlack from "../../../../assets/icons/searchBlack.png";
import visibleIcon from "../../../../assets/icons/visible.png";
import shareIcon from "../../../../assets/icons/share.png";
import { getProfiles } from "../../../../functions/api/resume/getProfiles";
import { useSelector } from "react-redux";
import CommonDrawer from "../../../commonComponents/CommonDrawer";
import CommonDialog from "../../../commonComponents/CommonDialog";
import DeleteDialogContent from "../../../commonComponents/DeleteDialogContent";
import { deleteCandidate } from "../../../../functions/api/resume/deleteCandidate";
import Deleted from "../../../commonComponents/infoDialog/Deleted";
import Error from "../../../commonComponents/infoDialog/Error";
import { getBlobData } from "../../../../functions/api/resume/getBlobData";
import TableSearchBar from "../commonComponents/TableSearchBar";

function Row(props) {
  const { row, index, candidateTrigger, setCandidateTrigger } = props;

  // State, function to Open and close Dialog Box
  const [open, setOpen] = React.useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);

  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const clientCode = useSelector(
    (state) => state.auth.userData?.user?.clientCode
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // function to handle delete operation, which need to be passed to confirm delete dialog Comp as props
  const handleDelete = async (id) => {
    try {
      const res = await deleteCandidate(id, accessToken, clientCode);
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

  const handleErrorPopUpClose = () => {
    setErrorPopup(false);
  };

  const handleDeletePopUpClose = () => {
    setDeletePopup(false);
  };

  // State, function to open and close Drawer
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleDownload = async (id, name) => {
    const res = await getBlobData(
      `api/media/downloadById?fileType=resume&id=${id}`,
      accessToken,
      clientCode
    );
    const a = document.createElement("a");
    a.href = res;
    a.setAttribute("download", name);
    a.click();
  };


  return (
    <React.Fragment>
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
            handleDeletePopUpClose()
            setCandidateTrigger(!candidateTrigger)
          }}
          open={deletePopup}
          msg="Candidate successfully deleted"
        />
      )}
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        className={`${index % 2 == 1 ? "colored" : ""}`}
      >
        <TableCell align="center" className="tableCell">
          {row.firstName ? row.firstName : "..."}
        </TableCell>
        <TableCell align="center" className="tableCell">{row.email ? row.email : "..."}</TableCell>
        <TableCell align="center" className="tableCell">{row.contact ? row.contact : "..."}</TableCell>
        <TableCell align="center" className="tableCell">{row.createdAt ? row.createdAt.slice(0, 10) : "..."}</TableCell>
        {/* <TableCell align="center">{row.source ? row.source : "..."}</TableCell> */}
        {/* <TableCell align="center">
          <input
            type="checkbox"
            className="checkBox"
          />
        </TableCell> */}
        {/*<TableCell align="center">
          {row.contact ? row.contact : "..."}
        </TableCell>
        <TableCell align="center">
          {row.createdAt ? row.createdAt.slice(0, 10) : "..."}
        </TableCell>
        <TableCell align="center">{row.source ? row.source : "..."}</TableCell>
        <TableCell align="center">
          <input type="checkbox" className="checkBox" />
        </TableCell>*/}
        <TableCell align="center" className="tableCell">
          <CommonDrawer toggleDrawer={toggleDrawer} state={state} />
          <CommonDialog
            open={open}
            handleClose={handleClose}
            component={
              <DeleteDialogContent
                text="Candidate Data"
                handleClose={handleClose}
                handleDelete={() => handleDelete(row.id)}
              />
            }
          />
          <div
            style={{
              display: "flex",
              gap: "0.6rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={visibleIcon}
              style={{
                width: "0.8rem",
                height: "0.8rem",
                cursor: "pointer",
                border: "0.08rem solid grey",
                padding: "0.3rem",
                borderRadius: "0.3rem",
              }}
              onClick={() =>
                handleDownload(row.resume.id, row.resume.modFilename)
              }
            />
            <img
              src={shareIcon}
              style={{
                width: "0.8rem",
                height: "0.8rem",
                cursor: "pointer",
                border: "0.08rem solid grey",
                padding: "0.3rem",
                borderRadius: "0.3rem",
              }}
            />
            <img
              src={deleteIcon}
              style={{
                width: "0.8rem",
                height: "0.8rem",
                cursor: "pointer",
                border: "0.08rem solid #FE4C4F",
                padding: "0.3rem",
                borderRadius: "0.3rem",
              }}
              onClick={handleClickOpen}
            />
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function RegisteredCandidates({ setCurrentItem }) {
  const [candidates, setCandidates] = useState([]);
  const [candidateTrigger, setCandidateTrigger] = useState(false);
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const clientCode = useSelector(
    (state) => state.auth.userData?.user?.clientCode
  );

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const getCandidates = async () => {
      const res = await getProfiles(accessToken, clientCode);
      if (res) {
        setCandidates(res?.data?.data);
      }
    };

    getCandidates();
  }, [candidateTrigger]);

  const handleSearch = () => {
    
  };

  return (
    <Content>
      <TableContainer component={Paper} className="tableBox">
        <div className="titleBox">
          <span className="title">Candidates Pool</span>
        </div>

        <SearchBarContainer>
          <TableSearchBar value={searchValue} setValue={setSearchValue}/>
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center" className="tableCell">Name</TableCell>
              <TableCell align="center" className="tableCell">Email</TableCell>
              <TableCell align="center" className="tableCell">Contact</TableCell>
              <TableCell align="center" className="tableCell">Date of Reg</TableCell>
              {/* <TableCell align="center">Source</TableCell> */}
              {/* <TableCell align="center">Select</TableCell> */}
              <TableCell align="center" className="tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {candidates?.map((row, index) => (
              <Row key={row.id} row={row} index={index} candidateTrigger={candidateTrigger} setCandidateTrigger={setCandidateTrigger} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Content>
  );
}

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
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    padding-top: 1rem;

    .title {
      padding-left: 1.2rem;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .titleBox {
      width: 99%;
      padding: 0.5rem 0rem;
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

  .checkBox {
    cursor: pointer;
  }

`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  margin: 0.5rem auto;
  height: 3rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  padding: 0rem 1rem;
  gap: 1rem;
`;

