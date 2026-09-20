// Build a show/hide image functionality in React.

import { useEffect, useState } from 'react'

const Ex1 = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setShow(true);
      }, 2000)

      return () => clearTimeout(() => {
        setShow(true)
      }, 2000)
    }, [])
  return (
    <>
    <div className='space-y-4 min-h-100'>
      {show && <img src="demo.jpg" alt="demo__img" />}
    </div>
      <button className='px-6 py-2.5 bg-amber-600 rounded-md p-8' onClick={() => setShow(p => !p)}>{show ? "Hide" : "Show"}</button>
    </>
  )
}

export default Ex1