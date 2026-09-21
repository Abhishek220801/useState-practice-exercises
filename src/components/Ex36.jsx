// Create a toggle button that switches between two themes stored in an object.

import { useState } from "react"

const Ex36 = () => {
    const [theme, setTheme] = useState({
        dark: false,
        light: true
    })
    const handleToggle = () => {
        setTheme({dark: !theme.dark, light: !theme.light})
    }
  return (
    <div style={{backgroundColor: theme.dark ? "black": "white", height: "100vh"}}>
      <button className="px-6 py-2 5 rounded-xl bg-indigo-500 text-slate-200 border-none" onClick={handleToggle}>Toggle theme</button>
    </div>
  )
}

export default Ex36
