import { combineReducers } from 'redux'
import {
  CELL_PRESSED,
  CELL_UNCOVERED,
  RESTART,
  TICK,
} from './../actions'
import {
  coordsFromIndex,
  edge,
  search,
  grid,
} from '../utils/grid'
import _ from 'lodash'

const gridUncovered = (grid, index) => {
  const [rowIndex, cellIndex] = coordsFromIndex(index, grid)
  const cell = grid[rowIndex][cellIndex]
  cell.uncovered = true
  if (cell.content === '💣') {
    cell.selectedMine = true
    return grid.map(row => {
      return row.map(c => {
        c.uncovered = c.uncovered || c.content === '💣'
        return c
      })
    })
  }
  if (cell.content === 0) {
    const edges = edge(cell, grid)
    search(edges, cell, grid) // mutates grid 😬
  }
  return grid.map(row => {
    return row.map(c => {
      c.uncovered = c.uncovered || c.visited
      return c
    })
  })
}
const app = (
  state = { face: '😃', grid: grid(16), tick: 0 },
  action
) => {
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
        grid: grid(16),
        tick: 0,
      }
    case CELL_PRESSED:
      return {
        ...state,
        face: '😮',
      }
    case CELL_UNCOVERED:
      const _grid = gridUncovered(
        state.grid.slice(),
        action.cell.index
      )
      return {
        ...state,
        grid: _grid,
        face: action.cell.content === '💣' ? '😵' : '😃',
      }
    default:
      return state
  }
}
export default combineReducers({ app })
