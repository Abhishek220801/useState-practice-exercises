// Build a dropdown that updates the selected value in state.

import { useState } from "react"

const Ex17 = () => {
    const [selected, setSelected] = useState("male");

    const handleChange = (e) => {
        setSelected(e.target.value)
    }
  return (
    <div>
        <label htmlFor="gender">Gender: </label>
        <select name="gender" id="gender" onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
        </select>

        <h1 className="text-2xl capitalize text-rose-400">{selected}</h1>
    </div>
  )
}

export default Ex17
