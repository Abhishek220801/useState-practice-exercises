// Build a component that conditionally renders different messages based on state

import { useState } from "react";

const Ex29 = () => {
    const [userMood, setUserMood] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setUserMood(e.target.id)
    }
  return (
    <div className="flex justify-around">
      <form onInput={handleChange} className="flex flex-col justify-center">
        <label htmlFor="happy">Happy</label>
        <input id="happy" name="emotion" type="radio" />
        <label htmlFor="sad">Sad</label>
        <input id="sad" name="emotion" type="radio" />
        <label htmlFor="angry">Angry</label>
        <input id="angry" name="emotion" type="radio" />
        <label htmlFor="fearful">Fearful</label>
        <input id="fearful" name="emotion" type="radio" />
      </form>

      <h1 className="text-5xl font-Monument self-center">{userMood.length > 0 && "User is " + userMood}</h1>
    </div>
  )
}

export default Ex29
