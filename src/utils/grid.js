import _ from 'lodash';

const neighbours = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export const coordsFromIndex = (index, grid) => {
  let rowIndex;
  let cellIndex;
  grid.forEach((row, i) => {
    const found = row.find(cell => cell.index === index);
    if (found) {
      [rowIndex, cellIndex] = [i, row.indexOf(found)];
    }
  });
  return [rowIndex, cellIndex];
};

export const closeNeighbours = (
  rowIndex,
  cellIndex,
  grid
) => {
  const neighbours = [[-1, 0], [0, -1], [0, 1], [1, 0]];
  return _.compact(
    neighbours.map(([r, c]) => {
      const row = grid[rowIndex + r];
      const cell = row && row[cellIndex + c];
      return cell;
    })
  );
};

export const nearbyZeroes = (cell, grid) => {
  const [rowIndex, cellIndex] = coordsFromIndex(cell.index, grid);
  return closeNeighbours(rowIndex, cellIndex, grid)
            .filter(c => c.content === 0);
};

export const edge = (cell, grid) => {
  const [i, j] = coordsFromIndex(cell.index, grid);
  return closeNeighbours(i, j, grid)
    .filter(c => {
      const [rowIndex, cellIndex] = coordsFromIndex(c.index, grid);
      if (c.content > 0) {
        return closeNeighbours(rowIndex, cellIndex, grid).find(cell => {
          return cell && cell.content === 0;
        });
      }
      return c.content === 0;
    });
};

const countMines = (rowIndex, cellIndex, grid) => {
  return neighbours.reduce((acc, [r, c]) => {
    const row = grid[rowIndex + r];
    const cell = row && row[cellIndex + c];
    return cell && cell.content === '💣' ? acc + 1 : acc;
  }, 0);
};

export const grid = size => _(Array(size * size))
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
        cell.content = countMines(i, j, grid);
      }
      return cell;
    });
  });

// Depth first search
export const search = (arr, cell, grid) => {
  cell.visited = true;
  arr.forEach(zeroCell => {
    if (!zeroCell.visited) {
      search(
        edge(zeroCell, grid),
        zeroCell,
        grid
      );
    }
  });
};
