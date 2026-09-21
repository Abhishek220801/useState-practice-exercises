// Implement a profile card that updates a user’s details dynamically.

import { useState } from "react"

const Ex38 = () => {
    const [user, setUser] = useState({
        image: "",
        name: "",
        email: "",
        role: ""
    }); 

    const handleChange = (e) => {
        const input = e.target;
        const key = input.name;
        const value = key === "image" ? URL.createObjectURL(input.files[0]) : input.value;

        setUser({
            ...user, 
            [key]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setUser({...user, })
        console.log(user);
    }

  return (
    <div className="bg-gray-200 h-screen">
        <div className="w-7/12 mx-auto grid grid-cols-2 gap-12 py-12">
            <div className="bg-white rounded-lg p-6">
                <h1 className="text-xl">Add Info</h1>
                <form className="mt-3 flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input type="file" onChange={handleChange} name="image" className="bg-slate-200 p-2 rounded" accept="image/*"/>
                    <input type="text" onChange={handleChange} name="name" className="border border-slate-200 p-2 rounded" placeholder="Enter your name"/>
                    <input type="text" onChange={handleChange} name="email" className="border border-slate-200 p-2 rounded" placeholder="Your email"/>
                    <input type="text" onChange={handleChange} name="role" className="border border-slate-200 p-2 rounded" placeholder="Your role"/>
                </form>
            </div>
            <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-1">
                <img src={user.image || "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"} alt="user-avt" className="w-25 h-25 rounded-full" />
                <h1 className="text-2xl font-semibold">{user.name || "Abhishek"}</h1>
                <p className="text-gray-500">{user.email || "demo@gmail.com"}</p>
                <p className="text-gray-500">{user.role || "Software Engg."}</p>
            </div>
        </div>
    </div>
  )
}

export default Ex38
