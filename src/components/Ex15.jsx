// Implement a functionality where clicking a button changes the document title.

import { useState } from "react"

const Ex15 = () => {
    const [inputVal, setInputVal] = useState("")

    const updateDocTitle = () => {
        document.title = inputVal
    }

  return (
    <div className="p-24 space-x-6">
      <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} type="text" className="border border-gray-200"/>
      <button onClick={updateDocTitle} className="bg-slate-300 px-6 py-1.5 rounded-xl">Change document title</button>
    </div>
  )
}

export default Ex15
