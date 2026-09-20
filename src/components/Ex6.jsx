import React, { useState } from 'react'

const Ex6 = () => {
    const [show, setShow] = useState(false);

    const togglePassword = () => {
        setShow(curr => !curr)
    }

  return (
    <div className='p-24'>
      <form className='flex gap-5'>
        <div className='space-x-2'>
            <label htmlFor="email">Email</label>
            <input type="email" className='border'/>
        </div>
        <div className='space-x-2'>
            <div className='flex justify-between'>
                <label htmlFor="password">Password</label>
                <span className='cursor-pointer' onClick={togglePassword}>👁️</span>
            </div>
            <input type={show ? "text" : "password"} className='border'/>
        </div>
      </form>
    </div>
  )
}

export default Ex6
