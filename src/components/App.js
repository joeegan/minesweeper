import React from 'react'
import Face from '../containers/Face'
import Grid from '../containers/Grid'
import Clock from '../containers/Clock'
import Counter from '../containers/Counter'
import { Scoreboard, StyledApp } from './App.styled'

const App = () =>
  <StyledApp>
    <Scoreboard>
      <Counter />
      <Face />
      <Clock />
    </Scoreboard>
    <Grid />
  </StyledApp>

export default App
