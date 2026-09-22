// Create a form that validates user input and updates an error message in state.

import { useState } from "react"

const Ex52 = () => {
    const [form, setForm] = useState({
        fullName: "",
        email: ""
    })
    const [error, setError] = useState({
        fullName: false,
        email: false
    });

    const handleChange = (e) => {
        const inp = e.target;
        const key = inp.name;
        const val = inp.value;

        setForm({
            ...form,
            [key]: val
        })
    }

    const signin = (e) => {
        e.preventDefault();
        const fullVal = validateFullname(form.fullName)
        const emailVal = validateEmail(form.email)
        if(fullVal && emailVal){
            alert("signin success");
            return;
        }
        setError({
            fullName: !fullVal,
            email: !emailVal
        })
    }

    const validateFullname = (fullname) => {
        return /^[a-zA-Zà-ÿÀ-Ÿ]+([ '-][a-zA-Zà-ÿÀ-Ÿ]+)+$/.test(fullname)
    };

    const validateEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    };

  return (
    <div>
      <form className="flex flex-col w-87.5 mx-auto mt-24 gap-4" onSubmit={signin}>
        <div className="flex flex-col">
          <label>Fullname</label>
          <input onChange={handleChange} name="fullName" type="text" className="border p-3 rounded" />
          {error.fullName && <label className="text-red-500">Fullname validation failed</label>}
        </div>

        <div className="flex flex-col">
          <label>Email</label>
          <input onChange={handleChange} name="email" type="text" className="border p-3 rounded" />
          {error.email && <label className="text-red-500">Email validation failed</label>}
        </div>

        <button className="p-3 rounded bg-rose-600 text-white">Submit</button>
      </form>
    </div>
  )
}

export default Ex52
