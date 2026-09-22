// Implement a state object that changes borderColor and borderWidth dynamically.

import { useState } from "react"

const Ex48 = () => {
  const [border, setBorder] = useState({
    borderColor: "red",
    borderWidth: 10,
  })

  const handleChange = (e) => {
    const inp = e.target;
    const key = inp.name;
    const val = inp.value;

    setBorder({
        ...border,
        [key]: val
    })
  }
  return (
    <div>
        <label htmlFor="borderColor">Select border color: </label>
      <input type="color" name="borderColor" onChange={handleChange}/>
      <label className="ml-6" htmlFor="borderWidth">Enter border width: </label>
      <input className="border border-gray-400" type="number" name="borderWidth" onChange={handleChange}/>
      <div
        style={{
          borderColor: border.borderColor,
          borderWidth: border.borderWidth + "px",
        }}
        className="h-75 w-75"
      ></div>
    </div>
  )
}

export default Ex48
