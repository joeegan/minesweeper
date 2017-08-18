import { connect } from 'react-redux'
import ClockComponent from '../components/Clock'
import _ from 'lodash'

const mapStateToProps = (state, ownProps) => {
  return {
    tick: state.app.tick,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const Clock = connect(mapStateToProps, mapDispatchToProps)(
  ClockComponent,
)

export default Clock
