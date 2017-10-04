import {
  CELL_RIGHT_CLICKED,
  CELL_UNCOVERED,
  RESTART
} from './../actions'

import {
  coordsFromIndex,
  edge,
  grid as makeGrid,
  search
} from '../utils/grid'

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
      })
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
    })
  )
}

const grid = (state = makeGrid(16), action) => {
  switch (action.type) {
    case RESTART:
      return makeGrid(16)
    case CELL_RIGHT_CLICKED:
      return gridRightClicked(
        state.slice(),
        action.cell.index
      )
    case CELL_UNCOVERED:
      return gridUncovered(state.slice(), action.cell.index)
    default:
      return state
  }
}

export default grid
