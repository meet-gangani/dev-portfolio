import React from 'react'
import { FcCheckmark } from 'react-icons/fc'

const Checkmark = () => {
  return (
      <div className="position-absolute end-0 " style={{ top: '-36px' }}>
        <FcCheckmark/>
      </div>
  )
}

export default Checkmark