// Create an object state that tracks the number of clicks for different buttons.

import { useState } from "react"

const colors = ["bg-sky-600", "bg-amber-600","bg-green-600","bg-indigo-600", "bg-fuchsia-600", "bg-slate-600"]

const Ex39 = () => {
  const [clicks, setClicks] = useState({
    button_1: 0,
    button_2: 0,
    button_3: 0,
    button_4: 0,
    button_5: 0,
    button_6: 0,
  })


  const handleClick = (index) => {
    let btnSelected = "button_" + (index+1)
    setClicks(prev => ({
        ...prev,
        [btnSelected]: clicks[btnSelected]+1
    }))
  }
  return (
    <>
    <div className="p-16 space-x-6">
        {
            Array(6).fill(0).map((item, index) => (
                <button key={index} className={`${colors[index]} text-white rounded px-8 py-2.5`} onClick={() => handleClick(index)}>Button {index+1}</button>
            ))
        }
    </div>
    <div>
        <h2>Button 1 clicks: {clicks.button_1}</h2>
        <h2>Button 2 clicks: {clicks.button_2}</h2>
        <h2>Button 3 clicks: {clicks.button_3}</h2>
        <h2>Button 4 clicks: {clicks.button_4}</h2>
        <h2>Button 5 clicks: {clicks.button_5}</h2>
        <h2>Button 6 clicks: {clicks.button_6}</h2>
    </div>
    </>
  )
}

export default Ex39
