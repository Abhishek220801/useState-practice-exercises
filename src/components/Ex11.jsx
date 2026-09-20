// Build a show/hide paragraph functionality.

import { useState } from "react"

const Ex11 = () => {
    const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="p-22 space-y-5">
      <p className="h-35 overflow-auto border border-zinc-300">{isHidden ? "" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, iusto deserunt. Illum dignissimos dicta quis nemo officiis unde iste id laborum corporis sed expedita cumque soluta libero similique est, ab excepturi quidem dolor dolores dolorum iure, tempora quasi accusantium. Consequatur officiis numquam eum, explicabo, fuga velit voluptate illo quod totam laborum at perferendis est maiores aut iure consectetur, facilis dolore. Fugiat iure natus doloremque explicabo officiis ut repudiandae! Voluptas provident officiis ut repudiandae magnam enim laborum esse illum libero voluptatem velit explicabo, autem commodi omnis accusamus, voluptatum nulla maiores qui vel unde iure, at ipsam consectetur ad. Laborum repudiandae dolorem dolore, corporis quaerat ea maiores accusamus atque commodi. Magni reiciendis ipsa quibusdam sint dolores ex accusamus sunt dolor rerum velit!"}</p>

      <div className="text-center">
        <button className="px-6 py-2.5 bg-cyan-600 rounded-2xl text-white" onClick={() => setIsHidden(!isHidden)}>{isHidden ? "Show": "Hide"} paragraph</button>
      </div>
    </div>
  )
}

export default Ex11
