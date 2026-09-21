// Create a state variable that stores the current date and updates it every second.

import { useEffect, useState } from "react"

const getCurrentDate = () => {
    return new Date().toLocaleString();
}

const Ex27 = () => {
    const t = getCurrentDate();
    const [date, setDate] = useState(t);

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(getCurrentDate())
        }, 1000);

        return () => clearInterval(timer);
    }, [date])
  return (
    <div>
        <h1>Date Time: {date}</h1>
    </div>
  )
}

export default Ex27
