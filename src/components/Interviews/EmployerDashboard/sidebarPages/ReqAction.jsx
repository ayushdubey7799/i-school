import React, { useState } from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin: 20px;
  font-family: var(--font);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const ActionButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const RequestTable = ({ requests, onCloseRequest }) => {
  const handleActionClick = (id) => {
    // Handle closing the request object
    onCloseRequest(id);
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Request Number</TableHeader>
            <TableHeader>Created At</TableHeader>
            <TableHeader>Created By</TableHeader>
            <TableHeader>Last Modified By</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.id}</TableCell>
              <TableCell>{request.reqNumber}</TableCell>
              <TableCell>{request.createdAt}</TableCell>
              <TableCell>{request.createdBy}</TableCell>
              <TableCell>{request.lastModifiedBy}</TableCell>
              <TableCell>
                <ActionButton onClick={() => handleActionClick(request.id)}>
                  {request.closed ? 'Reopen' : 'Close'}
                </ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default RequestTable;
