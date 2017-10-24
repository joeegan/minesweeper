import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import appReducer from '../reducers'
import clock from '../middlewares/Clock'
import logger from '../middlewares/Logger'
import App from '../components/App'
import withRedux from 'next-redux-wrapper'

const createStoreWithMiddleware = applyMiddleware(
  clock,
  logger
)(createStore)

export default withRedux(() =>
  createStoreWithMiddleware(appReducer)
)(App)
