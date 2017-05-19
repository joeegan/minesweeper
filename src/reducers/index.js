import { combineReducers } from 'redux';
import {
  CELL_PRESSED,
  CELL_UNCOVERED,
  RESTART,
  TICK,
} from './../actions';
import { coordsFromIndex, nearbyZeroes, dfs, grid } from '../utils/grid';
import _ from 'lodash';

const gridUncovered = (grid, index) => {
  const [rowIndex, cellIndex] = coordsFromIndex(index, grid);
  const cell = grid[rowIndex][cellIndex];
  if (cell.content === 0) {
    const zeroes = nearbyZeroes(cell, grid);
    dfs(zeroes, cell, grid); // mutates grid 😬
  }
  return grid.map(row => {
    return row.map(cell => {
      cell.uncovered = cell.visited;
      return cell;
    })
  });
}


const app = (
  state = { face: '😃', grid: grid(9), tick: 0 },
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
        grid: grid(9),
        tick: 0,
      };
    case CELL_PRESSED:
      return {
        ...state,
        face: '😮',
      };
    case CELL_UNCOVERED:
      debugger;
      return {
        ...state,
        grid: gridUncovered(state.grid.slice(), action.index),
      };
    default:
      return state;
  }
};

export default combineReducers({
  app,
});
