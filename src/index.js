import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import appReducer from './reducers'
import clock from './middlewares/Clock'
import logger from './middlewares/Logger'
import App from './components/App'
import _ from 'lodash'
import './index.css'

const createStoreWithMiddleware = applyMiddleware(
  clock,
  logger
)(createStore)
const store = createStoreWithMiddleware(appReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
