import React from 'react'
import { Digits } from './App.styled'

const Counter = ({ counter }) =>
  <Digits>
    <div>888</div>
    <div>
      {counter.toString().padStart(3, 0)}
    </div>
  </Digits>

export default Counter
