// Create an object state to store a user's login credentials and update them.

import { useState } from "react"

const Ex33 = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials)
  }
  return (
    <div className="p-24">
      <form onSubmit={handleSubmit} className="space-x-1 space-y-2">
        <label htmlFor="email">Email</label>
        <input value={credentials.email} onChange={e => setCredentials({...credentials, email: e.target.value})} type="email" className="border border-sky-300"/>
        <label htmlFor="password">Password</label>
        <input value={credentials.password}
        onChange={e => setCredentials({...credentials, password: e.target.value})} type="password" className="border border-sky-300"/>
        <button className="bg-sky-500 px-6 py-2.5 rounded-md text-white">Submit</button>
      </form>
    </div>
  )
}

export default Ex33
