import React, { useState } from 'react'

const Child2 = ({data}) => {

    const [data2, setdata2] = useState()
    console.log(data)
  return (
    <div className='text-4xl'>Child2</div>
  )
}

export default Child2