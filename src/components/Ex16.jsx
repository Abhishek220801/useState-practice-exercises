import React, { useState } from 'react'

const Ex16 = () => {
    const [backgroundColor, setBackgroundColor] = useState("white")

    const changeTheme = () => {
        setBackgroundColor(backgroundColor === "white" ? "black" : "white")
    }
  return (
    <div>
      <div style={{backgroundColor: backgroundColor, minHeight: "100vh", color: backgroundColor==="white"? "black" : "white"}}>
        <button className='px-6 py-2.5 rounded-2xl border border-zinc-300' onClick={changeTheme}>{backgroundColor === "black" ? "Light": "Dark"} Mode</button>
      </div>
    </div>
  )
}

export default Ex16
