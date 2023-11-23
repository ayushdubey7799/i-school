import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getMatches } from "../../../../functions/api/employers/match/getResumes";
import { useNavigate, useParams } from "react-router";
import LogoHeader from "../../../commonComponents/LogoHeader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import ModalHOC from "../../SeekerDashboard/ModalHOC";
import ScheduleModal from "./ScheduleModal";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import eyeIcon from '../../../../assets/icons/visible.png'
import searchBlack from '../../../../assets/icons/searchBlack.png'
import { useDispatch } from "react-redux";
import { addResumes } from "../../../../slices/invitationSlice";


function Row(props) {
  const { row, handleSelectArray, index } = props;
  const [selected, setSelected] = useState(false);

  const handleSelectChange = (row) => {
    if (selected) {
      handleSelectArray(row.id, false);
    } else {
      handleSelectArray(row, true);
    }
    setSelected((prev) => !prev);
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        className={`${index % 2 == 1 ? 'colored' : ''}`}
      >
        <TableCell component="th" scope="row" align="center">{row.name}</TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.contact}</TableCell>
        <TableCell align="center">{row.score}</TableCell>
        <TableCell align="center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
          <input
            type="checkbox"
            checked={selected}
            onChange={() => handleSelectChange(row)}
            className="checkBox"
          />
        </TableCell>
        <TableCell align="center">
          <img src={eyeIcon} />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function MatchedResumes() {
  const { jdId } = useParams();
  const [tableRows, setTableRows] = useState([]);
  const [idToSendInvite, setIdToSendInvite] = useState(null);
  const [selectedArray, setSelectedArray] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.userData.accessToken);
  const clientCode = useSelector(
    (state) => state.auth.userData.user.clientCode
  );
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useState('');
  const [sortParams, setSortParams] = useState('');

  const handleSortParams = (e) => {
    setSortParams(e.target.value);
  }

  const handleSearch = () => {
    console.log("Search");
  }

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  }

  useEffect(() => {
    if (!accessToken || !clientCode) {
      toast.error("Login First");
      navigate("/login");
    }
    async function getData() {
      const resObj = await getMatches(jdId, accessToken, clientCode);
      if (resObj) {
        setTableRows(resObj.data[0].records.data);
        setIdToSendInvite(resObj.data[0].jdId);
      }
    }
    getData();
  }, []);
  console.log(tableRows);

  const handleSelectArray = (id, action) => {
    if (action) {
      setSelectedArray((prev) => [...prev, id]);
    } else {
      setSelectedArray((prev) => [...prev].filter((item) => item.id != id));
    }
  };

  const handleSchedule = () => {
    if (selectedArray?.length > 0) {
      dispatch(addResumes([...selectedArray,idToSendInvite]));
      navigate(`/schedule/invite/${jdId}`);
    }
    else {
      toast.error("Select Resume First");
    }
  };

  console.log(selectedArray);
  return (
    <StyledDiv>
      <LogoHeader />

      <Content>
        <IconButton onClick={() => navigate('/schedule')} className="prev">
          <ArrowBackIcon sx={{ fontSize: "30px" }} />
        </IconButton>
        <TableContainer component={Paper} className="tableBox">
          <ModalHOC
            openNewInterviewModal={open}
            setOpenNewInterviewModal={setOpen}
            Component={ScheduleModal}
            array={[...selectedArray, idToSendInvite]}
          />

          <span style={{ fontSize: '1.1rem', fontWeight: '600', padding: '1rem 0rem 0rem 3rem', display: 'block' }}>
            Matched Resumes for Jd Id: {jdId}
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
              <option value="Name">Name</option>
              <option value="MatchPercentage">Match Percentage</option>
              <option value="Email">Email</option>
              <option value="Contact">Contact</option>
              <option value="Score">Score</option>
            </select>
            <select value={sortParams} onChange={handleSortParams} className='selectInput'>
              <option value="" disabled selected>Sort by</option>
              <option value="Name">Name</option>
              <option value="MatchPercentage">Match Percentage</option>
              <option value="Email">Email</option>
              <option value="Contact">Contact</option>
              <option value="Score">Score</option>
            </select>
          </div>
        </SearchBarContainer>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align="center">Name</TableCell>
                {/* <TableCell align="center">Match Percentage</TableCell> */}
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Contact</TableCell>
                <TableCell align="center">Score</TableCell>
                <TableCell align="center">Select Candidates</TableCell>
                <TableCell align="center">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {tableRows?.map((row, index) => (
                <Row
                  key={row.resumeId}
                  row={row}
                  handleSelectArray={handleSelectArray}
                  index={index}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <button onClick={() => handleSchedule()} className="btn">
          Next
        </button>
      </Content>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin: 8rem 0% 2rem 0%;
  width: 90%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .colored {
    background-color: #ececec;
  }

  .prev {
    background-color: var(--lightOrange);
    padding: 0.1rem;
    position: absolute;
    top: 4.8rem;
    left: 1.5rem;
    color: var(--white);
  }

  .prev:hover {
    color: var(--color);
  }

  .tableBox {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
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
    width: 1rem;
    height: 1rem;
  }

  img {
    width: 1.2rem;
    cursor: pointer;
  }
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
