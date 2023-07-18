import { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

interface LikeProps {
  onClick: () => void
}

export const Like = ({ onClick }: LikeProps) => {
  const [state, setState] = useState(true)

  if (state) {
    return (
      <div onClick={() => { setState(false); onClick(); }}>
        <AiFillHeart color='red' size={40} />
      </div>
    )
  }

  return (
    <div onClick={() => { setState(true); onClick(); }}>
      <AiOutlineHeart size={30} />
    </div>
  )
}
