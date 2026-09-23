// Create input fields dynamically using map() based on an object. Use the object’s keys as the input name attributes and the corresponding values as the input values

import { useState } from "react"

const Ex60 = () => {
    const [fields, setFields] = useState({
        name: "Abhishek",
        role: "Software Engineer",
        location: "Greater Noida",
        age: 25
    });
  return (
    <div>
      {
        Object.keys(fields).map((item, index) => {
            const vals = Object.values(fields);
            return <input key={index} type={typeof vals[index]} name={item} value={vals[index]}/>
        }
      )}
    </div>
  )
}

export default Ex60

