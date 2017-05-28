import { connect } from 'react-redux'
import { RESTART } from './../actions'
import FaceComponent from '../components/Face'

const mapStateToProps = (state, ownProps) => {
  return {
    face: state.app.face,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMouseUp: () => {
      dispatch({ type: RESTART })
    },
  }
}

const Face = connect(mapStateToProps, mapDispatchToProps)(
  FaceComponent
)

export default Face
