// Create a feature that updates state every second using setInterval.

import { useState, useEffect } from "react"

const getTime = () => new Date().toLocaleTimeString();

const Ex21 = () => {
    const t = getTime()
    const [time, setTime] = useState(t);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(p => getTime(p))
        }, 1000)

        return () => {
            clearTimeout(intervalId)
        }
    }, [])

  return (
    <div>
      <h1 className="text-3xl text-amber-700">Current Time: <span className="text-indigo-500">{time}</span></h1>
    </div>
  )
}

export default Ex21
