import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as serviceWorker from './serviceWorker'
import 'normalize.css'
import App from './App'

const initialState = {
  count: 0
}

const store = createStore(reducer)

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'RESET' })

function reducer (state = initialState, action) {
  console.log('reducer', state, action)
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'RESET':
      return { count: 0 }
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
