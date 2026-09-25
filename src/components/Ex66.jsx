// Implement a feature where clicking a button reverses an array stored in state.

import { useState } from "react"

const Ex66 = () => {
    const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9]);
  return (
    <div className="flex justify-between">
    <div>
        <h1>{arr.map((num, key) => <li>{num}</li>)}</h1>
    </div>
    <button className="bg-green-800 text-white h-fit" onClick={() => setArr([...arr].reverse())}>Reverse</button>
    </div>
  )
}

export default Ex66

