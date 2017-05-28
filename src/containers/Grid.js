import { connect } from 'react-redux'
// import { FACE_CHANGED } from './../actions'
import GridComponent from '../components/Grid'

const mapStateToProps = (state, ownProps) => {
  return {
    grid: state.app.grid,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      // dispatch({ type: FACE_CHANGED })
    },
  }
}

const Grid = connect(mapStateToProps, mapDispatchToProps)(
  GridComponent
)

export default Grid
