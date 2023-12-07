import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { data as billing } from "../../../../utils/contantData";
import searchBlack from '../../../../assets/icons/searchBlack.png'
import exportIcon from '../../../../assets/icons/export.png'
import CommonDialog from '../../../commonComponents/CommonDialog';
import ExportDialogContent from "../../../commonComponents/ExportDialogContent";
import TableSearchBar from "../commonComponents/TableSearchBar";


function Row(props) {
  const { row, index } = props;

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell className="tableCell">
        </TableCell>
        <TableCell component="th" scope="row" align="center" className="tableCell">
          {row.id}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className="tableCell">
          ...
        </TableCell>{" "}
        <TableCell align="center" className="tableCell">...</TableCell>
        <TableCell align="center" className="tableCell">...</TableCell>
        <TableCell align="center" className="tableCell">...</TableCell>
        <TableCell align="center" className="tableCell">...</TableCell>
        <TableCell align="center" className="tableCell">...</TableCell>
        <TableCell align="center" className="tableCell">  <input
          type="checkbox"
          className="checkBox"
        /></TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function Billing() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {

  }

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
  }

  return (
    <StyledDiv>
      <TableContainer component={Paper} className="tableBox">
        <CommonDialog open={openExport} handleClose={handleExportClose} component={<ExportDialogContent handleClose={handleExportClose} handleExport={handleExport} />} />
        <span className='titleBox'>
          <span className="title">Billings</span>
          <span className='exportBtn' onClick={handleExportClickOpen}><img src={exportIcon} className='icon' />Export</span>
        </span>

        <SearchBarContainer>
          <TableSearchBar value={searchValue} setValue={setSearchValue}/>
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center" className="tableCell"/>
              <TableCell align="center" className="tableCell">Serial No.</TableCell>
              <TableCell align="center" className="tableCell">Invoice No.</TableCell>
              <TableCell align="center" className="tableCell">Invoice Date</TableCell>
              <TableCell align="center" className="tableCell">Billing Period</TableCell>
              <TableCell align="center" className="tableCell">Preview</TableCell>
              <TableCell align="center" className="tableCell">Download</TableCell>
              <TableCell align="center" className="tableCell">Email</TableCell>
              <TableCell align="center" className="tableCell">Select</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {billing?.map((row, index) => (
              <Row key={row.id} row={row} index={index} />
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

.titleBox {
  display: flex;
  padding: 1rem 0.7rem 0 0.7rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.8rem;

  .title {
    font-size: 0.9rem;
    font-weight: 600;
  }

  .exportBtn {
    font-size: 0.9rem;
    font-weight: 600;
    background-color: var(--lightOrange);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    color: var(--white);
    cursor: pointer;
    font-family: Quicksand, sans-serif;
  }

  .icon {
    width: 1rem;
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
    font-family: Quicksand, sans-serif;
    color: var(--color);
  }
  
}

.tableBody {
  width: 100%;

  .tableCell {
    font-size: 0.8rem;
    font-weight: 400;
    font-family: Quicksand, sans-serif;
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
  background-color: var(--white);
  border-radius: 0.5rem;;
  padding: 0rem 1rem;
  gap: 1rem;


`
