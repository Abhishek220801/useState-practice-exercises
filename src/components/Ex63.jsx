// Build a dynamic list where users can add and remove items using state.

import { useRef, useState } from "react"

const Ex63 = () => {
  const [items, setItems] = useState([
    "iPad",
    "Peanut Butter",
    "Yakult Probiotic Drink",
    "Rice",
    "Eggs",
    "Chia seeds",
    "Cereals",
    "Milk",
  ])
  const [item, setItem] = useState("");
  const inputRef = useRef(null);

  const addItem = () => {
    setItems([...items, item])
    setItem("");
    inputRef.current.focus();
  }

  const removeItem = (index) => {
    return setItems(items.filter((_, idx) => idx !== index))
  }
  return (
    <div className="flex justify-between">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Shopping List</h1>
        {items.length > 0 &&
          items.map((item, index) => (
            <div key={index} className="flex space-x-5">
            <li>{index + 1 + ". " + item}</li>
            <button onClick={() => removeItem(index)} className="px-3 py-0.5 bg-rose-500 text-white rounded-2xl">remove item</button>
            </div>
          ))}
      </div>
      <div className="h-fit p-6 border-3 border-teal-600">
        <div>
          <h1 className="text-2xl font-semibold mb-5">Add Item to Cart</h1>
          <label>Add item: </label>
          <input value={item} type="text" className="border border-gray-400 mx-4" placeholder="Enter item" onChange={(e) => setItem(e.target.value)} ref={inputRef}/>
        </div>
        <button disabled={item.length === 0} onClick={addItem} className="px-4 py-2 bg-gray-400 rounded-xl text-white mt-4">Add to Cart</button>
      </div>
    </div>
  )
}

export default Ex63