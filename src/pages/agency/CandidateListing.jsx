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
         ...
        </TableCell>{" "}
        <TableCell component="th" scope="row" align="center" className='tableCell'>
...
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
...
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
...
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='tableCell'>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <img src={view} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} />
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const CandidateListing = () => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const accessToken = useSelector(state => state.auth.userData?.accessToken);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);
  const [total, setTotal] = useState(0);
  const [selectedJDID, setSelectedJDID] = useState('');

  const handleJDIDChange = (event) => {
    setSelectedJDID(event.target.value);
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    // Implement your file upload logic here
    console.log('Selected File:', selectedFile);
  };

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
        <StyledContainer>
      <LeftSide>
        <div>BRAJ01</div>
        <JDIDDropdown value={selectedJDID} onChange={handleJDIDChange}>
          <option value="">Select JDID</option>
          <option value="JDID1">JDID1</option>
          <option value="JDID2">JDID2</option>
          {/* Add more options as needed */}
        </JDIDDropdown>
      </LeftSide>
      <RightSide>
        <button>
          Upload
          {/* <FileInput type="file" onChange={handleFileUpload} /> */}
        </button>
      </RightSide>
    </StyledContainer>
          {/* <SearchBarContainer> */}
            {/* <SeekerTableSearchBar value={searchValue} setValue={setSearchValue} /> */}
          {/* </SearchBarContainer> */}
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center' className='tableCell'>Name</TableCell>
                <TableCell align='center' className='tableCell'>Email</TableCell>
                <TableCell align='center' className='tableCell'>Contact</TableCell>
                <TableCell align='center' className='tableCell'>Status</TableCell>
                <TableCell align='center' className='tableCell'>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {(new Array(10)).fill(0)?.map((row, index) => (
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

export default CandidateListing;


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
const StyledContainer = styled.div`
  display: flex;
  height: 5rem;
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 4rem;
  padding: 0 10px;
  gap: 2rem;

  // Adjust styles as needed
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 4rem;
`;

const JDIDDropdown = styled.select`
  margin-right: 10px;
`;

const FileInput = styled.input`
  margin-left: 10px;
`;