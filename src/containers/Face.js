import { connect } from 'react-redux'
import { FACE_CHANGED } from './../actions'
import FaceComponent from '../components/Face'

const mapStateToProps = (state, ownProps) => {
  console.log('updating state:', state);
  return {
    face: state.app.face,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: FACE_CHANGED })
    }
  }
}

const Face = connect(
  mapStateToProps,
  mapDispatchToProps
)(FaceComponent)

export default Face
