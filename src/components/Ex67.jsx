// Build a state that holds multiple selected items in a list.

import { useEffect, useState } from "react"

const Ex67 = () => {
    const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    const [itemList, setItemList] = useState([]);

    const [item, setItem] = useState([]);

    const add = () => {
        setItemList([...itemList, item])
        console.log(itemList)
    }

    useEffect(() => {
        sessionStorage.setItem("theme", "dark");

        return () => sessionStorage.clear()
    }, []);
  return (
    <div>
        {items.length > 0 && 
        items.map((item, index) => (
            <div key={index}>
                <label htmlFor={item}>{item}</label>
                <input onChange={(e) => setItem([...item, {state: e.target.checked, key: item}])} name={item} type="checkbox" />
            </div>
        ))}
        <button onClick={add}>add</button>
    </div>
  )
}

export default Ex67

