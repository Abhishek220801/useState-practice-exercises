// Implement a live character count display for an input field.

import { useState } from 'react'

const Ex20 = () => {
    const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <input className='overflow-auto border border-slate-400' placeholder='Enter something' type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>

      <h1 className='text-lg'>Character count: {inputVal.length}</h1>
    </div>
  )
}

export default Ex20
