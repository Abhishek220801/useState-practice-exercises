// Create a toggle switch where state stores the on/off status of multiple switches.

import { useState } from "react";

const Ex55 = () => {
    const [toggle, setToggle] = useState({
        toggle1: false,
        toggle2: false,
        toggle3: false
    })

    function handleChange(e) {
        const input = e.target;
        const key = input.name;
        const val = input.checked;

        setToggle({
            ...toggle,
            [key]: val
        })
    }
  return (
    <div className="p-16">
      <div className="flex gap-8">
        <label className="switch">
          <input name="toggle1" type="checkbox" onChange={handleChange}/>
          <span className="slider round justify-self text-gray-200 font-semibold ">{toggle.toggle1 ? "ON" : ""}</span>
        </label>

        <label className="switch">
          <input name="toggle2" type="checkbox" onChange={handleChange}/>
          <span className="slider round justify-self text-gray-200 font-semibold ">{toggle.toggle2 ? "ON" : ""}</span>
        </label>

        <label className="switch flex">
          <input name="toggle3" type="checkbox" onChange={handleChange} />
          <span className="slider round justify-self text-gray-200 font-semibold ">{toggle.toggle3 ? "ON" : ""}</span>
        </label>
      </div>
    </div>
  )
}

export default Ex55
