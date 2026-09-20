// Implement a text area that dynamically adjusts its height based on input.

import { useState } from "react"

const Ex18 = () => {
    const [height, setHeight] = useState(20)
  return (
<>
    <h1 className="text-2xl font-bold underline mb-6">Text Area height adjusts with your typed height</h1>

    <div className="mb-2">
        <input type="number" className="border" placeholder="Enter height" onChange={(e) => setHeight(Number(e.target.value))}/>
    </div>
    <div>
        <textarea className="border" name="ex18" id="ex18" style={{height}} />
    </div>
</>
  )
}

export default Ex18
