// Implement a feature where a user's theme preference is saved in an object state.

import { useState } from "react"

const Ex57 = () => {
    const light = {
        background: "#f5f5f5",
        color: "black"
    }
    const dark = {
        background: "#323232",
        color: "white"
    }
    
    const [_theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        const themeNow = localStorage.getItem('theme') === "light" ? "dark" : "light"
        setTheme(themeNow)
        localStorage.setItem("theme", themeNow);
    }
  return (
    <div style={{background: localStorage.getItem('theme') === "light" ? light.background : dark.background, color: localStorage.getItem('theme')=== "light" ? light.color : dark.color, height: "100vh" }}>
    <button onClick={toggleTheme}>Toggle theme</button>  
    </div>
  )
}

export default Ex57
