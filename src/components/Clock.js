import React from 'react'
import { Digits } from './App.styled'

const Clock = ({ tick }) =>
  <Digits>
    <div>888</div>
    <div>
      {tick.toString().padStart(3, 0)}
    </div>
  </Digits>

export default Clock
