// Build a color picker that updates an object state with backgroundColor.

import { useState } from "react"

const Ex34 = () => {
    const [color, setColor] = useState("black")
  return (
    <div>
      <input onChange={(e) => setColor(e.target.value)} type="color" value={color}/>
      <div className="h-30 w-30" style={{backgroundColor: color}}></div>
    </div>
  )
}

export default Ex34
