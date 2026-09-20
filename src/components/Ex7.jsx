// Create a button that disables itself after being clicked once.

import React, { useState } from 'react'

const Ex7 = () => {
    const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <button className='px-6 py-2.5 bg-green-300 text-slate-700' disabled={disabled} onClick={() => setDisabled(true)}>{disabled ? "🚫 DISABLED Permanently!" :"Disable Me 😭" }</button>
    </div>
  )
}

export default Ex7
