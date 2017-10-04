import {
  CELL_PRESSED,
  RESTART,
  CELL_RIGHT_CLICKED,
  CELL_UNCOVERED
} from './../actions'

const face = (state = '😃', action) => {
  switch (action.type) {
    case CELL_PRESSED:
      return '😮'
    case RESTART:
      return '😃'
    case CELL_RIGHT_CLICKED:
      return '😃'
    case CELL_UNCOVERED:
      // TODO action.content ?
      return action.cell.content === '💣' ? '😵' : '😃'
    default:
      return state
  }
}

export default face
