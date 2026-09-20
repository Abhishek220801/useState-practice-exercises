import { useState } from "react"

const Ex8 = () => {
    const [count, setCount] = useState(0);
  return (
    <div className="p-24 space-y-4 border-b bg-amber-50">
        <h1 className="text-3xl font-bold">Click Count: {count}</h1>
        <button className="px-6 py-2.5 bg-green-500 rounded-md" onClick={() => setCount(c => c+1)}>Click Me</button>
    </div>
  )
}

export default Ex8
