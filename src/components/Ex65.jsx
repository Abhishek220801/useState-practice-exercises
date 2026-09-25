// Create a component where users can add multiple email addresses to a list.

import { useState } from "react"

const Ex65 = () => {
    const [emails, setEmails] = useState([]);
    const [email, setEmail] = useState("");

    const addEmail = () => {
        if(email.length === 0) return;
        setEmails([...emails, email]);
        setEmail("");
    }
  return (
    <div>
      <h2 className="text-2xl font-semibold underline mb-2">Add your email to Directory</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email here" className="border border-gray-300 rounded-xl"/>
      <button onClick={addEmail} className="px-6 py-2.5 bg-indigo-500 rounded-2xl text-white">Add</button>

      <div>
        {
            emails.length > 0 && emails.map((email, idx) => (
                <li key={idx}>{idx+1 + ". " + email}</li>
            ))
        }
      </div>
    </div>
  )
}

export default Ex65