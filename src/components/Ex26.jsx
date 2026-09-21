// Build a component where state updates only after a button is clicked.

import { useState } from "react"

const Ex26 = () => {
    const [state, setState] = useState("");
    const [inpVal, setInpVal] = useState("")

    const handleClick = () => {
        setState(inpVal);
    }
  return (
    <div>
        <input type="text" className="border" placeholder="Type here" value={inpVal} onChange={(e) => setInpVal(e.target.value)
        }/>
        <h1 className="text-5xl min-h-20">{state}</h1>
        <button className="px-6 py-2.5 bg-indigo-400 rounded-2xl text-white" onClick={handleClick}>Update state</button>
    </div>
  )
}

export default Ex26
