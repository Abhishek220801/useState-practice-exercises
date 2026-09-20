// Create a state variable that holds a string and updates when a button is clicked.

import { useState } from "react"

const Ex12 = () => {
    const [text, setText] = useState("useState Basics")
  return (
    <div>
      <h1 className="text-4xl text-slate-700 font-Monument">{text}</h1>
      <button onClick={() => setText(text === "useState Basics" ? "going GodMode in a while" : "useState Basics")}>Change text</button>
    </div>
  )
}

export default Ex12
