// Implement a "Like" button that toggles between "Liked" and "Unliked".

import { Heart } from "lucide-react";
import { useState } from "react"
import { TbHeartFilled } from "react-icons/tb"

const Ex23 = () => {
    const [liked, setLiked] = useState(false);
  return (
    <div>
        <button onClick={() => setLiked(!liked)} className="px-7 py-2.5 bg-slate-300 flex gap-3"><span>{liked ? <TbHeartFilled className="text-red-500"/>: <Heart/>}</span> {liked ? "Unlike": "Like"}</button>
    </div>
  )
}

export default Ex23
