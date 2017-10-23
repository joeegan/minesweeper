import tick from './tick'
import face from './face'
import grid from './grid'
import counter from './counter'
import { combineReducers } from 'redux'

export default combineReducers({
  grid,
  face,
  tick,
  counter
})
