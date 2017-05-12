import { combineReducers } from 'redux'
import { CELL_PRESSED, CELL_UNCOVERED} from './../actions'
import _ from 'lodash'

const app = (state = { face, grid }, action) => {

  switch (action.type) {

    case CELL_PRESSED:
      console.log('reducer: CELL_PRESSED');
      return Object.assign({}, state, { face: '😮' })

    case CELL_UNCOVERED:
      console.log('reducer: CELL_UNCOVERED');
      console.log(state.grid)
      const newGrid = grid.map(row => {
        return row.map(cell => {
          if (cell.index === action.index) {
            cell.covered = false;
          }
          return cell;
        })
      })
      return Object.assign({}, state, { face: '😀', grid: newGrid })

    default:
      console.log(state.grid)
      return state
  }
}

const appReducer = combineReducers({
  app
})

export default appReducer
