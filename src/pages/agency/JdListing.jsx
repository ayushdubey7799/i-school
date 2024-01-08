import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { useSelector } from 'react-redux';
import Loader from '../../components/commonComponents/Loader';
import view from '../../assets/icons/visible.png'
import { timeZoneConversion } from '../../utils/timeZoneConversation';

// import { Pagination, PaginationSizeFilter } from '../commonComponents/Pagination';


function Row(props) {

  const { row, index } = props;
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const navigate = useNavigate();


  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell component="th" scope="row" align='center' className='tableCell'>
         {row?.employerName}
        </TableCell>{" "}
        <TableCell component="th" scope="row" align="center" className='tableCell'>
         {row?.jdId}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
         {row?.jdInfo?.title}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
        {/* {timeZoneConversion(row?.createdAt)} */}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/candidateListing/${row?.clientCode}/${row?.jdId}`)}>
            <img src={view} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} />
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const JDListing = ({filteredData}) => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const accessToken = useSelector(state => state.auth.userData?.accessToken);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);
  const [total, setTotal] = useState(0);

  const handleSizeChange = (event) => {
    setSize(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handlePageChange = (change) => {
    if (change && page < Math.ceil(+total / +size)) {
      setPage((prev) => prev + 1);
    } else if (!change && page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
   
  }, [size, page])


  return (
    
      <StyledBox>
        {/* {isLoading && <Loader message={loaderMessage} />} */}
        {!isLoading && <TableContainer component={Paper} className="tableBox">
          <span className='title'>Active JDs</span>
          {/* <SearchBarContainer> */}
            {/* <SeekerTableSearchBar value={searchValue} setValue={setSearchValue} /> */}
          {/* </SearchBarContainer> */}
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center' className='tableCell'>Employer</TableCell>
                <TableCell align='center' className='tableCell'>Job Title</TableCell>
                <TableCell align='center' className='tableCell'>Jd Id</TableCell>
                <TableCell align='center' className='tableCell'>Shared At</TableCell>
                <TableCell align='center' className='tableCell'>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {filteredData && filteredData?.map((row, index) => (
                <Row key={row.jobId} row={row} index={index} isLoading={isLoading} setIsLoading={setIsLoading} loaderMessage={loaderMessage} setLoaderMessage={setLoaderMessage} />
              ))}
            </TableBody>
          </Table>
          {/* <div className="paginationBox">
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
          </div> */}
        </TableContainer>}
      </StyledBox>

  );
};

export default JDListing;


const StyledBox = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  width: 100%;
  padding: 0;


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
  }

  .MuiTableCell-root {
    border: none;
  }

  .MuiTableRow-root {
    border-bottom: none;
  }

  .btn {
    background-color: var(--lightOrange);
    padding: 0.3rem 0.5rem;
    border: none;
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    font-family: var(--font);
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

  .rowText {
    font-size: 0.75rem;
  }

  .logo {
    width: 2rem;
    height: 2rem;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10%;
    }
  }
  
`;



const Container1 = styled.div`
  width:95%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
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
`
