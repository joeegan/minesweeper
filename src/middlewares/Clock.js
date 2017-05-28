import { TICK, RESTART } from '../actions'

let interval

export default ({ dispatch }) => {
  return next => action => {
    if (action.type === RESTART) {
      clearInterval(interval)
      interval = setInterval(() => {
        dispatch({
          type: TICK,
        })
        console.log('tick')
      }, 1000)
    }

    /* eslint-enable no-console */
    next(action)
  }
}
