import React, { useEffect, useState } from 'react'
import ManageJds from './ManageJds'
import { getJdsForMatching } from '../../../../functions/api/employers/match/getJdsForMatching'
import styled from 'styled-components'
import LogoHeader from '../../../commonComponents/LogoHeader'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'


const ScheduleInterview = () => {
  const [rows, setRows] = useState([])
  const navigate = useNavigate();
  const accessToken = useSelector(state => state?.auth?.userData?.accessToken);
  const clientCode = useSelector(state => state?.auth?.userData?.user?.clientCode);

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);

  console.log("token--->", accessToken, "clientcode --> ", clientCode)
  useEffect(() => {

    if (!accessToken || !clientCode) {
      toast.error("Login First");
      navigate("/login");
    }
    async function getData() {
      const resObj = await getJdsForMatching(accessToken, clientCode, page, size);
      if (resObj) {
        setRows(resObj?.data?.data);
        setTotal(resObj?.data?.total);
      }
    }
    getData()
  }, [page, size])

  return (
    <StyledDiv>
      <LogoHeader />
      <Content>
        <ManageJds rows={rows} total={total} page={page} setPage={setPage} size={size} setSize={setSize} />
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



