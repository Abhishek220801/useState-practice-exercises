// Implement a state object that stores and updates width and height dynamically.

import { useState } from "react"

const Ex35 = () => {
  const [dimensions, setDimensions] = useState({
    width: 100,
    height: 100,
  })
  return (
    <div className="p-24">
      <input type="number" placeholder="Enter height" onChange={(e) => setDimensions({...dimensions, height: e.target.value})} className="border" value={dimensions.height}/>
      <input value={dimensions.width} type="number" onChange={(e) => setDimensions((prev) => ({...prev, width: e.target.value}))} placeholder="Enter width" className="border"/>
      <div
        style={{ height: `${dimensions.height}px`, width: `${dimensions.width}px` }}
        className=" bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
      ></div>
    </div>
  )
}

export default Ex35
