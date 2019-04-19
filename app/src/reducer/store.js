// import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import createRootReducer from '../rootReducer'

export const history = createBrowserHistory()

export default function configureStore (preloadedState = {}) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history) // for dispatching history actions
        // ... other middlewares ...
      )
    )
  )

  return store
}
