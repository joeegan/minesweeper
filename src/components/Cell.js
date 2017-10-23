import React from 'react'
import styled from 'styled-components'
import { borders, colors } from '../styles/utils'
import { equals } from 'ramda'

const StyledCell = styled.li`
  width: 12px;
  height: 13px;
  background: ${colors.midGrey};
  font-family: monospace;
  font-weight: bold;
  font-size: 17px;
  line-height: 11px;

  ${props =>
    props.uncovered
      ? 'border: 1px solid grey; padding: 1px;'
      : borders(
          'lightGrey',
          'darkGrey',
          'darkGrey',
          'lightGrey'
        )};
`

const colorNames = [
  'transparent',
  'blue',
  'green',
  'red',
  'blue',
  'brown',
  'teal',
  'black',
  'grey'
]

const StyledSpan = styled.span`
  background: ${({ background }) => background};
  color: ${props => props.color};
  display: ${props => props.display};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
`

const fontSize = (flagged, content) => {
  if (equals(content, '💣')) {
    return '12px'
  } else if (flagged) {
    return '10px'
  }
  return 'inherit'
}

const Cell = ({
  onMouseDown,
  onMouseUp,
  onContextMenu,
  content,
  uncovered,
  index,
  selectedMine,
  flagged
}) =>
  <StyledCell
    onContextMenu={onContextMenu}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    flagged={flagged}
    uncovered={uncovered}
  >
    <StyledSpan
      background={selectedMine ? 'red' : 'transparent'}
      color={colorNames[content]}
      display={flagged || uncovered ? 'block' : 'none'}
      lineHeight={content === '💣' ? '15px' : 'inherit'}
      fontSize={fontSize(flagged, content)}
    >
      {content}
    </StyledSpan>
  </StyledCell>

export default Cell
