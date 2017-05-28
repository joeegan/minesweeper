import React from 'react'

const Cell = ({
  onMouseDown,
  onMouseUp,
  content,
  uncovered,
  index,
}) => {
  return (
    <li
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className={uncovered ? 'cell uncovered' : 'cell'}
    >
      <span className={'cell' + content}>{content}</span>
    </li>
  )
}

export default Cell
