// Create a toggle switch for enabling/disabling a feature.

import React, { useState } from 'react'

const Ex4 = () => {
    const [disabled, setDisabled] = useState(false);
  return (
    <div className='flex p-24 gap-5'>
      <input readOnly={disabled} className='border border-zinc-600' type="text" />
      <button className='px-4 py-1.5 bg-purple-400 text-white' onClick={() => setDisabled(!disabled)}>Test</button>
    </div>
  )
}

export default Ex4
