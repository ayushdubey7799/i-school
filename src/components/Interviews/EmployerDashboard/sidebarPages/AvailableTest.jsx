
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { data as tests } from "../../../../utils/contantData";

import searchBlack from '../../../../assets/icons/searchBlack.png'
import deleteIcon from '../../../../assets/icons/delete.png'
import editIcon from '../../../../assets/icons/edit.png'
import visibleIcon from '../../../../assets/icons/visible.png'
import CommonDrawer from "../../../commonComponents/CommonDrawer";
import Billing from "./Billing";
import CommonDialog from "../../../commonComponents/CommonDialog";
import DeleteDialogContent from "../../../commonComponents/DeleteDialogContent";
import TableSearchBar from "../commonComponents/TableSearchBar";

function Row(props) {
  const { row, index } = props;

  const handleDelete = () => {
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

  // State, function to open and close Drawer
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell component="th" scope="row" align="center" className="tableCell">
          ...
        </TableCell>
        <TableCell component="th" scope="row" align="center" className="tableCell">
          ...
        </TableCell>{" "}
        <TableCell align="center" className="tableCell">...</TableCell>
        <TableCell align="center" className="tableCell">...</TableCell>
        <TableCell align="center" className="tableCell">
          <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', alignItems: 'center' }}>
            <CommonDrawer toggleDrawer={toggleDrawer} state={state} />
            <CommonDialog open={open} handleClose={handleClose} component={<DeleteDialogContent handleClose={handleClose} text='Test' handleDelete={handleDelete} />} />
            <img src={visibleIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} onClick={toggleDrawer('right', true)} />
            <img src={editIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} />
            <img src={deleteIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid #FE4C4F', padding: '0.3rem', borderRadius: '0.3rem' }} onClick={handleClickOpen} />
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function AvailableTest() {
  
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = () => {

  }

  return (
    <Content>
      <TableContainer component={Paper} className="tableBox">
        <span className="title">Available Tests</span>
        <SearchBarContainer>
          <TableSearchBar value={searchValue} setValue={setSearchValue}/>
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center" className="tableCell">Role</TableCell>
              <TableCell align="center" className="tableCell">Date of Creation</TableCell>
              <TableCell align="center" className="tableCell">Created By</TableCell>
              <TableCell align="center" className="tableCell">Test Type</TableCell>
              <TableCell align="center" className="tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {tests?.map((row, index) => (
              <Row key={row.id} row={row} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Content>
  );
}


const Content = styled.div`
margin: 1rem 0% 2rem 0%;
width: 94%;
padding: 0 2.5%;
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
`

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  margin: 0.5rem auto;
  height: 3rem;
  background-color: var(--white);
  border-radius: 0.5rem;;
  padding: 0rem 1rem;
  gap: 1rem;
`