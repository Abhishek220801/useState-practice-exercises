// Implement a state that stores a list of names and allows adding new names dynamically.

import { useState } from "react";

const Ex62 = () => {
    const [names, setNames] = useState(["Abhishek", "Amit", "Keshav Jha", "Sanjay Rawat", "Vivek", "Rubani", "Soumya"]);
    const [name, setName] = useState("")

  return (
    <div>
        <label>Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Enter your name"  className="border border-gray-400 rounded-md"/>
        <button onClick={() => {
            setNames([...names, name]);
            setName("")
        }
        } className="bg-sky-500 px-4.5 py-1 rounded-2xl text-white">Add name</button>

        <div className="p-8">
            <table className="border">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        names.map((name, idx) => (
                            <tr key={idx} className="border border-gray-400">
                                <td>{name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Ex62
