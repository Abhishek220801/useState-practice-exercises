// Implement a function to clear an input field when a button is pressed.

import React, { useState } from 'react'

const Ex13 = () => {
    const [inputVal, setInputVal] = useState("");

    const clear = () => {
        setInputVal("")
    }

  return (
    <div>
      <input type="text" className='border' value={inputVal} placeholder='Type something' onChange={(e) => setInputVal(e.target.value)}/>
      <button className='px-7 py-2 bg-fuchsia-300 rounded-2xl' onClick={clear}>Clear</button>
    </div>
  )
}

export default Ex13
