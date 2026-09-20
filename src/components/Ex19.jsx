// Create a state variable that stores a random number and updates on button click.

import { useState } from "react";

const Ex19 = () => {
    const [num, setNum] = useState(0);

    const generateRandom = () => {
        const random = Math.floor(Math.random() * (101))
        setNum(random);
    }
  return (
    <div>
      <h1 className="text-4xl">Your Random Number: <span className="underline">{num}</span></h1>
      <button className="px-6 py-2.5 bg-orange-500 text-white mt-2" onClick={generateRandom}>Update</button>
    </div>
  )
}

export default Ex19
