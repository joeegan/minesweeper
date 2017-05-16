import {
  TICK,
  CELL_PRESSED,
} from '../actions';

let interval;

export default ({ dispatch }) => {
  return (next) => (action) => {
    /* eslint-disable no-console */
    if (console.group) {
      console.group(action.type);
      console.log('%c payload: ', 'color: green', action.payload);
      console.groupEnd(action.type);
    }
    console.log(':::action?', action)
    if (action.type === CELL_PRESSED) {
      clearInterval(interval);
      interval = setInterval(() => {
        dispatch({
          type: TICK,
        });
        console.log('tick')
      }, 1000);
    }

    /* eslint-enable no-console */
    next(action);
  };
}
