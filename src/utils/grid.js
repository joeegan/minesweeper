import _ from 'lodash'

// X and Y distances to determine surrounding cells
const neighbours = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
]

// Returns X and Y from a flattened index
// TODO remove reliance on this
export const coordsFromIndex = (index, grid) => {
  let rowIndex
  let cellIndex
  grid.forEach((row, i) => {
    const found = row.find(cell => cell.index === index)
    if (found) {
      ;[rowIndex, cellIndex] = [i, row.indexOf(found)]
    }
  })
  return [rowIndex, cellIndex]
}

// Returns an array of cells that are are adjacent to the supplied
export const closeNeighbours = (
  rowIndex,
  cellIndex,
  grid
) => {
  return _.compact(
    neighbours.map(([r, c]) => {
      const row = grid[rowIndex + r]
      const cell = row && row[cellIndex + c]
      return cell
    })
  )
}

// Returns an array of cells that are are zeroes or adjacent to zeroes
export const edge = (cell, grid) => {
  const [i, j] = coordsFromIndex(cell.index, grid)
  return closeNeighbours(i, j, grid).filter(c => {
    const [rowIndex, cellIndex] = coordsFromIndex(
      c.index,
      grid
    )
    if (c.content > 0) {
      return closeNeighbours(
        rowIndex,
        cellIndex,
        grid
      ).find(cell => {
        return cell && cell.content === 0
      })
    }
    return c.content === 0
  })
}

// Counts mines on surrounding cells
const countMines = (rowIndex, cellIndex, grid) => {
  return neighbours.reduce((acc, [r, c]) => {
    const row = grid[rowIndex + r]
    const cell = row && row[cellIndex + c]
    return cell && cell.content === '💣' ? acc + 1 : acc
  }, 0)
} // Sets up a grid populated with mines and 'counts'
export const grid = size =>
  _(Array(size * size))
    .fill(0, size, size * size)
    .fill('💣', 0, 10)
    .shuffle()
    .map((content, i) => ({
      content,
      uncovered: false,
      index: i,
    }))
    .chunk(size)
    .value()
    .map((row, i, grid) => {
      return row.map((cell, j) => {
        if (cell.content !== '💣') {
          cell.content = countMines(i, j, grid)
        }
        return cell
      })
    })
// Depth first search
export const search = (arr, cell, grid) => {
  cell.visited = true
  arr.forEach(zeroCell => {
    if (!zeroCell.visited) {
      search(edge(zeroCell, grid), zeroCell, grid)
    }
  })
}
