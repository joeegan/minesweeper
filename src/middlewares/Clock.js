import { CELL_UNCOVERED, RESTART, TICK } from '../actions'

let interval
let intervalInProgress = false

export default ({ dispatch }) => next => action => {
  if (
    action.type === RESTART ||
    (action.type === CELL_UNCOVERED &&
      action.cell.content === '💣')
  ) {
    clearInterval(interval)
    intervalInProgress = false
  } else if (
    action.type === CELL_UNCOVERED &&
    !intervalInProgress
  ) {
    interval = setInterval(() => {
      dispatch({ type: TICK })
    }, 1000)
    intervalInProgress = true
  }

  /* eslint-enable no-console */
  next(action)
}
