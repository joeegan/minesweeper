import { connect } from 'react-redux'
import { CELL_PRESSED, CELL_UNCOVERED } from './../actions'
import CellComponent from '../components/Cell'
import _ from 'lodash'

const mapStateToProps = (state, ownProps) => {
  // TODO Shouldn't this be receiving it's own portion of the state
  // rather than the whole kaboodle?
  const cellData = _.flatten(state.app.grid)
                    .find(({ index }) => index === ownProps.index)
  return {
    index: ownProps.index,
    covered: cellData.covered,
    content: cellData.content
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
