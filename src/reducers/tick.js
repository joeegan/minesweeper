import { TICK, RESTART } from './../actions'

const tick = (state = 0, action) => {
  switch (action.type) {
    case TICK:
      state++
      return state
    case RESTART:
      return 0
    default:
      return state
  }
}

export default tick
