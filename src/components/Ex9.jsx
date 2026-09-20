// Ex9: Update text color each time button is clicked 

import { useState } from 'react'

const getRandomInt = () => {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.ceil(255);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

const Ex9 = () => {
    const [color, setColor] = useState([0,0,0])
    
    const changeColor = () => {
        const updatedColor = color.map((val) => getRandomInt(val))
        setColor(updatedColor)
    }

  return (
    <div className='p-24 space-y-4'>
      <h1 className='text-5xl' style={{color: `rgb(${color[0]},${color[1]},${color[2]})`}}>Hello World!</h1>
      <button onClick={changeColor} className='px-6 py-3 bg-slate-600 text-white rounded-xl'>Change Font Color</button>
    </div>
  )
}

export default Ex9
