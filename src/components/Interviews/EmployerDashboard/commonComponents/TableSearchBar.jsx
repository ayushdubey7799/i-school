import React from 'react'
import styled from 'styled-components'
import searchBlack from '../../../../assets/icons/searchBlack.png'

const TableSearchBar = ({ value, setValue }) => {
    return (
        <InputBox>
            <img src={searchBlack} />
            <input
                className='skillInput'
                type="text"
                placeholder="Search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </InputBox>
    )
}

export default TableSearchBar



const InputBox = styled.div`
    position: relative;
    width: 35%;
    display: flex;
    align-items: center;
    background-color: #ececec;
    padding: 0.3rem 0.5rem;
    border-radius: 0.5rem;
    font-family: Quicksand, sans-serif;

    img {
      width: 1.2rem;
    }

  .skillInput {
  flex-grow: 1;
  border: none;
  height: 1rem;
  width: 50%;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: transparent;
  outline: none;
  font-family: Quicksand, sans-serif;
  }


`