// Build a form that manages multiple input fields using a single state object.

import { useState } from "react"

const Ex44 = () => {
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        designation: "",
        location: ""
    })

    const handleChange = (e) => {
        const input = e.target;
        const key = input.name;
        const value = input.value;

        setEmployee({
            ...employee,
            [key]: value
        })
    }
    
  return (
    <div>
      <form action="POST" className="grid grid-cols-2 gap-3 space-y-3">
        <div>
          <label htmlFor="firstname">Firstname</label>
          <input type="text" name="firstName" className="border" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input type="text" name="lastName" className="border" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" onChange={handleChange}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="designation">Designation</label>
          <input name="designation" type="text" className="border" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input name="location" type="text" className="border" onChange={handleChange}/>
        </div>

      </form>
        <button className="bg-red-400 px-8 py-3 rounded-xl mt-3" onClick={() => console.log(employee)}>Get Employee Details</button>
    </div>
  )
}

export default Ex44
