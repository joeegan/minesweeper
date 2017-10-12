import React from 'react'
import styled from 'styled-components'
import { borders } from '../styles/utils'

export const FaceContainer = styled.div`
  width: 19px;
  height: 19px;
  line-height: 23px;
  cursor: pointer;
  margin: 1px auto;
  ${borders(
    'lightGrey',
    'darkGrey',
    'darkGrey',
    'lightGrey'
  )};
  &:active {
    ${borders(
      'darkGrey',
      'lightGrey',
      'lightGrey',
      'darkGrey'
    )};
  }
`

const Face = ({ onMouseUp, face }) => {
  return (
    <div>
      <FaceContainer onMouseUp={onMouseUp}>
        {face}
      </FaceContainer>
    </div>
  )
}

export default Face
