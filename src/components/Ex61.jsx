// Create a state that holds an array of numbers and updates it on button click.

import React, { useState } from "react";

const Ex61 = () => {
    const [nums, setNums] = useState([1,2,3,4,5,6]);

    const handleClick = (e) => {
         setNums(nums.map((item) => item + 1));
    }
  return (
    <div>
    <React.Fragment>
    {
        nums.map((num, idx) => (
            <li className="text-lg border-b" key={idx}>{num}</li>            
        ))
    }
    <button className="px-5 py-2 border " onClick={handleClick}>Increment All</button>
    </React.Fragment>
    </div>
  )
}

export default Ex61
