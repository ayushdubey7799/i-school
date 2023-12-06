import React from "react";
import styled from 'styled-components';
import nextIcon from '../../assets/icons/nextIcon.png'
import greyNextIcon from '../../assets/icons/greyNextIcon.png'
import prevIcon from '../../assets/icons/prevIcon.png'
import greyPrevIcon from '../../assets/icons/greyPrevIcon.png'

export const Pagination = ({ total, size, page, handlePageChange, setPage }) => {

  const totalPages = Math.ceil(+total / +size);

  return (
    <PaginationWrapper>
      <span className="text">Page {page} of {totalPages}</span>
      <PaginationButton
        onClick={() => handlePageChange(false)}
        inActive={page == 1}
      >
        {page == 1 ? <img src={greyPrevIcon} /> : <img src={prevIcon} />}
      </PaginationButton>

      <PaginationButton
        onClick={() => handlePageChange(true)}
        inActive={total / (page * size) < 1}
      >
        {(total / (page * size) < 1) ? <img src={greyNextIcon} /> : <img src={nextIcon} />}
      </PaginationButton>
    </PaginationWrapper>
  );
};

export const PaginationSizeFilter = ({ size, handleSizeChange }) => {
  return (
    <SelectWrapper>
      <label htmlFor="pageSize">Rows per page </label>
      <Select id="pageSize" value={size} onChange={handleSizeChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </Select>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  height: 2rem;
  box-sizing: border-box;

  label {
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

const Select = styled.select`
  width: 3.5rem;
  padding: 0.5rem 0.1rem;
  margin-left: 0.5rem;
  box-sizing: border-box;
  font-size: 0.8rem;
  border: 0.075rem solid #ccc;
  border-radius: 0.25rem;

  option {
    
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  .text {
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

const PaginationButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.075rem solid #ccc;
  border-radius: 0.25rem;
  background-color: #fff;
  cursor: ${({ inActive }) => (inActive ? 'default' : 'pointer')};

  &:hover {
    background-color: #f0f0f0;
  }

  img {
    width: 0.75rem;
  }
`;

