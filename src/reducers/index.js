import {
  CELL_PRESSED,
  CELL_RIGHT_CLICKED,
  CELL_UNCOVERED,
  RESTART,
  TICK,
} from './../actions'
import {
  coordsFromIndex,
  edge,
  grid,
  search,
} from '../utils/grid'
import { combineReducers } from 'redux'

const gridRightClicked = (grid, index) => {
  const [rowIndex, cellIndex] = coordsFromIndex(index, grid)
  const cell = grid[rowIndex][cellIndex]
  cell.flagged = true
  cell.content = '🚩'
  return grid
}

const gridUncovered = (grid, index) => {
  const [rowIndex, cellIndex] = coordsFromIndex(index, grid)
  const cell = grid[rowIndex][cellIndex]
  cell.uncovered = true
  if (cell.content === '💣') {
    cell.selectedMine = true
    return grid.map(row =>
      row.map(c => {
        c.uncovered = c.uncovered || c.content === '💣'
        return c
      }),
    )
  }
  if (cell.content === 0) {
    const edges = edge(cell, grid)
    search(edges, cell, grid) // mutates grid 😬
  }
  return grid.map(row =>
    row.map(c => {
      c.uncovered = c.uncovered || c.visited
      return c
    }),
  )
}

const app = (
  state = {
    face: '😃',
    grid: grid(16),
    tick: 0,
  },
  action,
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
    case CELL_RIGHT_CLICKED:
      return {
        ...state,
        face: '😃',
        grid: gridRightClicked(
          state.grid.slice(),
          action.cell.index,
        ),
      }
    case CELL_UNCOVERED: {
      return {
        ...state,
        grid: gridUncovered(
          state.grid.slice(),
          action.cell.index,
        ),
        face: action.cell.content === '💣' ? '😵' : '😃',
      }
    }
    default:
      return state
  }
}
export default combineReducers({ app })
