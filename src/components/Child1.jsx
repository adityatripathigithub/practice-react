import React, { useState } from 'react'
import Child2 from './Child2'

const Child1 = ({data}) => {

const [data1, setdata1] = useState(data)
// console.log(data1)

localStorage.setItem("data",JSON.stringify(data))


  return (
    
    <div className=' text-4xl flex items-center ml-5 ' >Child1
        <Child2  data1={data1} />
    </div>
  )
}

export default Child1