import { coordsFromIndex, closeNeighbours } from './index';
import _ from 'lodash';

const grid = [
  [
    {
      content: 0,

      index: 0,
    },
    {
      content: 0,

      index: 1,
    },
    {
      content: 0,

      index: 2,
    },
    {
      content: 0,

      index: 3,
    },
    { content: 1, index: 4 },
    { content: 1, index: 5 },
    { content: 1, index: 6 },
    {
      content: 0,

      index: 7,
    },
    {
      content: 0,

      index: 8,
    },
  ],
  [
    {
      content: 0,

      index: 9,
    },
    { content: 1, index: 10 },
    { content: 1, index: 11 },
    { content: 1, index: 12 },
    { content: 1, index: 13 },
    { content: '💣', index: 14 },
    { content: 1, index: 15 },
    { content: 1, index: 16 },
    { content: 1, index: 17 },
  ],
  [
    { content: 1, index: 18 },
    { content: 2, index: 19 },
    { content: '💣', index: 20 },
    { content: 1, index: 21 },
    { content: 1, index: 22 },
    { content: 1, index: 23 },
    { content: 1, index: 24 },
    { content: 1, index: 25 },
    { content: '💣', index: 26 },
  ],
  [
    { content: '💣', index: 27 },
    { content: 2, index: 28 },
    { content: 1, index: 29 },
    { content: 2, index: 30 },
    { content: 1, index: 31 },
    { content: 1, index: 32 },
    {
      content: 0,
      index: 33,
    },
    { content: 2, index: 34 },
    { content: 2, index: 35 },
  ],
  [
    { content: 1, index: 36 },
    { content: 1, index: 37 },
    {
      content: 0,
      index: 38,
    },
    { content: 1, index: 39 },
    { content: '💣', index: 40 },
    {
      content: 1,
      index: 41,
    },
    {
      content: 0,
      index: 42,
    },
    {
      content: 1,
      index: 43,
    },
    {
      content: '💣',
      index: 44,
    },
  ],
  [
    {
      content: 0,
      index: 45,
    },
    {
      content: 0,
      index: 46,
    },
    {
      content: 0,
      index: 47,
    },
    {
      content: 2,
      index: 48,
    },
    {
      content: 2,
      index: 49,
    },
    {
      content: 3,
      index: 50,
    },
    {
      content: 1,
      index: 51,
    },
    {
      content: 2,
      index: 52,
    },
    {
      content: 1,
      index: 53,
    },
  ],
  [
    {
      content: 0,
      index: 54,
    },
    {
      content: 0,
      index: 55,
    },
    {
      content: 0,
      index: 56,
    },
    {
      content: 2,
      index: 57,
    },
    {
      content: '💣',
      index: 58,
    },
    {
      content: 3,
      index: 59,
    },
    {
      content: '💣',
      index: 60,
    },
    {
      content: 1,
      index: 61,
    },
    {
      content: 0,
      index: 62,
    },
  ],
  [
    {
      content: 0,
      index: 63,
    },
    {
      content: 0,
      index: 64,
    },
    {
      content: 0,
      index: 65,
    },
    {
      content: 2,
      index: 66,
    },
    {
      content: '💣',
      index: 67,
    },
    {
      content: 3,
      index: 68,
    },
    {
      content: 1,
      index: 69,
    },
    {
      content: 2,
      index: 70,
    },
    {
      content: 1,
      index: 71,
    },
  ],
  [
    {
      content: 0,
      index: 72,
    },
    {
      content: 0,
      index: 73,
    },
    {
      content: 0,
      index: 74,
    },
    {
      content: 1,
      index: 75,
    },
    {
      content: 1,
      index: 76,
    },
    {
      content: 1,
      index: 77,
    },
    {
      content: 0,
      index: 78,
    },
    {
      content: 1,
      index: 79,
    },
    {
      content: '💣',
      index: 80,
    },
  ],
];

describe('utils', () => {

  it('determines row and cell index from a flattened index', () => {
    expect(coordsFromIndex(0, grid)).toEqual([0, 0]);
    expect(coordsFromIndex(8, grid)).toEqual([0, 8]);
    expect(coordsFromIndex(9, grid)).toEqual([1, 0]);
  });

  it('finds close neighbours', () => {
    expect(
      _.map(closeNeighbours(0, 0, grid), 'index')
    ).toEqual([1, 9]);
    expect(
      _.map(closeNeighbours(0, 1, grid), 'index')
    ).toEqual([0, 2, 10]);
    expect(
      _.map(closeNeighbours(1, 1, grid), 'index')
    ).toEqual([1, 9, 11, 19]);
    expect(
      _.map(closeNeighbours(1, 8, grid), 'index')
    ).toEqual([8, 16, 26]);
  });
});

describe('grid', () => {
  it('contains 81 cells', () => {
    expect(_.flatten(grid).length).toEqual(81);
  });
  it('contains rows of 9 cells', () => {
    expect(grid[0].length).toEqual(9);
  });
  it('contains 10 mines', () => {
    expect(
      _.flatten(grid).filter(({ content }) => {
        return content === '💣';
      }).length
    ).toEqual(10);
  });
});
