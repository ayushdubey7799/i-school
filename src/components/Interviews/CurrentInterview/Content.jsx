import React from 'react'

const Content = ({data}) => {
  console.log(data);
   
  return (
    <div>
        <h3>{data?.questionId}.</h3>
        <p>{data?.question}</p>
    </div>
    
  )
}

export default Content