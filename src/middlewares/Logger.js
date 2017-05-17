export default ({ dispatch }) => {
  return (next) => (action) => {
    /* eslint-disable no-console */
    if (console.group) {
      console.group(action.type);
      console.log('%c payload: ', 'color: green', action.payload);
      console.groupEnd(action.type);
    }
    /* eslint-enable no-console */
    next(action);
  };
}
