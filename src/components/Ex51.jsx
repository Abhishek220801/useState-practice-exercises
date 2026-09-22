// Implement a state object that tracks the last key pressed by the user.

import { useEffect, useState } from "react"

const Ex51 = () => {
    const [key, setKey] = useState({lastKeyPressed: ""})

    useEffect(() => {
        window.onkeydown = (e) => {
            setKey({lastKeyPressed: e.key})
        }
    }, [])
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold">Press Any Key</h1>
      <h1 className="font-[Monument]">{key.lastKeyPressed}</h1>
    </div>

  )
}

export default Ex51
