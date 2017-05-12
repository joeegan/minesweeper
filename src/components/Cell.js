import React from 'react'

const Cell = ({ onMouseDown, onMouseUp, content, covered, index }) => {
  return (
    <li onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        className={covered ? 'cell covered' : 'cell'}
    >
      <span className={'cell' + content}>{content}</span>
    </li>
  )
}

export default Cell
