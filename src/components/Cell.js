import React from 'react'

const Cell = ({ onMouseDown, onMouseUp, content, covered, index }) => {
  return (
    <li onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        className={covered ? 'cell covered' : 'cell'}
    >
    </li>
  )
}

export default Cell
