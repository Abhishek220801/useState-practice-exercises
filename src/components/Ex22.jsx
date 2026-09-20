// Build a checkbox that toggles between "Checked" and "Unchecked"

import { useState } from "react"

const Ex22 = () => {
    const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div>Checkbox: </div>
      <input type="checkbox" value={isChecked} onChange={(e) => setIsChecked(p => !p)}/>


      <h1>{isChecked ? "Checked" : "Unchecked"}</h1>
    </div>
  )
}

export default Ex22
