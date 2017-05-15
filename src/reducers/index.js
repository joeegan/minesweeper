import { combineReducers } from 'redux'
import { CELL_PRESSED, CELL_UNCOVERED} from './../actions'
import _ from 'lodash'
const gridSize = 9;
const gridSizeSquared = gridSize * gridSize;

const countMines = (rowIndex, cellIndex, grid) => {
  return [
   [-1, -1], [-1, 0], [-1, 1],
   [0,  -1], [0, 1],
   [1,  -1], [1, 0], [1, 1]
  ].reduce((acc, [r, c]) => {
    const row = grid[rowIndex + r];
    const cell = row && row[cellIndex + c];
    return cell && cell.content === '💣' ? acc + 1 : acc;
  }, 0);
}

const grid = _(Array(gridSizeSquared))
              .fill(0, gridSize, gridSizeSquared)
              .fill('💣', 0, gridSize)
              .shuffle()
              .map((content, i) => ({
                content,
                covered: true,
                index: i,
              }))
              .chunk(gridSize)
              .value()
              .map((row, i, grid) => {
                return row.map((cell, j) => {
                  if (cell.content !== '💣') {
                    cell.content = countMines(i, j, grid);
                  }
                  return cell;
                });
              })

const app = (state = { face: '😃', grid: grid }, action) => {

  switch (action.type) {

    case CELL_PRESSED:
      return Object.assign({}, state, { face: '😮' })

    case CELL_UNCOVERED:
      console.log(state.grid)
      const newGrid = state.grid.map(row => {
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
