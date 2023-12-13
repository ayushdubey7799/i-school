import React, { useEffect, useState, useRef } from "react";
import Table from "@mui/material/Table";
import ModalHOC from '../../SeekerDashboard/ModalHOC';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled, { css } from 'styled-components';
import { data as users } from "../../../../utils/contantData";

import unVisible from "../../../../assets/icons/unVisible.png";
import editIcon from "../../../../assets/icons/edit.png";
import deleteIcon from "../../../../assets/icons/delete.png";
import threeDot from "../../../../assets/icons/threeDot.png";
import CommonDialog from "../../../commonComponents/CommonDialog";
import DeleteDialogContent from "../../../commonComponents/DeleteDialogContent";
import ManageUserForm from "../ManageUserForm";
import { getEmployees, getEmployers } from "../../../../functions/api/employers/profile/getEmployees";
import { useSelector } from "react-redux";
import { editEmployee } from "../../../../functions/api/employers/profile/editEmployee";
import { toast } from "react-toastify";
import Created from "../../../commonComponents/infoDialog/Created";
import Saved from "../../../commonComponents/infoDialog/Saved";

function Row(props) {
  const { row, rowsLength, index } = props;
  const [openBasic2, setOpenBasic2] = useState(false);
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);

  const dropdownRef = useRef(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);

  // State, function to Open and close Dialog Box
  const [open, setOpen] = React.useState(false);
  const [savedPopup, setSavedPopup] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const openDropdown = (index) => {
    setOpenDropdownIndex(index);
  };

  const closeAllDropdowns = () => {
    setOpenDropdownIndex(-1);
  };

  const handleEdit = () => {
    setOpenBasic2(true);
  };

  const handleDelete = () => {
    handleClose();
  };

  const handleDeactivate = async () => {
    row.active = false;
    const res = await editEmployee(row.id, row, accessToken, clientCode);
    if (res) toast.success("Deactivated Successfully");
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
      <ModalHOC openNewInterviewModal={openBasic2} setOpenNewInterviewModal={setOpenBasic2} component={<ManageUserForm array={[row, "edit"]} handleClose={() => setOpenBasic2(false)} setSavedPopup={setSavedPopup} />} />

      {savedPopup && (
        <Saved
          handleClose={() => setSavedPopup(false)}
          open={savedPopup}
          msg={`User successfully updated`}
        />
      )}
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        className={`${index % 2 == 1 ? "colored" : ""}`}
      >
        <TableCell component="th" scope="row" align="center" className="tableCell">
          {row.name}
        </TableCell>{" "}
        <TableCell align="center" className="tableCell">{row.email}</TableCell>
        <TableCell align="center" className="tableCell">{row.contact}</TableCell>
        <TableCell align="center" className="tableCell">{row.role}</TableCell>
        <TableCell align="center" className="tableCell">
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
                }`} ref={dropdownRef}
            >
              <CommonDialog open={open} handleClose={handleClose} component={<DeleteDialogContent handleClose={handleClose} text='user' handleDelete={handleDelete} />} />
              <span onClick={handleEdit}>
                <img src={editIcon} className="threeDotIcon" /> Edit
              </span>
              <span onClick={handleClickOpen}>
                <img src={deleteIcon} className="threeDotIcon" /> Delete
              </span>
              <span onClick={handleDeactivate}>
                <img src={unVisible} className="threeDotIcon" /> Deactivate
              </span>
            </div>
          </BoxRow>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ManageUsers() {
  const [openBasic, setOpenBasic] = useState(false);
  const [users, setUsers] = useState([]);

  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);

  const [successPopup, setSuccessPopup] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await getEmployees(accessToken, clientCode);
      setUsers(res?.data?.data)
    }
    getData();
  }, [])

  return (
    <StyledDiv>
      <TableContainer component={Paper} className="tableBox">
        <ModalHOC openNewInterviewModal={openBasic} setOpenNewInterviewModal={setOpenBasic} component={<ManageUserForm array={[null, "create"]} handleClose={() => setOpenBasic(false)} setSuccessPopup={setSuccessPopup} />} />

        {successPopup && (
          <Created
            handleClose={() => setSuccessPopup(false)}
            open={successPopup}
            msg="User successfully added"
          />
        )}
        <Component>
          <span className="title">Manage Users</span>

          <div className='btnBox'>
            <EditButton onClick={() => setOpenBasic(true)}>Add User</EditButton>
          </div>
        </Component>

        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center" className="tableCell">Name</TableCell>
              <TableCell align="center" className="tableCell">Email</TableCell>
              <TableCell align="center" className="tableCell">Contact</TableCell>
              <TableCell align="center" className="tableCell">Role</TableCell>
              <TableCell align="center" className="tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {users?.map((row, index) => (
              <Row key={row.id} row={row} rowsLength={users.length} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin: 1rem 0% 2rem 0%;
  width: 94%;
  padding: 0 3%;
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


  .checkBox {
    cursor: pointer;
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
  width: 0.5rem;
  height: 0.5rem;
  cursor: pointer;
  border: 0.08rem solid grey;
  padding: 0.15rem;
  border-radius: 0.2rem;
}
`


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
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 0.6rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-family: var(--font);
`;
