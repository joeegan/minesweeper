import React from 'react'
import styled from 'styled-components'
import { borders } from '../styles/utils'

const Cell = ({
  onMouseDown,
  onMouseUp,
  onContextMenu,
  content,
  uncovered,
  index,
  selectedMine,
  liClassName
}) =>
  <li
    onContextMenu={onContextMenu}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    className={liClassName}
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

export default Cell
