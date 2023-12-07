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
import eyeIcon from "../../../../assets/icons/visible.png";
import { useDispatch } from "react-redux";
import { addResumes } from "../../../../slices/invitationSlice";
import iIcon from "../../../../assets/icons/iIcon.png";
import { Tooltip } from "react-tooltip";
import {
  Pagination,
  PaginationSizeFilter,
} from "../../../commonComponents/Pagination";
import { getBlobData } from "../../../../functions/api/resume/getBlobData";
import TableSearchBar from "../commonComponents/TableSearchBar";

function Row(props) {
  const { row, handleSelectArray, index } = props;
  const [selected, setSelected] = useState(false);
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);

  const handleSelectChange = (row) => {
    if (selected) {
      handleSelectArray(row.id, false);
    } else {
      handleSelectArray(row, true);
    }
    setSelected((prev) => !prev);
  };

  const handleDownload = async (id, name) => {
    const res = await getBlobData(
      `api/media/downloadById?fileType=resume&id=${id}`,
      accessToken,
      clientCode
    );
    console.log(res);
    const a = document.createElement("a");
    a.href = res;
    a.setAttribute("download", name);
    a.click();
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        className={`${index % 2 == 1 ? "colored" : ""}`}
      >
        <TableCell component="th" scope="row" align="center" className="tableCell">
          {row.name}
        </TableCell>
        <TableCell align="center" className="tableCell">{row.email}</TableCell>
        <TableCell align="center" className="tableCell">{row.contact}</TableCell>
        <TableCell align="center" className="tableCell">{row.score}</TableCell>
        <TableCell align="center" className="tableCell">{row.aiScore}</TableCell>
        <TableCell
          align="center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
          className="tableCell"
        >
          <input
            type="checkbox"
            checked={selected}
            onChange={() => handleSelectChange(row)}
            className="checkBox"
          />
          <img src={eyeIcon} onClick={() =>
            handleDownload(row.resumeId, row.srcFilename)
          } />
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

  const [searchValue, setSearchValue] = useState('');

  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

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
    if (!accessToken || !clientCode) {
      toast.error("Login First");
      navigate("/login");
    }
    async function getData() {
      const resObj = await getMatches(jdId, accessToken, clientCode, page, size);
      if (resObj) {
        setTotal(resObj.data[0].records.total)
        setTableRows(resObj.data[0].records.data);
        setIdToSendInvite(resObj.data[0].jdId);
      }
    }
    getData();
  }, [page, size]);
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
      dispatch(addResumes([...selectedArray, idToSendInvite]));
      navigate(`/schedule/invite/${jdId}`);
    } else {
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

          <span className='mainTitle'>
            <span className="title">Matched Resumes for JD ID: {jdId}</span>
            <Button onClick={() => navigate("/schedule")}>Back</Button>
          </span>
          <SearchBarContainer>
            <TableSearchBar value={searchValue} setValue={setSearchValue} />
          </SearchBarContainer>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align="center" className="tableCell">Name</TableCell>
                {/* <TableCell align="center" className="tableCell">Match Percentage</TableCell> */}
                <TableCell align="center" className="tableCell">Email</TableCell>
                <TableCell align="center" className="tableCell">Contact</TableCell>
                <TableCell align="center" className="tableCell">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: 'center',
                      gap: "0.4rem",
                    }}
                  >
                    Score{" "}
                    <img
                      className="iIcon"
                      src={iIcon}
                      data-tooltip-id="score"
                      data-tooltip-html="<div>Keyword Match Score</div>"
                    />
                  </span>
                  <Tooltip id="score" />
                </TableCell>
                <TableCell align="center" className="tableCell">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    AI Score{" "}
                    <img
                      className="iIcon"
                      src={iIcon}
                      data-tooltip-id="AI-Score"
                      data-tooltip-html="<div>JD-Resume Match AI Score</div>"
                    />
                  </span>
                  <Tooltip id="AI-Score" />
                </TableCell>
                <TableCell align="center" className="tableCell">Actions</TableCell>
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
  margin: 6rem 0% 2rem 0%;
  width: 96%;
  padding: 0 2%;
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

  .mainTitle {
    font-size: 0.9rem;
    font-weight: 600;
    margin: 1rem 0 1rem 3rem;
    width: calc(98% - 3rem);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 0.9rem;
      font-weight: 600;
    }
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
  
    .tableCell {
      font-size: 0.9rem;
      font-weight: 500;
      font-family: Quicksand, sans-serif;
      color: var(--color);
    }
    
    .iIcon {
      width: 1.1rem;
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


  .btn {
    padding: 0.5rem 1rem;
    margin-top: 3rem;
    background-color: var(--lightOrange);
    border: none;
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    font-family: Quicksand, sans-serif;
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


const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--lightOrange);
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  align-self: center;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: Quicksand, sans-serif;
`

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
