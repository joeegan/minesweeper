import { combineReducers } from 'redux'
import { CELL_PRESSED, CELL_UNCOVERED, RESTART, TICK} from './../actions'
import _ from 'lodash'
const gridSize = 9;
const gridSizeSquared = gridSize * gridSize;
const neighbours = [
 [-1, -1], [-1, 0], [-1, 1],
 [0,  -1], [0, 1],
 [1,  -1], [1, 0], [1, 1]
];

const countMines = (rowIndex, cellIndex, grid) => {
  return neighbours.reduce((acc, [r, c]) => {
    const row = grid[rowIndex + r];
    const cell = row && row[cellIndex + c];
    return cell && cell.content === '💣' ? acc + 1 : acc;
  }, 0);
}

const grid = () => _(Array(gridSizeSquared))
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

const app = (state = { face: '😃', grid: grid(), tick: 0 }, action) => {

  switch (action.type) {
    case TICK:
      return {
        ...state,
        tick: state.tick + 1,
      }
    case RESTART:
      return {
        ...state,
        face: '😃',
        grid: grid(),
        tick: 0,
      }
    case CELL_PRESSED:
      return {
        ...state,
        face: '😮',
      }
    case CELL_UNCOVERED:
      let firstCellUncovered;
      if (!state.firstCellUncovered) {
        firstCellUncovered = true;
      }
      const copy = Object.assign({}, state, firstCellUncovered);
      copy.grid.find(row => row.find(cell => {
        if (cell.index === action.index) {
          cell.covered = false;
          return true;
        }
        return false;
       }));
      return copy;
    default:
      return state
  }
}

const appReducer = combineReducers({
  app
})

export default appReducer
