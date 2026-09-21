// Create a user profile state with name and age, and update them via input fields.

import { useState } from "react"

const Ex31 = () => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    age: "",
  })
  return (
    <>
      <div className="p-24">
        <div className="flex flex-col w-50">
          <label>Name: </label>
          <input value={userProfile.name} onChange={(e) => setUserProfile({...userProfile, name: e.target.value})} type="text" className="border" />
          <label>Age: </label>
          <input value={userProfile.age} onChange={(e) => setUserProfile({...userProfile, age: e.target.value})} type="text" className="border" />
        </div>
      </div>
      {userProfile.name.length> 0 && userProfile.age.length>0 && <h1 className="text-6xl font-[Monument] text-amber-400">
        {userProfile.name} is {userProfile.age} years old.
      </h1>}
    </>
  )
}

export default Ex31
