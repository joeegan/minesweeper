import { connect } from 'react-redux'
import {
  CELL_PRESSED,
  CELL_RIGHT_CLICKED,
  CELL_UNCOVERED,
} from './../actions'
import CellComponent from '../components/Cell'
import _ from 'lodash'

const mapStateToProps = (
  state,
  { index, uncovered, content, selectedMine },
) => ({
  index,
  uncovered,
  content,
  selectedMine,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMouseDown: () => {
    if (ownProps.content === '🚩') {
      return
    }

    dispatch({ type: CELL_PRESSED })
  },
  onContextMenu: ev => {
    ev.preventDefault()
    dispatch({
      type: CELL_RIGHT_CLICKED,
      cell: { ...ownProps },
    })
    return
  },
  onMouseUp: ev => {
    if (ownProps.content === '🚩') return

    dispatch({
      type: CELL_UNCOVERED,
      cell: { ...ownProps },
    })
  },
})

const Cell = connect(mapStateToProps, mapDispatchToProps)(
  CellComponent,
)

export default Cell
