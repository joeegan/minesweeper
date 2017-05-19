import { combineReducers } from 'redux';
import {
  CELL_PRESSED,
  CELL_UNCOVERED,
  RESTART,
  TICK,
} from './../actions';
import _ from 'lodash';

const gridSize = 9;
const gridSizeSquared = gridSize * gridSize;

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

const nearbyZeroes = (cell, grid) => {
  const [i, j] = coordsFromIndex(cell.index, grid);
  return closeNeighbours(i, j, grid)
            .filter(c => c.content === 0);
};

const countMines = (rowIndex, cellIndex, grid) => {
  return neighbours.reduce((acc, [r, c]) => {
    const row = grid[rowIndex + r];
    const cell = row && row[cellIndex + c];
    return cell && cell.content === '💣' ? acc + 1 : acc;
  }, 0);
};

export const grid = _(Array(gridSizeSquared))
  .fill(0, gridSize, gridSizeSquared)
  .fill('💣', 0, 10)
  .shuffle()
  .map((content, i) => ({
    content,
    uncovered: false,
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
  });

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // gets modified!

const isAlpha = char =>
  char && char.toString().match(/[A-Z]/);

const dfs = (arr, cell, content, grid) => {
  cell.visited = true;
  cell.content = content;
  arr.forEach(zeroCell => {
    if (!zeroCell.visited) {
      dfs(
        nearbyZeroes(zeroCell, grid),
        zeroCell,
        content,
        grid
      );
    }
  });
};

grid.forEach((row, i, grid) => {
  row.forEach((cell, j) => {
    if (
      (cell.content === 0 || isAlpha(cell.content)) &&
      !cell.visited
    ) {
      const zeroes = nearbyZeroes(cell, grid);
      if (zeroes) {
        dfs(zeroes, cell, alpha.shift(), grid);
      }
    }
  });
});

const app = (
  state = { face: '😃', grid: grid, tick: 0 },
  action
) => {
  switch (action.type) {
    case TICK:
      return {
        ...state,
        tick: state.tick + 1,
      };
    case RESTART:
      return {
        ...state,
        face: '😃',
        grid: grid,
        tick: 0,
      };
    case CELL_PRESSED:
      return {
        ...state,
        face: '😮',
      };
    case CELL_UNCOVERED:
      return {
        ...state,
        // grid: gridUncovered(state.grid, action.index),
      };
    default:
      return state;
  }
};

export default combineReducers({
  app,
});
