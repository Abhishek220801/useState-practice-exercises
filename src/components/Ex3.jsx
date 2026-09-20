// Implement a counter app with increment and decrement buttons.

import { useState } from "react"

const Ex3 = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <div className="flex">
        <button className="px-6 py-2.5 bg-green-500 rounded-xl" onClick={() => setCount(c => c+1)}>Increment</button>
        <button className="px-6 py-2.5 bg-rose-500 rounded-xl" onClick={() => setCount(c => c-1)}>Decrement</button>
      </div>
    </div>
  )
}

export default Ex3
