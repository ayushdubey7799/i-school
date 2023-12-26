import React, { useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled, { css } from 'styled-components';
import actionDot from '../../../../assets/icons/threeDot.png'
import moveNextRoundIcon from '../../../../assets/icons/moveNextRoundIcon.png'
import putHoldIcon from '../../../../assets/icons/putOnHoldIcon.png'
import moveOutIcon from '../../../../assets/icons/moveOutInterviewIcon.png'
import { getAllTrackers } from "../../../../functions/api/interview/getAllTrackers";
import { useSelector } from "react-redux";
import { addResumes } from "../../../../slices/invitationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import TableSearchBar from "../commonComponents/TableSearchBar";
import EmpSelectInput from "../commonComponents/EmpSelectInput";
import EmpCommonButton from "../commonComponents/EmpCommonButton";
import { Pagination, PaginationSizeFilter } from "../../../commonComponents/Pagination";
import { updateTrackers } from "../../../../functions/api/employers/tracker/updateTrackers";
import { toast } from "react-toastify";
function Row(props) {
  const { row, rowsLength, index, handleSelectArray, filterParams, updateTrigger } = props;

  const [selected, setSelected] = useState(false);

  const dropdownRef = useRef(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openDropdown = (index) => {
    setOpenDropdownIndex(index);
  };

  useEffect(() => {
    setSelected(false);
  }, [filterParams, updateTrigger])


  const closeAllDropdowns = () => {
    setOpenDropdownIndex(-1);
  };

  const handleMove = () => {
    dispatch(addResumes([row?.resumeId, row?.jdId]));
    navigate(`/schedule/invite/${row.jdId}`);
  }

  const handleSelectChange = (row) => {
    if (selected) {
      handleSelectArray(row.id, false);
    } else {
      handleSelectArray(row, true);
    }
    setSelected((prev) => !prev);
  };

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
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell align="center" className="tableCell">{row.name}</TableCell>
        <TableCell align="center" className="tableCell">{row.contact}</TableCell>
        <TableCell align="center" className="tableCell">{row.jdId.toUpperCase()}</TableCell>
        <TableCell align="center" className="tableCell">{row.recruiter}</TableCell>
        <TableCell align="center" className="tableCell">{row.hiringManager}</TableCell>
        <TableCell align="center" className="tableCell">{row.round}</TableCell>
        <TableCell align="center" className="tableCell">{row.interviewName}</TableCell>
        <TableCell align="center" className="tableCell">{row.status}</TableCell>
        <TableCell component="th" scope="row" align="center" className="tableCell">
          <BoxRow isLast={index >= rowsLength - 2}>
            <img src={actionDot} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer' }} className={`three-dots ${openDropdownIndex === index ? "active" : ""}`}
              onClick={() => {
                if (openDropdownIndex === index) {
                  closeAllDropdowns();
                } else if (openDropdownIndex !== index) {
                  closeAllDropdowns();
                  openDropdown(index);
                }
              }}
            />
            <input
              type="checkbox"
              className="three-dots"
              checked={selected}
              onChange={() => handleSelectChange(row)}
            />
            <div
              className={`dropdown-content ${openDropdownIndex === index ? "open" : ""}`} ref={dropdownRef}
            >
              <span className="dropdownText" onClick={handleMove}><img src={moveNextRoundIcon} /> Move to next Round</span>
              <span className="dropdownText"><img src={putHoldIcon} /> Put on Hold</span>
              <span className="dropdownText"><img src={moveOutIcon} /> Move out from Interview</span>
            </div>
          </BoxRow>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const InterviewFlow = ({ setPage }) => {
  const [tableRows, setTableRows] = useState([]);
  const [filterParams, setFilterParams] = useState('COMPLETED');
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);

  const [selectedArray, setSelectedArray] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [allInterviews, setAllInterviews] = useState([]);
  const [page1, setPage1] = useState(1);
  const [size, setSize] = useState(5);
  const [total, setTotal] = useState(0);

  const handleSizeChange = (event) => {
    setSize(parseInt(event.target.value, 10));
    setPage1(1);
  };

  // running an effect to empty selectedArray whenever filter value changes
  useEffect(() => {
    setSelectedArray([]);
  }, [filterParams]);

  const handlePageChange = (change) => {
    if (change && page1 < Math.ceil(+total / +size)) {
      setPage1((prev) => prev + 1);
    } else if (!change && page1 > 1) {
      setPage1((prev) => prev - 1);
    }
  };

  const handleSelectArray = (id, action) => {
    if (action) {
      setSelectedArray((prev) => [...prev, id]);
    } else {
      setSelectedArray((prev) => [...prev].filter((item) => item.id != id));
    }
  };

  console.log(selectedArray);

  useEffect(() => {
    const getData = async () => {
      const res = await getAllTrackers(accessToken, clientCode, search ? 1 : page1, search ? 10000 : size, "", filterParams);
      let array = res?.data?.data;
      if (array) {
        const finalResult = array.reduce((acc, it) => {
          let current = it.interview;
          let jdInfoReq = {
            name: current?.userName,
            contact: current?.userContact,
            jdId: it.jdId,
            recruiter: current?.recruiter,
            hiringManager: current?.hiringManager,
            round: it?.stage,
            interviewName: current?.interviewName,
            status: current?.status,
            resumeId: current?.resumeId,
            id: it.id,
          }

          return [...acc, jdInfoReq];
        }, []);
        setTableRows(finalResult);
        setAllInterviews(finalResult);
        setTotal(res?.data?.total);
      }
    }

    getData();
  }, [page1, size, filterParams, search])

  console.log(allInterviews);

  useEffect(() => {
    if (searchValue?.trim()) {
      setSearch(true);
      setFilteredData(() =>
        allInterviews?.filter(
          (item) =>
            item?.name?.toLowerCase().includes(searchValue?.toLowerCase()) ||
            item?.jdId?.toLowerCase().includes(searchValue?.toLowerCase())
        )
      );
    } else {
      setSearch(false);
    }
  }, [searchValue]);


  // func to update tracker status as Shortlist or Rejected
  const handleTrackerUpdate = async (val) => {
    const payloadData = {
      "jdId": "",
      "resumeIds": selectedArray?.map(user => user.resumeId),
      "status": val,
      "trackerIds": selectedArray?.map(user => user.id),
    }

    console.log(payloadData);

    const updatedRes = await updateTrackers(payloadData, accessToken, clientCode);

    console.log(updatedRes);

    if (updatedRes) {
      setUpdateTrigger(!updateTrigger);
      toast.success(`${val === 'HOLD' ? 'Hold' : 'Moved out of Interview'} Successfully`);
    }
  }

  const filterArr = [
    { value: "COMPLETED", text: "Completed" },
    { value: "SCHEDULED", text: "Scheduled" },
    { value: "EXPIRED", text: "Expired" },
  ];


  return (
    <Content>
      <TableContainer component={Paper} className="tableBox">
        <div className="titleBox">
          <span className="title">Manage Interview Flow</span>
        </div>

        <SearchBarContainer>
          <TableSearchBar value={searchValue} setValue={setSearchValue} />
          <EmpSelectInput value={filterParams} setValue={setFilterParams} optionsArr={filterArr} />
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center" className="tableCell">Name</TableCell>
              <TableCell align="center" className="tableCell">Contact</TableCell>
              <TableCell align="center" className="tableCell">JD ID</TableCell>
              <TableCell align="center" className="tableCell">Recruiter</TableCell>
              <TableCell align="center" className="tableCell">Hiring Manager</TableCell>
              <TableCell align="center" className="tableCell">Current Round</TableCell>
              <TableCell align="center" className="tableCell">Feeback</TableCell>
              <TableCell align="center" className="tableCell">Status</TableCell>
              <TableCell align="center" className="tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {search ?
              filteredData?.map((row, index) => (
                <Row key={row.id} rowsLength={tableRows.length} row={row} index={index} handleSelectArray={handleSelectArray} filterParams={filterParams} updateTrigger={updateTrigger} />
              ))
              :
              tableRows?.map((row, index) => (
                <Row key={row.id} rowsLength={tableRows.length} row={row} index={index} handleSelectArray={handleSelectArray} filterParams={filterParams} updateTrigger={updateTrigger} />
              ))
            }
          </TableBody>
        </Table>
        {!search && <div className="paginationBox">
          <PaginationSizeFilter
            size={size}
            handleSizeChange={handleSizeChange}
          />
          <Pagination
            total={total}
            size={size}
            page={page1}
            handlePageChange={handlePageChange}
            setPage={setPage1}
          />
        </div>}
      </TableContainer>
      <div className="btnBox">
        {selectedArray.length > 0 && <EmpCommonButton text='Put on Hold' func={() => handleTrackerUpdate('HOLD')} />}
        {selectedArray.length > 0 && <EmpCommonButton text='Move out from Interview' func={() => handleTrackerUpdate('NOT_SELECTED')} />}
      </div>
    </Content>
  )
}

export default InterviewFlow



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

const Content = styled.div`
margin: 1rem 0% 2rem 0%;
width: 94%;
padding: 0 1.5%;
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
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.20);
  border-radius: 0.5rem;
  padding-top: 1rem;
  margin-bottom: 1.5rem;


  .title {
    padding-left: 1.2rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .titleBox {
  width: 99%; 
  padding: 0.5rem 0rem;;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.btnBox {
  display: flex;
  gap: 2rem;
}

`


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
  min-width: 13rem;
  justify-content: start;
  padding: 0.5rem 0.5rem;

  ${(props) =>
    props.isLast &&
    css`
      bottom: 1.4rem;
      right: 10%;
    `}s
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
  width: 0.6rem;
  height: 0.6rem;
  cursor: pointer;
  border: 0.08rem solid grey;
  padding: 0.15rem;
  border-radius: 0.2rem;
}


.dropdownText {
  

  img {
  width: 0.6rem;
  height: 0.6rem;
  cursor: pointer;
  border: 0.08rem solid grey;
  padding: 0.15rem;
  border-radius: 0.2rem;
  }
}
`

