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

const closeNeighbours = (rowIndex, cellIndex, grid) => {
  const neighbours = [
    [-1, 0],
    [0, -1], [0, 1],
    [1, 0]
  ];
  return _.compact(neighbours.map(([r, c]) => {
    const row = grid[rowIndex + r];
    const cell = row && row[cellIndex + c];
    return cell;
  }));
}

const nearbyZeroes = (rowIndex, cellIndex, grid) => {
  const zeroIndexes = closeNeighbours(rowIndex, cellIndex, grid).map(c => c.index);
  //TODO make recursive
  return zeroIndexes;
}

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
              })
              // Add groupOfZeroesIds
              .map((row, i, grid) => {
                return row.map((cell, j) => {
                  if (cell.content === 0) { //                                                           |
                  //  const nearbyZeroes = findNearbyZeroes(i ,j, grid); TODO crawling zero check as ----| pattern faiing
                   const nearbyZeroes = closeNeighbours(i, j, grid);
                   // possibly scrap below code...
                   const nearbyZeroWithId = nearbyZeroes.find(c => c && c.groupOfZeroesId);
                   if (nearbyZeroWithId && nearbyZeroWithId.groupOfZeroesId) {
                     cell.content = nearbyZeroWithId.groupOfZeroesId;
                     cell.groupOfZeroesId = nearbyZeroWithId.groupOfZeroesId;
                   } else {
                     const rand = _.sample('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
                     cell.content = rand;
                     cell.groupOfZeroesId = rand;
                   }
                   return cell;
                  }
                  return cell;
                });
              })


const coordsFromIndex = (index, grid) => {
  let rowIndex;
  let cellIndex;
  grid.forEach((row, i) => { //TODO some, find?
    const found = row.find(cell => cell.index === index);
    if (found) {
      [rowIndex, cellIndex] = [i, found.index]
    }
  });
  return [
    rowIndex,
    cellIndex,
  ]
}

const gridUncovered = (grid, { index, groupOfZeroesId }) => {
  const groupsOfZeroesUncovered = [];
  const isUncovered = groupOfZeroesId => groupsOfZeroesUncovered.indexOf(groupOfZeroesId) > 1;
  const shouldUncover = (cell, idxPressed) => {
    if (cell.uncovered || isUncovered(cell.groupOfZeroesId)) {
      return true;
    }
    if (cell.index === idxPressed) {
      return true;
    }

    const [rowIndex, cellIndex] = coordsFromIndex(index, grid);
    if (cell.content === 0 && closeNeighbours(rowIndex, cellIndex, grid).indexOf(cell.index) > -1) {
      return true;
    }
    return false;
  }

  return grid.map(row => {
    return row.map(cell => ({
      ...cell,
      uncovered: shouldUncover(cell, index),
    }));
  });
};

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
      console.log(gridUncovered(state.grid, action.index));
      return {
        ...state,
        grid: gridUncovered(state.grid, action.index),
      }
    default:
      return state
  }
}

const appReducer = combineReducers({
  app
})

export default appReducer
