import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Activate = () => {
   const [searchParams] = useSearchParams();
   console.log(searchParams.get('token'));

  return (
    <div>Activate</div>
  )
}

export default Activate