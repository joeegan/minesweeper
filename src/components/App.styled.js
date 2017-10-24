import styled, { injectGlobal } from 'styled-components'
import { borders, colors } from '../styles/utils'

injectGlobal`
  @font-face {
    font-family: 'digital-7';
    src: url('./digital-7.mono.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  body {
    margin: 20px;
    overflow: hidden;
    font-family: 'digital-7', monospace;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`

export const StyledApp = styled.div`
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
  > div:first-child {
    opacity: .3;
    z-index: 1;
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
