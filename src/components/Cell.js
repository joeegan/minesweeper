import React from 'react'

const Cell = ({
  onMouseDown,
  onMouseUp,
  content,
  uncovered,
  index,
  selectedMine,
}) => {
  return (
    <li
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className={uncovered ? 'cell uncovered' : 'cell'}
    >
      <span
        className={
          'cell' +
            content +
            (selectedMine ? ' selectedMine' : '')
        }
      >
        {content}
      </span>
    </li>
  )
}

export default Cell
