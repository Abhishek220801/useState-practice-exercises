// Implement a state object that tracks the visibility of multiple UI elements.

import { useState } from "react"

const Ex54 = () => {
  const [ui, setUi] = useState({
    el1: true,
    el2: true,
    el3: true
  })
  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-3">Click any element to hide it.</h1>
      {
        ui.el1 && <h1 onClick={() => setUi({...ui, el1: false})}>Element 1</h1>
      }
      {
        ui.el2 && <h1 onClick={() => setUi({...ui, el2: false})}>Element 2</h1>
      }
      {
        ui.el3 && <h1 onClick={() => setUi({...ui, el3: false})}>Element 3</h1>
      }
    </div>
  )
}

export default Ex54

