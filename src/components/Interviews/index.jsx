import React from 'react'
import Header from './Header'
import InterviewTabs from './InterviewTabs'
import { getData } from '../../functions/getData'

const InterviewPage = () => {
  const data = getData();
  return (
    <div>
        <Header />
        <InterviewTabs data={data}/>
    </div>
  )
}

export default InterviewPage