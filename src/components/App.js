import React from 'react'
import '../styles/App.css'
import Face from '../containers/Face'
import Grid from '../containers/Grid'
import Clock from '../containers/Clock'
import Counter from '../containers/Counter'
import { Wrapper, Scoreboard } from './App.styled'

const App = () =>
  <Wrapper>
    <Scoreboard>
      <Counter />
      <Face />
      <Clock />
    </Scoreboard>
    <div className="grid">
      <Grid />
    </div>
  </Wrapper>

export default App
