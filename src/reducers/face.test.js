import reducer from './face'
import {
  CELL_PRESSED,
  RESTART,
  CELL_RIGHT_CLICKED,
  CELL_UNCOVERED
} from './../actions'

describe('face reducer', () => {
  it('is smiley in initial state', () => {
    expect(reducer(undefined, {})).toEqual('🙂')
  })

  it('is smiley when restarted', () => {
    expect(reducer('🙂', { type: RESTART })).toEqual('🙂')
  })

  it('is surprised when pressed', () => {
    expect(reducer('🙂', { type: CELL_PRESSED })).toEqual(
      '😮'
    )
  })
})
