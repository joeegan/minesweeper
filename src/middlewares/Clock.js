import { RESTART, TICK } from '../actions'

let interval

export default ({ dispatch }) => next => action => {
  if (action.type === RESTART) {
    clearInterval(interval)
    interval = setInterval(() => {
      dispatch({ type: TICK })
    }, 1000)
  }

  /* eslint-enable no-console */
  next(action)
}
