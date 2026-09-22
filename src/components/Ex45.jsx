// Implement a login form where state tracks email, password, and rememberMe.

import { useState } from "react"

const Ex45 = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleChange = (e) => {
    const input = e.target
    const key = input.name
    const value = key === "rememberMe" ? input.checked : input.value

    setForm({
      ...form,
      [key]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input name="email" type="email" onChange={handleChange} />
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="rememberMe">Remember me </label>
          <input name="rememberMe" type="checkbox" onChange={handleChange} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Ex45
