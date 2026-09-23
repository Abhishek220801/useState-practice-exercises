// Build a component where state stores name, age, and gender, and updates individually.

import { useState } from "react";

const Ex53 = () => {
  const [user, setUser] = useState({
    name: "",
    age: 0,
    gender: "",
  })

  const handleChange = (e) => {
    const input = e.target;
    const key = input.name;
    const val = input.value;

    setUser({
      ...user,
      [key]: val
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
  }
  return (
    <div className="p-16">
      <form className="flex flex-col w-80" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} name="name" type="text"  className="border border-gray-400 rounded-md"/>
        <label htmlFor="age">Age: </label>
        <input onChange={handleChange} name="age" type="number"  className="border border-gray-400 rounded-md"/>
        <label htmlFor="gender">Gender: </label>
        <select name="gender" id="gender" onChange={handleChange}>
          <option value="select" defaultValue disabled>Select gender</option>
          <option name="male">Male</option>
          <option name="female">Female</option>
          <option name="other">Other</option>
        </select>

        <input type="submit" value="Submit" className="bg-sky-500 text-white rounded-xl mt-3"/>
      </form>
    </div>
  )
}

export default Ex53
