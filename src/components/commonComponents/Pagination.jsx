import React from "react";
import styled from 'styled-components'; 

export const Pagination = ({ total, size, page, handlePageChange,setPage }) => {
   console.log(total,size);
    const nlength = Math.ceil(+total/+size);
    console.log('====>>',nlength);
  return (
    <PaginationWrapper>
      <PaginationButton
        onClick={() => handlePageChange(false)}
        disabled={page == 1}
      >
        Prev
      </PaginationButton>
      {new Array(nlength)?.fill(0).map((item, index) => {
        return (
          <PaginationNumber
            onClick={() => setPage(index + 1)}
            style={{
              backgroundColor: page == index + 1 ? "grey" : "white",
              borderRadius: "30%",
              padding: "0.5rem",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </PaginationNumber>
        );
      })}
      <PaginationButton
        onClick={() => handlePageChange(true)}
        disabled={total / (page * size) < 1}
      >
        Next
      </PaginationButton>
    </PaginationWrapper>
  );
};

export const PaginationSizeFilter = ({size,handleSizeChange}) => {
  return (
    <SelectWrapper>
      <label htmlFor="pageSize">Page Size:</label>
      <Select id="pageSize" value={size} onChange={handleSizeChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </Select>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Select = styled.select`
  width: 50%;
  height: 2rem;
  padding-left: 0.5rem;
  margin-left: 0.5rem;

  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const PaginationNumber = styled.p`
  &:hover {
    background-color: #f0f0f0;
  }
`;
