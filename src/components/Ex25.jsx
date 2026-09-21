// Implement a text input that converts input to uppercase dynamically

import { useEffect, useState } from "react"

const Ex25 = () => {
    const [inputText, setInputText] = useState("");

    const handleChange = (e) => {
        setInputText(e.target.value.toUpperCase())
    }

  return (
    <div>
        <input value={inputText} onChange={handleChange} type="text" className="border border-slate-500" />
    </div>
  )
}

export default Ex25
