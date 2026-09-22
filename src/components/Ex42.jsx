// Create an object state that stores RGB values and updates them on input change.

import { useState } from "react"

const Ex42 = () => {
  const [color, setColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  })

  const handleChange = (e) => {
    const input = e.target;
    const key = input.name;
    const value = input.value;

    setColor({...color, [key]: value})
  };

  return (
    <div>
      <label htmlFor="red">Red: </label>
      <input name="red" type="number" onChange={handleChange} />
      <label htmlFor="green">Green: </label>
      <input name="green" type="number" onChange={handleChange} />
      <label htmlFor="blue">Blue: </label>
      <input name="blue" type="number" onChange={handleChange} />

      <input type="color" name="color" id="color" value={`rgb(${color.red},${color.green},${color.blue})`}/>
    </div>
  )
}

export default Ex42
