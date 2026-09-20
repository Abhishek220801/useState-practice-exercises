// Create a text input that limits the number of characters typed.

import { useState } from "react"

const Ex14 = () => {
    const [inputText, setInputText] = useState("")

    const handleChange = (e) => {
        const currLen = e.target.value.length
        if(currLen <= 8)
            setInputText(e.target.value)
        else {
            alert("only 8 characters are allowed in input")
            return;
        };
    }

  return (
    <div>
      <input value={inputText} onChange={handleChange} type="text" className="border" placeholder="Type some text"/>
    </div>
  )
}

export default Ex14

