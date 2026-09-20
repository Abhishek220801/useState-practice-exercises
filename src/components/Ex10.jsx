// Create a form with a "Submit" button that logs the input value on click.

import { useState } from "react"

const Ex10 = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <div className="p-18">
      <form className="flex gap-4" onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            className="border"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="px-5 py-1 rounded-xl bg-indigo-400"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Ex10
