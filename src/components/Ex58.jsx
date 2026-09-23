//  Create a form that resets only specific fields when a reset button is clicked.

import { useState } from "react"

const Ex58 = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  const handleChange = (e) => {
    const input = e.target;
    const key = input.name;
    const val = input.value;

    setForm({...form, [key]: val});
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="fullname"
          type="text"
          placeholder="Fullname"
          className="border border-gray-300 m-2 rounded-md"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border border-gray-300 m-2 rounded-md"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={form.password}
          placeholder="Password"
          className="border border-gray-300 m-2 rounded-md"
          onChange={handleChange}
        />
        <div className="flex justify-around">
          <button
            type="button"
            className="bg-rose-400 text-white px-2 py-0.5 "
            onClick={(e) => {
              e.preventDefault()
              setForm({ ...form, password: "" })
            }}
          >
            Reset password
          </button>

          <button className="bg-green-400 text-white px-4 py-1 rounded-2xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Ex58
