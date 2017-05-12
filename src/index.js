import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers';
import App from './components/App';
import './index.css';

const gridSize = 9;
const gridSizeSquared = gridSize * gridSize;

const grid = _(Array(gridSizeSquared))
              .fill(0, gridSize, gridSizeSquared)
              .fill('💣', 0, gridSize)
              .shuffle()
              .map((content, i) => ({
                content,
                covered: true,
                index: i,
              }))
              .chunk(gridSize)
              .value();

let store = createStore(appReducer, { face: '😃', grid });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
