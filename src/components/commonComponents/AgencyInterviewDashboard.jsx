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
import { getActiveJds } from "../../slices/jdSlice";
import { useDispatch } from "react-redux";
import { getJdsForMatching } from "../../functions/api/employers/match/getJdsForMatching";
import TableSearchBar from "../Interviews/EmployerDashboard/commonComponents/TableSearchBar";
import uploadIcon from '../../assets/icons/upload.png'



function Row(props) {
  const { row, index } = props;

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
        <TableCell component="th" scope="row" align="center" className="tableCell" style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="btn"><img src={uploadIcon} className="icon" /></button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const AgencyInterviewDashboard = () => {
  const [tableRows, setTableRows] = useState([]);
  const [jdData, setJdData] = useState([]);

  const dispatch = useDispatch();
  const accessToken = useSelector(state => state?.auth?.userData?.accessToken);
  const clientCode = useSelector(state => state?.auth?.userData?.user?.clientCode);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    async function getData() {
      dispatch(getActiveJds({ accessToken, clientCode }));
      const res = await getJdsForMatching(accessToken, clientCode);
      setJdData(res?.data?.data);
    }
    getData();
  }, []);

  // const jdData = useSelector(state => state?.jd?.activeJds);

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

  const handleSearch = () => {
    console.log("Search");
  }

  console.log(tableRows);
  return (
    <Content>
      <TableContainer component={Paper} className="tableBox">
        <div className="titleBox">
          <span className="title">JDs List</span>
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
              <TableCell align="center" className="tableCell">Upload Profiles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {tableRows?.map((row, index) => (
              <Row key={row.id} row={row} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Content>
  )
}

export default AgencyInterviewDashboard


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
  background-color: var(--lightOrange);
  border: none;
  color: var(--white);
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  


  .icon {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.2rem;
}
}

`
