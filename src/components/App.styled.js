import styled from 'styled-components'
import { colors, borders } from '../styles/utils'

export const Wrapper = styled.div`
  background: ${colors.vDarkGrey};
  padding: 7px;
  display: inline-block;
  ${borders(
    'lightGrey',
    'darkGrey',
    'darkGrey',
    'lightGrey'
  )};
`

export const Scoreboard = styled.div`
  display: flex;
  width: 134px;
  padding: 4px 5px;
  text-align: center;
  margin: 3px auto;
  background: ${colors.midGrey};
  ${borders(
    'darkGrey',
    'lightGrey',
    'lightGrey',
    'darkGrey'
  )};
  > div {
    flex: 1;
  }
`
