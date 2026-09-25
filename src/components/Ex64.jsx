// Implement a feature where a list of colors is stored in state and updated dynamically.

import { useState } from "react"

const Ex64 = () => {
    const [colors, setColors] = useState(["red", "purple", "yellow", "green", "skyblue", "magenta", "peru", "orange"]);
    const [color, setColor] = useState("");

    const handleClick = () => {
        const color = colors.shift();
        setColor(color)
        setColors([...colors, color])
    }
  return (
    <div>
        <h1 style={{color: color}} className="text-7xl">Test</h1>
        <button className="bg-slate-600 text-gray-200 px-4 py-2 rounded-xl" onClick={handleClick}>Click to change text color</button>
    </div>

  )
}

export default Ex64
