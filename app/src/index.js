import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as serviceWorker from './serviceWorker'

import rootReducer from './rootReducer'

import 'normalize.css'
import App from './App'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
