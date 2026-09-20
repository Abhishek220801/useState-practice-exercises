// Create a button that toggles text between "Show" and "Hide".

import { useState } from "react";

const Ex2 = () => {
    const [hidden, setHidden] = useState(false);
  return (
    <div>
        <button onClick={() => setHidden(!hidden)} className="px-5 py-1.5 bg-yellow-400">{hidden ? "Show" : "Hide"}</button>
    </div>
  )
}

export default Ex2
