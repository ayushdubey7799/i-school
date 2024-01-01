import React from 'react'

const Content = ({ data }) => {

  return (
    <div>
      <h3>{data?.questionId}.</h3>
      <p>{data?.question}</p>
    </div>

  )
}

export default Content

