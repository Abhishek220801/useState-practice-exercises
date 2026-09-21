import { useState } from 'react'

const Ex24 = () => {
    const [text, setText] = useState("")
  return (
    <div>
        <input type="text" className='border' onKeyUp={(e) => setText(e.target.value)}/>

        <h1 className='text-3xl'>{text}</h1>
    </div>
  )
}

export default Ex24
