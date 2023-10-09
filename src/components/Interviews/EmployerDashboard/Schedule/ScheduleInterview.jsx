import React, { useEffect, useState } from 'react'
import ManageJds from './ManageJds'
import { getJdsForMatching } from '../../../../functions/api/employers/match/getJdsForMatching'
import styled from 'styled-components'
import LogoHeader from '../../../commonComponents/LogoHeader'


const ScheduleInterview = () => {
  const [rows, setRows] = useState([])
  useEffect(() => {
    async function getData() {
      const resObj = await getJdsForMatching();
      if (resObj) setRows(resObj.data.data);
    }
    getData()
  }, [])

  return (
    <StyledDiv>
      <LogoHeader />
      <Content>
        <ManageJds rows={rows} />
      </Content>
    </StyledDiv>
  )
}

export default ScheduleInterview


const StyledDiv = styled.div`
display: flex;
flex-direction: column;


`

const Content = styled.div`
margin-top: 4rem;

`



