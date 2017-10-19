import React from 'react'
import '../styles/App.css'
import Face from '../containers/Face'
import Grid from '../containers/Grid'
import Clock from '../containers/Clock'
import Counter from '../containers/Counter'
import { Scoreboard, Wrapper } from './App.styled'

const App = () =>
  <Wrapper>
    <Scoreboard>
      <Counter />
      <Face />
      <Clock />
    </Scoreboard>
    <Grid />
  </Wrapper>

export default App
