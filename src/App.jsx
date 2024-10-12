// ********************************************************👇HOW TO USE USESTATE👇********************************************************

// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [username, setusername] = useState("")
//   const [email, setemail] = useState("")

// const handsubmit = (e) =>{
//   e.preventDefault();
//   const data = {
//     username,
//     email
//   }

//   console.log(data)
// }

//   return (
//     <div>
//       <form>
//         <input type="text" placeholder='username' value={username} onChange={(e) => setusername(e.target.value) }/>                    <br /> <br />
//         <input type="text" placeholder='email'value={email} onChange={(e)=>setemail(e.target.value)} />                       <br /> <br />
//         <button onClick={(e)=> handsubmit(e)}>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

// ********************************************************👇SHOW DATA IN FRONTEND WITH PROPS👇********************************************************

// import React from 'react'
// import { useState } from 'react'
// import Cards from './components/Cards'

// const App = () => {

//   const [data, setdata] = useState([

//     {
//       "name" : "Aditya Tripathi",
//       "age" : "22",
//       "contect" : "225555555",
//       "gender" : "mail",
//     },
//     {
//       "name" : "akarsh",
//       "age" : "52",
//       "contect" : "5252525",
//       "gender" : "female",
//     },
//     {
//       "name" : "shivam",
//       "age" : "62",
//       "contect" : "999999",
//       "gender" : "female",
//     },
//     {
//       "name" : "master",
//       "age" : "29",
//       "contect" : "636414",
//       "gender" : "male",
//     }
//   ])

//   return (
//     <div>{data.map((elm, index) =>(
//       <Cards key={index} elm={elm} />
//     ))
//     }</div>
//   )
// }

// export default App

// ********************************************************👇Props driling 👇********************************************************

// import React, { useState } from "react";
// import Child1 from "./components/Child1";

// const App = () => {
//     const [data, setdata] = useState({ Name: "Aditya", Age: "22" });
//     // console.log(data)

//     return (
//         <div className=" pt-48">
//             <Child1 data={data} />
//         </div>
//     );
// };

// export default App;

// ********************************************************👇Set Data In LocalStorage👇********************************************************

import React, { useState } from 'react'

const App = () => {

const [data, setdata] = useState(0);

console.log(data)

const handelchange = ()=>{
    setdata(data +1)
}

  return (

    <>
    <div className='p-10' onClick={handelchange}>Coount

    </div>
    <h1 className='text-[500px] '>{data}</h1>
    </>
  )
}

export default App
