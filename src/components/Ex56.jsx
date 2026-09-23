// Build a counter app where state tracks multiple counters inside an object.

import { useState } from "react"

const Ex56 = () => {
  const [counter, setCounter] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  })

  const calculate = (e) => {
    const btn = e.target
    const btnName = btn.name

    setCounter({
      ...counter,
      [btnName]:
        btn.childNodes[0].data === "+"
          ? Number(counter[btnName]) + 1
          : Number(counter[btnName]) - 1,
    })
  }

  const decrement = (e) => {
    const btn = e.target
    const btnName = btn.name

    setCounter({
      ...counter,
      [btnName]: counter.btnName--,
    })
  }
  return (
    <div>
      <h1>Counter 1 clicks: {counter.counter1}</h1>
      <div onClick={calculate}>
        <button className="px-6 py-1 bg-rose-600 rounded-2xl text-white" name="counter1">
          -
        </button>
        <button className="px-6 py-1 bg-green-600 rounded-2xl text-white" name="counter1">
          +
        </button>
      </div>
      <h1>Counter 2 clicks: {counter.counter2}</h1>
      <div onClick={calculate}>
        <button className="px-6 py-1 bg-rose-600 rounded-2xl text-white" name="counter2">-</button>
        <button className="px-6 py-1 bg-green-600 rounded-2xl text-white" name="counter2">+</button>
      </div>
      <h1>Counter 3 clicks: {counter.counter3}</h1>
      <div onClick={calculate}>
        <button name="counter3" className="px-6 py-1 bg-rose-600 rounded-2xl text-white" >-</button>
        <button className="px-6 py-1 bg-green-600 rounded-2xl text-white" name="counter3">+</button>
      </div>
    </div>
  )
}

export default Ex56
