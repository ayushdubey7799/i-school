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


function Row(props) {
    const { row, index } = props;

    return (
        <React.Fragment>
            <TableRow
                sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
                <TableCell>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {row.id}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    ...
                </TableCell>{" "}
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center">  <input
                    type="checkbox"
                    className="checkBox"
                /></TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function Billing2() {
    const [searchParams, setSearchParams] = useState('');
    const [sortParams, setSortParams] = useState('');

    const handleSortParams = (e) => {
        setSortParams(e.target.value);
    }

    const handleSearchParams = (e) => {
        setSearchParams(e.target.value);
    }

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
        toast.success('Exported Successfully');
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
                            <option value="SerialNo">Serial No.</option>
                            <option value="InvoiceNo">Invoice No.</option>
                            <option value="Email">Email</option>
                        </select>
                        <select value={sortParams} onChange={handleSortParams} className='selectInput'>
                            <option value="" disabled selected>Sort by</option>
                            <option value="SerialNo">Serial No.</option>
                            <option value="InvoiceNo">Invoice No.</option>
                            <option value="Email">Email</option>
                        </select>
                    </div>
                </SearchBarContainer>
                <Table aria-label="collapsible table">
                    <TableHead className="tableHead">
                        <TableRow>
                            <TableCell align="center" />
                            <TableCell align="center">Serial No.</TableCell>
                            <TableCell align="center">Invoice No.</TableCell>
                            <TableCell align="center">Invoice Date</TableCell>
                            <TableCell align="center">Billing Period</TableCell>
                            <TableCell align="center">Preview</TableCell>
                            <TableCell align="center">Download</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Select</TableCell>
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
    font-size: 1.2rem;
    font-weight: 700;
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
}

.tableBody {
  width: 100%;
}


.btn {
  padding: 0.5rem 1rem;
  margin-top: 3rem;
  background-color: var(--lightOrange);
  border: none;
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  
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
