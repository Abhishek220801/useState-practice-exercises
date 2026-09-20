import { useState } from "react"

const Ex5 = () => {
    const [text, setText] = useState("");
  return (
    <div className='p-24'>
        <label children="Type Here: "></label>
        <input type="text" className='border border-slate-400 focus:border-red-500' onChange={(e) => setText(e.target.value)}/>
      <h1 className="text-5xl mt-14 font-[Monument] text-zinc-400">{text}</h1>
    </div>
  )
}

export default Ex5
