import { connect } from 'react-redux'
import CounterComponent from '../components/Counter'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterComponent)

export default Counter
