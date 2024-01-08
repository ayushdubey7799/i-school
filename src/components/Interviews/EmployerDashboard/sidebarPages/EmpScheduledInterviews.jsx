import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getActiveJds } from "../../../../slices/jdSlice";
import { useDispatch } from "react-redux";
import { getJdsForMatching } from "../../../../functions/api/employers/match/getJdsForMatching";
import TableSearchBar from "../commonComponents/TableSearchBar";
import { Pagination, PaginationSizeFilter } from "../../../commonComponents/Pagination";

function Row(props) {
  const { row, index, setPage } = props;

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell align="center" className="tableCell">{row.jdId.toUpperCase()}</TableCell>
        <TableCell align="center" className="tableCell">{row.numOfReqs}</TableCell>
        <TableCell align="center" className="tableCell">{row.openReqs}</TableCell>
        <TableCell align="center" className="tableCell">{row.inProgress}</TableCell>
        <TableCell align="center" className="tableCell">{row.firstStage ? row.firstStage : '0'}</TableCell>
        <TableCell align="center" className="tableCell">{row.secondStage ? row.secondStage : '0'}</TableCell>
        <TableCell align="center" className="tableCell">{row.thirdStage ? row.thirdStage : '0'}</TableCell>
        <TableCell align="center" className="tableCell">...</TableCell>
        <TableCell component="th" scope="row" align="center" className="tableCell">
          <button className="btn" onClick={() => setPage({ index: 2, jdId: row.jdId })}>View Details</button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const EmpScheduledInterviews = ({ setPage }) => {
  const [tableRows, setTableRows] = useState([]);
  const [jdData, setJdData] = useState([]);

  const dispatch = useDispatch();
  const accessToken = useSelector(state => state?.auth?.userData?.accessToken);
  const clientCode = useSelector(state => state?.auth?.userData?.user?.clientCode);
  const allJdData = useSelector((state) => state?.jd?.activeJds);

  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [finalJds, setFinalJds] = useState([]);
  const [page1, setPage1] = useState(1);
  const [size, setSize] = useState(5);
  const [total, setTotal] = useState(0);

  const handleSizeChange = (event) => {
    setSize(parseInt(event.target.value, 10));
    setPage1(1);
  };

  const handlePageChange = (change) => {
    if (change && page1 < Math.ceil(+total / +size)) {
      setPage1((prev) => prev + 1);
    } else if (!change && page1 > 1) {
      setPage1((prev) => prev - 1);
    }
  };

  useEffect(() => {
    dispatch(getActiveJds(accessToken, clientCode));
  }, []);

  useEffect(() => {
    async function getData() {
      dispatch(getActiveJds({ accessToken, clientCode }));
      const res = await getJdsForMatching(accessToken, clientCode, page1, size);
      setJdData(res?.data?.data);
      setTotal(res?.data?.total)
    }
    getData();
  }, [page1, size]);



  useEffect(() => {
    if (jdData?.length) {
      const finalResult = jdData.reduce((acc, it) => {
        let jdInfoReq = {
          jdId: it.jdId,
          numOfReqs: it.numOfReqs,
          openReqs: it.numOfReqs !== 0 ? it.reqNumbers?.filter((item) => !item.closed)?.length : 0,
          totalCandidates: it.metrics?.find((item) => item.type == 'TOTAL')?.count,
          closed: it.metrics?.find((item) => item.type == 'CLOSED')?.count,
          inProgress: it.metrics?.find((item) => item.type == 'PROGRESS')?.count,
          firstStage: it.metrics?.find((item) => item.stage == 1)?.count,
          secondStage: it.metrics?.find((item) => item.stage == 2)?.count,
          thirdStage: it.metrics?.find((item) => item.stage == 3)?.count,
        }

        return [...acc, jdInfoReq];
      }, [])

      setTableRows(finalResult);
    }
  }, [jdData])

  useEffect(() => {
    if (allJdData?.length) {
      const finalResult = allJdData.reduce((acc, it) => {
        let jdInfoReq = {
          jdId: it.jdId,
          numOfReqs: it.numOfReqs,
          openReqs: it.numOfReqs !== 0 ? it.reqNumbers?.filter((item) => !item.closed)?.length : 0,
          totalCandidates: it.metrics?.find((item) => item.type == 'TOTAL')?.count,
          closed: it.metrics?.find((item) => item.type == 'CLOSED')?.count,
          inProgress: it.metrics?.find((item) => item.type == 'PROGRESS')?.count,
          firstStage: it.metrics?.find((item) => item.stage == 1)?.count,
          secondStage: it.metrics?.find((item) => item.stage == 2)?.count,
          thirdStage: it.metrics?.find((item) => item.stage == 3)?.count,
        }

        return [...acc, jdInfoReq];
      }, [])

      setFinalJds(finalResult);
    }
  }, [allJdData])

  useEffect(() => {
    if (searchValue?.trim()) {
      setSearch(true);
      setFilteredData(() =>
        finalJds?.filter(
          (item) =>
            item.jdId.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setSearch(false);
    }
  }, [searchValue]);


  const handleSearch = () => {

  }


  return (
    <Content>
      <TableContainer component={Paper} className="tableBox">
        <div className="titleBox">
          <span className="title">Scheduled Interviews</span>
        </div>

        <SearchBarContainer>
          <TableSearchBar value={searchValue} setValue={setSearchValue} />
        </SearchBarContainer>
        <Table aria-label="collapsible table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center" className="tableCell">JD ID</TableCell>
              <TableCell align="center" className="tableCell">No. of Reqs</TableCell>
              <TableCell align="center" className="tableCell">Open Reqs</TableCell>
              <TableCell align="center" className="tableCell">In Progress</TableCell>
              <TableCell align="center" className="tableCell">First Round</TableCell>
              <TableCell align="center" className="tableCell">Second Round</TableCell>
              <TableCell align="center" className="tableCell">Third Round</TableCell>
              <TableCell align="center" className="tableCell">HR Round</TableCell>
              <TableCell align="center" className="tableCell">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {
              search ?
                filteredData?.map((row, index) => (
                  <Row key={row.id} row={row} index={index} setPage={setPage} />
                ))
                :
                tableRows?.map((row, index) => (
                  <Row key={row.id} row={row} index={index} setPage={setPage} />
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
    </Content>
  )
}

export default EmpScheduledInterviews


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
width: 98%;
padding: 0 1%;
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


.btn {
  padding: 0.4rem 0.5rem;
  background-color: var(--lightOrange);
  border: none;
  color: var(--white);
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: var(--font);
}

`
