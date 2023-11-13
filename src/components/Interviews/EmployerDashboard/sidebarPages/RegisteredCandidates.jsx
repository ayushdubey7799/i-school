
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import ModalHOC from "../../SeekerDashboard/ModalHOC";
import deleteIcon from '../../../../assets/icons/delete.png'
import searchBlack from '../../../../assets/icons/searchBlack.png'
import visibleIcon from '../../../../assets/icons/visible.png'
import shareIcon from '../../../../assets/icons/share.png'
import { getProfiles } from "../../../../functions/api/resume/getProfiles";
import { useSelector } from "react-redux";
import CommonDrawer from "../../../commonComponents/CommonDrawer";
import CommonDialog from "../../../commonComponents/CommonDialog";
import DeleteDialogContent from "../../../commonComponents/DeleteDialogContent";
import { toast } from "react-toastify";
function Row(props) {
  const { row, index } = props;

  // State, function to Open and close Dialog Box
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // function to handle delete operation, which need to be passed to confirm delete dialog Comp as props
  const handleDelete = () => {
    console.log('deleted');
    handleClose();
    toast.success('Deleted Successfully');
  }

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

  console.log(row)
  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell align="center">{row.firstName ? row.firstName : "..."}</TableCell>
        <TableCell align="center">{row.email ? row.email : "..."}</TableCell>
        <TableCell align="center">{row.contact ? row.contact : "..."}</TableCell>
        <TableCell align="center">{row.createdAt ? row.createdAt : "..."}</TableCell>
        <TableCell align="center">{row.source ? row.source : "..."}</TableCell>
        <TableCell align="center">
          <input
            type="checkbox"
            className="checkBox"
          />
        </TableCell>
        <TableCell align="center">
          <CommonDrawer toggleDrawer={toggleDrawer} state={state} />
          <CommonDialog open={open} handleClose={handleClose} component={<DeleteDialogContent text='Candidate Data' handleClose={handleClose} handleDelete={handleDelete} />} />
          <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', alignItems: 'center' }}>
            <img src={visibleIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} onClick={toggleDrawer('right', true)} />
            <img src={shareIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} />
            <img src={deleteIcon} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid #FE4C4F', padding: '0.3rem', borderRadius: '0.3rem' }} onClick={handleClickOpen} />
          </div>
        </TableCell>

      </TableRow>
    </React.Fragment>
  );
}



export default function RegisteredCandidates({ setCurrentItem }) {

  const [searchParams, setSearchParams] = useState('');
  const [sortParams, setSortParams] = useState('');
  const [candidates, setCandidates] = useState([]);
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode)
  useEffect(() => {
    const getCandidates = async () => {
      const res = await getProfiles(accessToken, clientCode);
      if (res) {
        setCandidates(res?.data?.data);
      }
    }

    getCandidates();
  }, []);

  const handleSortParams = (e) => {
    setSortParams(e.target.value);
  }

  const handleSearch = () => {
    console.log("Search");
  }

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  }


  return (
    <Content>
      <TableContainer component={Paper} className="tableBox">
        <div className="titleBox">
          <span className="title">Candidates Pool</span>
        </div>

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
              <option value="Name">Name</option>
              <option value="Email">Email</option>
              <option value="Contact">Contact</option>
              <option value="RegBy">Reg By</option>
              <option value="CandidateAvl">Candidate  Availability</option>
            </select>
            <select value={sortParams} onChange={handleSortParams} className='selectInput'>
              <option value="" disabled selected>Sort by</option>
              <option value="Name">Name</option>
              <option value="Email">Email</option>
              <option value="Contact">Contact</option>
              <option value="RegBy">Reg By</option>
              <option value="CandidateAvl">Candidate  Availability</option>
            </select>
          </div>
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Contact</TableCell>
              <TableCell align="center">Date of Reg</TableCell>
              <TableCell align="center">Source</TableCell>
              <TableCell align="center">Select</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {candidates?.map((row, index) => (
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
    font-size: 1.2rem;
    font-weight: 700;
  }

  .titleBox {
  width: 99%; 
  padding: 0.5rem 0rem;;
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

.resumeBtn {
    background-color: var(--lightOrange);
    padding: 0.4rem 0.7rem;
    border: none;
    color: var(--white);
    font-size: 0.9rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
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



