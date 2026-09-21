// Build a form where users can update their email and password in an object state.

import { useState } from "react"

const Ex37 = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        const input = e.target;
        const key = input.name;
        const value = input.value;
        setCredentials({...credentials, [key]: value})
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  }

  return (
    <div>
      <form>
        <label htmlFor="email">Email: </label>
        <input name="email" onChange={handleChange} type="email" />
        <label htmlFor="password">Password: </label>
        <input name="password" onChange={handleChange} type="password" />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Ex37
