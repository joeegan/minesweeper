import {
  TICK,
} from '../actions';

let interval;

export default ({ dispatch }) =>  (next) => (action) => {
  console.log(':::action?', action)
  if (action.type === '@@redux/INIT') {
    clearInterval(interval);
    interval = setInterval(() => {
      dispatch({
        type: TICK,
      });
      console.log('tick')
    }, 1000);
  }

  next(action);
};
