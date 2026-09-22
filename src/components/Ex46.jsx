// Create an object state that updates dynamically when a user selects a dropdown option.

import { useState } from "react"

const Ex46 = () => {
    const [language, setLanguage] = useState({
        language: ""
    })

    const handleChange = (e) => {
        const el = e.target;
        setLanguage({language: el.value})
    }
  return (
    <div>
        <select name="language" id="language" onChange={handleChange}>
            <option value="Select language" disabled selected>Select language</option>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
            <option value="punjabi">Punjabi</option>
        </select>

        <h1>Selected language: {language.language || ""}</h1>
    </div>
  )
}

export default Ex46
