import { connect } from 'react-redux'
import { CELL_PRESSED, CELL_UNCOVERED } from './../actions'
import CellComponent from '../components/Cell'
import _ from 'lodash'

const mapStateToProps = (state, ownProps) => {
  return {
    index: ownProps.data.index,
    covered: ownProps.data.covered,
    content: ownProps.data.content,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMouseDown: () => {
      dispatch({ type: CELL_PRESSED })
    },
    onMouseUp: () => {
      dispatch({ type: CELL_UNCOVERED, index: ownProps.index })
    },
  }
}

const Cell = connect(
  mapStateToProps,
  mapDispatchToProps
)(CellComponent)

export default Cell
