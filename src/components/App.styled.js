import styled from 'styled-components'
import { borders, colors } from '../styles/utils'

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

export const Digits = styled.div`
  display: inline-block;
  position: relative;
  > div {
    position: absolute;
    top: 0;
    left: 0;
    color: red;
    background: black;
    font-size: 34px;
    font-weight: 100;
    line-height: 28px;
    height: 24px;
  }
  > div:last-child {
    opacity: 0.3;
  }
`

export const GridBorder = styled.div`
  ${borders(
    'darkGrey',
    'lightGrey',
    'lightGrey',
    'darkGrey'
  )};
`
