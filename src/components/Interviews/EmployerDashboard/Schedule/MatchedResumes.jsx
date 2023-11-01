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
import styled from "styled-components";
import ModalHOC from "../../SeekerDashboard/ModalHOC";
import ScheduleModal from "./ScheduleModal";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import eyeIcon from '../../../../assets/icons/visible.png'


function Row(props) {
  const { row, handleSelectArray } = props;
  const [selected, setSelected] = useState(false);

  const handleSelectChange = (id) => {
    if (selected) {
      handleSelectArray(id, false);
    } else {
      handleSelectArray(id, true);
    }
    setSelected((prev) => !prev);
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell component="th" scope="row" align="center"></TableCell>
        <TableCell component="th" scope="row" align="center"></TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center">{row.score}</TableCell>
        <TableCell align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem'}}>
          <input
            type="checkbox"
            checked={selected}
            onChange={() => handleSelectChange(row.resumeId)}
            className="checkBox"
          />
          <img src={eyeIcon}/>
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

  useEffect(() => {
    if (!accessToken || !clientCode) {
      toast.error("Login First");
      navigate("/login");
    }
    async function getData() {
      const resObj = await getMatches(jdId, accessToken, clientCode);
      if (resObj) {
        setTableRows(resObj.data[0].records.data);
        setIdToSendInvite(resObj.data[0].id);
      }
    }
    getData();
  }, []);
  console.log(tableRows);

  const handleSelectArray = (id, action) => {
    if (action) {
      setSelectedArray((prev) => [...prev, id]);
    } else {
      setSelectedArray((prev) => [...prev].filter((item) => item != id));
    }
  };

  const handleSchedule = () => {
    if (selectedArray?.length > 0) {
      localStorage.setItem(
        "schedule",
        JSON.stringify([...selectedArray, idToSendInvite])
      );
      navigate("/schedule/invite");
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
        <TableContainer component={Paper} className="tableBox">
          <ModalHOC
            openNewInterviewModal={open}
            setOpenNewInterviewModal={setOpen}
            Component={ScheduleModal}
            array={[...selectedArray, idToSendInvite]}
          />

          <h3 style={{ paddingLeft: "3rem" }}>
            Matched Resumes for Jd Id: {jdId}
          </h3>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Match Percentage</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Contact</TableCell>
                <TableCell align="center">Score</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {tableRows?.map((row, index) => (
                <Row
                  key={row.resumeId}
                  row={row}
                  handleSelectArray={handleSelectArray}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <button onClick={() => handleSchedule()} className="btn">
          Schedule
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
  margin: 6rem 0% 2rem 0%;
  width: 96%;
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    background-color: lightgrey;
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
