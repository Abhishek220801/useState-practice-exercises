// Build a component that switches between two different user profiles stored in state.

import { useState } from "react"

const Ex40 = () => {
    const user1 = {
        image: "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png",
        name: "Abhishek",
        email: "abhi@gmail.com",
        role: "Software Engg."
    }

    const user2 = {
        image: "https://images.unsplash.com/photo-1740252117044-2af197eea287?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Sanjay Singh Rawat",
        email: "ssrawat@gmail.com",
        role: "Backend Developer"
    }

    const [user, setUser] = useState(user1);

    const toggle = () => {
        console.log({user, user1, user2}, typeof user, typeof user1, typeof user2)
        setUser(JSON.stringify(user) == JSON.stringify(user1) ? user2 : user1)
    }
  return (
    <div className="w-1/2 grid grid-cols-2 gap-12 mx-auto mt-24">
      <div className="bg-gray-100 h-87.5 rounded-xl flex items-center justify-center flex-col gap-2 order-1">
        <img
          src={user.image}
          alt="user-avt"
          className="w-25 h-25 rounded-full"
        />
        <h1 className="text-2xl font-semibold">{user.name}</h1>
        <p className="text-gray-500">{user.email}</p>
        <p className="text-gray-500">{user.role}</p>
      </div>

      <button className="order-2 h-30 w-30 bg-purple-600 rounded-full text-white" onClick={toggle}>Swap Profiles</button>

      {/* <div className="order-3 bg-gray-100 h-87.5 rounded-xl flex items-center justify-center flex-col gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNE6gLOycpDfoiH3g3zu8qyv3Mml9m4xtKccTZgHpmHogOpp4fXGmZUIk&s=10"
          alt="user-avt"
          className="w-25 h-25 rounded-full"
        />
        <h1 className="text-2xl font-semibold">Sanjay Singh Rawat</h1>
        <p className="text-gray-500">sanjay@gmail.com</p>
        <p className="text-gray-500">Backend Developer</p>
      </div> */}
    </div>
  )
}

export default Ex40
