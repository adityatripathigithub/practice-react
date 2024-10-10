import React, { useState } from "react";

const Child2 = ({ data1 }) => {
    const [data2, setdata2] = useState();

const handelchange = (e)=>{
  console.log(data1)

}

    return (
        <>
            <div className="text-4xl m-5">Child2</div>

            <button className="text-lg font-bold bg-red-400 p-2" onClick={(e) => handelchange(e)}>
                Show My Data
            </button>
        </>
    );
};

export default Child2;
