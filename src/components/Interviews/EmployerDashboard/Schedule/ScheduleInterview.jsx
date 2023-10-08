import React, { useEffect,useState } from 'react'
import ManageJds from './ManageJds'
import { getJdsForMatching } from '../../../../functions/api/employers/match/getJdsForMatching'


const ScheduleInterview = () => {
  const [rows,setRows] = useState([])
  useEffect(() => {
     async function getData(){
      const resObj = await getJdsForMatching();
      if(resObj)setRows(resObj.data.data);
     }
     getData()
  },[])

  return (
    <div><ManageJds rows={rows}/></div>
  )
}

export default ScheduleInterview
