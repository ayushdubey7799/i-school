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
import Success from "../../../commonComponents/infoDialog/Success";
import { deleteEmployee } from "../../../../functions/api/employers/profile/deleteEmployee";
import Error from "../../../commonComponents/infoDialog/Error";
import Deleted from "../../../commonComponents/infoDialog/Deleted";
import DeactivateDialogContent from "../../../commonComponents/DeactivateDialogContent";
import { formatRole } from "../../../../utils/globalFunctions";
import { Pagination, PaginationSizeFilter } from "../../../commonComponents/Pagination";
import ManageAgencyForm from "../ManageAgencyForm";

function Row(props) {
    const { row, index } = props;


    return (
        <React.Fragment>
            <TableRow
                sx={{ "& > *": { borderBottom: "unset" } }}
                className={`${index % 2 == 1 ? "colored" : ""}`}
            >
                <TableCell component="th" scope="row" align="center" className="tableCell">
                    ...
                </TableCell>
                <TableCell align="center" className="tableCell">...</TableCell>
                <TableCell align="center" className="tableCell">...</TableCell>
                <TableCell align="center" className="tableCell">...</TableCell>
            </TableRow>
        </React.Fragment>
    );
}



export default function ManageAgencies() {
    const [openBasic, setOpenBasic] = useState(false);
    const [users, setUsers] = useState([]);

    const accessToken = useSelector(state => state.auth.userData?.accessToken);
    const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);

    const [userTrigger, setUserTrigger] = useState(false);

    const [page, setPage] = useState(1);
    const [size, setSize] = useState(5);
    const [total, setTotal] = useState(0);

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


    return (
        <StyledDiv>
            <TableContainer component={Paper} className="tableBox">
                <ModalHOC
                    openNewInterviewModal={openBasic}
                    setOpenNewInterviewModal={setOpenBasic}
                    component={<ManageAgencyForm array={[null, "create"]} />} />

                <Component>
                    <span className="title">Manage Agencies</span>

                    <div className='btnBox'>
                        <EditButton onClick={() => setOpenBasic(true)}>Add Agency</EditButton>
                    </div>
                </Component>

                <Table aria-label="collapsible table">
                    <TableHead className="tableHead">
                        <TableRow>
                            <TableCell align="center" className="tableCell">Agency Name</TableCell>
                            <TableCell align="center" className="tableCell">Spoc Name</TableCell>
                            <TableCell align="center" className="tableCell">Spoc Email</TableCell>
                            <TableCell align="center" className="tableCell">Spoc Contact</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="tableBody">
                        {users?.map((row, index) => (
                            <Row key={row.id} row={row} index={index} />
                        ))}
                    </TableBody>
                </Table>
                <div className="paginationBox">
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
                </div>
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
