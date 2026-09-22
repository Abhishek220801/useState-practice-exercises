// Implement a text input that updates only one field of an object state.

import { useState } from "react"

const Ex43 = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
  return (
    <div>
        <input type="email" placeholder="Enter your email" className="border" onChange={(e) => setCredentials({...credentials, email: e.target.value})}/>
        <input type="password" placeholder="Enter password" className="border"/>

        <h1 className="text-3xl text-gray-400 mt-8">User's email is: {credentials.email}</h1>
    </div>
  )
}

export default Ex43
