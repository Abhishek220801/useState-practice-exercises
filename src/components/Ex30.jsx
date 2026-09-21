// Create a toggle button that switches between two different components.

import { useState } from "react"

const Ex30A = () => {
  return (
    <div>
      <h1 className='text-8xl'>Component A</h1>
    </div>
  )
}

const Ex30B = () => {
  return (
    <div>
      <h1 className='text-8xl'>Component B</h1>
    </div>
  )
}

const Ex30 = () => {
  const [switched, setSwitched] = useState([1, 3])

  const handleSwitch = () => {
    setSwitched([...switched].reverse())
  }
  return (
    <div>
      <div className="flex flex-col">
        <div style={{ order: switched.at(0) }}>
          <Ex30A />
        </div>
        <button
          onClick={handleSwitch}
          className="bg-sky-300 px-9 py-3 order-2 w-fit self-center"
        >
          Switch
        </button>
        <div style={{ order: switched.at(1) }}>
          <Ex30B />
        </div>
      </div>
    </div>
  )
}

export default Ex30
