// Build a form that updates user information but retains previously entered data.

import { useState } from "react"

const Ex47 = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const input = e.target;
        const key = input.name;
        const value = input.value;

        setCredentials({
            ...credentials,
            [key]: value
        })
    }

    const signin = (e) => {
        console.log(e.preventDefault());
        console.log(credentials);
    }
  return (
    <div>
      <form className="space-x-3" onSubmit={signin}>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" onChange={handleChange} className="border"/>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" onChange={handleChange} className="border"/>
        <button className="bg-sky-500 px-4.5 py-1 rounded-xl text-white">Submit</button>
      </form>

      <div>
        <h1>User email: {credentials.email}</h1>
        <h1>User password: {credentials.password}</h1>
      </div>
    </div>
  )
}

export default Ex47
