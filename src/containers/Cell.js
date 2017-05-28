import { connect } from 'react-redux'
import { CELL_PRESSED, CELL_UNCOVERED } from './../actions'
import CellComponent from '../components/Cell'
import _ from 'lodash'

const mapStateToProps = (
  state,
  { index, uncovered, content }
) => {
  return { index, uncovered, content }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMouseDown: () => {
      dispatch({ type: CELL_PRESSED })
    },
    onMouseUp: () => {
      dispatch({
        type: CELL_UNCOVERED,
        index: ownProps.index,
      })
    },
  }
}

const Cell = connect(mapStateToProps, mapDispatchToProps)(
  CellComponent
)

export default Cell
