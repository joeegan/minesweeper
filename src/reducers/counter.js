import { RESTART, CELL_RIGHT_CLICKED } from './../actions'

const counter = (state = 0, action) => {
  switch (action.type) {
    case RESTART:
      return 0
    case CELL_RIGHT_CLICKED:
      return action.cell.content === '🚩'
        ? state - 1
        : state + 1
    default:
      return state
  }
}

export default counter
