// Implement a feature where a button click resets all state values.

import { useState } from "react"

const Ex28 = () => {
    const [formValues, setFormValues] = useState({email: "", password: ""})
  return (
    <div>
      <form>
        <label>Email: </label>
        <input onChange={(e) => setFormValues({...formValues, email: e.target.value})} value={formValues.email} type="email" className="border border-fuchsia-100"/>
        <label htmlFor="">Password: </label>
        <input onChange={(e) => setFormValues({...formValues, password: e.target.value})} value={formValues.password} type="password" className="border border-fuchsia-100"/>
      </form>
      <button className="bg-amber-500 px-6 py-2.5 rounded-md" onClick={() => setFormValues({email: "", password: ""})}>Reset</button>
    </div>
  )
}

export default Ex28
