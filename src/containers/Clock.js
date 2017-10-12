import { connect } from 'react-redux'
import ClockComponent from '../components/Clock'

const mapStateToProps = (state, ownProps) => {
  return {
    tick: state.tick
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const Clock = connect(mapStateToProps, mapDispatchToProps)(
  ClockComponent
)

export default Clock
