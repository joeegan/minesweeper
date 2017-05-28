import { coordsFromIndex, closeNeighbours } from './grid'
import grid from './grid-fixture'
import _ from 'lodash'

describe('utils', () => {
  it('determines row and cell index from a flattened index', () => {
    expect(coordsFromIndex(0, grid)).toEqual([0, 0])
    expect(coordsFromIndex(8, grid)).toEqual([0, 8])
    expect(coordsFromIndex(9, grid)).toEqual([1, 0])
  })

  it('finds close neighbours', () => {
    expect(
      _.map(closeNeighbours(0, 0, grid), 'index')
    ).toEqual([1, 9])
    expect(
      _.map(closeNeighbours(0, 1, grid), 'index')
    ).toEqual([0, 2, 10])
    expect(
      _.map(closeNeighbours(1, 1, grid), 'index')
    ).toEqual([1, 9, 11, 19])
    expect(
      _.map(closeNeighbours(1, 8, grid), 'index')
    ).toEqual([8, 16, 26])
  })
})

describe('grid', () => {
  it('contains 81 cells', () => {
    expect(_.flatten(grid).length).toEqual(81)
  })
  it('contains rows of 9 cells', () => {
    expect(grid[0].length).toEqual(9)
  })
  it('contains 10 mines', () => {
    expect(
      _.flatten(grid).filter(({ content }) => {
        return content === '💣'
      }).length
    ).toEqual(10)
  })
})
