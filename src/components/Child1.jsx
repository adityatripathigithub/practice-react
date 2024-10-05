import React, { useState } from 'react'
import Child2 from './Child2'

const Child1 = ({data}) => {

const [data1, setdata1] = useState(data)
console.log(data1)

localStorage.setItem("data",JSON.stringify(data))


  return (
    <div>Child1
        <Child2 data1={data1} />
    </div>
  )
}

export default Child1