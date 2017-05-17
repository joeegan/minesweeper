import React from 'react'

const Face = ({ onMouseUp, face }) => {
  return (
    <div onMouseUp={onMouseUp}>
      {face}
    </div>
  )
}

export default Face
